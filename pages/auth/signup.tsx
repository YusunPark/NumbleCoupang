import styled from "@emotion/styled";

export default function SignupPage() {
  return (
    <>
      <Wrapper>
        <p>회원정보를 입력해주세요</p>
        <div></div>
        <Line />
        <p>쿠팡 서비스약관에 동의해주세요</p>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div``;

const Line = styled.div`
  border: 1px solid #ccc;
`;
