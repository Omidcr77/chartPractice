document.addEventListener("DOMContentLoaded", function() {
    const languagesData = [
        { name: "JavaScript", percentage: 40 },
        { name: "Python", percentage: 25 },
        { name: "Java", percentage: 20 },
        { name: "C++", percentage: 15 }
    ];

    const languageNames = languagesData.map(language => language.name);
    const languagePercentages = languagesData.map(language => language.percentage);

    const ctx = document.getElementById('languagesChart').getContext('2d');
    const languagesChart = new Chart(ctx, {
        type: 'pie', // Change chart type to pie for 3D effect
        data: {
            labels: languageNames,
            datasets: [{
                label: 'Programming Languages',
                data: languagePercentages,
                backgroundColor: [
                    '#f39c12', // JavaScript
                    '#3498db', // Python
                    '#9b59b6', // Java
                    '#e74c3c'  // C++
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#fff'
                    }
                },
                title: {
                    display: true,
                    text: 'Top Programming Languages',
                    color: '#fff'
                }
            },
            // Add 3D effect
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 20,
                    bottom: 20
                }
            },
            // Add hover and rotation options for interactivity
            hoverOffset: 8,
            rotation: -0.7 * Math.PI
        }
    });

    // Add icons to legend labels
    const legendItems = document.querySelectorAll('.chartjs-legend-item');
    legendItems.forEach((item, index) => {
        const icon = document.createElement('i');
        icon.className = `language-icon fab fa-${languageNames[index].toLowerCase()}`;
        item.prepend(icon);
    });
});
