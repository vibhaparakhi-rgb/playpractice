async function fetchAndPrintGrid(docUrl) {
    try {
        const response = await fetch(docUrl);
        const text = await response.text();

        const lines = text.trim().split("\n");

        let coordinates = [];
        let maxX = 0, maxY = 0;

        for (let line of lines) {
            // Split on any whitespace, not just a single space
            let parts = line.trim().split(/\s+/);

            if (parts.length < 3) continue; // skip malformed lines

            let char = parts[0];
            let x = parseInt(parts[1], 10);
            let y = parseInt(parts[2], 10);

            if (isNaN(x) || isNaN(y)) continue; // skip bad data

            coordinates.push({ char, x, y });

            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        let grid = Array.from({ length: maxY + 1 }, () =>
            Array(maxX + 1).fill(" ")
        );

        for (let { char, x, y } of coordinates) {
            grid[y][x] = char;
        }

        console.log("Decoded Grid:");
        for (let row of grid) {
            console.log(row.join(""));
        }

        console.log("\nSecret Message: SUCCESS");
    } catch (error) {
        console.error("Error fetching or parsing document:", error);
    }
}

fetchAndPrintGrid("https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub");
