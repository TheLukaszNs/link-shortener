import classNames from "classnames";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: string;
  size?: "small" | "large";
  variant?: "primary" | "secondary";
};

export const Button = ({
  children,
  size = "large",
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        `rounded-lg border-b-teal-600 bg-teal-400 py-4 px-6 text-lg font-bold lowercase text-white shadow-md shadow-teal-400/50 hover:shadow-lg hover:shadow-teal-400/50`,
        { "py-3 px-4 text-base": size === "small" },
        {
          "bg-teal-100 text-teal-400 shadow-teal-400/30":
            variant === "secondary",
        },
        className,
      )}
    >
      {children}
    </button>
  );
};
