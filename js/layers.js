addLayer("p", {
    name: "polishing",
    symbol: "P",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#f472b6", 
    nodeStyle: {
        "background": "linear-gradient(45deg, #ff7777, #ffdd77, #77ff77, #77bfff, #dd77ff)",
        "box-shadow": "0px 0px 15px #ffffff",
        "border": "2px solid #ffffff",
        "text-shadow": "1px 1px 3px #000000"
    },
    requires: new Decimal(0.01),
    resource: "polished points",
    baseResource: "paint",
    baseAmount() {return player.points},
    type: "static",
    exponent: 2.8,
    gainMult() { 
        mult = new Decimal(1)
        return mult
    },
    gainExp() { 
        exp = new Decimal (1)
        return exp
    },
    resetsNothing() {return true},
    canBuyMax() {return true},
    //hotkeys:[{key:"p",description:"P: Reset for points (universe 1)",onPress(){if (canReset(this.layer))doReset(this.layer);}}],
    upgrades: {
        11: {
            title: "The Great Start",
            description: "We all love a generic start, right? Gain 0.0005 paint/s.",
            cost: new Decimal(1), 
            unlocked() { return true },
            canAfford() { 
                return player[this.layer].points.gte(this.cost) 
            },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        "background-color": "#9d174d", 
                        "color": "#94a3b8",
                        "border": "2px solid #4c0519",
                        "border-radius": "8px",
                        "cursor": "default",
                        "box-shadow": "none"
                    }
                }
                else if (player[this.layer].points.gte(this.cost)) {
                    return {
                        "background-color": "#ec4899",
                        "color": "#ffffff",
                        "border": "2px solid #ffffff",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 12px #ffffff",
                        "cursor": "pointer"
                    }
                }
                else {
                    return {
                        "background-color": "#374151",
                        "color": "#9ca3af",
                        "border": "2px solid #4b5563",
                        "border-radius": "8px",
                        "cursor": "not-allowed"
                    }
                }
            }
        },
        12: {
            title: "Generic Boost",
            description: "x125 paint. A lot, but absolutely worth it.",
            cost: new Decimal(2), 
            unlocked() { return true },
            canAfford() { 
                return player[this.layer].points.gte(this.cost) 
            },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        "background-color": "#9d174d", 
                        "color": "#94a3b8",
                        "border": "2px solid #4c0519",
                        "border-radius": "8px",
                        "cursor": "default",
                        "box-shadow": "none"
                    }
                }
                else if (player[this.layer].points.gte(this.cost)) {
                    return {
                        "background-color": "#ec4899",
                        "color": "#ffffff",
                        "border": "2px solid #ffffff",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 12px #ffffff",
                        "cursor": "pointer"
                    }
                }
                else {
                    return {
                        "background-color": "#374151",
                        "color": "#9ca3af",
                        "border": "2px solid #4b5563",
                        "border-radius": "8px",
                        "cursor": "not-allowed"
                    }
                }
            }
        },
        13: {
            title: "Begin.",
            description: "Unlock the Color Paths.",
            cost: new Decimal(3), 
            unlocked() { return true },
            canAfford() { 
                return player[this.layer].points.gte(this.cost) 
            },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        "background-color": "#9d174d", 
                        "color": "#94a3b8",
                        "border": "2px solid #4c0519",
                        "border-radius": "8px",
                        "cursor": "default",
                        "box-shadow": "none"
                    }
                }
                else if (player[this.layer].points.gte(this.cost)) {
                    return {
                        "background-color": "#ec4899",
                        "color": "#ffffff",
                        "border": "2px solid #ffffff",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 12px #ffffff",
                        "cursor": "pointer"
                    }
                }
                else {
                    return {
                        "background-color": "#374151",
                        "color": "#9ca3af",
                        "border": "2px solid #4b5563",
                        "border-radius": "8px",
                        "cursor": "not-allowed"
                    }
                }
            }
        },
        21: {
            title: "#ef4444 Path",
            description: "The red looks powerful.",
            cost() {
                let base = new Decimal(3)
                let count = ["21","22","23","31","32","33","41","42","43"].filter(id => hasUpgrade("p", id)).length
                return base.add(count)
            },
            unlocked() { return hasUpgrade(this.layer, 13) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost())) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        },
        22: {
            title: "#3b82f6 Path",
            description: "The blue feels... cold. For no reason, really.",
            cost() {
                let base = new Decimal(3)
                let count = ["21","22","23","31","32","33","41","42","43"].filter(id => hasUpgrade("p", id)).length
                return base.add(count)
            },
            unlocked() { return hasUpgrade(this.layer, 13) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost())) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        },
        23: {
            title: "#f59e0b Path",
            description: "This golden color is perfect.",
            cost() {
                let base = new Decimal(3)
                let count = ["21","22","23","31","32","33","41","42","43"].filter(id => hasUpgrade("p", id)).length
                return base.add(count)
            },
            unlocked() { return hasUpgrade(this.layer, 13) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost())) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        },
        31: {
            title: "#10b981 Path",
            description: "You better be precise for this. The layer hiding behind this color is very hard.",
            cost() {
                let base = new Decimal(6)
                let count = ["21","22","23","31","32","33","41","42","43"].filter(id => hasUpgrade("p", id)).length
                return base.add(count)
            },
            unlocked() { return hasUpgrade(this.layer, 13) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost())) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        },
        32: {
            title: "#8b5cf6 Path",
            description: "The purple is so mystical... or is it?",
            cost() {
                let base = new Decimal(6)
                let count = ["21","22","23","31","32","33","41","42","43"].filter(id => hasUpgrade("p", id)).length
                return base.add(count)
            },
            unlocked() { return hasUpgrade(this.layer, 13) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost())) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        },
        33: {
            title: "#ec4899 Path",
            description: "How do I describe this color... oh.",
            cost() {
                let base = new Decimal(6)
                let count = ["21","22","23","31","32","33","41","42","43"].filter(id => hasUpgrade("p", id)).length
                return base.add(count)
            },
            unlocked() { return hasUpgrade(this.layer, 13) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost())) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        },
        41: {
            title: "#14b8a6 Path",
            description: "This upgrade is very tasty. Wait, what?",
            cost() {
                let base = new Decimal(60)
                let count = ["21","22","23","31","32","33","41","42","43"].filter(id => hasUpgrade("p", id)).length
                return base.add(count)
            },
            unlocked() { return hasUpgrade(this.layer, 13) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost())) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        },
        42: {
            title: "#f97316 Path",
            description: "Spoiler alert: this is orange :D",
            cost() {
                let base = new Decimal(60)
                let count = ["21","22","23","31","32","33","41","42","43"].filter(id => hasUpgrade("p", id)).length
                return base.add(count)
            },
            unlocked() { return hasUpgrade(this.layer, 13) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost())) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        },
        43: {
            title: "#6366f1 Path",
            description: "Blurple :P",
            cost() {
                let base = new Decimal(60)
                let count = ["21","22","23","31","32","33","41","42","43"].filter(id => hasUpgrade("p", id)).length
                return base.add(count)
            },
            unlocked() { return hasUpgrade(this.layer, 13) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost())) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        }
    },
    clickables: {
        11: {
            title: "Respec",
            display() { 
                return "Resets your path choice. Just in case you accidentally selected red as your first one :)" 
            },
            unlocked() { return true },
            canClick() { return true },
            onClick() {
                let paths = [21, 22, 23, 31, 32, 33, 41, 42, 43]
                player.p.upgrades = player.p.upgrades.filter(id => !paths.includes(id))
                doReset('0', true)
            },
            style() {
                return {
                    "background-color": "#7f1d1d",
                    "color": "#ffffff",
                    "border": "2px solid #ef4444",
                    "border-radius": "4px",
                    "padding": "10px",
                    "cursor": "pointer"
                }
            }
        }
    },
    microtabs: {
        stuff: { 
            "Main": {
                content: [
                    "infoboxes",
                    "blank",
                    ["upgrades", ["1"]],
                    "blank",
                    ["upgrades", ["2", "3", "4"]],
                    "blank",
                    "clickables",
                    "blank",
                ]
            },
            "Milestones": {
                content: [
                    "milestones"
                ]
            },
            "Stats": {
                content: [
                    ["display-text", function() { return "You've earned " + format(player[this.layer].total) + " polished points across all your playthroughs."}],
                    "blank",
                ]
            }
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        "resource-display",
        "blank",
        ["microtabs", "stuff"],
    ],
    doReset(resettingLayer) {
        let keep = ["upgrades", "milestones", "challenges"]
        if (layers[resettingLayer].row >= this.row) {
            keep.push("points")
            keep.push("unlocked")
        }
        layerDataReset(this.layer, keep)
    },
    branches:['1','2','3','4','5','6','7','8','9'],
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},


})

