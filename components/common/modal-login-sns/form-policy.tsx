import React from "react";

import { Controller, useForm, useWatch } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
interface FormPolicyProps {
  onClose: () => void;
  handleOpenModalLoginSucess: () => void;
}

const FormPolicy: React.FC<FormPolicyProps> = ({ onClose, handleOpenModalLoginSucess }) => {
  const form = useForm();
  const { control, handleSubmit, watch, setValue, getValues } = form;
  const onSubmit = (data: any) => {
    console.log(data);
    handleOpenModalLoginSucess();
    onClose();
  };
  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     //  setChecked(event.target.checked);
  //   };
  const firstName = useWatch({
    control,
    name: "email",
  });

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
    <div className="clspolicy">
      <div className="clspolicy-content">
        <div className="clspolicy-header">
          {/* <img className="clspolicy-header__logo" src="/layout1/small-logo.png" alt=" logo" /> */}
          <h2> SNS회원가입</h2>
        </div>

        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name={"email"}
            control={control}
            rules={{
              required: "Please enter Email",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "The Email you entered is not a valid format!",
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                error={!!error}
                helperText={error && error.message}
                onChange={onChange}
                value={value}
                className={""}
                label={"대표 이메일주소"}
                size="small"
                sx={{ width: "100%", marginBottom: 1 }}
              />
            )}
          />
          <p>입력하신 이메일로 뉴스레터, 계정알림을 보내드립니다. </p>
          <p className="mb-1">
            <b> 대표 이메일주소 :</b> {firstName}{" "}
          </p>
          <div>
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
                  sx={{ marginLeft: -1 }}
                />
              )}
            />
            <p style={{ display: "inline-block" }}>
              <b> 모두 동의합니다.</b>
            </p>
          </div>
          <p>
            본인은 만 14세 이상이며 언론사명의 이용약관, 개인정보 수집 및 이용, 뉴스레터 메일 수신
            동의(선택), 프로모션 정보 수신 동의(선택), 본인확인 정보 수집 및 저장(선택)을
            확인하였으며 모두 동의합니다.
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
                  sx={{ marginLeft: -1 }}
                />
              )}
            />
            <p style={{ display: "inline-block" }}>
              만 14세 이상입니다{" "}
              <a
                href="https://www.w3schools.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "red" }}
              >
                (필수)
              </a>
            </p>
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
                  sx={{ marginLeft: -1 }}
                />
              )}
            />
            <p style={{ display: "inline-block" }}>
              이용약관동의
              <a
                href="https://www.w3schools.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "red" }}
              >
                (필수)
              </a>
            </p>
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
                  sx={{ marginLeft: -1 }}
                />
              )}
            />
            <p style={{ display: "inline-block" }}>
              개인정보 수집 및 이용
              <a
                href="https://www.w3schools.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "red" }}
              >
                (필수)
              </a>
            </p>
          </div>
        </form>

        <div className="clspolicy-footer">
          <button
            disabled={!getValues("all")}
            className="clspolicy-footer__join"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            가입하기
          </button>
          <button onClick={onClose} className="clspolicy-footer__cancel">
            취소
          </button>
        </div>
        <div className="clspolicy-coppyright">
          <p>이용약관 개인정보처리방침</p>
          <p>© 언론사명. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
export default FormPolicy;
