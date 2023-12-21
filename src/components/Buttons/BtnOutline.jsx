const BtnOutline = ({ title }) => {
  return (
    <button class="animated-button">
      <span>{title}</span>
      <span></span>
    </button>

    // <button className="btn-outline border-2  px-[22px] py-4 rounded-[60px] font-semibold ">
    //   {title}
    // </button>
  );
};

export default BtnOutline;
