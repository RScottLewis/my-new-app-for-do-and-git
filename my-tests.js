const check = require("check-node-version");

check(
    { node: ">= 12.18", },
    (error, result) => {
        if (error) {
            console.error(error);
            return;
        }

        if (result.isSatisfied) {
            console.log("All is well.");
            return;
        }

        console.error("Some package version(s) failed!");

        for (const packageName of Object.keys(result.versions)) {
            if (!result.versions[packageName].isSatisfied) {
                console.error(`Missing ${packageName}.`);
            }
        }
    }
);
