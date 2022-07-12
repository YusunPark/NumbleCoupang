import styled from "@emotion/styled";

import { useForm } from "react-hook-form";

import Image from "next/image";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{
    email: string;
    password: string;
    assertPwd: string;
    name: string;
    number: number | string;
  }>();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <Wrapper>
        <Image
          src="/logo-coupang.png"
          alt="coupang Logo"
          width={200}
          height={45}
        />
        <p>회원정보를 입력해주세요</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("email", { required: "이메일을 입력하세요." })}
            placeholder="아이디(이메일)"
            onChange={(e) => {
              console.log(watch());
              errors?.email?.message && <span>{errors.email.message}</span>;
            }}
          />
          {errors?.email?.message && <span>{errors.email.message}</span>}
          <Input
            {...register("password", { required: "" })}
            placeholder="비밀번호"
          />
          <Input
            {...register("assertPwd", {
              required: "확인을 위해 새 비밀번호를 다시 입력해주세요",
            })}
            placeholder="비밀번호 확인"
          />
          <Input
            {...register("name", {
              required: "이름을 정확히 입력하세요.",
              minLength: 2,
            })}
            placeholder="이름"
          />
          <Input
            {...register("number", {
              required: "휴대폰 번호를 정확하게 입력하세요.",
            })}
            placeholder="휴대폰 번호"
          />
        </form>
        <div></div>
        <Line />
        <p>쿠팡 서비스약관에 동의해주세요</p>
      </Wrapper>
    </>
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