addLayer("1", {
    name: "1",
    symbol: "1",
    position: 0,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#ef4444",
    requires: new Decimal(2),
    resource: "red",
    baseResource: "paint",
    baseAmount() { return player.points },
    type: "normal",
    exponent: 0.03141592,
    row: 1,
    upgrades: {
        11: {
            title: "Wasn't kidding when I said 'powerful'",
            description: "^1.01 paint.",
            cost: new Decimal(1),
            unlocked() { return true },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {
                player[this.layer].points = player[this.layer].points.sub(this.cost)
            },
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        "background-color": "#450a0a", 
                        "color": "#94a3b8",
                        "border": "2px solid #7f1d1d",
                        "border-radius": "8px",
                        "cursor": "default",
                        "box-shadow": "none"
                    }
                }
                else if (player[this.layer].points.gte(this.cost)) {
                    return {
                        "background-color": "#ef4444",
                        "color": "#ffffff",
                        "border": "2px solid #fca5a5",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 15px #ef4444",
                        "cursor": "pointer"
                    }
                }
                else {
                    return {
                        "background-color": "#27272a",
                        "color": "#71717a",
                        "border": "2px solid #3f3f46",
                        "border-radius": "8px",
                        "cursor": "not-allowed"
                    }
                }
            }
        },
        12: {
            title: "A bit more powerful?",
            description: "^1.1 paint.",
            cost: new Decimal(10),
            unlocked() { return true },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {
                player[this.layer].points = player[this.layer].points.sub(this.cost)
            },
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        "background-color": "#450a0a", 
                        "color": "#94a3b8",
                        "border": "2px solid #7f1d1d",
                        "border-radius": "8px",
                        "cursor": "default",
                        "box-shadow": "none"
                    }
                }
                else if (player[this.layer].points.gte(this.cost)) {
                    return {
                        "background-color": "#ef4444",
                        "color": "#ffffff",
                        "border": "2px solid #fca5a5",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 15px #ef4444",
                        "cursor": "pointer"
                    }
                }
                else {
                    return {
                        "background-color": "#27272a",
                        "color": "#71717a",
                        "border": "2px solid #3f3f46",
                        "border-radius": "8px",
                        "cursor": "not-allowed"
                    }
                }
            }
        },
        13: {
            title: "Too powerful...",
            description: "^3.3333... paint.",
            cost: new Decimal(100),
            unlocked() { return true },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {
                player[this.layer].points = player[this.layer].points.sub(this.cost)
            },
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        "background-color": "#450a0a", 
                        "color": "#94a3b8",
                        "border": "2px solid #7f1d1d",
                        "border-radius": "8px",
                        "cursor": "default",
                        "box-shadow": "none"
                    }
                }
                else if (player[this.layer].points.gte(this.cost)) {
                    return {
                        "background-color": "#ef4444",
                        "color": "#ffffff",
                        "border": "2px solid #fca5a5",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 15px #ef4444",
                        "cursor": "pointer"
                    }
                }
                else {
                    return {
                        "background-color": "#27272a",
                        "color": "#71717a",
                        "border": "2px solid #3f3f46",
                        "border-radius": "8px",
                        "cursor": "not-allowed"
                    }
                }
            }
        },
    },
    layerShown() { return hasUpgrade("p", 21) }
})

