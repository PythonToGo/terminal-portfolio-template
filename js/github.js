async function loadReposIntoBox(user, limit, elementId) {
    // show top 4 repos
    if (typeof limit === "undefined") {
        limit = 4;
    }
    if (!elementId) {
        elementId = "repo-box";
    }

    const box = document.getElementById(elementId);
    if (!box) {
        return;
    }

    box.innerHTML = "Loading GitHub repos...";

    try {
        const resp = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&direction=desc`);
        if (!resp.ok) {
            throw new Error("GitHub API returned " + resp.status);
        }
        const json = await resp.json();

        json.sort(function(a, b) {
            return new Date(b.pushed_at) - new Date(a.pushed_at);
        });

        const rows = [];
        let count = 0;
        json.forEach(repo => {
            if (count >= limit) {
                return;
            }

            let descr_txt = repo.description;
            if (!descr_txt || descr_txt.trim() === "") {
                descr_txt = "(no description yet)";
            }

            let row = `<tr><td><a href="${repo.html_url}" target="_blank">${repo.name}</a></td>`;
            if (repo.stargazers_count > 0) {
                descr_txt += ` (${repo.stargazers_count}⭐️ on <a href="${repo.html_url}" target="_blank">GitHub</a>)`;
            }
            row += `<td>${descr_txt}</td></tr>`;
            rows.push(row);
            count += 1;
        });

        if (rows.length === 0) {
            box.innerHTML = "No public repositories to display.";
            return;
        }

        box.innerHTML = `<table>${rows.join("")}</table>`;
    } catch (e) {
        console.error("Failed to load GitHub repos:", e);
        box.innerHTML = "Failed to load GitHub repositories.";
    }
}