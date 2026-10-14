/* 
        22: {
            name: "Painting 5: Amethyst Szechuan",
            challengeDescription: "Heavy texturing limits your palette. The Purple buyable multiplier is inverted and scales backwards.",
            goalDescription: "Reach 1 Heavy Texture Point (Layer 5).",
            unlocked() { return hasChallenge('9', 14) },
            canComplete() { return player["5"] && player["5"].points.gte(1) },
            style() {
                if (hasChallenge(this.layer, this.id)) return { "background-color": "#2e1065", "color": "#ddd6fe", "border": "2px solid #8b5cf6" }
                if (player.challenge === this.layer + "_" + this.id) return { "background-color": "#8b5cf6", "color": "#ffffff", "border": "2px solid #ffffff", "box-shadow": "0px 0px 15px #8b5cf6" }
                return { "background-color": "#27272a", "color": "#a78bfa", "border": "2px solid #4b5563" }
            }
        },

        23: {
            name: "Painting 6: Magenta Splash",
            challengeDescription: "Abstract thoughts flood your UI. A massive blur effect covers parts of your operational canvas.",
            goalDescription: "Reach 1 Abstract Shape (Layer 6).",
            unlocked() { return hasChallenge('9', 21) },
            canComplete() { return player["6"] && player["6"].points.gte(1) },
            style() {
                if (hasChallenge(this.layer, this.id)) return { "background-color": "#4d0519", "color": "#fbcfe8", "border": "2px solid #ec4899" }
                if (player.challenge === this.layer + "_" + this.id) return { "background-color": "#ec4899", "color": "#ffffff", "border": "2px solid #ffffff", "box-shadow": "0px 0px 15px #ec4899" }
                return { "background-color": "#27272a", "color": "#f472b6", "border": "2px solid #4b5563" }
            }
        },

        31: {
            name: "Painting 7: Titanium Void",
            challengeDescription: "A flat foundation absorbs all other mechanics. Disables all passive generation options across the board.",
            goalDescription: "Reach 1 Paper Point (Layer 7).",
            unlocked() { return hasChallenge('9', 22) },
            canComplete() { return player["7"] && player["7"].points.gte(1) },
            style() {
                if (hasChallenge(this.layer, this.id)) return { "background-color": "#1f2937", "color": "#f3f4f6", "border": "2px solid #9ca3af" }
                if (player.challenge === this.layer + "_" + this.id) return { "background-color": "#f3f4f6", "color": "#1f2937", "border": "2px solid #ffffff", "box-shadow": "0px 0px 15px #ffffff" }
                return { "background-color": "#27272a", "color": "#e5e7eb", "border": "2px solid #4b5563" }
            }
        },

        32: {
            name: "Painting 8: Golden Gallery",
            challengeDescription: "The weight of pure exhibition prestige. Fame accumulation is completely halted until you reach the target point.",
            goalDescription: "Reach 1 Fame (Layer 8).",
            unlocked() { return hasChallenge('9', 23) },
            canComplete() { return player["8"] && player["8"].points.gte(1) },
            style() {
                if (hasChallenge(this.layer, this.id)) return { "background-color": "#431407", "color": "#fdba74", "border": "2px solid #ea580c" }
                if (player.challenge === this.layer + "_" + this.id) return { "background-color": "#ea580c", "color": "#ffffff", "border": "2px solid #ffffff", "box-shadow": "0px 0px 15px #ea580c" }
                return { "background-color": "#27272a", "color": "#f97316", "border": "2px solid #4b5563" }
            }
        },

        33: {
            name: "Painting 9: Secret Masterpiece",
            challengeDescription: "The absolute endgame synthesis. Every single restriction from the previous 8 paintings triggers simultaneously.",
            goalDescription: "Reach 1 Secret Unobtainium (Layer a).",
            unlocked() { return hasChallenge('9', 24) },
            canComplete() { return player["a"] && player["a"].points.gte(1) },
            style() {
                if (hasChallenge(this.layer, this.id)) return { "background-color": "#111827", "color": "#9ca3af", "border": "2px solid #6b7280" }
                if (player.challenge === this.layer + "_" + this.id) return { "background-color": "#617879", "color": "#ffffff", "border": "2px solid #ffffff", "box-shadow": "0px 0px 15px #617879" }
                return { "background-color": "#27272a", "color": "#9ca3af", "border": "2px solid #4b5563" }
            }
        }
*/