addLayer("2", {
    name: "2",
    symbol: "2",
    position: 1,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#3b82f6",
    requires: new Decimal(2),
    resource: "blue",
    baseResource: "paint",
    baseAmount() { return player.points },
    type: "normal",
    exponent: 1.25,
    row: 1,
    upgrades: {
        11: {
            title: "Simple, basic, exactly what a tmt game needs.",
            description: "Let's bring that gain up. x2 paint.",
            cost: new Decimal(1),
            unlocked() { return true },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {
                player[this.layer].points = player[this.layer].points.sub(this.cost)
            },
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        "background-color": "#1e3a8a", 
                        "color": "#94a3b8",
                        "border": "2px solid #1e40af",
                        "border-radius": "8px",
                        "cursor": "default",
                        "box-shadow": "none"
                    }
                }
                else if (player[this.layer].points.gte(this.cost)) {
                    return {
                        "background-color": "#3b82f6",
                        "color": "#ffffff",
                        "border": "2px solid #93c5fd",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 15px #3b82f6",
                        "cursor": "pointer"
                    }
                }
                else {
                    return {
                        "background-color": "#27272a",
                        "color": "#71717a",
                        "border": "2px solid #3f3f46",
                        "border-radius": "8px",
                        "cursor": "not-allowed"
                    }
                }
            }
        },
    },
    layerShown() { return hasUpgrade("p", 22) }
})

