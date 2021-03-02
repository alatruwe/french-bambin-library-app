const ButtonStyling = {
  buttonColor() {
    let colors = [
      "#FD0100",
      "#F76915",
      "#EEDE04",
      "#A0D636",
      "#2FA236",
      "#333ED4",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
  },
};

export default ButtonStyling;
