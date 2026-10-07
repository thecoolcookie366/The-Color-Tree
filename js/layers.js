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
                let base = new Decimal(4)
                let count = ["21","22","23","31","32","33","41","42","43"].filter(id => hasUpgrade("p", id)).length
                return base.add(count)
            },
            unlocked() { return hasUpgrade("p", 21) && hasUpgrade("p", 22) && hasUpgrade("p", 23) },
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
                let base = new Decimal(4)
                let count = ["21","22","23","31","32","33","41","42","43"].filter(id => hasUpgrade("p", id)).length
                return base.add(count)
            },
            unlocked() { return hasUpgrade("p", 21) && hasUpgrade("p", 22) && hasUpgrade("p", 23) },
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
                let base = new Decimal(4)
                let count = ["21","22","23","31","32","33","41","42","43"].filter(id => hasUpgrade("p", id)).length
                return base.add(count)
            },
            unlocked() { return hasUpgrade("p", 21) && hasUpgrade("p", 22) && hasUpgrade("p", 23) },
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
                let base = new Decimal(2508)
                let count = ["21","22","23","31","32","33","41","42","43"].filter(id => hasUpgrade("p", id)).length
                return base.add(count)
            },
            unlocked() { return hasUpgrade("p", 31) && hasUpgrade("p", 32) && hasUpgrade("p", 33) },
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
                let base = new Decimal(1259)
                let count = ["21","22","23","31","32","33","41","42","43"].filter(id => hasUpgrade("p", id)).length
                return base.add(count)
            },
            unlocked() { return hasUpgrade("p", 31) && hasUpgrade("p", 32) && hasUpgrade("p", 33) },
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
                let base = new Decimal(539847)
                let count = ["21","22","23","31","32","33","41","42","43"].filter(id => hasUpgrade("p", id)).length
                return base.add(count)
            },
            unlocked() { return hasUpgrade("p", 31) && hasUpgrade("p", 32) && hasUpgrade("p", 33) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost())) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        },
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

addLayer("a", {
    symbol: "A",
    position: 0,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
    }},
    color: "#888888",
    resource: "", 
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Automation")
    },
    layerShown() { 
        return hasMilestone("8", 0) 
    },
    tabFormat: [
        ["display-text", "<h2>Toggle your automations here!</h2>"],
        "blank",
        ["display-text", "Auto Red"],
        ["toggle", ["1", "autoRed"]],
        ["display-text", "Auto Blue"],
        ["toggle", ["2", "autoBlue"]],
        ["display-text", "Auto Gold"],
        ["toggle", ["3", "autoGold"]],
        ["display-text", "Auto Green"],
        ["toggle", ["4", "autoGreen"]],
        ["display-text", "Auto Purple"],
        ["toggle", ["5", "autoPurple"]],
        ["display-text", "Auto Pink"],
        ["toggle", ["6", "autoPink"]],
    ]
})

addLayer("1", {
    name: "1",
    symbol: "1",
    position: 0,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        autoRed: false,
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
    passiveGeneration() {
        if (hasMilestone("8", 0) && player[this.layer].autoRed) {
            return 100
        }
        return 0
    },
    autoUpgrade() {
        return hasMilestone("8", 0) && player[this.layer].autoRed
    },
    tabFormat: [
        "main-display",
        function() { return (hasMilestone("8", 0) && player["1"].autoRed) ? "blank" : "prestige-button" },
        "resource-display",
        "blank",
        ["display-text", "<h3>Auto Red</h3>"],
        ["toggle", ["1", "autoRed"]],
        "blank",
        "upgrades"
    ],
    layerShown() { return hasUpgrade("p", 21) }
})

