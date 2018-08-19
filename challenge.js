const counter = document.getElementById("counter");
const likeButton = document.getElementById("+");
const unlikeButton = document.getElementById("-");
const pauseButton = document.getElementById("pause");
const heartButton = document.getElementById("<3");
const commentList = document.getElementById("list");
const commentFormBody = document.getElementById("comment-form-body");
const submit = document.getElementById("submit");
const likes = document.querySelector(".likes");



function incrementLike() {
  counter.innerText = parseInt(counter.innerText) + 1;
}

function decrementLike() {
  if (parseInt(counter.innerText) > 0) {
    counter.innerText = parseInt(counter.innerText) - 1;
  }
}

function addComment(commentBodyText) {
  let comment = document.createElement("p")
  comment.innerText = commentBodyText
  commentList.appendChild(comment)
}


function pauseEventListeners() {
  clearInterval(autoLikeIncrement)
  likeButton.removeEventListener("click", incrementLike)
  unlikeButton.removeEventListener("click", decrementLike)
  submit.disabled = true
}

function resumeEventListener() {
  autoLikeIncrement = setInterval(() => { incrementLike() }, 1000)
  likeButton.addEventListener("click", incrementLike)
  unlikeButton.addEventListener("click", decrementLike)
  submit.disabled = false
}

let autoLikeIncrement = setInterval(() => { incrementLike() }, 1000)

likeButton.addEventListener("click", incrementLike)
unlikeButton.addEventListener("click", decrementLike)
// heartButton.addEventListener("click", )
submit.addEventListener("click", (e) => {
  e.preventDefault()
  addComment(commentFormBody.value)
  commentFormBody.value = ""
})

pause.addEventListener("click", () => {
  if (pauseButton.innerText === "pause") {
    pauseButton.innerText = "resume"
    pauseEventListeners()
  } else {
    pauseButton.innerText = "pause"
    resumeEventListener()
  }
})
