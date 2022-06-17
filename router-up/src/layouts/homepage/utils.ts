export const clickClear = () => {
  const liItems = document.querySelectorAll(".navitem ul li");
  liItems.forEach((key) => {
    key.classList.remove("artie");
  });
};
