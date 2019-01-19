new Vue({
    el: '#app',
    data: {
        mode: 'basic',
        drinks: [
            {name: '소주 1잔', measure: 1.0, input: 0},
            {name: '맥주 1잔', measure: 0.9, input: 0},
            {name: '막걸리 1잔', measure: 1.2, input: 0},
            {name: '와인 1잔', measure: 1.3, input: 0},
            {name: '위스키 1잔', measure: 1.2, input: 0},
            {name: '매화수 1잔', measure: 0.7, input: 0},
        ],
        drinks_complex: [
            {
                name: '소주',
                type: {'20도': 20.1, '19.5도': 19.5},
                unit: {'1잔': 50, '1병': 360},
                type_select: 0,
                unit_select: 0,
                input: 0,
            },
            {
                name: '맥주',
                type: {'일반': 4.5, '생맥주': 4.0},
                unit: {'1잔': 200, '1병': 330, '1캔': 355, '500cc': 500},
                type_select: 0,
                unit_select: 0,
                input: 0,
            },
            {
                name: '와인',
                type: {'레드와인': 13.5, '화이트와인': 7.5},
                unit: {'1잔': 100, '1병': 750},
                type_select: 0,
                unit_select: 0,
                input: 0,
            },
            {
                name: '위스키',
                type: {'일반': 40},
                unit: {'1잔': 30, '1병': 1000},
                type_select: 0,
                unit_select: 0,
                input: 0,
            },
            {
                name: '매화수',
                type: {'일반': 14},
                unit: {'1잔': 30, '1병': 375},
                type_select: 0,
                unit_select: 0,
                input: 0,
            },
            {
                name: '막걸리',
                type: {'일반': 6},
                unit: {'1잔': 200, '1병': 750},
                type_select: 0,
                unit_select: 0,
                input: 0,
            },
            {
                name: '보드카',
                type: {'일반': 40},
                unit: {'1병': 750},
                type_select: 0,
                unit_select: 0,
                input: 0,
            }
        ]
    },
    computed: {
        capacity: function() {
            return this.drinks.reduce(function(acc, drink) {
                return acc + (drink.input * drink.measure);
            }, 0);
        },
        capacity_complex: function() {
            var base = 20.1 * 50; // 소주 한잔
            return this.drinks_complex.reduce(function(acc, drink) {
                return acc + (drink.type_select * drink.unit_select * drink.input)/base;
            }, 0);
        }
    }
});