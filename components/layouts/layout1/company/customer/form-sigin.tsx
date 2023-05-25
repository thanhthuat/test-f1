import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { Controller, useForm, useWatch } from "react-hook-form";
import TextField from "@mui/material/TextField";
interface FormSiginProps {}

const FormSigin = ({}) => {
  const form = useForm();
  const { control, handleSubmit, getValues } = form;
  const submit = (data: any) => {
    console.log("data", data);
  };
  const firstName = useWatch({
    control,
    name: "agree",
  });
  return (
    <div className="clsformnew">
      <div className="clsformnew-content containerlayout1 ">
        <div></div>
        <div>
          <form autoComplete="off" onSubmit={handleSubmit(submit)}>
            <p className="m-1">
              <b>신청자 정보</b>
            </p>
            <Controller
              name={"name1212"}
              control={control}
              rules={{
                required: "Please enter name",
                // pattern: {
                //   value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                //   message: "The Email you entered is not a valid format!",
                // },
              }}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  error={!!error}
                  helperText={error && error.message}
                  onChange={onChange}
                  value={value ?? ""}
                  variant="standard"
                  className={""}
                  label={"이름*"}
                  size="small"
                  sx={{ width: "100%", marginBottom: 1 }}
                />
              )}
            />
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
                  value={value ?? ""}
                  variant="standard"
                  className={""}
                  label={"이름*"}
                  size="small"
                  sx={{ width: "100%", marginBottom: 1 }}
                />
              )}
            />
            <Controller
              name={"phone"}
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
                  value={value ?? ""}
                  variant="standard"
                  className={""}
                  label={"전화번호*"}
                  size="small"
                  sx={{ width: "100%", marginBottom: 1 }}
                />
              )}
            />
            <p className="m-1">
              <b>수취인 정보</b>
            </p>
            <Controller
              name={"name1"}
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  error={!!error}
                  helperText={error && error.message}
                  onChange={onChange}
                  value={value ?? ""}
                  variant="standard"
                  className={""}
                  label={"수취인명"}
                  size="small"
                  sx={{ width: "100%", marginBottom: 1 }}
                />
              )}
            />
            <Controller
              name={"name1"}
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  error={!!error}
                  helperText={error && error.message}
                  onChange={onChange}
                  value={value ?? ""}
                  variant="standard"
                  className={""}
                  label={"회사명"}
                  size="small"
                  sx={{ width: "100%", marginBottom: 1 }}
                />
              )}
            />
            <Controller
              name={"name1"}
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  error={!!error}
                  helperText={error && error.message}
                  onChange={onChange}
                  value={value ?? ""}
                  variant="standard"
                  className={""}
                  label={"사업자번호"}
                  size="small"
                  sx={{ width: "100%", marginBottom: 1 }}
                />
              )}
            />
            <Controller
              name={"name1"}
              control={control}
              rules={{
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
                  value={value ?? ""}
                  variant="standard"
                  className={""}
                  label={" 이메일"}
                  size="small"
                  sx={{ width: "100%", marginBottom: 1 }}
                />
              )}
            />
            <Controller
              name={"name1"}
              control={control}
              rules={{
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
                  value={value ?? ""}
                  variant="standard"
                  className={""}
                  label={"부수"}
                  size="small"
                  sx={{ width: "100%", marginBottom: 1 }}
                />
              )}
            />
            <Controller
              name={"name1"}
              control={control}
              rules={{
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
                  value={value ?? ""}
                  variant="standard"
                  className={""}
                  label={"연락처"}
                  size="small"
                  sx={{ width: "100%", marginBottom: 1 }}
                />
              )}
            />
            <Controller
              name={"name1"}
              control={control}
              rules={{
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
                  value={value ?? ""}
                  variant="standard"
                  className={""}
                  label={"주소"}
                  size="small"
                  sx={{ width: "100%", marginBottom: 1 }}
                />
              )}
            />
            <Controller
              name={"name1"}
              control={control}
              rules={{
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
                  value={value ?? ""}
                  variant="standard"
                  className={""}
                  label={"배달희망일"}
                  size="small"
                  sx={{ width: "100%", marginBottom: 1 }}
                />
              )}
            />
            <Controller
              name={"name1"}
              control={control}
              rules={{
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
                  value={value ?? ""}
                  variant="standard"
                  className={""}
                  label={"구독료"}
                  size="small"
                  sx={{ width: "100%", marginBottom: 1 }}
                />
              )}
            />
            <p className="m-1">
              <b>구독료</b>
            </p>
            <Controller
              name={"paymment"}
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  onChange={onChange}
                  defaultChecked
                  value={value ?? "month"}
                >
                  <FormControlLabel value="month" control={<Radio />} label="월납" />
                  <FormControlLabel value="year" control={<Radio />} label="연/일시납" />
                </RadioGroup>
              )}
            />

            <Controller
              name={"comment"}
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  error={!!error}
                  helperText={error && error.message}
                  onChange={onChange}
                  value={value ?? ""}
                  className={""}
                  label={"구독료"}
                  rows={4}
                  size="small"
                  multiline
                  sx={{ width: "100%", marginBottom: 1 }}
                />
              )}
            />
            <div>
              <Controller
                name={"agree"}
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
                구독문의를 위한
                <a
                  href="https://www.w3schools.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "red" }}
                >
                  개인정보처리방침에
                </a>
                동의합니다.
              </p>
            </div>

            <button className="clsformnew-button" type="submit" disabled={!firstName}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSigin;
