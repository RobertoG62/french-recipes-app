const i18n = (() => {
    let currentLang = 'he';

    const translations = {
        he: {
            meta: {
                title: 'המטבח הצרפתי — מתכונים אותנטיים',
                description: 'המטבח הצרפתי — מתכונים אותנטיים מצרפת, בעברית.'
            },
            header: {
                logo: 'המטבח הצרפתי',
                backToRecipes: 'חזרה למתכונים'
            },
            hero: {
                title: 'המטבח',
                titleHighlight: 'הצרפתי',
                subtitle: 'מתכונים אותנטיים מהלב של פריז',
                searchPlaceholder: 'חיפוש מתכון...'
            },
            categories: {
                all: 'הכל',
                soups: 'מרקים',
                mains: 'מנות עיקריות',
                pastries: 'מאפים ולחמים',
                desserts: 'קינוחים',
                sauces: 'רטבים ותוספות'
            },
            difficulty: {
                easy: 'קל',
                medium: 'בינוני',
                hard: 'מאתגר'
            },
            detail: {
                prepTime: 'זמן הכנה',
                cookTime: 'זמן בישול',
                servings: 'מנות',
                difficulty: 'רמת קושי',
                ingredients: 'מצרכים',
                instructions: 'הוראות הכנה',
                categories: 'קטגוריות',
                whatsappShare: 'שלח רשימת קניות ב-WhatsApp',
                minutes: 'דקות'
            },
            search: {
                noResults: 'לא נמצאו מתכונים',
                tryAgain: 'נסו לשנות את מילות החיפוש או לבחור קטגוריה אחרת',
                clearFilters: 'נקה חיפוש',
                resultsCount: 'נמצאו {count} מתכונים'
            },
            loading: 'טוען מתכונים...',
            footer: {
                tagline: 'המטבח הצרפתי — מתכונים אותנטיים מצרפת, בעברית',
                backToHub: 'לעוד מתכוני עולם — חזרה לרכזת המתכונים'
            }
        },
        en: {
            meta: {
                title: 'The French Kitchen — Authentic Recipes',
                description: 'The French Kitchen — Authentic recipes from France.'
            },
            header: {
                logo: 'The French Kitchen',
                backToRecipes: 'Back to Recipes'
            },
            hero: {
                title: 'The French',
                titleHighlight: 'Kitchen',
                subtitle: 'Authentic recipes from the heart of Paris',
                searchPlaceholder: 'Search recipe...'
            },
            categories: {
                all: 'All',
                soups: 'Soups',
                mains: 'Main Courses',
                pastries: 'Pastries & Breads',
                desserts: 'Desserts',
                sauces: 'Sauces & Condiments'
            },
            difficulty: {
                easy: 'Easy',
                medium: 'Medium',
                hard: 'Hard'
            },
            detail: {
                prepTime: 'Prep Time',
                cookTime: 'Cook Time',
                servings: 'Servings',
                difficulty: 'Difficulty',
                ingredients: 'Ingredients',
                instructions: 'Instructions',
                categories: 'Categories',
                whatsappShare: 'Share shopping list on WhatsApp',
                minutes: 'minutes'
            },
            search: {
                noResults: 'No recipes found',
                tryAgain: 'Try different search terms or select another category',
                clearFilters: 'Clear search',
                resultsCount: 'Found {count} recipes'
            },
            loading: 'Loading recipes...',
            footer: {
                tagline: 'The French Kitchen — Authentic recipes from France',
                backToHub: 'More world recipes — Back to Recipe Hub'
            }
        }
    };

    function t(key, params = {}) {
        const keys = key.split('.');
        let value = translations[currentLang];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }

        // Replace placeholders like {count}
        if (typeof value === 'string' && params) {
            Object.keys(params).forEach(param => {
                value = value.replace(`{${param}}`, params[param]);
            });
        }

        return value || key;
    }

    function setLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Language not supported: ${lang}`);
            return;
        }
        currentLang = lang;
        localStorage.setItem('lang', lang);
    }

    function getLanguage() {
        return currentLang;
    }

    function detectLanguage() {
        const saved = localStorage.getItem('lang');
        if (saved && translations[saved]) {
            return saved;
        }

        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('he')) return 'he';
        return 'en';
    }

    function init() {
        const detectedLang = detectLanguage();
        setLanguage(detectedLang);
        return detectedLang;
    }

    return {
        t,
        setLanguage,
        getLanguage,
        detectLanguage,
        init
    };
})();
