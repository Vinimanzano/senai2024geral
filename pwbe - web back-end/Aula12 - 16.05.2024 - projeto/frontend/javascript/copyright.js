function getCurrentYear() {
    return new Date().getFullYear();
}

function updateCopyright() {
    const year = getCurrentYear();
    const copyrightText = `Copyright © ${year} by Vinícius Manzano | All Rights Reserved.`;
    document.getElementById("copyright").innerHTML = copyrightText;
}

updateCopyright();