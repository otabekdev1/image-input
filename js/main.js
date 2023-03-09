const UploadBox = document.querySelector(".upload-box");
const fileInput = document.querySelector("input");
const WidthInput = document.querySelector(".width input");
const HighInput = document.querySelector(".hight input");
const previewImg = document.querySelector(".img-preview");

let ogImageRatio;
const loadFile = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  previewImg.src = URL.createObjectURL(file);
  previewImg.addEventListener("load", () => {
    WidthInput.value = previewImg.naturalWidth;
    HighInput.value = previewImg.naturalHeight;
    ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight;
    document.querySelector(".wrapper").classList.add("active");
  });
};

fileInput.addEventListener("change", loadFile);

UploadBox.addEventListener("click", () => fileInput.click());