addLayer("2", {
    name: "2",
    symbol: "2",
    position: 1,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        autoBlue: false,
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
            cost: new Decimal(1e20),
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
        12: {
            title: "2 and 4! Powers of two!",
            description: "x24 paint.",
            cost: new Decimal(3e22),
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
        13: {
            title: "Wait, that isn't powers of 2..",
            description: "Just go up! x246 paint. Also a bonus ^1.05 paint.",
            cost: new Decimal(1e33),
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
    passiveGeneration() {
        if (hasMilestone("8", 0) && player[this.layer].autoBlue) {
            return 1
        }
        return 0
    },
    autoUpgrade() {
        return hasMilestone("8", 0) && player[this.layer].autoBlue
    },
    tabFormat: [
        "main-display",
        function() { return (hasMilestone("8", 0) && player["2"].autoBlue) ? "blank" : "prestige-button" },
        "resource-display",
        "blank",
        ["display-text", "<h3>Auto Blue</h3>"],
        ["toggle", ["2", "autoBlue"]],
        "blank",
        "upgrades"
    ],
    layerShown() { return hasUpgrade("p", 22) }
})

addLayer("3", {
    name: "3",
    symbol: "3",
    position: 2,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        autoGold: false,
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
    passiveGeneration() {
        if (hasMilestone("8", 0) && player[this.layer].autoGold) {
            return 1
        }
        return 0
    },
    autoUpgrade() {
        return hasMilestone("8", 0) && player[this.layer].autoGold
    },
    tabFormat: [
        "main-display",
        function() { return (hasMilestone("8", 0) && player["3"].autoGold) ? "blank" : "prestige-button" },
        "resource-display",
        "blank",
        ["display-text", "<h3>Auto Gold</h3>"],
        ["toggle", ["3", "autoGold"]],
        "blank",
        "upgrades"
    ],
    layerShown() { return hasUpgrade("p", 23) }
})

addLayer("4", {
    name: "4",
    symbol: "4",
    position: 0,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        timer: 0,
        timerActive: false,
        targetStart: 1.5,
        targetEnd: 2.5,
        autoGreen: false,
    }},
    color: "#10b981",
    requires: new Decimal(4.3e43),
    resource: "green",
    baseResource: "paint",
    baseAmount() { return player.points },
    type: "normal",
    exponent: 0.0111,
    row: 2,
    canReset() { return false },
    update(diff) {
        if (hasUpgrade(this.layer, 14)) {
            player[this.layer].timer = 0
            player[this.layer].timerActive = false
            let baseAmount = hasUpgrade(this.layer, 11) ? new Decimal(2) : new Decimal(1)
            if (hasUpgrade(this.layer, 13)) {
                baseAmount = baseAmount.add(player[this.layer].points.pow(2))
            }
            player[this.layer].points = player[this.layer].points.add(baseAmount)
            return 
        }

        if (player[this.layer].timerActive) {
            player[this.layer].timer += diff
            if (hasUpgrade(this.layer, 12)) {
                let t = player[this.layer].timer
                let start = player[this.layer].targetStart || 1.5
                let end = player[this.layer].targetEnd || 2.5
                let perfectMoment = start + ((end - start) / 2)
                if (t >= perfectMoment) {
                    layers[this.layer].clickables[11].onClick()
                }
            }
            if (player[this.layer].timer > 5) {
                player[this.layer].timer = 0
                player[this.layer].timerActive = false
            }
        }
        if (hasUpgrade(this.layer, 12) && !player[this.layer].timerActive) {
            layers[this.layer].clickables[11].onClick()
        }
    },
    clickables: {
        11: {
            title: "Click me!",
            display() {
                if (!player[this.layer].timerActive) return "Click to start the precision microgame!"
                
                let t = player[this.layer].timer
                let start = player[this.layer].targetStart || 1.5
                let end = player[this.layer].targetEnd || 2.5
                
                if (t < start) return "Not yet... (" + format(t) + "s /  " + format(start) + "s)"
                if (t >= start && t <= end) return "Yup! You're ready! (" + format(t) + "s - Click before " + format(end) + "s!)"
                return "Too late! (" + format(t) + "s)"
            },
            unlocked() { return true },
            canClick() { return true },
            onClick() {
                let t = player[this.layer].timer
                let start = player[this.layer].targetStart || 1.5
                let end = player[this.layer].targetEnd || 2.5
                
                if (!player[this.layer].timerActive) {
                    let randomStart = Math.random() * 1.5 + 0.5
                    let randomWindow = Math.random() * 0.6 + 0.6
                    
                    player[this.layer].targetStart = randomStart
                    player[this.layer].targetEnd = randomStart + randomWindow
                    player[this.layer].timer = 0
                    player[this.layer].timerActive = true
                } 
                else {
                    if (t >= start && t <= end) {
                        let baseAmount = hasUpgrade(this.layer, 11) ? new Decimal(2) : new Decimal(1)
                        if (hasUpgrade(this.layer, 13)) {
                            let currentPoints = player[this.layer].points
                            baseAmount = baseAmount.add(currentPoints.pow(2))
                        }
                        player[this.layer].points = player[this.layer].points.add(baseAmount)
                    }
                    player[this.layer].timer = 0
                    player[this.layer].timerActive = false
                }
            },
            style() {
                let t = player[this.layer].timer
                let start = player[this.layer].targetStart || 1.5
                let end = player[this.layer].targetEnd || 2.5
                
                if (player[this.layer].timerActive && t >= start && t <= end) {
                    return {
                        "background-color": "#10b981",
                        "color": "#ffffff",
                        "border": "2px solid #ffffff",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 20px #10b981",
                        "cursor": "pointer",
                        "padding": "15px"
                    }
                }
                else if (player[this.layer].timerActive) {
                    return {
                        "background-color": "#b45309",
                        "color": "#ffffff",
                        "border": "2px solid #f59e0b",
                        "border-radius": "8px",
                        "cursor": "pointer",
                        "padding": "15px"
                    }
                }
                else {
                    return {
                        "background-color": "#064e3b",
                        "color": "#a7f3d0",
                        "border": "2px solid #047857",
                        "border-radius": "8px",
                        "cursor": "pointer",
                        "padding": "15px"
                    }
                }
            }
        }
    },
    passiveGeneration() {
        if (hasMilestone("8", 0) && player[this.layer].autoGreen) return 10
        return 0
    },
    autoUpgrade() {
        return hasMilestone("8", 0) && player[this.layer].autoGreen;
    },
    upgrades: {
        11: {
            title: "Gotta be precise!",
            description: "You now get 2 green per microgame completion instead of 1.",
            cost: new Decimal(25),
            unlocked() { return true },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {
                player[this.layer].points = player[this.layer].points.sub(this.cost)
            },
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        "background-color": "#064e3b", 
                        "color": "#94a3b8",
                        "border": "2px solid #047857",
                        "border-radius": "8px",
                        "cursor": "default",
                        "box-shadow": "none"
                    }
                }
                else if (player[this.layer].points.gte(this.cost)) {
                    return {
                        "background-color": "#10b981",
                        "color": "#ffffff",
                        "border": "2px solid #a7f3d0",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 15px #10b981",
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
            title: "The automation of all time",
            description: "The microgame is now automatic. Enjoy!",
            cost: new Decimal(50),
            unlocked() { return true },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {
                player[this.layer].points = player[this.layer].points.sub(this.cost)
            },
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        "background-color": "#064e3b", 
                        "color": "#94a3b8",
                        "border": "2px solid #047857",
                        "border-radius": "8px",
                        "cursor": "default",
                        "box-shadow": "none"
                    }
                }
                else if (player[this.layer].points.gte(this.cost)) {
                    return {
                        "background-color": "#10b981",
                        "color": "#ffffff",
                        "border": "2px solid #a7f3d0",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 15px #10b981",
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
            title: "what is this peak",
            description: "The green you gain from the microgame is equal to green^2. Woah.",
            cost: new Decimal(75),
            unlocked() { return true },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {
                player[this.layer].points = player[this.layer].points.sub(this.cost)
            },
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        "background-color": "#064e3b", 
                        "color": "#94a3b8",
                        "border": "2px solid #047857",
                        "border-radius": "8px",
                        "cursor": "default",
                        "box-shadow": "none"
                    }
                }
                else if (player[this.layer].points.gte(this.cost)) {
                    return {
                        "background-color": "#10b981",
                        "color": "#ffffff",
                        "border": "2px solid #a7f3d0",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 15px #10b981",
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
        14: {
            title: "I forgot about this",
            description: "The microgame is completed every tick. Also, ^1.35 paint.",
            cost: new Decimal("1e1000000"),
            unlocked() { return hasUpgrade(this.layer, 13) },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {
                player[this.layer].points = player[this.layer].points.sub(this.cost)
            },
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        "background-color": "#064e3b", 
                        "color": "#94a3b8",
                        "border": "2px solid #047857",
                        "border-radius": "8px",
                        "cursor": "default",
                        "box-shadow": "none"
                    }
                }
                else if (player[this.layer].points.gte(this.cost)) {
                    return {
                        "background-color": "#10b981",
                        "color": "#ffffff",
                        "border": "2px solid #a7f3d0",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 15px #10b981",
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
    tabFormat: [
        "main-display",
        "resource-display",
        "blank",
        ["display-text", "<h3>Auto Green</h3>"],
        ["toggle", ["4", "autoGreen"]],
        "blank",
        "clickables", 
        "blank",
        "upgrades"
    ],
    layerShown() { return hasUpgrade("p", 31) }
})

addLayer("5", {
    name: "5",
    symbol: "5",
    position: 1,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        autoPurple: false,
    }},
    color: "#8b5cf6",
    requires: new Decimal(1e107),
    resource: "purple",
    baseResource: "paint",
    baseAmount() { return player.points },
    type: "normal",
    exponent: 0.4,
    row: 2,
    buyables: {
        11: {
            title: "infinity!",
            cost(x) { 
                return new Decimal(1).times(Decimal.pow(1.02, x))
            },
            display() { 
                return "Level: " + formatWhole(getBuyableAmount(this.layer, this.id)) + 
                       "\neffect: x" + format(this.effect()) + " paint" +
                       "\ncost: " + format(this.cost()) + " " + layers[this.layer].resource
            },
            canAfford() { 
                return player[this.layer].points.gte(this.cost()) 
            },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) { 
                return Decimal.pow(1.01, x)
            },
            unlocked() { return true },
            style() {
                if (this.canAfford()) {
                    return {
                        "background-color": "#8b5cf6",
                        "color": "#ffffff",
                        "border": "2px solid #ddd6fe",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 12px #8b5cf6",
                        "cursor": "pointer",
                        "padding": "10px"
                    }
                } else {
                    return {
                        "background-color": "#27272a",
                        "color": "#a78bfa",
                        "border": "2px solid #4b5563",
                        "border-radius": "8px",
                        "cursor": "not-allowed",
                        "padding": "10px"
                    }
                }
            }
        }
    },
    update(diff) {
        if (!player[this.layer] || !layers[this.layer].buyables[11]) return
        let points = player[this.layer].points
        if (points.lt(1)) return
        let currentAmt = getBuyableAmount(this.layer, 11)
        let maxAffordable = points.ln().div(new Decimal(1.02).ln()).floor()
        if (maxAffordable.gt(currentAmt)) {
            let costOfMax = new Decimal(1).times(Decimal.pow(1.02, maxAffordable))
            if (points.gte(costOfMax)) {
                player[this.layer].points = player[this.layer].points.sub(costOfMax)
                setBuyableAmount(this.layer, 11, maxAffordable.add(1))
            }
        }
    },
    tabFormat: [
        "main-display",
        "resource-display",
        ["display-text", "<h3>Auto Purple</h3>"],
        ["toggle", ["5", "autoPurple"]],
        "blank",
        "buyables",
        "blank",
        "upgrades"
    ],
    passiveGeneration() {
        return passive = 1
    },
    layerShown() { return hasUpgrade("p", 32) }
})