addLayer("3", {
    name: "3",
    symbol: "3",
    position: 2,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#f59e0b",
    requires: new Decimal(2),
    resource: "gold",
    baseResource: "paint",
    baseAmount() { return player.points },
    type: "normal",
    exponent: 1.618034,
    row: 1,
    upgrades: {
        11: {
            title: "It's golden!",
            description: "+1.618 paint/s.",
            cost: new Decimal(5),
            unlocked() { return true },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {
                player[this.layer].points = player[this.layer].points.sub(this.cost)
            },
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        "background-color": "#78350f", 
                        "color": "#94a3b8",
                        "border": "2px solid #92400e",
                        "border-radius": "8px",
                        "cursor": "default",
                        "box-shadow": "none"
                    }
                }
                else if (player[this.layer].points.gte(this.cost)) {
                    return {
                        "background-color": "#f59e0b",
                        "color": "#ffffff",
                        "border": "2px solid #fde68a",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 15px #f59e0b",
                        "cursor": "pointer"
                    }
                }
                else {
                    return {
                        "background-color": "#27272a",
                        "color": "#71717a",
                        "border": "2px solid #3f3f46",
                        "border-radius": "8px",
                        "cursor": "not-allowed"
                    }
                }
            }
        },
        12: {
            title: "Perfect...",
            description: "x1.618 paint/s.",
            cost: new Decimal(2),
            unlocked() { return true },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {
                player[this.layer].points = player[this.layer].points.sub(this.cost)
            },
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        "background-color": "#78350f", 
                        "color": "#94a3b8",
                        "border": "2px solid #92400e",
                        "border-radius": "8px",
                        "cursor": "default",
                        "box-shadow": "none"
                    }
                }
                else if (player[this.layer].points.gte(this.cost)) {
                    return {
                        "background-color": "#f59e0b",
                        "color": "#ffffff",
                        "border": "2px solid #fde68a",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 15px #f59e0b",
                        "cursor": "pointer"
                    }
                }
                else {
                    return {
                        "background-color": "#27272a",
                        "color": "#71717a",
                        "border": "2px solid #3f3f46",
                        "border-radius": "8px",
                        "cursor": "not-allowed"
                    }
                }
            }
        },
        13: {
            title: "You can't go wrong like this.",
            description: "^1.618 paint/s.",
            cost: new Decimal(300e3),
            unlocked() { return true },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {
                player[this.layer].points = player[this.layer].points.sub(this.cost)
            },
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        "background-color": "#78350f", 
                        "color": "#94a3b8",
                        "border": "2px solid #92400e",
                        "border-radius": "8px",
                        "cursor": "default",
                        "box-shadow": "none"
                    }
                }
                else if (player[this.layer].points.gte(this.cost)) {
                    return {
                        "background-color": "#f59e0b",
                        "color": "#ffffff",
                        "border": "2px solid #fde68a",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 15px #f59e0b",
                        "cursor": "pointer"
                    }
                }
                else {
                    return {
                        "background-color": "#27272a",
                        "color": "#71717a",
                        "border": "2px solid #3f3f46",
                        "border-radius": "8px",
                        "cursor": "not-allowed"
                    }
                }
            }
        },
    },
    layerShown() { return hasUpgrade("p", 23) }
})

addLayer("4", {
    name: "4",
    symbol: "4",
    position: 0,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#10b981",
    requires: new Decimal(2),
    resource: "fine lines",
    baseResource: "paint",
    baseAmount() { return player.points },
    type: "normal",
    exponent: 0.4,
    row: 2,
    layerShown() { return hasUpgrade("p", 31) }
})

addLayer("5", {
    name: "5",
    symbol: "5",
    position: 1,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#8b5cf6",
    requires: new Decimal(2),
    resource: "thick textures",
    baseResource: "paint",
    baseAmount() { return player.points },
    type: "normal",
    exponent: 0.4,
    row: 2,
    layerShown() { return hasUpgrade("p", 32) }
})

addLayer("6", {
    name: "6",
    symbol: "6",
    position: 2,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#ec4899",
    requires: new Decimal(2),
    resource: "abstract shapes",
    baseResource: "paint",
    baseAmount() { return player.points },
    type: "normal",
    exponent: 0.4,
    row: 2,
    layerShown() { return hasUpgrade("p", 33) }
})

addLayer("7", {
    name: "7",
    symbol: "7",
    position: 0,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#14b8a6",
    requires: new Decimal(2),
    resource: "studio rank",
    baseResource: "paint",
    baseAmount() { return player.points },
    type: "static",
    exponent: 1.5,
    row: 3,
    layerShown() { return hasUpgrade("p", 41) }
})

addLayer("8", {
    name: "8",
    symbol: "8",
    position: 1,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#f97316",
    requires: new Decimal(2),
    resource: "exhibition fame",
    baseResource: "paint",
    baseAmount() { return player.points },
    type: "static",
    exponent: 1.5,
    row: 3,
    layerShown() { return hasUpgrade("p", 42) }
})

addLayer("9", {
    name: "9",
    symbol: "9",
    position: 2,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#6366f1",
    requires: new Decimal(2),
    resource: "mastery level",
    baseResource: "paint",
    baseAmount() { return player.points },
    type: "static",
    exponent: 1.5,
    row: 3,
    layerShown() { return hasUpgrade("p", 43) }
})

addLayer("0", {
    name: "0",
    symbol: "0",
    position: 0,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#000000",
    requires: new Decimal(0),
    resource: "hmm.. why are you looking in the source code?",
    baseResource: "paint",
    baseAmount() { return player.points },
    type: "normal",
    exponent: 1,
    row: 4,
    layerShown() { return false } 
})