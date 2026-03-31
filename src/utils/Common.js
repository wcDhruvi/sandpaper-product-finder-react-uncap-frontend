export const sizeSorter = (a, b) => {
    let left = parseFloat(a.replace(' ', '.'));
    let right = parseFloat(b.replace(' ', '.'));
    if (left === right) {
        let dec1 = a.split(' ')[1];
        let dec2 = b.split(' ')[1];
        return dec1 < dec2 ? -1 : 1;
    }
    return left < right ? -1 : 1;
};

export const unique = (arr) => {
    return [...new Set(arr)];
};

export const computeStepOrder = (device, material) => {
    const steps = [];

    // Step 1: Device or Material
    steps.push({
        step: "1",
        title: device ? "Device" : "Material",
    });

    // Step 2: Specific Material
    if (device === "Hand Sanding" || device === "Rectangular Orbital Sander") {
        steps.push({ step: "specmaterial", title: "Material" });
    }

    // Step 3: Size
    const showSize =
        (material === "Sponges" &&
            (device === "Disc Orbital Sander" ||
                device === "Rectangular Orbital Sander")) ||
        (material !== "Sponges" &&
            (device !== "Hand Sanding" || material === "Sheets"));

    if (showSize) {
        steps.push({ step: "size", title: "Size" });
    }

    // Step 4: Attachment
    if (material !== "Belts" && material !== "Sponges") {
        steps.push({ step: "attachment", title: "Attachment Type" });
    }

    // Step 5: Thickness
    if (material === "Sponges" || (!material && device === "Hand Sanding")) {
        steps.push({ step: "thickness", title: "Thickness" });
    }

    // Step 6: Center Hole
    if (
        material !== "Belts" &&
        material !== "Sheets" &&
        material !== "Rolls" &&
        material !== "Sponges" &&
        device !== "Hand Sanding"
    ) {
        steps.push({ step: "centerhole", title: "Hole Configuration" });
    }

    // Step 7: Vented Hole
    if (
        material === "Sheets" ||
        (material === "Sponges" && device !== "Hand Sanding")
    ) {
        steps.push({ step: "ventedhole", title: "Hole Configuration" });
    }

    // Step 8: Application
    steps.push({ step: "application", title: "Applications" });

    // Step 9: Backing
    if (material !== "Sponges" && device !== "Hand Sanding") {
        steps.push({ step: "backing", title: "Backing Material" });
    }
    return steps;
};

// Aliases for sub-steps that map to a parent step
export const STEP_ALIASES = {
    centerholesize: "centerhole",
    ventedhole: "centerhole",
    use: "1"
};

export const defaultSelectedFilter = {
    grit: [],
    grain: [],
    inStock: false
}