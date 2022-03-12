let counter = 1;

    const disData = (num = counter + 25) => {
        //let count = 0;
        while (counter < num) {
            let h1 = document.createElement("h1");
            h1.innerText = `Masai Student ${counter}`;
          //  count++;
            counter++;
            document.getElementById("container").append(h1);
        }
}
    const debouncing = (func, delay) => {
        return function () {
            setTimeout(() => {
                func();
            }, delay)
        }
    }

    let debTD = debouncing(disData, 50);

    debTD();

    let container = document.getElementById("container")
container.addEventListener("scroll", () => {
    if (container.offsetHeight + container.scrollTop >= container.scrollHeight) {
        debTD();
    }
});
