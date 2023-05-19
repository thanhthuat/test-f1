import React from "react";

import { Controller, useForm } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
interface FormPolicyProps {
  onClose: () => void;
}

const FormPolicy: React.FC<FormPolicyProps> = ({ onClose }) => {
  const form = useForm();
  const { control, handleSubmit, watch, setValue } = form;
  const onSubmit = (data: any) => console.log(data);
  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     //  setChecked(event.target.checked);
  //   };
  React.useEffect(() => {
    if (watch("all")) {
      setValue("age", true);
      setValue("policy", true);
      setValue("collect", true);
    } else {
      setValue("age", false);
      setValue("policy", false);
      setValue("collect", false);
    }
  }, [watch("all")]);
  return (
    <div>
      <h2> SNS회원가입</h2>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name={"email"}
          control={control}
          rules={{ required: " Enter your email" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              error={!!error}
              helperText={error && error.message}
              onChange={onChange}
              value={value}
              className={"clsformlogin-input"}
              label={"대표 이메일주소"}
              size="small"
            />
          )}
        />
        <p>입력하신 이메일로 뉴스레터, 계정알림을 보내드립니다. </p>
        <p>대표 이메일주소 : </p>
        <Controller
          name={"all"}
          control={control}
          defaultValue={false}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Checkbox
              onChange={onChange}
              checked={value ?? false}
              className={"clsformlogin-input"}
              size="small"
            />
          )}
        />
        <p>
          본인은 만 14세 이상이며 언론사명의 이용약관, 개인정보 수집 및 이용, 뉴스레터 메일 수신
          동의(선택), 프로모션 정보 수신 동의(선택), 본인확인 정보 수집 및 저장(선택)을 확인하였으며
          모두 동의합니다.
        </p>
        <div>
          <Controller
            name={"age"}
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Checkbox
                onChange={onChange}
                checked={value ?? false}
                className={"clsformlogin-input"}
                size="small"
              />
            )}
          />
          <a
            href="https://www.youtube.com/watch?v=FQ9zcAIHDm0"
            target="_blank"
            rel="noopener noreferrer"
          >
            만 14세 이상입니다
          </a>
        </div>

        <div>
          <Controller
            name={"policy"}
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Checkbox
                onChange={onChange}
                checked={value ?? false}
                className={"clsformlogin-input"}
                size="small"
              />
            )}
          />
          <a
            href="https://www.youtube.com/watch?v=FQ9zcAIHDm0"
            target="_blank"
            rel="noopener noreferrer"
          >
            이용약관동의
          </a>
        </div>
        <div>
          <Controller
            name={"collect"}
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Checkbox
                onChange={onChange}
                checked={value ?? false}
                className={"clsformlogin-input"}
                size="small"
              />
            )}
          />
          <a
            href="https://www.youtube.com/watch?v=FQ9zcAIHDm0"
            target="_blank"
            rel="noopener noreferrer"
          >
            개인정보 수집 및 이용
          </a>
        </div>
      </form>
      <div>
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          Gia Nhap
        </button>
        <button onClick={onClose}> Cancel</button>
      </div>
    </div>
  );
};
export default FormPolicy;
