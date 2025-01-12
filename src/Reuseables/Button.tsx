const Button = ({
  title,
  rightIcon,
}: {
  title: string;
  rightIcon?: boolean;
}) => {
  return (
    <button
      className="action-button custom-animate w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full 
                     bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md
                     "
    >
      {title}
      {rightIcon ? (
        <img
          src="https://forcythe.com/images/play.svg
"
          alt=""
          className="group-hover:hidden"
        />
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
