const homesearch = document.getElementById("homesearch") as HTMLInputElement

function rSearch(input: string) {
    let url = input
    if (!url.includes(".") || url.includes(" ")) {
        url = "https://search.brave.com/search?q=" + url
    } else {
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url
        }
    }

    location.href = "/search?i=" + url
}

homesearch?.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        rSearch(homesearch?.value.trim())
    }
})