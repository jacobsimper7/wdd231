// Color options array
  const colors = [
    "Red", "Blue", "Green", "Black", "White", "Yellow", "Gray", "Other"
  ];

// Material options array
  const materials = [
    { id: "pla", name: "PLA", costPerKg: 20.0 },
    { id: "abs", name: "ABS", costPerKg: 25.0 },
    { id: "petg", name: "PETG", costPerKg: 30.0 },
    { id: "resin", name: "Resin", costPerKg: 40.0 },
    { id: "other", name: "Other", costPerKg: null }
  ];

export function populateMaterialOptions() {
  const materialSelect = document.getElementById("materialUsed");
  if (materialSelect) {
    materials.forEach((material) => {
      const option = document.createElement("option");
      option.value = material.id;
      option.textContent = material.name;
      materialSelect.appendChild(option);
    });
  }
}

export function populateColorOptions() {
  const colorSelect = document.getElementById("color");
  if (colorSelect) {
    colors.forEach((color) => {
      const option = document.createElement("option");
      option.value = color;
      option.textContent = color;
      colorSelect.appendChild(option);
    });
  }
}