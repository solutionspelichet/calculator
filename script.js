const itemsData = {
    "Salon - Salle à manger": [
        { name: "Bibliothèque 1 porte", volume: 0.7 },
        { name: "Bibliothèque 2 portes", volume: 1.0 },
        { name: "Bibliothèque 3 portes", volume: 1.5 },
        { name: "Bibliothèque 4 portes", volume: 1.5 },
        { name: "Bureau", volume: 1.0 },
        { name: "Canapé 2 places", volume: 1.0 },
        { name: "Canapé 3 places", volume: 1.5 },
        { name: "Canapé d'angle", volume: 1.5 },
        { name: "Etagère", volume: 0.6 },
        { name: "Fauteuil", volume: 0.5 },
        { name: "Grande lampe", volume: 0.2 },
        { name: "Guéridon", volume: 0.3 },
        { name: "Hifi", volume: 0.2 },
        { name: "Imprimante", volume: 0.5 },
        { name: "Meuble living 1 porte", volume: 0.5 },
        { name: "Meuble living 2 portes", volume: 0.7 },
        { name: "Meuble living 3 portes", volume: 0.9 },
        { name: "Meuble living 4 portes", volume: 1.0 },
        { name: "Meuble TV", volume: 0.5 },
        { name: "Petit bureau", volume: 0.6 },
        { name: "Piano à queue", volume: 2.5 },
        { name: "Piano demi-queue", volume: 2.0 },
        { name: "Piano droit", volume: 1.5 },
        { name: "Table (grande)", volume: 1.5 },
        { name: "Table (moyenne)", volume: 0.8 },
        { name: "Table (petite)", volume: 0.5 },
        { name: "Table basse", volume: 0.5 },
        { name: "Télévision", volume: 0.25 }
    ],
    "Chambre": [
        { name: "Abat-jour", volume: 0.1 },
        { name: "Armoire 1 porte", volume: 0.8 },
        { name: "Armoire 2 portes", volume: 1.0 },
        { name: "Armoire 3 portes", volume: 1.5 },
        { name: "Armoire 4 portes", volume: 1.5 },
        { name: "Bonnetière", volume: 0.5 },
        { name: "Carton penderie", volume: 0.8 },
        { name: "Coffre à jouets (grand)", volume: 0.8 },
        { name: "Coffre à jouets (moyen)", volume: 0.3 },
        { name: "Coffre à jouets (petit)", volume: 0.2 },
        { name: "Coiffeuse", volume: 0.6 },
        { name: "Commode", volume: 0.5 },
        { name: "Contenu penderie 1 porte", volume: 0.25 },
        { name: "Contenu penderie 2 portes", volume: 0.8 },
        { name: "Contenu penderie 3 portes", volume: 2.5 },
        { name: "Contenu penderie 4 portes", volume: 3.0 },
        { name: "Contenu placard 1 porte", volume: 0.25 },
        { name: "Contenu placard 2 portes", volume: 0.8 },
        { name: "Contenu placard 3 portes", volume: 1.5 },
        { name: "Contenu placard 4 portes", volume: 2.0 },
        { name: "Lit 1 place", volume: 1.2 },
        { name: "Lit 2 places", volume: 2.0 },
        { name: "Lit bébé", volume: 0.5 },
        { name: "Lit superposé", volume: 2.0 },
        { name: "Petite lampe", volume: 0.15 },
        { name: "Table de chevet", volume: 0.2 }
    ],
    "Cuisine": [
        { name: "Chaise", volume: 0.25 },
        { name: "Congélateur coffre (petit)", volume: 0.5 },
        { name: "Congélateur coffre grand", volume: 1.0 },
        { name: "Congélateur coffre moyen", volume: 0.7 },
        { name: "Four", volume: 0.5 },
        { name: "Gazinière", volume: 0.5 },
        { name: "Lave-vaisselle", volume: 0.5 },
        { name: "Meuble de cuisine 1 porte", volume: 0.3 },
        { name: "Meuble de cuisine 2 portes", volume: 0.6 },
        { name: "Meuble de cuisine 3 portes", volume: 0.7 },
        { name: "Meuble de cuisine 4 portes", volume: 1.0 },
        { name: "Micro-ondes", volume: 0.1 },
        { name: "Plaque de cuisson", volume: 0.15 },
        { name: "Réfrigérateur", volume: 1.0 },
        { name: "Réfrigérateur américain", volume: 1.5 },
        { name: "Réfrigérateur standard", volume: 1.0 },
        { name: "Réfrigérateur top", volume: 1.0 },
        { name: "Sous-lavabo", volume: 0.3 },
        { name: "Table", volume: 1.0 },
        { name: "Vaisselier 1 porte", volume: 0.5 },
        { name: "Vaisselier 2 portes", volume: 0.7 },
        { name: "Vaisselier 3 portes", volume: 1.0 },
        { name: "Vaisselier 4 portes", volume: 1.3 }
    ],
    "Autres": [
        { name: "Aspirateur", volume: 0.2 },
        { name: "Barbecue (grand)", volume: 1.0 },
        { name: "Barbecue (moyen)", volume: 0.6 },
        { name: "Barbecue (petit)", volume: 0.5 },
        { name: "Brouette", volume: 0.5 },
        { name: "Carton standard", volume: 0.1 },
        { name: "Etabli", volume: 1.5 },
        { name: "Lave-linge", volume: 0.5 },
        { name: "Lot d'outils (grand)", volume: 0.5 },
        { name: "Lot d'outils (moyen)", volume: 0.3 }
    ]
};

