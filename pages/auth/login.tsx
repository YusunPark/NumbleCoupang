import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    email: string;
    password: string;
  }>();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <Wrapper>
      {" "}
      <Image
        src="/logo-coupang.png"
        alt="coupang Logo"
        width={200}
        height={45}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email", {
            required: "아이디(이메일)를 입력하세요.",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
              message: "아이디(이메일)는 이메일 형식으로 입력해주세요.",
            },
          })}
          placeholder="아이디(이메일)"
        />{" "}
        {errors?.email?.message && <span>{errors.email.message}</span>}
        <Input
          {...register("password", { required: "비밀번호를 입력해주세요." })}
          type="password"
          placeholder="비밀번호"
        />
        {errors?.password?.message && <span>{errors.password.message}</span>}
        <button className="login__button button--submit" type="submit">
          로그인
        </button>
        <Line />
        <Link href={"/auth/signup"}>
          <a className="login__button button--join">회원가입</a>
        </Link>
      </form>
      <style jsx>{`
        span {
          color: red;
        }

        .login__button {
          display: block;
          border-radius: 2px;
          padding: 16px 17px;

          font-family: apple sd gothic neo, malgun gothic, nanumbarungothic,
            nanumgothic, dotum, sans-serif;
          font-size: 17px;
          font-weight: 700;
          text-align: center;
          text-decoration: none;

          line-height: 20px;
        }

        .button--submit {
          width: 100%;

          background-color: #0074e9;
          color: #fff;
          box-shadow: inset 0 -2px 0 rgb(0 0 0 / 38%);
          margin: 18px 0 0;
        }

        .button--join {
          width: 100%;

          background-color: #fff;
          border: 1px solid #ccc;
          color: #0073e9;
          box-shadow: inset 0 -1px 0 rgb(0 0 0 / 15%);
          margin: 18px 0 0;
        }
      `}</style>{" "}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: block;
  max-width: 460px;
  margin: auto;
`;

const Line = styled.div`
  border: 1px solid #cccccc4f;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 48px;
  box-sizing: border-box;

  border: 1px solid #ccc;
  background-color: #fff;

  margin-top: 1rem;
  padding: 16px 0 12px;

  font-family: dotum, sans-serif;
  font-size: 14px;
  font-weight: 700;

  line-height: 20px;
  text-indent: 12px;
`;
