/* eslint-env node */
const INLINE_ELEMENTS = [
    "a", "abbr", "audio", "b", "bdi", "bdo", "canvas", "cite", "code", "data", "del",
    "dfn", "em", "i", "iframe", "ins", "kbd", "label", "map", "mark", "noscript", "object",
    "output", "picture", "q", "ruby", "s", "samp", "small", "span", "strong", "sub", "sup",
    "svg", "time", "u", "var", "video"
]

module.exports = {
    root: true,
    globals: {
        defineEventHandler: 'readonly',
        readBody: 'readonly',
        computed: 'readonly',
        defineNuxtPlugin: 'readonly',
        defineNitroPlugin: 'readonly',
        queryCollection: 'readonly',
        sendRedirect: 'readonly',
        useRuntimeConfig: 'readonly',
        defineNuxtRouteMiddleware: 'readonly',
        navigateTo: 'readonly',
        useNuxtApp: 'readonly',
        useGtag: 'readonly',
        useRoute: 'readonly',
        useState: 'readonly',
        useCookie: 'readonly',
        getCookie: 'readonly',
        setCookie: 'readonly',
        useRequestHeaders: 'readonly',
        $fetch: 'readonly',
        useAuth: 'readonly',
        useLocale: 'readonly',
        ref: 'readonly',
        createError: 'readonly',
        deleteCookie: 'readonly',
        getUserFromSession: 'readonly',
        watch: 'readonly',
        useI18n: 'readonly',
        sendEmail: 'readonly',
        getUnsubscribeNewsletterLink: 'readonly',
        useStorage: 'readonly',
        Stripe: 'readonly',
        getQuery: 'readonly',
        getRequestURL: 'readonly',
        storeToRefs: 'readonly',
        useRequestEvent: 'readonly'
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@nuxt/eslint-config'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        "comma-dangle": ["error", {
            "arrays": "only-multiline",
            "objects": "only-multiline",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "max-len": ["error", { "code": 130 }],
        "semi": ["error", "never"],
        "vue/multi-word-component-names": "off",
        "vue/attributes-order": ["error", {
            "order": [
                "CONDITIONALS",
                "LIST_RENDERING",
                "RENDER_MODIFIERS",
                "DEFINITION",
                "OTHER_DIRECTIVES",
                "GLOBAL",
                "TWO_WAY_BINDING",
                "UNIQUE",
                "OTHER_ATTR",
                "CONTENT",
                "EVENTS"
            ],
            "alphabetical": false
        }],
        "vue/require-prop-types": "off",
        "vue/max-attributes-per-line": ["error", {
            "singleline": { "max": 2 },
            "multiline": { "max": 1 }
        }],
        "vue/first-attribute-linebreak": ["error", {
            "singleline": "ignore",
            "multiline": "below"
        }],
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "always"
        }],
        "vue/singleline-html-element-content-newline": ["error", {
            "ignoreWhenNoAttributes": true,
            "ignoreWhenEmpty": true,
            "ignores": ["pre", "textarea", ...INLINE_ELEMENTS]
        }],
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        "vue/order-in-components": ["error", {
            "order": [
                "el",
                "name",
                "components",
                "directives",
                "filters",
                "mixins",
                "props",
                "data",
                "computed",
                "methods",
                "LIFECYCLE_HOOKS",
                "watch",
                "created",
                "mounted"
            ]
        }]
    }
}