let quantities = {}; // Stores the quantity for each item

function calculateTotalVolume() {
    let total = 0;
    for (const category in itemsData) {
        itemsData[category].forEach(item => {
            const quantity = quantities[item.name] || 0;
            total += quantity * item.volume;
        });
    }
    document.getElementById('totalVolume').textContent = total.toFixed(2);
    return total.toFixed(2); // Return the total volume for PDF
}

function createItemElement(item, categoryDivId) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    const itemName = document.createElement('div');
    itemName.classList.add('item-name');
    itemName.textContent = item.name;
    itemDiv.appendChild(itemName);

    const quantityControls = document.createElement('div');
    quantityControls.classList.add('quantity-controls');

    const minusBtn = document.createElement('button');
    minusBtn.textContent = '-';
    minusBtn.onclick = () => {
        if (quantities[item.name] > 0) {
            quantities[item.name]--;
            quantitySpan.textContent = quantities[item.name];
            calculateTotalVolume();
        }
    };
    quantityControls.appendChild(minusBtn);

    const quantitySpan = document.createElement('span');
    quantitySpan.textContent = quantities[item.name] || 0;
    quantityControls.appendChild(quantitySpan);

    const plusBtn = document.createElement('button');
    plusBtn.textContent = '+';
    plusBtn.onclick = () => {
        quantities[item.name] = (quantities[item.name] || 0) + 1;
        quantitySpan.textContent = quantities[item.name];
        calculateTotalVolume();
    };
    quantityControls.appendChild(plusBtn);

    itemDiv.appendChild(quantityControls);
    document.getElementById(categoryDivId).appendChild(itemDiv);
}

// Function to generate PDF
function generatePdf() {
    const doc = new jsPDF();
    let y = 20; // Initial Y position for text

    doc.setFontSize(20);
    doc.text("Estimation de Volume de Déménagement", 10, y);
    y += 10;

    doc.setFontSize(12);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 10, y);
    y += 10;

    const totalVolume = calculateTotalVolume();
    doc.text(`Volume total estimé: ${totalVolume} m³`, 10, y);
    y += 20;

    // Iterate through categories and items to add to PDF
    for (const categoryName in itemsData) {
        let categoryHasItems = false;
        const itemsInThisCategory = [];

        itemsData[categoryName].forEach(item => {
            const quantity = quantities[item.name] || 0;
            if (quantity > 0) {
                categoryHasItems = true;
                itemsInThisCategory.push({
                    name: item.name,
                    quantity: quantity,
                    volumeUnit: item.volume.toFixed(2),
                    volumeTotalItem: (quantity * item.volume).toFixed(2)
                });
            }
        });

        if (categoryHasItems) {
            doc.setFontSize(14);
            doc.text(categoryName, 10, y);
            y += 7;

            // Add table header
            doc.setFontSize(10);
            doc.text("Article", 15, y);
            doc.text("Qté", 90, y);
            doc.text("Vol. Unit. (m³)", 120, y);
            doc.text("Vol. Total (m³)", 170, y);
            y += 5;

            doc.line(10, y, 200, y); // Horizontal line
            y += 5;

            // Add items
            doc.setFontSize(9);
            itemsInThisCategory.forEach(item => {
                doc.text(item.name, 15, y);
                doc.text(String(item.quantity), 90, y);
                doc.text(item.volumeUnit, 120, y);
                doc.text(item.volumeTotalItem, 170, y);
                y += 6;
                if (y > 280) { // Check for new page
                    doc.addPage();
                    y = 20;
                    doc.setFontSize(10);
                    doc.text("Article", 15, y);
                    doc.text("Qté", 90, y);
                    doc.text("Vol. Unit. (m³)", 120, y);
                    doc.text("Vol. Total (m³)", 170, y);
                    y += 5;
                    doc.line(10, y, 200, y);
                    y += 5;
                    doc.setFontSize(9);
                }
            });
            y += 10; // Space after category
        }
    }

    doc.save(`Estimation_Volume_${new Date().toLocaleDateString()}.pdf`);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Mapping of category names to their simplified HTML IDs
    const categoryIdMap = {
        "Salon - Salle à manger": "salonItems",
        "Chambre": "chambreItems",
        "Cuisine": "cuisineItems",
        "Autres": "autresItems"
    };

    for (const categoryName in itemsData) {
        const categoryDivId = categoryIdMap[categoryName];
        if (categoryDivId) {
            itemsData[categoryName].forEach(item => {
                createItemElement(item, categoryDivId);
            });
        } else {
            console.error(`Category ID not found for: ${categoryName}`);
        }
    }
    calculateTotalVolume(); // Initial calculation

    // Add event listener for the PDF download button
    document.getElementById('downloadPdfBtn').addEventListener('click', generatePdf);
});

// Register Service Worker for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}