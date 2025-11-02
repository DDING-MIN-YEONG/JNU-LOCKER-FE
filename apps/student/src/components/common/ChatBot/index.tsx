"use client";

import useOutsideClick from "@/hooks/common/useOutsideClick";
import { usePostChatBotMessage } from "@/hooks/tanstack-query/apply-locker/usePostChatBotMessage";
import Button from "@repo/ui/design-system/Button/index";
import Txt from "@repo/ui/design-system/Txt/index";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

interface Message {
  id: string;
  text: string;
  type: "user" | "bot";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const { onPostChatBotMessage, isPostChatBotMessageLoading } = usePostChatBotMessage();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "안녕하세요! 무엇을 도와드릴까요?", type: "bot" },
  ]);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message.trim() || isPostChatBotMessageLoading) {
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      type: "user",
    };

    // 사용자 메시지 추가
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");

    // 메시지 전송
    onPostChatBotMessage(
      message,
      (response) => {
        // 응답 메시지 추가
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: response.message,
          type: "bot",
        };
        setMessages((prev) => [...prev, botMessage]);
      },
      () => {
        // 실패 메시지 추가
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "전송이 실패하였습니다.",
          type: "bot",
        };
        setMessages((prev) => [...prev, errorMessage]);
      },
    );
  };

  // 메시지가 추가될 때마다 스크롤을 맨 아래로
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const chatWindowRef = useRef<HTMLDivElement>(null);
  const chatButtonRef = useRef<HTMLButtonElement>(null);

  // 열려있을 때만 외부 클릭 감지 (버튼과 대화창 제외)
  useOutsideClick(
    [chatWindowRef as React.RefObject<HTMLElement>, chatButtonRef as React.RefObject<HTMLElement>],
    () => {
      if (isOpen) {
        handleClose();
      }
    },
  );

  return (
    <div className={cn("chatbotContainer")}>
      {/* 대화창 영역 */}
      {isOpen && (
        <div className={cn("chatWindow")} ref={chatWindowRef}>
          <div className={cn("chatHeader")}>
            <Txt size="small" weight="bold" color="white">
              챗봇 상담
            </Txt>
            <button type="button" className={cn("closeButton")} onClick={handleClose} aria-label="챗봇 닫기">
              ✕
            </button>
          </div>
          <div className={cn("chatBody")} ref={chatBodyRef}>
            <div className={cn("messageContainer")}>
              {messages.map((msg) => (
                <div key={msg.id} className={cn("message", msg.type === "user" ? "userMessage" : "botMessage")}>
                  <Txt size="small" color={msg.type === "user" ? "white" : "black"}>
                    {msg.text}
                  </Txt>
                </div>
              ))}
              {isPostChatBotMessageLoading && (
                <div className={cn("message", "botMessage", "wait")}>
                  {"......".split("").map((dot, i) => (
                    <span key={i}>{dot}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <form className={cn("chatInput")} onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="메시지를 입력하세요..."
              className={cn("input")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isPostChatBotMessageLoading}
            />
            <Button
              type="submit"
              className={cn("sendButton")}
              disabled={isPostChatBotMessageLoading || !message.trim()}
            >
              <Txt size="tiny" color="white" weight="bold">
                전송
              </Txt>
            </Button>
          </form>
        </div>
      )}

      {/* 원형 버튼 */}
      <button
        ref={chatButtonRef}
        type="button"
        className={cn("chatButton", { isOpen })}
        onClick={handleToggle}
        aria-label={isOpen ? "챗봇 닫기" : "챗봇 열기"}
      >
        {isOpen ? "✕" : "💬"}
      </button>
    </div>
  );
}
