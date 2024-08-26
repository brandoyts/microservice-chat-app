import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function AuthContainer({ children }: Props) {
  return <div className="border bg-[#e9e9e9] p-6 rounded">{children}</div>;
}

export default AuthContainer;
