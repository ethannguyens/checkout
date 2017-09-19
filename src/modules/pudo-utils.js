class pudoUtils {
  static addressText(address) {
    let text = "";
    Object.keys(address).forEach((key) => {
      if (address[key]) text = `${text} ${address[key]}, `;
    });

    return text.slice(0, -2).toLowerCase();
  }
}

export default pudoUtils;
