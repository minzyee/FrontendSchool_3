// 리스트 클릭 시, 완료된 항목으로 표시
let doneList = document.querySelectorAll(".bucket-list li");

for (let bucketList of doneList) {
	bucketList.addEventListener("click", function () {
		let check = 0;
		check++;

		if (check % 2 == 1) {
			this.classList.toggle("done");
		}
	});
}
