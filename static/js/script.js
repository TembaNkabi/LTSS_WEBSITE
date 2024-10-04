function Year(replace_with_year) {
    const date = new Date();
    replace_with_year.innerHTML = date.getFullYear();
}

Year(document.getElementById("year"))