addLayer("6", {
    name: "6",
    symbol: "6",
    position: 2,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        autoPink: false,
    }},
    color: "#ec4899",
    requires: new Decimal(4.3e43),
    resource: "pink",
    baseResource: "paint",
    baseAmount() { return player.points },
    type: "normal",
    exponent: 0.04,
    row: 2,
    canReset() { return false },
    challenges: {
        11: {
            name: "The Power of Zero",
            challengeDescription: "^0.01 paint.",
            goalDescription: "Reach 1.065 paint/s.",
            canComplete() { 
                return getPointGen().gte(1.065) 
            },
            unlocked() { 
                return true 
            },
            rewardEffect() {
                let paths = ["21","22","23","31","32","33","41","42","43"]
                let count = player.p.upgrades.filter(id => paths.includes(id.toString())).length
                return Decimal.pow(10, count)
            },
            rewardDisplay() { 
                return "x" + format(this.rewardEffect()) 
            },
            rewardDescription: "Multiply paint based on 10^[paths].",
            style() {
                if (hasChallenge(this.layer, this.id)) {
                    return {
                        "background-color": "#4d0519",
                        "color": "#94a3b8",
                        "border": "2px solid #9d174d",
                        "border-radius": "8px"
                    }
                }
                else if (player.challenge === this.layer + "_" + this.id || (player.activeChallenges && player.activeChallenges.includes(this.layer + "_" + this.id))) {
                    return {
                        "background-color": "#ec4899",
                        "color": "#ffffff",
                        "border": "2px solid #ffffff",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 15px #ec4899"
                    }
                }
                else {
                    return {
                        "background-color": "#27272a",
                        "color": "#f472b6",
                        "border": "2px solid #4b5563",
                        "border-radius": "8px"
                    }
                }
            }
        }
    },
    tabFormat: [
        "main-display",
        "resource-display",
        ["display-text", "<h3>Auto Pink</h3>"],
        ["toggle", ["6", "autoPink"]],
        "blank",
        "challenges", 
        "blank",
        "upgrades"
    ],
    passiveGeneration() {
        if (hasMilestone("8", 0) && player[this.layer].autoPink) return 0.0001
        return 0
    },
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
    requires: new Decimal("1e1e9"),
    resource: "paper",
    baseResource: "paint",
    baseAmount() { return player.points },
    type: "static",
    exponent: 1.5,
    row: 3,
    upgrades: {
        11: {
            title: "Simple boosts...",
            description: "+0.8 paint/s. Why not.",
            cost: new Decimal(1),
            unlocked() { return true },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {
                player[this.layer].points = player[this.layer].points.sub(this.cost)
            },
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        "background-color": "#1f2937", 
                        "color": "#94a3b8",
                        "border": "2px solid #374151",
                        "border-radius": "8px",
                        "cursor": "default",
                        "box-shadow": "none"
                    }
                }
                else if (player[this.layer].points.gte(this.cost)) {
                    return {
                        "background-color": "#f3f4f6", 
                        "color": "#1f2937",
                        "border": "2px solid #ffffff",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 15px #ffffff",
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
            title: "Who let the hardcap break?",
            description: "Hardcap is now gone.",
            cost: new Decimal(2),
            unlocked() { return true },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {
                player[this.layer].points = player[this.layer].points.sub(this.cost)
            },
            style() {
                if (hasUpgrade(this.layer, this.id)) {
                    return {
                        "background-color": "#1f2937", 
                        "color": "#94a3b8",
                        "border": "2px solid #374151",
                        "border-radius": "8px",
                        "cursor": "default",
                        "box-shadow": "none"
                    }
                }
                else if (player[this.layer].points.gte(this.cost)) {
                    return {
                        "background-color": "#f3f4f6", 
                        "color": "#1f2937",
                        "border": "2px solid #ffffff",
                        "border-radius": "8px",
                        "box-shadow": "0px 0px 15px #ffffff",
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
    requires: new Decimal("1e145730000"),
    resource: "fame",
    baseResource: "paint",
    baseAmount() { return player.points },
    type: "normal",
    exponent: 0.0005,
    row: 3,
    milestones: {
        0: {
            requirementDescription: "1 fame",
            effectDescription: "The first 6 paths gain automation.",
            toggles: [
                ["1", "autoRed"],
                ["2", "autoBlue"],
                ["3", "autoGold"],
                ["4", "autoGreen"],
                ["5", "autoPurple"],
                ["6", "autoPink"]
            ],
            done() { 
                return player[this.layer].points.gte(1) 
            }
        },
        1: {
            requirementDescription: "2 fame",
            effectDescription: "You auto-gain fame.",
            done() { 
                return player[this.layer].points.gte(2) 
            }
        },
        2: {
            requirementDescription: "3 fame",
            effectDescription: "When hardcap? ^2 paint.",
            done() { 
                return player[this.layer].points.gte(3) 
            }
        }
    },
    tabFormat: [
        "main-display",
        function() { return hasMilestone("8", 1) ? "blank" : "prestige-button" },
        "resource-display",
        "blank",
        "clickables",
        "blank",
        "milestones", 
        "blank",
        "upgrades"
    ],
    passiveGeneration() {
        if (hasMilestone("8", 1)) return 0.05
        return 0
    },
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
    requires: new Decimal("1e1e10"),
    resource: "paintbrushes",
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