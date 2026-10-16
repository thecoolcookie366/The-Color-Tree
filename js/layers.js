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
            title: "#ef4444",
            description: "The red looks powerful.",
            cost: new Decimal(4),
            unlocked() { return hasUpgrade(this.layer, 13) },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost)) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        },
        22: {
            title: "#3b82f6",
            description: "The blue feels... cold. For no reason, really.",
            cost: new Decimal(5),
            unlocked() { return hasUpgrade(this.layer, 13) },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost)) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        },
        23: {
            title: "#f59e0b",
            description: "This golden color is perfect.",
            cost: new Decimal(3),
            unlocked() { return hasUpgrade(this.layer, 13) },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost)) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        },
        31: {
            title: "#10b981",
            description: "You better be precise for this. The layer hiding behind this color is very hard.",
            cost: new Decimal(8),
            unlocked() { return hasUpgrade("p", 21) && hasUpgrade("p", 22) && hasUpgrade("p", 23) },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost)) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        },
        32: {
            title: "#8b5cf6",
            description: "The purple is so mystical... or is it?",
            cost: new Decimal(9),
            unlocked() { return hasUpgrade("p", 21) && hasUpgrade("p", 22) && hasUpgrade("p", 23) },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost)) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        },
        33: {
            title: "#ec4899",
            description: "How do I describe this color... oh.",
            cost: new Decimal(7),
            unlocked() { return hasUpgrade("p", 21) && hasUpgrade("p", 22) && hasUpgrade("p", 23) },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost)) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        },
        41: {
            title: "#14b8a6",
            description: "This upgrade is very tasty. Wait, what?",
            cost: new Decimal(2515),
            unlocked() { return hasUpgrade("p", 31) && hasUpgrade("p", 32) && hasUpgrade("p", 33) },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost)) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        },
        42: {
            title: "#f97316",
            description: "Spoiler alert: this is orange :D",
            cost: new Decimal(1265),
            unlocked() { return hasUpgrade("p", 31) && hasUpgrade("p", 32) && hasUpgrade("p", 33) },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost)) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        },
        43: {
            title: "#6366f1",
            description: "Blurple :P",
            cost: new Decimal(349425),
            unlocked() { return hasUpgrade("p", 31) && hasUpgrade("p", 32) && hasUpgrade("p", 33) },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {},
            style() {
                if (hasUpgrade(this.layer, this.id)) return { "background-color": "#9d174d", "color": "#94a3b8", "border": "2px solid #4c0519", "border-radius": "8px" }
                else if (player[this.layer].points.gte(this.cost)) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "border-radius": "8px", "box-shadow": "0px 0px 12px #ffffff" }
                else return { "background-color": "#374151", "color": "#9ca3af", "border": "2px solid #4b5563", "border-radius": "8px" }
            }
        },
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
    nodeStyle() {
        if (hasChallenge("9", 13)) {
            return {
                "background": "linear-gradient(135deg, #fef08a 0%, #eab308 50%, #ca8a04 100%)",
                "color": "#451a03",
                "border": "3px solid #facc15",
                "box-shadow": "0px 0px 20px #eab308, inset 0px 0px 10px #fef08a",
                "font-weight": "bold"
            }
        }
        return {} 
    },
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
            cost: new Decimal(5),
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
            cost: new Decimal(25),
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
        21: {
            title: "That took a turn.",
            description: "^6.666... paint.",
            cost: new Decimal("1e1e13"),
            unlocked() { 
                return hasChallenge('9', 13) 
            },
            canAfford() { return player[this.layer].points.gte(this.cost) && hasChallenge('9', 13)},
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
        if (hasMilestone("8", 0) && !inChallenge('9', 12) && !inChallenge('9', 21)){
            return 100
        }
        return 0
    },
    autoUpgrade() {
        return (hasMilestone("8", 0) && !inChallenge('9', 12) && !inChallenge('9', 21))
    },
    tabFormat: [
        "main-display",
        function() { return (hasMilestone("8", 0) && !inChallenge('9', 12) && !inChallenge('9', 21)) ? "blank" : "prestige-button" },
        "resource-display",
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
    nodeStyle() {
        if (hasChallenge("9", 13)) {
            return {
                "background": "linear-gradient(135deg, #fef08a 0%, #eab308 50%, #ca8a04 100%)",
                "color": "#451a03",
                "border": "3px solid #facc15",
                "box-shadow": "0px 0px 20px #eab308, inset 0px 0px 10px #fef08a",
                "font-weight": "bold"
            }
        }
        return {} 
    },
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
        21: {
            title: "That's increments of 2! Oh hey there.",
            description: "x2,468 paint. Just kidding, the hardcap is removed<sup>2</sup>.",
            cost: new Decimal("1e1e14"),
            unlocked() { 
                return hasChallenge('9', 13) 
            },
            canAfford() { return player[this.layer].points.gte(this.cost) && hasChallenge('9', 13)},
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
        if (hasMilestone("8", 0) && !inChallenge('9', 12) && !inChallenge('9', 21)) {
            return 1
        }
        return 0
    },
    autoUpgrade() {
        return (hasMilestone("8", 0) && !inChallenge('9', 12) && !inChallenge('9', 21))
    },
    tabFormat: [
        "main-display",
        function() { return (hasMilestone("8", 0) && !inChallenge('9', 12) && !inChallenge('9', 21)) ? "blank" : "prestige-button" },
        "resource-display",
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
    nodeStyle() {
        if (hasChallenge("9", 13)) {
            return {
                "background": "linear-gradient(135deg, #fef08a 0%, #eab308 50%, #ca8a04 100%)",
                "color": "#451a03",
                "border": "3px solid #facc15",
                "box-shadow": "0px 0px 20px #eab308, inset 0px 0px 10px #fef08a",
                "font-weight": "bold"
            }
        }
        return {} 
    },
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
        21: {
            title: "Did you really expect tetration??",
            description: "^16.18 paint.",
            cost: new Decimal("1e1e17"),
            unlocked() { 
                return hasChallenge('9', 13) 
            },
            canAfford() { return player[this.layer].points.gte(this.cost) && hasChallenge('9', 13)},
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
        if (hasMilestone("8", 0) && !inChallenge('9', 12) && !inChallenge('9', 21)) {
            return 1
        }
        return 0
    },
    autoUpgrade() {
        return (hasMilestone("8", 0) && !inChallenge('9', 12) && !inChallenge('9', 21))
    },
    tabFormat: [
        "main-display",
        function() { return (hasMilestone("8", 0) && !inChallenge('9', 12) && !inChallenge('9', 21)) ? "blank" : "prestige-button" },
        "resource-display",
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
    nodeStyle() {
        if (hasChallenge("9", 23)) {
            return {
                "background": "linear-gradient(135deg, #fef08a 0%, #eab308 50%, #ca8a04 100%)",
                "color": "#451a03",
                "border": "3px solid #facc15",
                "box-shadow": "0px 0px 20px #eab308, inset 0px 0px 10px #fef08a",
                "font-weight": "bold"
            }
        }
        return {} 
    },
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
                baseAmount = baseAmount.add(player[this.layer].points.pow(2).add(1))
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
            let maxTime = inChallenge('9', 21) ? 35 : 5
            if (player[this.layer].timer > maxTime) {
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
                    if (inChallenge('9', 21)) {
                        randomStart = Math.random() * 20 + 5
                        randomWindow = Math.random() * 3 + 2
                    }
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
                            baseAmount = baseAmount.add(currentPoints.pow(2).add(1))
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
        if (hasMilestone("8", 0) && !inChallenge('9', 12) && !inChallenge('9', 21)) return 10
        return 0
    },
    autoUpgrade() {
        return (hasMilestone("8", 0) && !inChallenge('9', 12) && !inChallenge('9', 21))
    },
    upgrades: {
        11: {
            title: "Gotta be precise!",
            description: "You now get 2 green per microgame completion instead of 1.",
            cost: new Decimal(2),
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
            cost: new Decimal(4),
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
            cost: new Decimal(6),
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
    nodeStyle() {
        if (hasChallenge("9", 23)) {
            return {
                "background": "linear-gradient(135deg, #fef08a 0%, #eab308 50%, #ca8a04 100%)",
                "color": "#451a03",
                "border": "3px solid #facc15",
                "box-shadow": "0px 0px 20px #eab308, inset 0px 0px 10px #fef08a",
                "font-weight": "bold"
            }
        }
        return {} 
    },
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
    nodeStyle() {
        if (hasChallenge("9", 23)) {
            return {
                "background": "linear-gradient(135deg, #fef08a 0%, #eab308 50%, #ca8a04 100%)",
                "color": "#451a03",
                "border": "3px solid #facc15",
                "box-shadow": "0px 0px 20px #eab308, inset 0px 0px 10px #fef08a",
                "font-weight": "bold"
            }
        }
        return {} 
    },
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
        "blank",
        "challenges", 
        "blank",
        "upgrades"
    ],
    passiveGeneration() {
        if (hasMilestone("8", 0) && !inChallenge('9', 12) && !inChallenge('9', 21)) return 0.0001
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
    canBuyMax() {return hasChallenge('9',21)},
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
            effectDescription: "The first 6 colors gain automation.",
            unlocked() {return !inChallenge('9', 21)},
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
    requires: new Decimal("2"),
    resource: "paintbrushes",
    baseResource: "paper",
    baseAmount() { return player[7].points },
    type: "static",
    exponent: 1.5,
    row: 3,
    upgrades: {
        11: {
            title: "The real fun begins.",
            description: "Unlock Paintings.",
            cost: new Decimal(1),
            unlocked() { return true },
            canAfford() { return player[this.layer].points.gte(this.cost) },
            pay() {
                player[this.layer].points = player[this.layer].points.sub(this.cost)
            },
            style() {
                if (hasUpgrade('9', 11)) { 
                    return {
                        "background-color": "#18450a", 
                        "color": "#9fb894",
                        "border": "2px solid #1d7f1d",
                        "border-radius": "8px",
                        "cursor": "default",
                        "box-shadow": "none"
                    }
                }
                else {
                    return {
                        "background-color": "#5c1212", 
                        "color": "#e09494",
                        "border": "2px solid #7f1d1d",
                        "border-radius": "8px",
                        "cursor": "default",
                        "box-shadow": "none"
                    }
                }
            }
        },
    },
    challenges: {
        11: {
            name: "Painting 1",
            challengeDescription: "^0.01 paint, then -0.99 paint.",
            goalDescription: "Get 1 red or 0.2 paint.",
            rewardDescription: "sqrt(red) boosts paint.",
            unlocked() { return hasUpgrade('9', 11) },
            canComplete() { return player["1"].points.gte(1) || player.points.gte(0.2)},
            style() {
                if (hasChallenge(this.layer, this.id)) return { "background-color": "#450a0a", "color": "#fca5a5", "border": "2px solid #dc2626" }
                if (player.challenge === this.layer + "_" + this.id) return { "background-color": "#dc2626", "color": "#ffffff", "border": "2px solid #ffffff", "box-shadow": "0px 0px 15px #dc2626" }
                return { "background-color": "#27272a", "color": "#ef4444", "border": "2px solid #4b5563" }
            }
        },
        12: {
            name: "Painting 2",
            challengeDescription: "Paint rapidly goes down, stopping at 1. You don't have automation.",
            goalDescription: "Get 10 blue.",
            rewardDescription: "log(blue) boosts paint.",
            unlocked() { return hasChallenge('9', 11) },
            canComplete() { return player["2"].points.gte(10) },
            onEnter() {
                player.points = new Decimal(60)
            },
            style() {
                if (hasChallenge(this.layer, this.id)) return { "background-color": "#172554", "color": "#93c5fd", "border": "2px solid #2563eb" }
                if (player.challenge === this.layer + "_" + this.id) return { "background-color": "#2563eb", "color": "#ffffff", "border": "2px solid #ffffff", "box-shadow": "0px 0px 15px #2563eb" }
                return { "background-color": "#27272a", "color": "#3b82f6", "border": "2px solid #4b5563" }
            }
        },
        13: {
            name: "Painting 3",
            challengeDescription: "The debuff is hidden.",
            goalDescription: "Get 100,000 gold.",
            rewardDescription: "The first 3 colors are mastered, unlocking new upgrades and buyables. They becomes golden, and log(log(paint)) boosts paint.",
            unlocked() { return hasChallenge('9', 12) },
            canComplete() { return player["3"].points.gte(1e5) },
            style() {
                if (hasChallenge(this.layer, this.id)) return { "background-color": "#451a03", "color": "#fef08a", "border": "2px solid #d97706" }
                if (player.challenge === this.layer + "_" + this.id) return { "background-color": "#d97706", "color": "#ffffff", "border": "2px solid #ffffff", "box-shadow": "0px 0px 15px #d97706" }
                return { "background-color": "#27272a", "color": "#f59e0b", "border": "2px solid #4b5563" }
            }
        },
        21: {
            name: "Painting 4",
            challengeDescription: "The green cooldown is massively increased, and you don't have any automation.",
            goalDescription: "Reach 10 green.",
            rewardDescription: "You can buy max paper now.",
            unlocked() { return (hasChallenge('9', 13) && player.points.gte("1e1e300")) || hasChallenge('9', 21) || inChallenge('9', 21)},
            canComplete() { return player["4"].points.gte(10) },
            style() {
                if (hasChallenge(this.layer, this.id)) return { "background-color": "#064e3b", "color": "#a7f3d0", "border": "2px solid #10b981" }
                if (player.challenge === this.layer + "_" + this.id) return { "background-color": "#10b981", "color": "#ffffff", "border": "2px solid #ffffff", "box-shadow": "0px 0px 15px #10b981" }
                return { "background-color": "#27272a", "color": "#10b981", "border": "2px solid #4b5563" }
            }
        },
        22: {
            name: "Painting 5",
            challengeDescription: "Flip a coin! ...figure this out yourself :)",
            goalDescription: "Reach Infinity purple.",
            rewardDescription: "soon.",
            unlocked() { return hasChallenge('9', 21) },
            canComplete() { return player["5"].points.gte("(e^1e30)33") },
            style() {
                if (hasChallenge(this.layer, this.id)) return { "background-color": "#2e1065", "color": "#ddd6fe", "border": "2px solid #8b5cf6" }
                if (player.challenge === this.layer + "_" + this.id) return { "background-color": "#8b5cf6", "color": "#ffffff", "border": "2px solid #ffffff", "box-shadow": "0px 0px 15px #8b5cf6" }
                return { "background-color": "#27272a", "color": "#a78bfa", "border": "2px solid #4b5563" }
            },
        },
    },
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