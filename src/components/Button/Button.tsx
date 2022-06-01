import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

// 按钮大小
export type ButtonSize = 'lg' | 'sm';

export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
  /** 自定义类名 */
  className?: string;
  /** 设置Button 的禁用 */
  disabled?: boolean;
  /** 设置Button 的大小 */
  size?: ButtonSize;
  /** 设置Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  /** 当btnType为link时，必填 */
  href?: string;
}

// 并集
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

// Partial：typescript全局函数，将属性全部变成可选的
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

// 使用react-docgen-typescript-loader的bug，只能使用FC，不能React.FC
export const Button: FC<ButtonProps> = props => {
  const { disabled, size, btnType, children, href, className, ...resetProps } = props;

  if (btnType === 'link' && href) {
    return (
      <a href={href} className={'link'} {...resetProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={'primary'} disabled={disabled} {...resetProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};

export default Button;
