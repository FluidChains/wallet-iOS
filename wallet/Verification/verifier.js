var Verifier = function(e) {
    "use strict";
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function r() {
        throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
    }

    function n(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    function i(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }

    function o(e) {
        return e && e.default || e
    }
    var a = i(function(e) {
        var t = function(e) {
            var t, r = Object.prototype,
                n = r.hasOwnProperty,
                i = "function" == typeof Symbol ? Symbol : {},
                o = i.iterator || "@@iterator",
                a = i.asyncIterator || "@@asyncIterator",
                s = i.toStringTag || "@@toStringTag";

            function u(e, t, r, n) {
                var i = t && t.prototype instanceof b ? t : b,
                    o = Object.create(i.prototype),
                    a = new O(n || []);
                return o._invoke = function(e, t, r) {
                    var n = f;
                    return function(i, o) {
                        if (n === d) throw new Error("Generator is already running");
                        if (n === l) {
                            if ("throw" === i) throw o;
                            return P()
                        }
                        for (r.method = i, r.arg = o;;) {
                            var a = r.delegate;
                            if (a) {
                                var s = E(a, r);
                                if (s) {
                                    if (s === p) continue;
                                    return s
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (n === f) throw n = l, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = d;
                            var u = c(e, t, r);
                            if ("normal" === u.type) {
                                if (n = r.done ? l : h, u.arg === p) continue;
                                return {
                                    value: u.arg,
                                    done: r.done
                                }
                            }
                            "throw" === u.type && (n = l, r.method = "throw", r.arg = u.arg)
                        }
                    }
                }(e, r, a), o
            }

            function c(e, t, r) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, r)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            e.wrap = u;
            var f = "suspendedStart",
                h = "suspendedYield",
                d = "executing",
                l = "completed",
                p = {};

            function b() {}

            function m() {}

            function g() {}
            var v = {};
            v[o] = function() {
                return this
            };
            var y = Object.getPrototypeOf,
                w = y && y(y(T([])));
            w && w !== r && n.call(w, o) && (v = w);
            var _ = g.prototype = b.prototype = Object.create(v);

            function S(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e)
                    }
                })
            }

            function k(e) {
                var t;
                this._invoke = function(r, i) {
                    function o() {
                        return new Promise(function(t, o) {
                            ! function t(r, i, o, a) {
                                var s = c(e[r], e, i);
                                if ("throw" !== s.type) {
                                    var u = s.arg,
                                        f = u.value;
                                    return f && "object" == typeof f && n.call(f, "__await") ? Promise.resolve(f.__await).then(function(e) {
                                        t("next", e, o, a)
                                    }, function(e) {
                                        t("throw", e, o, a)
                                    }) : Promise.resolve(f).then(function(e) {
                                        u.value = e, o(u)
                                    }, function(e) {
                                        return t("throw", e, o, a)
                                    })
                                }
                                a(s.arg)
                            }(r, i, t, o)
                        })
                    }
                    return t = t ? t.then(o, o) : o()
                }
            }

            function E(e, r) {
                var n = e.iterator[r.method];
                if (n === t) {
                    if (r.delegate = null, "throw" === r.method) {
                        if (e.iterator.return && (r.method = "return", r.arg = t, E(e, r), "throw" === r.method)) return p;
                        r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return p
                }
                var i = c(n, e.iterator, r.arg);
                if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, p;
                var o = i.arg;
                return o ? o.done ? (r[e.resultName] = o.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, p) : o : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, p)
            }

            function I(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function x(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function O(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(I, this), this.reset(!0)
            }

            function T(e) {
                if (e) {
                    var r = e[o];
                    if (r) return r.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var i = -1,
                            a = function r() {
                                for (; ++i < e.length;)
                                    if (n.call(e, i)) return r.value = e[i], r.done = !1, r;
                                return r.value = t, r.done = !0, r
                            };
                        return a.next = a
                    }
                }
                return {
                    next: P
                }
            }

            function P() {
                return {
                    value: t,
                    done: !0
                }
            }
            return m.prototype = _.constructor = g, g.constructor = m, g[s] = m.displayName = "GeneratorFunction", e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, s in e || (e[s] = "GeneratorFunction")), e.prototype = Object.create(_), e
            }, e.awrap = function(e) {
                return {
                    __await: e
                }
            }, S(k.prototype), k.prototype[a] = function() {
                return this
            }, e.AsyncIterator = k, e.async = function(t, r, n, i) {
                var o = new k(u(t, r, n, i));
                return e.isGeneratorFunction(r) ? o : o.next().then(function(e) {
                    return e.done ? e.value : o.next()
                })
            }, S(_), _[s] = "Generator", _[o] = function() {
                return this
            }, _.toString = function() {
                return "[object Generator]"
            }, e.keys = function(e) {
                var t = [];
                for (var r in e) t.push(r);
                return t.reverse(),
                    function r() {
                        for (; t.length;) {
                            var n = t.pop();
                            if (n in e) return r.value = n, r.done = !1, r
                        }
                        return r.done = !0, r
                    }
            }, e.values = T, O.prototype = {
                constructor: O,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(x), !e)
                        for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var r = this;

                    function i(n, i) {
                        return s.type = "throw", s.arg = e, r.next = n, i && (r.method = "next", r.arg = t), !!i
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var a = this.tryEntries[o],
                            s = a.completion;
                        if ("root" === a.tryLoc) return i("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc"),
                                c = n.call(a, "finallyLoc");
                            if (u && c) {
                                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r];
                        if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break
                        }
                    }
                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                    var a = o ? o.completion : {};
                    return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), p
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var i = n.arg;
                                x(r)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, r, n) {
                    return this.delegate = {
                        iterator: T(e),
                        resultName: r,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = t), p
                }
            }, e
        }(e.exports);
        try {
            regeneratorRuntime = t
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(t)
        }
    });

    function s(e, t, r, n, i, o, a) {
        try {
            var s = e[o](a),
                u = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? t(u) : Promise.resolve(u).then(n, i)
    }
    var u = function(e) {
            return function() {
                var t = this,
                    r = arguments;
                return new Promise(function(n, i) {
                    var o = e.apply(t, r);

                    function a(e) {
                        s(o, n, i, a, u, "next", e)
                    }

                    function u(e) {
                        s(o, n, i, a, u, "throw", e)
                    }
                    a(void 0)
                })
            }
        },
        c = i(function(e) {
            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function r(n) {
                return "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? e.exports = r = function(e) {
                    return t(e)
                } : e.exports = r = function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                }, r(n)
            }
            e.exports = r
        });
    var f = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    };

    function h(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    var d = function(e, t, r) {
        return t && h(e.prototype, t), r && h(e, r), e
    };

    function l(e, t) {
        return "string" != typeof e ? (console.warn("Trying to test a non string variable"), !1) : 0 === e.indexOf(t)
    }
    var p = {
            blockCypherUrl: "https://staging.exos.to/sochain/",
            blockCypherTestUrl: "https://staging.exos.to/sochain/",
            chainSoUrl: "https://certs-test.exos.to/api/sochain/some-id",
            chainSoTestUrl: "https://staging.exos.to/sochain/",
            etherScanMainUrl: "https://api.etherscan.io/api?module=proxy",
            etherScanRopstenUrl: "https://api-ropsten.etherscan.io/api?module=proxy"
        },
        b = {
            V1_1: "1.1",
            V1_2: "1.2",
            V2_0: "2.0"
        };
    var m, g, v = function(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        },
        y = (v(m = {}, "formatValidation", {
            label: "Format validation",
            labelPending: "Validating format",
            subSteps: []
        }), v(m, "hashComparison", {
            label: "Hash comparison",
            labelPending: "Comparing hash",
            subSteps: []
        }), v(m, "statusCheck", {
            label: "Status check",
            labelPending: "Checking record status",
            subSteps: []
        }), m),
        w = Object.freeze({
            final: "final",
            formatValidation: "formatValidation",
            hashComparison: "hashComparison",
            statusCheck: "statusCheck",
            language: y
        }),
        _ = {
            "en-US": {
                steps: {
                    formatValidationLabel: "Format validation",
                    formatValidationLabelPending: "Validating format",
                    hashComparisonLabel: "Hash comparison",
                    hashComparisonLabelPending: "Comparing hash",
                    statusCheckLabel: "Status check",
                    statusCheckLabelPending: "Checking record status"
                },
                subSteps: {
                    getTransactionIdLabel: "Get transaction ID",
                    getTransactionIdLabelPending: "Getting transaction ID",
                    computeLocalHashLabel: "Compute local hash",
                    computeLocalHashLabelPending: "Computing local hash",
                    fetchRemoteHashLabel: "Fetch remote hash",
                    fetchRemoteHashLabelPending: "Fetching remote hash",
                    getIssuerProfileLabel: "Get issuer profile",
                    getIssuerProfileLabelPending: "Getting issuer profile",
                    parseIssuerKeysLabel: "Parse issuer keys",
                    parseIssuerKeysLabelPending: "Parsing issuer keys",
                    compareHashesLabel: "Compare hashes",
                    compareHashesLabelPending: "Comparing hashes",
                    checkMerkleRootLabel: "Check Merkle Root",
                    checkMerkleRootLabelPending: "Checking Merkle Root",
                    checkReceiptLabel: "Check Receipt",
                    checkReceiptLabelPending: "Checking Receipt",
                    checkIssuerSignatureLabel: "Check Issuer Signature",
                    checkIssuerSignatureLabelPending: "Checking Issuer Signature",
                    checkAuthenticityLabel: "Check Authenticity",
                    checkAuthenticityLabelPending: "Checking Authenticity",
                    checkRevokedStatusLabel: "Check Revoked Status",
                    checkRevokedStatusLabelPending: "Checking Revoked Status",
                    checkExpiresDateLabel: "Check Expiration Date",
                    checkExpiresDateLabelPending: "Checking Expiration Date"
                },
                revocation: {
                    preReason: "Reason given:",
                    reason: "This certificate has been revoked by the issuer."
                },
                success: {
                    mocknet: {
                        label: "This Mocknet credential passed all checks",
                        description: "Mocknet credentials are used for test purposes only. They are not recorded on a blockchain, and they should not be considered verified Blockcerts."
                    },
                    blockchain: {
                        label: "Verified",
                        description: "This is a valid ${chain} certificate.",
                        linkText: "View transaction link"
                    }
                },
                errors: {
                    certificateNotValid: "This is not a valid certificate",
                    getChain: "Didn't recognize chain value",
                    getTransactionId: "Cannot verify this certificate without a transaction ID to compare against.",
                    getIssuerProfile: "Unable to get issuer profile",
                    getRevokedAssertions: "Unable to get revocation assertions",
                    lookForTxInvalidChain: "Invalid chain; does not map to known BlockchainExplorers.",
                    lookForTxInvalidAppConfig: "Invalid application configuration; check the CONFIG.MinimumBlockchainExplorers configuration value",
                    lookForTxCouldNotConfirm: "Could not confirm the transaction. No blockchain apis returned a response. This could be because of rate limiting.",
                    lookForTxDifferentAddresses: "Issuing addresses returned by the blockchain APIs were different",
                    lookForTxDifferentRemoteHashes: "Remote hashes returned by the blockchain APIs were different",
                    parseIssuerKeys: "Unable to parse JSON out of issuer identification data.",
                    getBlockcypherFetcher: "Unable to get remote hash",
                    getChainSoFetcher: "Unable to get remote hash",
                    parseBlockCypherResponse: "Number of transaction confirmations were less than the minimum required, according to Blockcypher API",
                    parseChainSoResponse: "Number of transaction confirmations were less than the minimum required, according to Chain.so API",
                    checkEtherScanConfirmations: "Number of transaction confirmations were less than the minimum required, according to EtherScan API",
                    couldNotConfirmTx: "Could not confirm the transaction",
                    failedJsonLdNormalization: "Failed JSON-LD normalization",
                    foundUnmappedFields: "Found unmapped fields during JSON-LD normalization",
                    ensureHashesEqual: "Computed hash does not match remote hash",
                    ensureIssuerSignature: "Issuer key does not match derived address.",
                    ensureMerkleRootEqual: "Merkle root does not match remote hash.",
                    ensureNotExpired: "This certificate has expired.",
                    getCaseInsensitiveKey: "Transaction occurred at time when issuing address was not considered valid.",
                    ensureValidReceipt: "The receipt is malformed. There was a problem navigating the merkle tree in the receipt.",
                    invalidMerkleReceipt: "Invalid Merkle Receipt. Proof hash did not match Merkle root",
                    isTransactionIdValid: "Cannot verify this certificate without a transaction ID to compare against."
                }
            },
            fr: {
                steps: {
                    formatValidationLabel: "Validation du format",
                    formatValidationLabelPending: "Validation du format",
                    hashComparisonLabel: "Comparaison du hash",
                    hashComparisonLabelPending: "Comparaison du hash",
                    statusCheckLabel: "Vérification du status",
                    statusCheckLabelPending: "Vérification du status"
                },
                subSteps: {
                    getTransactionIdLabel: "Obtention de l'identifiant de transaction",
                    getTransactionIdLabelPending: "Obtention de l'identifiant de transaction",
                    computeLocalHashLabel: "Calcul du hash local",
                    computeLocalHashLabelPending: "Calcul du hash local",
                    fetchRemoteHashLabel: "Récupération du hash distant",
                    fetchRemoteHashLabelPending: "Récupération du hash distant",
                    getIssuerProfileLabel: "Obtention du profil de l'émetteur",
                    getIssuerProfileLabelPending: "Obtention du profil de l'émetteur",
                    parseIssuerKeysLabel: "Traitement des clés de l'émetteur",
                    parseIssuerKeysLabelPending: "Traitement des clés de l'émetteur",
                    compareHashesLabel: "Comparaison des hash",
                    compareHashesLabelPending: "Comparaison des hashs",
                    checkMerkleRootLabel: "Vérification du Merkle Root",
                    checkMerkleRootLabelPending: "Vérification du  Merkle Root",
                    checkReceiptLabel: "Vérification du reçu",
                    checkReceiptLabelPending: "Vérification du reçu",
                    checkIssuerSignatureLabel: "Vérification de la signature de l'émetteur",
                    checkIssuerSignatureLabelPending: "Vérification de la signature de l'émetteur",
                    checkAuthenticityLabel: "Vérification de l'authenticité",
                    checkAuthenticityLabelPending: "Vérification de l'authenticité",
                    checkRevokedStatusLabel: "Vérification du status de révocation",
                    checkRevokedStatusLabelPending: "Vérification du status de révocation",
                    checkExpiresDateLabel: "Vérification de la date d'expiration",
                    checkExpiresDateLabelPending: "Vérification de la date d'expiration"
                },
                revocation: {
                    preReason: "Raison :",
                    reason: "Ce certificat a été révoqué par l'émetteur."
                },
                success: {
                    mocknet: {
                        label: "Cet enregistrement Mocknet a été vérifié",
                        description: "Le mode Mocknet est utilisé à des fins de tests uniquement. Ce Blockcert n'a pas été enregistré sur une blockchain, et en tant que tel ne peut pas être considéré un Blockcert valide."
                    },
                    blockchain: {
                        label: "Vérifié",
                        description: "Ceci est un certificat ${chain} valide.",
                        linkText: "Voir la transaction"
                    }
                },
                errors: {
                    certificateNotValid: "Certificat invalide",
                    getChain: "Valeur de chaine non reconnue",
                    getTransactionId: "Impossible de vérifier ce certificat sans un identifiant de transaction valide",
                    getIssuerProfile: "Profil de l'émetteur indisponible",
                    getRevokedAssertions: "Impossible d'obtenir les raisons de revocation",
                    lookForTxInvalidChain: "Chaine invalide : non liée à un BlockchainExplorers connu",
                    lookForTxInvalidAppConfig: "Configuration de l'application invalide : vérifiez la valeur de configuration de CONFIG.MinimumBlockchainExplorers",
                    lookForTxCouldNotConfirm: "Impossible de confirmer la transaction. Aucune API blockchain n'a répondu. Potentiellement dû à une limite de débit réseau.",
                    lookForTxDifferentAddresses: "Les adresses d'émission reçues de l'API blockchain ne concordent pas",
                    lookForTxDifferentRemoteHashes: "Les hashs distants reçus de l'API blockchain ne concordent pas",
                    parseIssuerKeys: "Impossible de lire le JSON d'identification de l'émetteur",
                    getBlockcypherFetcher: "Impossible d'obtenir le hash distant",
                    getChainSoFetcher: "Impossible d'obtenir le hash distant",
                    parseBlockCypherResponse: "Le nombre de confirmations de transaction n'atteint pas le minimum requis, d'après l'API Blockcypher",
                    parseChainSoResponse: "Le nombre de confirmations de transaction n'atteint pas le minimum requis, d'après l'API Chain.so",
                    checkEtherScanConfirmations: "Le nombre de confirmations de transaction n'atteint pas le minimum requis, d'après l'API EtherScan",
                    couldNotConfirmTx: "Impossible de confirmer la transaction",
                    failedJsonLdNormalization: "Erreur de normalisation JSON-LD",
                    foundUnmappedFields: "Champs non liés découverts durant la normalisation JSON-LD",
                    ensureHashesEqual: "Calcul du hash local différent du hash distant",
                    ensureIssuerSignature: "La clé de l'émetteur ne correspond pas à l'adresse dérivée",
                    ensureMerkleRootEqual: "Le Merkle root ne correspond pas au hash distant",
                    ensureNotExpired: "Certificat expiré",
                    getCaseInsensitiveKey: "Transaction émise lorsque l'adresse de l'émetteur était considérée invalide",
                    ensureValidReceipt: "Erreur d'écriture du reçu. Un problème est survenu lors de la navigation de l'arbre Merkle du reçu.",
                    invalidMerkleReceipt: "Reçu Merkle invalid. Hash de preuve différent du Merkle root",
                    isTransactionIdValid: "Impossible de vérifier ce certificat sans un identifiant de transaction valide"
                }
            },
            es: {
                steps: {
                    formatValidationLabel: "Validación de formato",
                    formatValidationLabelPending: "Validando el formato",
                    hashComparisonLabel: "Comparación de cadena binaria",
                    hashComparisonLabelPending: "Comparando cadena binaria",
                    statusCheckLabel: "Estado de Verificación",
                    statusCheckLabelPending: "Verificando Estado de Grabación"
                },
                subSteps: {
                    getTransactionIdLabel: "Obtener Identificación de Transacción",
                    getTransactionIdLabelPending: "Obteniendo Identificación de Transacción",
                    computeLocalHashLabel: "Calcular cadena binaria local",
                    computeLocalHashLabelPending: "Calculando cadena binaria local",
                    fetchRemoteHashLabel: "Obtener cadena binaria remota",
                    fetchRemoteHashLabelPending: "Obeniendo cadena binaria remota",
                    getIssuerProfileLabel: "Obtener perfil de emisor",
                    getIssuerProfileLabelPending: "Obteniendo perfil de emisor",
                    parseIssuerKeysLabel: "Analizar claves del emisor",
                    parseIssuerKeysLabelPending: "Analizando claves del emisor",
                    compareHashesLabel: "Comparar cadenas binarias",
                    compareHashesLabelPending: "Comparando cadenas binarias",
                    checkMerkleRootLabel: "Verificar Merkle Root",
                    checkMerkleRootLabelPending: "Verificando Merkle Root",
                    checkReceiptLabel: "Verificar Recibo",
                    checkReceiptLabelPending: "Verificando Recibo",
                    checkIssuerSignatureLabel: "Verificar Firma del Emisor",
                    checkIssuerSignatureLabelPending: "Verificando Firma del Emisor",
                    checkAuthenticityLabel: "Verificar Autenticidad",
                    checkAuthenticityLabelPending: "Verificando Autenticidad",
                    checkRevokedStatusLabel: "Verificar Estado de Revocación",
                    checkRevokedStatusLabelPending: "Verificando Estado de Revocación",
                    checkExpiresDateLabel: "Verificar Fechas de Expiración",
                    checkExpiresDateLabelPending: "Verificando Fechas de Expiración"
                },
                revocation: {
                    preReason: "Razón dada:",
                    reason: "Este certificado ha sido revocado por el emisor"
                },
                success: {
                    mocknet: {
                        label: "Esta credencial de Mocknet pasó todas las comprobaciones",
                        description: "Las credenciales de Mocknet se usan solo con fines de prueba. No se graban en una cadena de bloques, y no se deben considerar Blockcerts Verificados."
                    },
                    blockchain: {
                        label: "Verificado",
                        description: "Este es un certificado válido de ${chain}.",
                        linkText: "Ver enlace de transacción"
                    }
                },
                errors: {
                    certificateNotValid: "Este no es un certificado válido",
                    getChain: "Valor de cadena no reconocido",
                    getTransactionId: "No se puede verificar este certificado sin una identificación de transacción que sirva como comparación",
                    getIssuerProfile: "No se ha podido obtener el perfil del emisor",
                    getRevokedAssertions: "No se ha podido obtener aseveraciones de revocación",
                    lookForTxInvalidChain: "Cadena inválida; no corresponde a BlockchainExplorers reconocidos",
                    lookForTxInvalidAppConfig: "Configuración de aplicación inválida; cheque el valor de configuración CONFIG.MinimumBlockchainExplorers",
                    lookForTxCouldNotConfirm: "No se ha podido confirmar la transacción. Ninguna del las APIs de blockchain generó una respuesta. Esto puede ser causado por limitaciones de tasa.",
                    lookForTxDifferentAddresses: "Las direcciones emisoras generadas por las APIs del blockchain son distintas",
                    lookForTxDifferentRemoteHashes: "Las cadenas binarias remotas generadas por las APIs del blockchain son distintas",
                    parseIssuerKeys: "No se ha podido analizar el JSON de la información de identificación del emisor",
                    getBlockcypherFetcher: "No se ha podido obtener la cadena binaria remota",
                    getChainSoFetcher: "No se ha podido obtener la cadena binaria remota",
                    parseBlockCypherResponse: "El número de transacciones confirmadas son menores que el mínimo requerido, de acuerdo al API Blockcypher",
                    parseChainSoResponse: "El número de transacciones confirmadas son menores que el mínimo requerido, de acuerdo al API Chain.so",
                    checkEtherScanConfirmations: "El número de transacciones confirmadas son menores que el mínimo requerido, de acuerdo al API EtherScan",
                    couldNotConfirmTx: "No se ha podido confirmar la transacción",
                    failedJsonLdNormalization: "La normalización del JSON-LD ha fallado",
                    foundUnmappedFields: "Se han encontrado campos no mapeados durante la normalización de JSON-LD",
                    ensureHashesEqual: "La cadena binaria calculada no corresponde con la cadena binaria remota",
                    ensureIssuerSignature: "La llave del emisor no corresponde con la dirección obtenida",
                    ensureMerkleRootEqual: "La raíz Merkle no corresponde con la cadena binaria remota",
                    ensureNotExpired: "Este certificado ha expirado",
                    getCaseInsensitiveKey: "La dirección emisora no era considerada válida cuando la transacción ocurrió",
                    ensureValidReceipt: "El recibo está malformado. Hubo un problema navegando el árbol Merkle en el recibo",
                    invalidMerkleReceipt: "Recibo Merkle inválido. La cadena binaria de prueba no corresponde con la raíz Merkle",
                    isTransactionIdValid: "No se puede verificar este certificado sin una identificación de transacción que sirva como comparación"
                }
            },
            mt: {
                steps: {
                    formatValidationLabel: "Validazzjoni tal-format",
                    formatValidationLabelPending: "Il-format qed jiġi vvalidat",
                    hashComparisonLabel: "Paragun tal-Hash",
                    hashComparisonLabelPending: "Il-hash qed jiġi pparagunat",
                    statusCheckLabel: "Status check",
                    statusCheckLabelPending: "Ir-record status qed jiġi ċċekkjat"
                },
                subSteps: {
                    getTransactionIdLabel: "Ikseb l-ID ta' tranżazzjoni",
                    getTransactionIdLabelPending: "L-ID ta' tranżazzjoni qed tiġi mniżżla",
                    computeLocalHashLabel: "Ikkalkula l-hash lokali",
                    computeLocalHashLabelPending: "Il-hash lokali qed jiġi kkalkulat",
                    fetchRemoteHashLabel: "Fittex ir-remote hash",
                    fetchRemoteHashLabelPending: "Ir-remote hash qed jiġi mfittex",
                    getIssuerProfileLabel: "Ikseb il-profil tal-emittent",
                    getIssuerProfileLabelPending: "Il-profil tal-emittent qed jiġi mniżżel",
                    parseIssuerKeysLabel: "Estratta ċ-ċwievet tal-emittent",
                    parseIssuerKeysLabelPending: "Iċ-ċwievet tal-emittent qed jiġu estratti",
                    compareHashesLabel: "Ikkumpara l-hashes",
                    compareHashesLabelPending: "Il-hashes qed jiġu kkomparati",
                    checkMerkleRootLabel: "Iċċekkja l-Merkle Root",
                    checkMerkleRootLabelPending: "Il-Merkle Root Qed Tiġi Ċċekkjata",
                    checkReceiptLabel: "Iċċekkja l-Irċevuta",
                    checkReceiptLabelPending: "L-Irċevuta Qed Tiġi Ċċekkjata",
                    checkIssuerSignatureLabel: "Iċċekkja l-Firma tal-Emittent",
                    checkIssuerSignatureLabelPending: "Il-Firma tal-Emittent Qed Tiġi Ċċekkjata",
                    checkAuthenticityLabel: "Iċċekkja l-Awtentiċità",
                    checkAuthenticityLabelPending: "L-Awtentiċità Qed Tiġi Ċċekkjata",
                    checkRevokedStatusLabel: "Iċċekkja l-Istatus Revokat",
                    checkRevokedStatusLabelPending: "L-Istatus Revokat Qed Jiġi Ċċekkjat",
                    checkExpiresDateLabel: "Iċċekkja d-Data ta' Skadenza",
                    checkExpiresDateLabelPending: "Id-Data ta' Skadenza Qed Tiġi Ċċekkjata"
                },
                revocation: {
                    preReason: "Raġuni mogħtija:",
                    reason: "Dan iċ-ċertifikat ġie revokat mill-emittent."
                },
                success: {
                    mocknet: {
                        label: "Din il-kredenzjali tal-Mocknet għaddiet il-kontrolli kollha",
                        description: "Il-kredenzjali tal-Mocknet jintużaw biss għal skopijiet ta 'ttestjar. Dawn mhumiex irreġistrati fuq blockchain, u ma għandhomx jiġu kkunsidrati bħala blockcerts verifikati."
                    },
                    blockchain: {
                        label: "Ivverifikat",
                        description: "Dan huwa ċertifikat ${chain} huwa validu.",
                        linkText: "Ara l-link tat-transazzjoni"
                    }
                },
                errors: {
                    certificateNotValid: "Dan mhux ċertifikat validu",
                    getChain: "Iċ-chain value ma ntgħarafx",
                    getTransactionId: "Dan iċ-ċertifikat ma jistax jiġi vverifikat mingħajr ID ta' tranżazzjoni mqabbla miegħu",
                    getIssuerProfile: "Mhux possibbli jinkiseb il-profil tal-emittent",
                    getRevokedAssertions: "Mhux possibbli jinkisbu dikjarazzjonijiet revokati",
                    lookForTxInvalidChain: "Chain invalidu; BlockchainExplorers mhux qed isib chain magħrufa",
                    lookForTxInvalidAppConfig: "Konfigurazzjoni tal-applikazzjoni invalida; Iċċekkja l-valur konfigurattiv f' CONFIG.MinimumBlockchainExplorers",
                    lookForTxCouldNotConfirm: "It-tranżazzjoni ma setgħetx tiġi kkonferma. L-ebda blockchain apis ma rritorna rispons. Dan jista' jkun minħabba limitazzjoni tar-rata",
                    lookForTxDifferentAddresses: "L-indirizzi tal-ħruġ mibgħuta lura mill-blockchain APIs kienu differenti",
                    lookForTxDifferentRemoteHashes: "Ir-remote hashes mibgħuta lura mill-blockchain APIs kienu differenti",
                    parseIssuerKeys: "Ma jistax jiġi estratt JSON mid-data tal-identifikazzjoni tal-emittent",
                    getBlockcypherFetcher: "Mhux possibbli jinkiseb ir-remote hash",
                    getChainSoFetcher: "Mhux possibbli jinkiseb ir-remote hash",
                    parseBlockCypherResponse: "In-numru ta' konfermi tat-tranżazzjonijiet kienu inqas mill-minimu meħtieġ, skont Blockcypher API",
                    parseChainSoResponse: "In-numru ta' konfermi tat-tranżazzjonijiet kienu inqas mill-minimu meħtieġ, skont Chain.so API",
                    checkEtherScanConfirmations: "In-numru ta' konfermi tat-tranżazzjonijiet kienu inqas mill-minimu meħtieġ, skont EtherScan API",
                    couldNotConfirmTx: "Ma setgħetx tiġi kkonfermata t-tranżazzjoni",
                    failedJsonLdNormalization: "In-normalizzazzjoni ta' JSON-LD ma rnexxietx",
                    foundUnmappedFields: "Instabu unmapped fields matul in-normalizzazzjoni JSON-LD",
                    ensureHashesEqual: "Il-hash ikkalkulat ma jikkorrispondix mar-remote hash",
                    ensureIssuerSignature: "Iċ-ċavetta tal-emittent ma taqbilx mal-indirizz derivat",
                    ensureMerkleRootEqual: "Merkle root ma taqbilx mar-remote hash",
                    ensureNotExpired: "Dan iċ-ċertifikat skada",
                    getCaseInsensitiveKey: "It-tranżazzjoni seħħet fi żmiem meta l-indirizz tal-ħruġ ma tqiesx validu",
                    ensureValidReceipt: "L-irċevuta hija malformata. Kien hemm problema fin-navigazzjoni tal-merkle tree fl-irċevuta",
                    invalidMerkleReceipt: "Irċevuta Merkle invalida. Il-proof hash ma kienx jaqbel mal-Merkle root",
                    isTransactionIdValid: "Dan iċ-ċertifikat ma jistax jiġi vverifikat mingħajr ID ta' tranżazzjoni mqabbla miegħu"
                }
            },
            "it-IT": {
                steps: {
                    formatValidationLabel: "Convalidare formato",
                    formatValidationLabelPending: "Convalida formato",
                    hashComparisonLabel: "Confrontare hash",
                    hashComparisonLabelPending: "Confronta hash",
                    statusCheckLabel: "Verificare stato",
                    statusCheckLabelPending: "Verifica stato del record"
                },
                subSteps: {
                    getTransactionIdLabel: "Ottenere ID transazione",
                    getTransactionIdLabelPending: "Ottieni ID transazione",
                    computeLocalHashLabel: "Calcolare hash locale",
                    computeLocalHashLabelPending: "Calcola hash locale",
                    fetchRemoteHashLabel: "Recuperare hash remoto",
                    fetchRemoteHashLabelPending: "Recupera hash remoto",
                    getIssuerProfileLabel: "Ottenere profilo issuer",
                    getIssuerProfileLabelPending: "Ottieni profilo issuer",
                    parseIssuerKeysLabel: "Analizzare chiavi issuer",
                    parseIssuerKeysLabelPending: "Analizza chiavi issuer",
                    compareHashesLabel: "Confrontare gli hash",
                    compareHashesLabelPending: "Confronto hash",
                    checkMerkleRootLabel: "Controllare radice di Merkle",
                    checkMerkleRootLabelPending: "Controllo radice di Merkle",
                    checkReceiptLabel: "Verificare ricevuta",
                    checkReceiptLabelPending: "Verifica ricevuta",
                    checkIssuerSignatureLabel: "Verificare firma Issuer",
                    checkIssuerSignatureLabelPending: "Verifica firma Issuer",
                    checkAuthenticityLabel: "Verificare autenticità",
                    checkAuthenticityLabelPending: "Verifica autenticità",
                    checkRevokedStatusLabel: "Verificare stato revocato",
                    checkRevokedStatusLabelPending: "Verifica stato revocato",
                    checkExpiresDateLabel: "Verificare data di scadenza",
                    checkExpiresDateLabelPending: "Verifica data di scadenza"
                },
                revocation: {
                    preReason: "Motivo indicato:",
                    reason: "Questo certificato è stato revocato dall'emittente."
                },
                success: {
                    mocknet: {
                        label: "Questo Blockcert simulato ha superato tutti i controlli.",
                        description: "La modalità Mocknet è utilizzata solo dagli emittenti per testare il loro flusso di lavoro localmente. Questo Blockcert non è stato registrato su una blockchain e non dovrebbe essere considerato un Blockcert verificato."
                    },
                    blockchain: {
                        label: "Verificato",
                        description: "Questo è un certificato ${chain} valido.",
                        linkText: "Vedi la transazione"
                    }
                },
                errors: {
                    certificateNotValid: "Questo non è un certificato valido",
                    getChain: "Il valore della catena non è stato riconosciuto",
                    getTransactionId: "Impossibile verificare questo certificato senza un ID transazione da confrontare.",
                    getIssuerProfile: "Impossibile ottenere il profilo dell'emittente",
                    getRevokedAssertions: "Impossibile ottenere le asserzioni di revoca",
                    lookForTxInvalidChain: "Catena non valida; non mappa BlockchainExplorers noti.",
                    lookForTxInvalidAppConfig: "Configurazione dell'applicazione non valida, verificare il valore di configurazione di CONFIG.MinimumBlockchainExplorers",
                    lookForTxCouldNotConfirm: "Impossibile confermare la transazione. Nessuna API blockchain ha risposto. Potrebbe essere a causa della limitazione della velocità.",
                    lookForTxDifferentAddresses: "Gli indirizzi di emissione restituiti dalle API blockchain erano diversi",
                    lookForTxDifferentRemoteHashes: "Gli hash remoti restituiti dalle API blockchain erano diversi",
                    parseIssuerKeys: "Impossibile analizzare JSON dai dati di identificazione dell'emittente.",
                    getBlockcypherFetcher: "Impossibile ottenere l'hash remoto",
                    getChainSoFetcher: "Impossibile ottenere l'hash remoto",
                    parseBlockCypherResponse: "Il numero di conferme delle transazioni era inferiore al minimo richiesto, secondo l'API Blockcypher",
                    parseChainSoResponse: "Il numero di conferme delle transazioni era inferiore al minimo richiesto, secondo l'API Chain.so",
                    checkEtherScanConfirmations: "Il numero di conferme delle transazioni era inferiore al minimo richiesto, secondo l'API EtherScan",
                    couldNotConfirmTx: "Impossibile confermare la transazione",
                    failedJsonLdNormalization: "Normalizzazione JSON-LD fallita",
                    foundUnmappedFields: "Campi non mappati trovati durante la normalizzazione JSON-LD",
                    ensureHashesEqual: "L'hash calcolato non corrisponde all'hash remoto",
                    ensureIssuerSignature: "La chiave dell'issuer non corrisponde all'indirizzo derivato.",
                    ensureMerkleRootEqual: "La radice di Merkle non corrisponde all'hash remoto.",
                    ensureNotExpired: "Questo certificato è scaduto.",
                    getCaseInsensitiveKey: "La transazione è avvenuta nel momento in cui l'indirizzo di emissione non era considerato valido.",
                    ensureValidReceipt: "La ricevuta è malformata. C'è stato un problema nella navigazione dell'albero di Merkle nella ricevuta.",
                    invalidMerkleReceipt: "Ricevuta Merkle non valida. L'hash di prova non corrisponde alla radice di Merkle",
                    isTransactionIdValid: "Impossibile verificare questo certificato senza un ID transazione da confrontare."
                }
            },
            ja: {
                steps: {
                    formatValidationLabel: "フォーマットの検証",
                    formatValidationLabelPending: "フォーマットを検証しています",
                    hashComparisonLabel: "ハッシュの照合",
                    hashComparisonLabelPending: "ハッシュを照合しています",
                    statusCheckLabel: "ステータスの確認",
                    statusCheckLabelPending: "ステータスを確認しています"
                },
                subSteps: {
                    getTransactionIdLabel: "取引IDの取得",
                    getTransactionIdLabelPending: "取引IDを取得しています",
                    computeLocalHashLabel: "ローカルハッシュの算出",
                    computeLocalHashLabelPending: "ローカルハッシュを算出しています",
                    fetchRemoteHashLabel: "リモートハッシュのフェッチ",
                    fetchRemoteHashLabelPending: "リモートハッシュをフェッチしています",
                    getIssuerProfileLabel: "発行者プロフィールの取得",
                    getIssuerProfileLabelPending: "発行者プロフィールを取得しています",
                    parseIssuerKeysLabel: "発行者の鍵のパース",
                    parseIssuerKeysLabelPending: "発行者の鍵をパースしています",
                    compareHashesLabel: "ハッシュの照合",
                    compareHashesLabelPending: "ハッシュを照合しています",
                    checkMerkleRootLabel: "Merkle Rootの確認",
                    checkMerkleRootLabelPending: "Merkle Rootを確認しています",
                    checkReceiptLabel: "レシートの確認",
                    checkReceiptLabelPending: "レシートを確認しています",
                    checkIssuerSignatureLabel: "発行者の署名の確認",
                    checkIssuerSignatureLabelPending: "発行者の署名を確認しています",
                    checkAuthenticityLabel: "真正性の確認",
                    checkAuthenticityLabelPending: "真正性を確認しています",
                    checkRevokedStatusLabel: "取消ステータスの確認",
                    checkRevokedStatusLabelPending: "取消ステータスを確認しています",
                    checkExpiresDateLabel: "有効期限の確認",
                    checkExpiresDateLabelPending: "有効期限を確認しています"
                },
                revocation: {
                    preReason: "理由：",
                    reason: "この証明書は発行者によって取り消されました。"
                },
                success: {
                    mocknet: {
                        label: "このMocknetの証明書は全てのチェックを通過しました。",
                        description: "Mocknetの証明書はテスト用のものです。ブロックチェーンに記録されませんし、認証済みのBlockcertとして扱われません。"
                    },
                    blockchain: {
                        label: "認証されました",
                        description: "この証明書は有効な${chain}証明書です。",
                        linkText: "取引を確認する"
                    }
                },
                errors: {
                    certificateNotValid: "この証明書は有効ではありません",
                    getChain: "チェーンの値を認識できませんでした",
                    getTransactionId: "照合のための取引IDがないため、この証明書を認証できません。",
                    getIssuerProfile: "発行者プロフィールを取得できません",
                    getRevokedAssertions: "取消assertionsを取得できません",
                    lookForTxInvalidChain: "チェーンが無効です。既知のBlockchainExplorersにマップできません。",
                    lookForTxInvalidAppConfig: "アプリケーション設定が無効です。CONFIG.MinimumBlockchainExplorersの設定値を確認して下さい。",
                    lookForTxCouldNotConfirm: "取引を確認できませんでした。全てのブロックチェーンAPIが返信しませんでした。 レート制限が原因になっている可能性があります。",
                    lookForTxDifferentAddresses: "ブロックチェーンAPIから返された発行者アドレスが異なっていました",
                    lookForTxDifferentRemoteHashes: "ブロックチェーンAPIから返されたリモートハッシュが異なっていました",
                    parseIssuerKeys: "発行者識別データからJSONをパースできません",
                    getBlockcypherFetcher: "リモートハッシュを取得できません",
                    getChainSoFetcher: "リモートハッシュを取得できません",
                    parseBlockCypherResponse: "Blockcypher APIによると、必要最小限の取引確認の数に達しませんでした",
                    parseChainSoResponse: "Chain.so APIによると、必要最小限の取引確認の数に達しませんでした",
                    checkEtherScanConfirmations: "EtherScan APIによると、必要最小限の取引確認の数に達しませんでした",
                    couldNotConfirmTx: "取引を確認できませんでした",
                    failedJsonLdNormalization: "JSON-LDの正規化に失敗しました",
                    foundUnmappedFields: "JSON-LDの正規化時にマップされていないフィールドを検出しました",
                    ensureHashesEqual: "算出されたハッシュがリモートハッシュと一致しませんでした",
                    ensureIssuerSignature: "発行者の鍵が得られたアドレスと一致しませんでした",
                    ensureMerkleRootEqual: "Merkle rootがリモートハッシュと一致しませんでした",
                    ensureNotExpired: "この証明書の有効期限が切れています",
                    getCaseInsensitiveKey: "取引が発行アドレスの有効期間外に行われました",
                    ensureValidReceipt: "レシートが異常です。レシート内のMerkle treeを辿る際に問題が発生しました。",
                    invalidMerkleReceipt: "Merkleレシートが無効です。証明ハッシュがMerkle rootと一致しませんでした。",
                    isTransactionIdValid: "照合するための取引IDがないため、この証明書を認証できません。"
                }
            }
        },
        S = "getTransactionId",
        k = "computeLocalHash",
        E = "fetchRemoteHash",
        I = "getIssuerProfile",
        x = "parseIssuerKeys",
        O = "compareHashes",
        T = "checkMerkleRoot",
        P = "checkReceipt",
        A = "checkAuthenticity",
        M = "checkRevokedStatus",
        C = "checkExpiresDate";

    function L(e, t) {
        return _["en-US"].subSteps["".concat(e).concat(t)]
    }
    var R = "Label",
        N = "LabelPending",
        j = (v(g = {}, "formatValidation", [S, k, E, I, x]), v(g, "hashComparison", [O, T, P]), v(g, "statusCheck", ["checkIssuerSignature", A, M, C]), g);
    var U = Object.keys(j).reduce(function(e, t) {
            return Object.assign(e, j[r = t].reduce(function(e, t) {
                return e[t] = {
                    code: t,
                    label: L(t, R),
                    labelPending: L(t, N),
                    parentStep: r
                }, e
            }, {}));
            var r
        }, {}),
        D = Object.freeze({
            getTransactionId: S,
            computeLocalHash: k,
            fetchRemoteHash: E,
            getIssuerProfile: I,
            parseIssuerKeys: x,
            compareHashes: O,
            checkMerkleRoot: T,
            checkReceipt: P,
            checkIssuerSignature: "checkIssuerSignature",
            checkAuthenticity: A,
            checkRevokedStatus: M,
            checkExpiresDate: C,
            language: U
        }),
        B = Object.freeze({
            FAILURE: "failure",
            STARTING: "starting",
            SUCCESS: "success"
        }),
        H = "{TRANSACTION_ID}",
        F = {
            bitcoin: {
                code: "bitcoin",
                name: "Bitcoin",
                prefixes: ["6a20", "OP_RETURN "],
                signatureValue: "bitcoinMainnet",
                transactionTemplates: {
                    full: "https://staging.exos.to/rawtx/".concat(H),
                    raw: "https://staging.exos.to/rawtx/".concat(H)
                }
            },
            ethmain: {
                code: "ethmain",
                name: "Ethereum",
                prefixes: ["0x"],
                signatureValue: "ethereumMainnet",
                transactionTemplates: {
                    full: "https://etherscan.io/tx/".concat(H),
                    raw: "https://etherscan.io/tx/".concat(H)
                }
            },
            ethropst: {
                code: "ethropst",
                name: "Ethereum Testnet",
                signatureValue: "ethereumRopsten",
                transactionTemplates: {
                    full: "https://ropsten.etherscan.io/tx/".concat(H),
                    raw: "https://ropsten.etherscan.io/getRawTx?tx=".concat(H)
                }
            },
            mocknet: {
                code: "mocknet",
                name: "Mocknet",
                test: !0,
                signatureValue: "mockchain",
                transactionTemplates: {
                    full: "",
                    raw: ""
                }
            },
            regtest: {
                code: "regtest",
                name: "Mocknet",
                test: !0,
                signatureValue: "bitcoinRegtest",
                transactionTemplates: {
                    full: "",
                    raw: ""
                }
            },
            testnet: {
                code: "testnet",
                name: "Bitcoin Testnet",
                signatureValue: "bitcoinTestnet",
                transactionTemplates: {
                    full: "https://staging.exos.to/rawtx/".concat(H),
                    raw: "https://staging.exos.to/rawtx/".concat(H)
                }
            }
        },
        q = {
            mainnet: "mainnet",
            testnet: "testnet"
        },
        V = {
            SecurityContextUrl: "https://w3id.org/security/v1",
            MininumConfirmations: 1,
            MinimumBlockchainExplorers: 1,
            Race: !0,
            CheckForUnmappedFields: !0,
            PublicKey: "ecdsa-koblitz-pubkey:1"
        },
        z = {
            "@context": {
                id: "@id",
                type: "@type",
                extensions: "https://w3id.org/openbadges/extensions#",
                obi: "https://w3id.org/openbadges#",
                validation: "obi:validation",
                cred: "https://w3id.org/credentials#",
                dc: "http://purl.org/dc/terms/",
                schema: "http://schema.org/",
                sec: "https://w3id.org/security#",
                xsd: "http://www.w3.org/2001/XMLSchema#",
                AlignmentObject: "schema:AlignmentObject",
                CryptographicKey: "sec:Key",
                Endorsement: "cred:Credential",
                Assertion: "obi:Assertion",
                BadgeClass: "obi:BadgeClass",
                Criteria: "obi:Criteria",
                Evidence: "obi:Evidence",
                Extension: "obi:Extension",
                FrameValidation: "obi:FrameValidation",
                IdentityObject: "obi:IdentityObject",
                Image: "obi:Image",
                HostedBadge: "obi:HostedBadge",
                hosted: "obi:HostedBadge",
                Issuer: "obi:Issuer",
                Profile: "obi:Profile",
                RevocationList: "obi:RevocationList",
                SignedBadge: "obi:SignedBadge",
                signed: "obi:SignedBadge",
                TypeValidation: "obi:TypeValidation",
                VerificationObject: "obi:VerificationObject",
                author: {
                    "@id": "schema:author",
                    "@type": "@id"
                },
                caption: {
                    "@id": "schema:caption"
                },
                claim: {
                    "@id": "cred:claim",
                    "@type": "@id"
                },
                created: {
                    "@id": "dc:created",
                    "@type": "xsd:dateTime"
                },
                creator: {
                    "@id": "dc:creator",
                    "@type": "@id"
                },
                description: {
                    "@id": "schema:description"
                },
                email: {
                    "@id": "schema:email"
                },
                endorsement: {
                    "@id": "cred:credential",
                    "@type": "@id"
                },
                expires: {
                    "@id": "sec:expiration",
                    "@type": "xsd:dateTime"
                },
                genre: {
                    "@id": "schema:genre"
                },
                image: {
                    "@id": "schema:image",
                    "@type": "@id"
                },
                name: {
                    "@id": "schema:name"
                },
                owner: {
                    "@id": "sec:owner",
                    "@type": "@id"
                },
                publicKey: {
                    "@id": "sec:publicKey",
                    "@type": "@id"
                },
                publicKeyPem: {
                    "@id": "sec:publicKeyPem"
                },
                related: {
                    "@id": "dc:relation",
                    "@type": "@id"
                },
                startsWith: {
                    "@id": "http://purl.org/dqm-vocabulary/v1/dqm#startsWith"
                },
                tags: {
                    "@id": "schema:keywords"
                },
                targetDescription: {
                    "@id": "schema:targetDescription"
                },
                targetFramework: {
                    "@id": "schema:targetFramework"
                },
                targetName: {
                    "@id": "schema:targetName"
                },
                targetUrl: {
                    "@id": "schema:targetUrl"
                },
                telephone: {
                    "@id": "schema:telephone"
                },
                url: {
                    "@id": "schema:url",
                    "@type": "@id"
                },
                version: {
                    "@id": "schema:version"
                },
                alignment: {
                    "@id": "obi:alignment",
                    "@type": "@id"
                },
                allowedOrigins: {
                    "@id": "obi:allowedOrigins"
                },
                audience: {
                    "@id": "obi:audience"
                },
                badge: {
                    "@id": "obi:badge",
                    "@type": "@id"
                },
                criteria: {
                    "@id": "obi:criteria",
                    "@type": "@id"
                },
                endorsementComment: {
                    "@id": "obi:endorsementComment"
                },
                evidence: {
                    "@id": "obi:evidence",
                    "@type": "@id"
                },
                hashed: {
                    "@id": "obi:hashed",
                    "@type": "xsd:boolean"
                },
                identity: {
                    "@id": "obi:identityHash"
                },
                issuedOn: {
                    "@id": "obi:issueDate",
                    "@type": "xsd:dateTime"
                },
                issuer: {
                    "@id": "obi:issuer",
                    "@type": "@id"
                },
                narrative: {
                    "@id": "obi:narrative"
                },
                recipient: {
                    "@id": "obi:recipient",
                    "@type": "@id"
                },
                revocationList: {
                    "@id": "obi:revocationList",
                    "@type": "@id"
                },
                revocationReason: {
                    "@id": "obi:revocationReason"
                },
                revoked: {
                    "@id": "obi:revoked",
                    "@type": "xsd:boolean"
                },
                revokedAssertions: {
                    "@id": "obi:revoked"
                },
                salt: {
                    "@id": "obi:salt"
                },
                targetCode: {
                    "@id": "obi:targetCode"
                },
                uid: {
                    "@id": "obi:uid"
                },
                validatesType: "obi:validatesType",
                validationFrame: "obi:validationFrame",
                validationSchema: "obi:validationSchema",
                verification: {
                    "@id": "obi:verify",
                    "@type": "@id"
                },
                verificationProperty: {
                    "@id": "obi:verificationProperty"
                },
                verify: "verification"
            }
        },
        K = {
            "@context": {
                id: "@id",
                type: "@type",
                bc: "https://w3id.org/blockcerts#",
                obi: "https://w3id.org/openbadges#",
                cp: "https://w3id.org/chainpoint#",
                schema: "http://schema.org/",
                sec: "https://w3id.org/security#",
                xsd: "http://www.w3.org/2001/XMLSchema#",
                MerkleProof2017: "sec:MerkleProof2017",
                RecipientProfile: "bc:RecipientProfile",
                SignatureLine: "bc:SignatureLine",
                MerkleProofVerification2017: "bc:MerkleProofVerification2017",
                recipientProfile: "bc:recipientProfile",
                signatureLines: "bc:signatureLines",
                introductionUrl: {
                    "@id": "bc:introductionUrl",
                    "@type": "@id"
                },
                subtitle: "bc:subtitle",
                jobTitle: "schema:jobTitle",
                creator: {
                    "@id": "dc:creator",
                    "@type": "@id"
                },
                expires: {
                    "@id": "sec:expiration",
                    "@type": "xsd:dateTime"
                },
                revoked: {
                    "@id": "sec:expiration",
                    "@type": "xsd:dateTime"
                },
                CryptographicKey: "sec:Key",
                signature: "sec:signature",
                verification: "bc:verification",
                publicKeys: "bc:publicKeys",
                ChainpointSHA256v2: "cp:ChainpointSHA256v2",
                BTCOpReturn: "cp:BTCOpReturn",
                targetHash: "cp:targetHash",
                merkleRoot: "cp:merkleRoot",
                proof: "cp:proof",
                anchors: "cp:anchors",
                sourceId: "cp:sourceId",
                right: "cp:right",
                left: "cp:left"
            },
            "obi:validation": [{
                "obi:validatesType": "RecipientProfile",
                "obi:validationSchema": "https://w3id.org/blockcerts/schema/2.0-alpha/recipientSchema.json"
            }, {
                "obi:validatesType": "SignatureLine",
                "obi:validationSchema": "https://w3id.org/blockcerts/schema/2.0-alpha/signatureLineSchema.json"
            }, {
                "obi:validatesType": "MerkleProof2017",
                "obi:validationSchema": "https://w3id.org/blockcerts/schema/2.0-alpha/merkleProof2017Schema.json"
            }]
        },
        W = {
            "@context": [{
                id: "@id",
                type: "@type",
                bc: "https://w3id.org/blockcerts#",
                obi: "https://w3id.org/openbadges#",
                cp: "https://w3id.org/chainpoint#",
                extensions: "https://w3id.org/openbadges/extensions#",
                validation: "obi:validation",
                xsd: "http://www.w3.org/2001/XMLSchema#",
                schema: "http://schema.org/",
                sec: "https://w3id.org/security#",
                Assertion: "bc:Assertion",
                Certificate: "bc:Certificate",
                Issuer: "bc:Issuer",
                BlockchainCertificate: "bc:BlockchainCertificate",
                CertificateDocument: "bc:CertificateDocument",
                issuer: {
                    "@id": "bc:issuer",
                    "@type": "@id"
                },
                blockchaincertificate: {
                    "@id": "bc:blockchaincertificate",
                    "@type": "@id"
                },
                certificate: {
                    "@id": "bc:certificate",
                    "@type": "@id"
                },
                document: {
                    "@id": "bc:document",
                    "@type": "@id"
                },
                assertion: {
                    "@id": "bc:assertion",
                    "@type": "@id"
                },
                verify: {
                    "@id": "bc:verify",
                    "@type": "@id"
                },
                recipient: {
                    "@id": "bc:recipient",
                    "@type": "@id"
                },
                receipt: {
                    "@id": "bc:receipt",
                    "@type": "@id"
                },
                publicKey: {
                    "@id": "bc:publicKey"
                },
                revocationKey: {
                    "@id": "bc:revocationKey"
                },
                "image:signature": {
                    "@id": "bc:image:signature"
                },
                signature: {
                    "@id": "bc:signature"
                },
                familyName: {
                    "@id": "schema:familyName"
                },
                givenName: {
                    "@id": "schema:givenName"
                },
                jobTitle: {
                    "@id": "schema:jobTitle"
                },
                signer: {
                    "@id": "bc:signer",
                    "@type": "@id"
                },
                "attribute-signed": {
                    "@id": "bc:attribute-signed"
                },
                "ECDSA(secp256k1)": "bc:SignedBadge",
                subtitle: {
                    "@id": "bc:subtitle"
                },
                email: "schema:email",
                hashed: {
                    "@id": "obi:hashed",
                    "@type": "xsd:boolean"
                },
                image: {
                    "@id": "schema:image",
                    "@type": "@id"
                },
                salt: {
                    "@id": "obi:salt"
                },
                identity: {
                    "@id": "obi:identityHash"
                },
                issuedOn: {
                    "@id": "obi:issueDate",
                    "@type": "xsd:dateTime"
                },
                expires: {
                    "@id": "sec:expiration",
                    "@type": "xsd:dateTime"
                },
                evidence: {
                    "@id": "obi:evidence",
                    "@type": "@id"
                },
                criteria: {
                    "@id": "obi:criteria",
                    "@type": "@id"
                },
                tags: {
                    "@id": "schema:keywords"
                },
                alignment: {
                    "@id": "obi:alignment",
                    "@type": "@id"
                },
                revocationList: {
                    "@id": "obi:revocationList",
                    "@type": "@id"
                },
                name: {
                    "@id": "schema:name"
                },
                description: {
                    "@id": "schema:description"
                },
                url: {
                    "@id": "schema:url",
                    "@type": "@id"
                },
                uid: {
                    "@id": "obi:uid"
                },
                TypeValidation: "obi:TypeValidation",
                FrameValidation: "obi:FrameValidation",
                validatesType: "obi:validatesType",
                validationSchema: "obi:validationSchema",
                validationFrame: "obi:validationFrame",
                ChainpointSHA224v2: "cp:ChainpointSHA224v2",
                ChainpointSHA256v2: "cp:ChainpointSHA256v2",
                ChainpointSHA384v2: "cp:ChainpointSHA384v2",
                ChainpointSHA512v2: "cp:ChainpointSHA512v2",
                "ChainpointSHA3-224v2": "cp:ChainpointSHA3-224v2",
                "ChainpointSHA3-256v2": "cp:ChainpointSHA3-256v2",
                "ChainpointSHA3-384v2": "cp:ChainpointSHA3-384v2",
                "ChainpointSHA3-512v2": "cp:ChainpointSHA3-512v2",
                BTCOpReturn: "cp:BTCOpReturn",
                targetHash: "cp:targetHash",
                merkleRoot: "cp:merkleRoot",
                proof: "cp:proof",
                anchors: "cp:anchors",
                sourceId: "cp:sourceId",
                right: "cp:right",
                left: "cp:left"
            }],
            validation: [{
                type: "TypeValidation",
                validatesType: "Assertion",
                validationSchema: "https://w3id.org/blockcerts/schema/1.2/assertion-1.2.json"
            }, {
                type: "TypeValidation",
                validatesType: "Certificate",
                validationSchema: "https://w3id.org/blockcerts/schema/1.2/certificate-1.2.json"
            }, {
                type: "TypeValidation",
                validatesType: "Issuer",
                validationSchema: "https://w3id.org/blockcerts/schema/1.2/issuer-1.2.json"
            }, {
                type: "TypeValidation",
                validatesType: "CertificateDocument",
                validationSchema: "https://w3id.org/blockcerts/schema/1.2/certificate-document-1.2.json"
            }, {
                type: "TypeValidation",
                validatesType: "BlockchainCertificate",
                validationSchema: "https://w3id.org/blockcerts/schema/1.2/blockchain-certificate-1.2.json"
            }, {
                type: "TypeValidation",
                validatesType: "BlockchainReceipt",
                validationSchema: "https://w3id.org/blockcerts/schema/1.2/blockchain-receipt-1.2.json"
            }]
        },
        J = {
            "@context": {
                id: "@id",
                type: "@type",
                bc: "https://w3id.org/blockcerts#",
                obi: "https://w3id.org/openbadges#",
                cp: "https://w3id.org/chainpoint#",
                schema: "http://schema.org/",
                sec: "https://w3id.org/security#",
                xsd: "http://www.w3.org/2001/XMLSchema#",
                MerkleProof2017: "sec:MerkleProof2017",
                RecipientProfile: "bc:RecipientProfile",
                SignatureLine: "bc:SignatureLine",
                MerkleProofVerification2017: "bc:MerkleProofVerification2017",
                recipientProfile: "bc:recipientProfile",
                signatureLines: "bc:signatureLines",
                introductionUrl: {
                    "@id": "bc:introductionUrl",
                    "@type": "@id"
                },
                subtitle: "bc:subtitle",
                jobTitle: "schema:jobTitle",
                expires: {
                    "@id": "sec:expiration",
                    "@type": "xsd:dateTime"
                },
                revoked: {
                    "@id": "obi:revoked",
                    "@type": "xsd:boolean"
                },
                CryptographicKey: "sec:Key",
                signature: "sec:signature",
                verification: {
                    "@id": "obi:verify",
                    "@type": "@id"
                },
                publicKey: {
                    "@id": "sec:publicKey",
                    "@type": "@id"
                },
                ChainpointSHA256v2: "cp:ChainpointSHA256v2",
                BTCOpReturn: "cp:BTCOpReturn",
                targetHash: "cp:targetHash",
                merkleRoot: "cp:merkleRoot",
                proof: "cp:proof",
                anchors: "cp:anchors",
                sourceId: "cp:sourceId",
                right: "cp:right",
                left: "cp:left"
            },
            "obi:validation": [{
                "obi:validatesType": "RecipientProfile",
                "obi:validationSchema": "https://w3id.org/blockcerts/schema/2.0/recipientSchema.json"
            }, {
                "obi:validatesType": "SignatureLine",
                "obi:validationSchema": "https://w3id.org/blockcerts/schema/2.0/signatureLineSchema.json"
            }, {
                "obi:validatesType": "MerkleProof2017",
                "obi:validationSchema": "https://w3id.org/blockcerts/schema/2.0/merkleProof2017Schema.json"
            }]
        },
        G = {
            locale: "en-US"
        };
    var X = Object.freeze({
        isMainnet: function(e) {
            return l(e, "1") || l(e, V.PublicKey)
        }
    });
    var Y = {
        locale: "en-US"
    };

    function $(e, t) {
        return e && t ? _[Y.locale] ? _[Y.locale][e] ? _[Y.locale][e][t] ? _[Y.locale][e][t] || "" : "[missing locale item data]" : "[missing locale group data]" : "[missing locale data]" : ""
    }

    function Q() {
        return Object.keys(_)
    }
    var Z = Object.freeze({
        detectLocale: function() {
            return navigator.language || navigator.userLanguage || navigator.browserLanguage || G.locale
        },
        ensureIsSupported: function(e) {
            var t, r = to.i18n.getSupportedLanguages().map(function(e) {
                return e.toLowerCase()
            });
            if (!(t = r.indexOf(e.toLowerCase()) > -1)) {
                var n = e.substr(0, 2).toLowerCase(),
                    i = r.map(function(e) {
                        return e.split("-")[0]
                    }).indexOf(n);
                (t = i > -1) && (e = r[i])
            }
            return t || (e = G.locale),
                function(e) {
                    var t = e.split("-");
                    return t.length > 1 ? "".concat(t[0].toLowerCase(), "-").concat(t[1].toUpperCase()) : t[0].toLowerCase()
                }(e)
        },
        getText: $,
        getSupportedLanguages: Q
    });
    var ee = function e(t, r, n, i) {
            f(this, e), this.publicKey = t, this.created = r, this.revoked = n, this.expires = i
        },
        te = function e(t, r, n) {
            f(this, e), this.image = t, this.jobTitle = r, this.name = n
        },
        re = function e(t, r, n, i) {
            f(this, e), this.remoteHash = t, this.issuingAddress = r, this.time = n, this.revokedAddresses = i
        };
    var ne = function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    };
    var ie = function(e, t) {
            return !t || "object" !== c(t) && "function" != typeof t ? ne(e) : t
        },
        oe = i(function(e) {
            function t(r) {
                return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, t(r)
            }
            e.exports = t
        }),
        ae = i(function(e) {
            function t(r, n) {
                return e.exports = t = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, t(r, n)
            }
            e.exports = t
        });
    var se = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && ae(e, t)
    };
    var ue = function(e) {
            return -1 !== Function.toString.call(e).indexOf("[native code]")
        },
        ce = i(function(e) {
            function t(r, n, i) {
                return ! function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }() ? e.exports = t = function(e, t, r) {
                    var n = [null];
                    n.push.apply(n, t);
                    var i = new(Function.bind.apply(e, n));
                    return r && ae(i, r.prototype), i
                } : e.exports = t = Reflect.construct, t.apply(null, arguments)
            }
            e.exports = t
        }),
        fe = function(e) {
            function t(e, r) {
                var n;
                return f(this, t), (n = ie(this, oe(t).call(this, r))).stepCode = e, n
            }
            return se(t, e), t
        }(i(function(e) {
            function t(r) {
                var n = "function" == typeof Map ? new Map : void 0;
                return e.exports = t = function(e) {
                    if (null === e || !ue(e)) return e;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== n) {
                        if (n.has(e)) return n.get(e);
                        n.set(e, t)
                    }

                    function t() {
                        return ce(e, arguments, oe(this).constructor)
                    }
                    return t.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), ae(t, e)
                }, t(r)
            }
            e.exports = t
        })(Error));
    var he, de = Object.freeze({
        isMockChain: function(e) {
            if (e) {
                var t = "string" == typeof e ? e : e.code;
                return Object.keys(F).some(function(e) {
                    return e === t
                }) ? !!F[t].test : null
            }
            return null
        }
    });

    function le(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function pe(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? le(r, !0).forEach(function(t) {
                v(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : le(r).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var be = (v(he = {}, q.mainnet, [S, k, E, I, x, O, T, P, M, A, C]), v(he, q.testnet, [k, O, P, C]), he);

    function me(e) {
        var t, r = function(e) {
            var t = JSON.parse(JSON.stringify(y));
            return e.forEach(function(e) {
                return t[e.parentStep].subSteps.push(e)
            }), t
        }(e.map(function(e) {
            return pe({}, Object.assign({}, U[e]), {
                label: $("subSteps", "".concat(e, "Label")),
                labelPending: $("subSteps", "".concat(e, "LabelPending"))
            })
        }));
        return t = r, Object.keys(t).map(function(e) {
            return pe({}, t[e], {
                code: e,
                label: $("steps", "".concat(e, "Label")),
                labelPending: $("steps", "".concat(e, "LabelPending"))
            })
        })
    }
    var ge = Object.freeze({
            getChain: function(e) {
                var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || {};
                if (t.anchors) {
                    var r = t.anchors[0];
                    if (r.chain) {
                        var n = r.chain,
                            i = Object.entries(F).find(function(e) {
                                return e[1].signatureValue === n
                            });
                        if (void 0 === i) throw new Error($("errors", "getChain"));
                        return i[1]
                    }
                }
                return X.isMainnet(e) ? F.bitcoin : F.testnet
            },
            generateRevocationReason: function(e) {
                return e = (e = e.trim()).length > 0 ? " ".concat($("revocation", "preReason"), " ").concat(e).concat("." !== e.slice(-1) ? "." : "") : "", "".concat($("revocation", "reason")).concat(e)
            },
            getTransactionId: function(e) {
                try {
                    return e.anchors[0].sourceId
                } catch (e) {
                    throw new fe("", $("errors", "getTransactionId"))
                }
            },
            getTransactionLink: function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return e && "https://staging.exos.to/rawtx/l33t"
            },
            getVerificationMap: function(e) {
                if (!e) return [];
                var t = de.isMockChain(e) ? q.testnet : q.mainnet;
                return me(Object.assign(be)[t])
            }
        }),
        ve = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {},
        ye = [],
        we = [],
        _e = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        Se = !1;

    function ke() {
        Se = !0;
        for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0, r = e.length; t < r; ++t) ye[t] = e[t], we[e.charCodeAt(t)] = t;
        we["-".charCodeAt(0)] = 62, we["_".charCodeAt(0)] = 63
    }

    function Ee(e, t, r) {
        for (var n, i, o = [], a = t; a < r; a += 3) n = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], o.push(ye[(i = n) >> 18 & 63] + ye[i >> 12 & 63] + ye[i >> 6 & 63] + ye[63 & i]);
        return o.join("")
    }

    function Ie(e) {
        var t;
        Se || ke();
        for (var r = e.length, n = r % 3, i = "", o = [], a = 0, s = r - n; a < s; a += 16383) o.push(Ee(e, a, a + 16383 > s ? s : a + 16383));
        return 1 === n ? (t = e[r - 1], i += ye[t >> 2], i += ye[t << 4 & 63], i += "==") : 2 === n && (t = (e[r - 2] << 8) + e[r - 1], i += ye[t >> 10], i += ye[t >> 4 & 63], i += ye[t << 2 & 63], i += "="), o.push(i), o.join("")
    }

    function xe(e, t, r, n, i) {
        var o, a, s = 8 * i - n - 1,
            u = (1 << s) - 1,
            c = u >> 1,
            f = -7,
            h = r ? i - 1 : 0,
            d = r ? -1 : 1,
            l = e[t + h];
        for (h += d, o = l & (1 << -f) - 1, l >>= -f, f += s; f > 0; o = 256 * o + e[t + h], h += d, f -= 8);
        for (a = o & (1 << -f) - 1, o >>= -f, f += n; f > 0; a = 256 * a + e[t + h], h += d, f -= 8);
        if (0 === o) o = 1 - c;
        else {
            if (o === u) return a ? NaN : 1 / 0 * (l ? -1 : 1);
            a += Math.pow(2, n), o -= c
        }
        return (l ? -1 : 1) * a * Math.pow(2, o - n)
    }

    function Oe(e, t, r, n, i, o) {
        var a, s, u, c = 8 * o - i - 1,
            f = (1 << c) - 1,
            h = f >> 1,
            d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            l = n ? 0 : o - 1,
            p = n ? 1 : -1,
            b = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = f) : (a = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (t += a + h >= 1 ? d / u : d * Math.pow(2, 1 - h)) * u >= 2 && (a++, u /= 2), a + h >= f ? (s = 0, a = f) : a + h >= 1 ? (s = (t * u - 1) * Math.pow(2, i), a += h) : (s = t * Math.pow(2, h - 1) * Math.pow(2, i), a = 0)); i >= 8; e[r + l] = 255 & s, l += p, s /= 256, i -= 8);
        for (a = a << i | s, c += i; c > 0; e[r + l] = 255 & a, l += p, a /= 256, c -= 8);
        e[r + l - p] |= 128 * b
    }
    var Te = {}.toString,
        Pe = Array.isArray || function(e) {
            return "[object Array]" == Te.call(e)
        };
    Le.TYPED_ARRAY_SUPPORT = void 0 === ve.TYPED_ARRAY_SUPPORT || ve.TYPED_ARRAY_SUPPORT;
    var Ae = Me();

    function Me() {
        return Le.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
    }

    function Ce(e, t) {
        if (Me() < t) throw new RangeError("Invalid typed array length");
        return Le.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = Le.prototype : (null === e && (e = new Le(t)), e.length = t), e
    }

    function Le(e, t, r) {
        if (!(Le.TYPED_ARRAY_SUPPORT || this instanceof Le)) return new Le(e, t, r);
        if ("number" == typeof e) {
            if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
            return je(this, e)
        }
        return Re(this, e, t, r)
    }

    function Re(e, t, r, n) {
        if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, r, n) {
            if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
            if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
            t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
            Le.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = Le.prototype : e = Ue(e, t);
            return e
        }(e, t, r, n) : "string" == typeof t ? function(e, t, r) {
            "string" == typeof r && "" !== r || (r = "utf8");
            if (!Le.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
            var n = 0 | He(t, r),
                i = (e = Ce(e, n)).write(t, r);
            i !== n && (e = e.slice(0, i));
            return e
        }(e, t, r) : function(e, t) {
            if (Be(t)) {
                var r = 0 | De(t.length);
                return 0 === (e = Ce(e, r)).length ? e : (t.copy(e, 0, 0, r), e)
            }
            if (t) {
                if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? Ce(e, 0) : Ue(e, t);
                if ("Buffer" === t.type && Pe(t.data)) return Ue(e, t.data)
            }
            var n;
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
        }(e, t)
    }

    function Ne(e) {
        if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative')
    }

    function je(e, t) {
        if (Ne(t), e = Ce(e, t < 0 ? 0 : 0 | De(t)), !Le.TYPED_ARRAY_SUPPORT)
            for (var r = 0; r < t; ++r) e[r] = 0;
        return e
    }

    function Ue(e, t) {
        var r = t.length < 0 ? 0 : 0 | De(t.length);
        e = Ce(e, r);
        for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
        return e
    }

    function De(e) {
        if (e >= Me()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Me().toString(16) + " bytes");
        return 0 | e
    }

    function Be(e) {
        return !(null == e || !e._isBuffer)
    }

    function He(e, t) {
        if (Be(e)) return e.length;
        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var r = e.length;
        if (0 === r) return 0;
        for (var n = !1;;) switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
                return r;
            case "utf8":
            case "utf-8":
            case void 0:
                return lt(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * r;
            case "hex":
                return r >>> 1;
            case "base64":
                return pt(e).length;
            default:
                if (n) return lt(e).length;
                t = ("" + t).toLowerCase(), n = !0
        }
    }

    function Fe(e, t, r) {
        var n = !1;
        if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
        if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
        if ((r >>>= 0) <= (t >>>= 0)) return "";
        for (e || (e = "utf8");;) switch (e) {
            case "hex":
                return rt(this, t, r);
            case "utf8":
            case "utf-8":
                return Qe(this, t, r);
            case "ascii":
                return et(this, t, r);
            case "latin1":
            case "binary":
                return tt(this, t, r);
            case "base64":
                return $e(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return nt(this, t, r);
            default:
                if (n) throw new TypeError("Unknown encoding: " + e);
                e = (e + "").toLowerCase(), n = !0
        }
    }

    function qe(e, t, r) {
        var n = e[t];
        e[t] = e[r], e[r] = n
    }

    function Ve(e, t, r, n, i) {
        if (0 === e.length) return -1;
        if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
            if (i) return -1;
            r = e.length - 1
        } else if (r < 0) {
            if (!i) return -1;
            r = 0
        }
        if ("string" == typeof t && (t = Le.from(t, n)), Be(t)) return 0 === t.length ? -1 : ze(e, t, r, n, i);
        if ("number" == typeof t) return t &= 255, Le.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : ze(e, [t], r, n, i);
        throw new TypeError("val must be string, number or Buffer")
    }

    function ze(e, t, r, n, i) {
        var o, a = 1,
            s = e.length,
            u = t.length;
        if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
            if (e.length < 2 || t.length < 2) return -1;
            a = 2, s /= 2, u /= 2, r /= 2
        }

        function c(e, t) {
            return 1 === a ? e[t] : e.readUInt16BE(t * a)
        }
        if (i) {
            var f = -1;
            for (o = r; o < s; o++)
                if (c(e, o) === c(t, -1 === f ? 0 : o - f)) {
                    if (-1 === f && (f = o), o - f + 1 === u) return f * a
                } else -1 !== f && (o -= o - f), f = -1
        } else
            for (r + u > s && (r = s - u), o = r; o >= 0; o--) {
                for (var h = !0, d = 0; d < u; d++)
                    if (c(e, o + d) !== c(t, d)) {
                        h = !1;
                        break
                    }
                if (h) return o
            }
        return -1
    }

    function Ke(e, t, r, n) {
        r = Number(r) || 0;
        var i = e.length - r;
        n ? (n = Number(n)) > i && (n = i) : n = i;
        var o = t.length;
        if (o % 2 != 0) throw new TypeError("Invalid hex string");
        n > o / 2 && (n = o / 2);
        for (var a = 0; a < n; ++a) {
            var s = parseInt(t.substr(2 * a, 2), 16);
            if (isNaN(s)) return a;
            e[r + a] = s
        }
        return a
    }

    function We(e, t, r, n) {
        return bt(lt(t, e.length - r), e, r, n)
    }

    function Je(e, t, r, n) {
        return bt(function(e) {
            for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
            return t
        }(t), e, r, n)
    }

    function Ge(e, t, r, n) {
        return Je(e, t, r, n)
    }

    function Xe(e, t, r, n) {
        return bt(pt(t), e, r, n)
    }

    function Ye(e, t, r, n) {
        return bt(function(e, t) {
            for (var r, n, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) r = e.charCodeAt(a), n = r >> 8, i = r % 256, o.push(i), o.push(n);
            return o
        }(t, e.length - r), e, r, n)
    }

    function $e(e, t, r) {
        return 0 === t && r === e.length ? Ie(e) : Ie(e.slice(t, r))
    }

    function Qe(e, t, r) {
        r = Math.min(e.length, r);
        for (var n = [], i = t; i < r;) {
            var o, a, s, u, c = e[i],
                f = null,
                h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
            if (i + h <= r) switch (h) {
                case 1:
                    c < 128 && (f = c);
                    break;
                case 2:
                    128 == (192 & (o = e[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (f = u);
                    break;
                case 3:
                    o = e[i + 1], a = e[i + 2], 128 == (192 & o) && 128 == (192 & a) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (f = u);
                    break;
                case 4:
                    o = e[i + 1], a = e[i + 2], s = e[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (f = u)
            }
            null === f ? (f = 65533, h = 1) : f > 65535 && (f -= 65536, n.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), n.push(f), i += h
        }
        return function(e) {
            var t = e.length;
            if (t <= Ze) return String.fromCharCode.apply(String, e);
            var r = "",
                n = 0;
            for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += Ze));
            return r
        }(n)
    }
    Le.poolSize = 8192, Le._augment = function(e) {
        return e.__proto__ = Le.prototype, e
    }, Le.from = function(e, t, r) {
        return Re(null, e, t, r)
    }, Le.TYPED_ARRAY_SUPPORT && (Le.prototype.__proto__ = Uint8Array.prototype, Le.__proto__ = Uint8Array), Le.alloc = function(e, t, r) {
        return function(e, t, r, n) {
            return Ne(t), t <= 0 ? Ce(e, t) : void 0 !== r ? "string" == typeof n ? Ce(e, t).fill(r, n) : Ce(e, t).fill(r) : Ce(e, t)
        }(null, e, t, r)
    }, Le.allocUnsafe = function(e) {
        return je(null, e)
    }, Le.allocUnsafeSlow = function(e) {
        return je(null, e)
    }, Le.isBuffer = mt, Le.compare = function(e, t) {
        if (!Be(e) || !Be(t)) throw new TypeError("Arguments must be Buffers");
        if (e === t) return 0;
        for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
            if (e[i] !== t[i]) {
                r = e[i], n = t[i];
                break
            }
        return r < n ? -1 : n < r ? 1 : 0
    }, Le.isEncoding = function(e) {
        switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
        }
    }, Le.concat = function(e, t) {
        if (!Pe(e)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return Le.alloc(0);
        var r;
        if (void 0 === t)
            for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
        var n = Le.allocUnsafe(t),
            i = 0;
        for (r = 0; r < e.length; ++r) {
            var o = e[r];
            if (!Be(o)) throw new TypeError('"list" argument must be an Array of Buffers');
            o.copy(n, i), i += o.length
        }
        return n
    }, Le.byteLength = He, Le.prototype._isBuffer = !0, Le.prototype.swap16 = function() {
        var e = this.length;
        if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var t = 0; t < e; t += 2) qe(this, t, t + 1);
        return this
    }, Le.prototype.swap32 = function() {
        var e = this.length;
        if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var t = 0; t < e; t += 4) qe(this, t, t + 3), qe(this, t + 1, t + 2);
        return this
    }, Le.prototype.swap64 = function() {
        var e = this.length;
        if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var t = 0; t < e; t += 8) qe(this, t, t + 7), qe(this, t + 1, t + 6), qe(this, t + 2, t + 5), qe(this, t + 3, t + 4);
        return this
    }, Le.prototype.toString = function() {
        var e = 0 | this.length;
        return 0 === e ? "" : 0 === arguments.length ? Qe(this, 0, e) : Fe.apply(this, arguments)
    }, Le.prototype.equals = function(e) {
        if (!Be(e)) throw new TypeError("Argument must be a Buffer");
        return this === e || 0 === Le.compare(this, e)
    }, Le.prototype.inspect = function() {
        var e = "";
        return this.length > 0 && (e = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (e += " ... ")), "<Buffer " + e + ">"
    }, Le.prototype.compare = function(e, t, r, n, i) {
        if (!Be(e)) throw new TypeError("Argument must be a Buffer");
        if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
        if (n >= i && t >= r) return 0;
        if (n >= i) return -1;
        if (t >= r) return 1;
        if (this === e) return 0;
        for (var o = (i >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (t >>>= 0), s = Math.min(o, a), u = this.slice(n, i), c = e.slice(t, r), f = 0; f < s; ++f)
            if (u[f] !== c[f]) {
                o = u[f], a = c[f];
                break
            }
        return o < a ? -1 : a < o ? 1 : 0
    }, Le.prototype.includes = function(e, t, r) {
        return -1 !== this.indexOf(e, t, r)
    }, Le.prototype.indexOf = function(e, t, r) {
        return Ve(this, e, t, r, !0)
    }, Le.prototype.lastIndexOf = function(e, t, r) {
        return Ve(this, e, t, r, !1)
    }, Le.prototype.write = function(e, t, r, n) {
        if (void 0 === t) n = "utf8", r = this.length, t = 0;
        else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
        else {
            if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
        }
        var i = this.length - t;
        if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        for (var o = !1;;) switch (n) {
            case "hex":
                return Ke(this, e, t, r);
            case "utf8":
            case "utf-8":
                return We(this, e, t, r);
            case "ascii":
                return Je(this, e, t, r);
            case "latin1":
            case "binary":
                return Ge(this, e, t, r);
            case "base64":
                return Xe(this, e, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Ye(this, e, t, r);
            default:
                if (o) throw new TypeError("Unknown encoding: " + n);
                n = ("" + n).toLowerCase(), o = !0
        }
    }, Le.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    };
    var Ze = 4096;

    function et(e, t, r) {
        var n = "";
        r = Math.min(e.length, r);
        for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
        return n
    }

    function tt(e, t, r) {
        var n = "";
        r = Math.min(e.length, r);
        for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
        return n
    }

    function rt(e, t, r) {
        var n = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
        for (var i = "", o = t; o < r; ++o) i += dt(e[o]);
        return i
    }

    function nt(e, t, r) {
        for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
        return i
    }

    function it(e, t, r) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
    }

    function ot(e, t, r, n, i, o) {
        if (!Be(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw new RangeError("Index out of range")
    }

    function at(e, t, r, n) {
        t < 0 && (t = 65535 + t + 1);
        for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i) e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
    }

    function st(e, t, r, n) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i) e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255
    }

    function ut(e, t, r, n, i, o) {
        if (r + n > e.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range")
    }

    function ct(e, t, r, n, i) {
        return i || ut(e, 0, r, 4), Oe(e, t, r, n, 23, 4), r + 4
    }

    function ft(e, t, r, n, i) {
        return i || ut(e, 0, r, 8), Oe(e, t, r, n, 52, 8), r + 8
    }
    Le.prototype.slice = function(e, t) {
        var r, n = this.length;
        if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), Le.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = Le.prototype;
        else {
            var i = t - e;
            r = new Le(i, void 0);
            for (var o = 0; o < i; ++o) r[o] = this[o + e]
        }
        return r
    }, Le.prototype.readUIntLE = function(e, t, r) {
        e |= 0, t |= 0, r || it(e, t, this.length);
        for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
        return n
    }, Le.prototype.readUIntBE = function(e, t, r) {
        e |= 0, t |= 0, r || it(e, t, this.length);
        for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i;
        return n
    }, Le.prototype.readUInt8 = function(e, t) {
        return t || it(e, 1, this.length), this[e]
    }, Le.prototype.readUInt16LE = function(e, t) {
        return t || it(e, 2, this.length), this[e] | this[e + 1] << 8
    }, Le.prototype.readUInt16BE = function(e, t) {
        return t || it(e, 2, this.length), this[e] << 8 | this[e + 1]
    }, Le.prototype.readUInt32LE = function(e, t) {
        return t || it(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
    }, Le.prototype.readUInt32BE = function(e, t) {
        return t || it(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
    }, Le.prototype.readIntLE = function(e, t, r) {
        e |= 0, t |= 0, r || it(e, t, this.length);
        for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
        return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n
    }, Le.prototype.readIntBE = function(e, t, r) {
        e |= 0, t |= 0, r || it(e, t, this.length);
        for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);) o += this[e + --n] * i;
        return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
    }, Le.prototype.readInt8 = function(e, t) {
        return t || it(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
    }, Le.prototype.readInt16LE = function(e, t) {
        t || it(e, 2, this.length);
        var r = this[e] | this[e + 1] << 8;
        return 32768 & r ? 4294901760 | r : r
    }, Le.prototype.readInt16BE = function(e, t) {
        t || it(e, 2, this.length);
        var r = this[e + 1] | this[e] << 8;
        return 32768 & r ? 4294901760 | r : r
    }, Le.prototype.readInt32LE = function(e, t) {
        return t || it(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
    }, Le.prototype.readInt32BE = function(e, t) {
        return t || it(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
    }, Le.prototype.readFloatLE = function(e, t) {
        return t || it(e, 4, this.length), xe(this, e, !0, 23, 4)
    }, Le.prototype.readFloatBE = function(e, t) {
        return t || it(e, 4, this.length), xe(this, e, !1, 23, 4)
    }, Le.prototype.readDoubleLE = function(e, t) {
        return t || it(e, 8, this.length), xe(this, e, !0, 52, 8)
    }, Le.prototype.readDoubleBE = function(e, t) {
        return t || it(e, 8, this.length), xe(this, e, !1, 52, 8)
    }, Le.prototype.writeUIntLE = function(e, t, r, n) {
        (e = +e, t |= 0, r |= 0, n) || ot(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
        var i = 1,
            o = 0;
        for (this[t] = 255 & e; ++o < r && (i *= 256);) this[t + o] = e / i & 255;
        return t + r
    }, Le.prototype.writeUIntBE = function(e, t, r, n) {
        (e = +e, t |= 0, r |= 0, n) || ot(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
        var i = r - 1,
            o = 1;
        for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
        return t + r
    }, Le.prototype.writeUInt8 = function(e, t, r) {
        return e = +e, t |= 0, r || ot(this, e, t, 1, 255, 0), Le.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
    }, Le.prototype.writeUInt16LE = function(e, t, r) {
        return e = +e, t |= 0, r || ot(this, e, t, 2, 65535, 0), Le.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : at(this, e, t, !0), t + 2
    }, Le.prototype.writeUInt16BE = function(e, t, r) {
        return e = +e, t |= 0, r || ot(this, e, t, 2, 65535, 0), Le.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : at(this, e, t, !1), t + 2
    }, Le.prototype.writeUInt32LE = function(e, t, r) {
        return e = +e, t |= 0, r || ot(this, e, t, 4, 4294967295, 0), Le.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : st(this, e, t, !0), t + 4
    }, Le.prototype.writeUInt32BE = function(e, t, r) {
        return e = +e, t |= 0, r || ot(this, e, t, 4, 4294967295, 0), Le.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : st(this, e, t, !1), t + 4
    }, Le.prototype.writeIntLE = function(e, t, r, n) {
        if (e = +e, t |= 0, !n) {
            var i = Math.pow(2, 8 * r - 1);
            ot(this, e, t, r, i - 1, -i)
        }
        var o = 0,
            a = 1,
            s = 0;
        for (this[t] = 255 & e; ++o < r && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
        return t + r
    }, Le.prototype.writeIntBE = function(e, t, r, n) {
        if (e = +e, t |= 0, !n) {
            var i = Math.pow(2, 8 * r - 1);
            ot(this, e, t, r, i - 1, -i)
        }
        var o = r - 1,
            a = 1,
            s = 0;
        for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
        return t + r
    }, Le.prototype.writeInt8 = function(e, t, r) {
        return e = +e, t |= 0, r || ot(this, e, t, 1, 127, -128), Le.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
    }, Le.prototype.writeInt16LE = function(e, t, r) {
        return e = +e, t |= 0, r || ot(this, e, t, 2, 32767, -32768), Le.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : at(this, e, t, !0), t + 2
    }, Le.prototype.writeInt16BE = function(e, t, r) {
        return e = +e, t |= 0, r || ot(this, e, t, 2, 32767, -32768), Le.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : at(this, e, t, !1), t + 2
    }, Le.prototype.writeInt32LE = function(e, t, r) {
        return e = +e, t |= 0, r || ot(this, e, t, 4, 2147483647, -2147483648), Le.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : st(this, e, t, !0), t + 4
    }, Le.prototype.writeInt32BE = function(e, t, r) {
        return e = +e, t |= 0, r || ot(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), Le.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : st(this, e, t, !1), t + 4
    }, Le.prototype.writeFloatLE = function(e, t, r) {
        return ct(this, e, t, !0, r)
    }, Le.prototype.writeFloatBE = function(e, t, r) {
        return ct(this, e, t, !1, r)
    }, Le.prototype.writeDoubleLE = function(e, t, r) {
        return ft(this, e, t, !0, r)
    }, Le.prototype.writeDoubleBE = function(e, t, r) {
        return ft(this, e, t, !1, r)
    }, Le.prototype.copy = function(e, t, r, n) {
        if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
        if (0 === e.length || 0 === this.length) return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
        if (n < 0) throw new RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
        var i, o = n - r;
        if (this === e && r < t && t < n)
            for (i = o - 1; i >= 0; --i) e[i + t] = this[i + r];
        else if (o < 1e3 || !Le.TYPED_ARRAY_SUPPORT)
            for (i = 0; i < o; ++i) e[i + t] = this[i + r];
        else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
        return o
    }, Le.prototype.fill = function(e, t, r, n) {
        if ("string" == typeof e) {
            if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
                var i = e.charCodeAt(0);
                i < 256 && (e = i)
            }
            if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !Le.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
        } else "number" == typeof e && (e &= 255);
        if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
        if (r <= t) return this;
        var o;
        if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
            for (o = t; o < r; ++o) this[o] = e;
        else {
            var a = Be(e) ? e : lt(new Le(e, n).toString()),
                s = a.length;
            for (o = 0; o < r - t; ++o) this[o + t] = a[o % s]
        }
        return this
    };
    var ht = /[^+\/0-9A-Za-z-_]/g;

    function dt(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16)
    }

    function lt(e, t) {
        var r;
        t = t || 1 / 0;
        for (var n = e.length, i = null, o = [], a = 0; a < n; ++a) {
            if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                if (!i) {
                    if (r > 56319) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    }
                    if (a + 1 === n) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    }
                    i = r;
                    continue
                }
                if (r < 56320) {
                    (t -= 3) > -1 && o.push(239, 191, 189), i = r;
                    continue
                }
                r = 65536 + (i - 55296 << 10 | r - 56320)
            } else i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (i = null, r < 128) {
                if ((t -= 1) < 0) break;
                o.push(r)
            } else if (r < 2048) {
                if ((t -= 2) < 0) break;
                o.push(r >> 6 | 192, 63 & r | 128)
            } else if (r < 65536) {
                if ((t -= 3) < 0) break;
                o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
            } else {
                if (!(r < 1114112)) throw new Error("Invalid code point");
                if ((t -= 4) < 0) break;
                o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
            }
        }
        return o
    }

    function pt(e) {
        return function(e) {
            var t, r, n, i, o, a;
            Se || ke();
            var s = e.length;
            if (s % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            o = "=" === e[s - 2] ? 2 : "=" === e[s - 1] ? 1 : 0, a = new _e(3 * s / 4 - o), n = o > 0 ? s - 4 : s;
            var u = 0;
            for (t = 0, r = 0; t < n; t += 4, r += 3) i = we[e.charCodeAt(t)] << 18 | we[e.charCodeAt(t + 1)] << 12 | we[e.charCodeAt(t + 2)] << 6 | we[e.charCodeAt(t + 3)], a[u++] = i >> 16 & 255, a[u++] = i >> 8 & 255, a[u++] = 255 & i;
            return 2 === o ? (i = we[e.charCodeAt(t)] << 2 | we[e.charCodeAt(t + 1)] >> 4, a[u++] = 255 & i) : 1 === o && (i = we[e.charCodeAt(t)] << 10 | we[e.charCodeAt(t + 1)] << 4 | we[e.charCodeAt(t + 2)] >> 2, a[u++] = i >> 8 & 255, a[u++] = 255 & i), a
        }(function(e) {
            if ((e = function(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                }(e).replace(ht, "")).length < 2) return "";
            for (; e.length % 4 != 0;) e += "=";
            return e
        }(e))
    }

    function bt(e, t, r, n) {
        for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
        return i
    }

    function mt(e) {
        return null != e && (!!e._isBuffer || gt(e) || function(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && gt(e.slice(0, 0))
        }(e))
    }

    function gt(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    var vt = Object.freeze({
        INSPECT_MAX_BYTES: 50,
        kMaxLength: Ae,
        Buffer: Le,
        SlowBuffer: function(e) {
            return +e != e && (e = 0), Le.alloc(+e)
        },
        isBuffer: mt
    });

    function yt() {
        throw new Error("setTimeout has not been defined")
    }

    function wt() {
        throw new Error("clearTimeout has not been defined")
    }
    var _t = yt,
        St = wt;

    function kt(e) {
        if (_t === setTimeout) return setTimeout(e, 0);
        if ((_t === yt || !_t) && setTimeout) return _t = setTimeout, setTimeout(e, 0);
        try {
            return _t(e, 0)
        } catch (t) {
            try {
                return _t.call(null, e, 0)
            } catch (t) {
                return _t.call(this, e, 0)
            }
        }
    }
    "function" == typeof ve.setTimeout && (_t = setTimeout), "function" == typeof ve.clearTimeout && (St = clearTimeout);
    var Et, It = [],
        xt = !1,
        Ot = -1;

    function Tt() {
        xt && Et && (xt = !1, Et.length ? It = Et.concat(It) : Ot = -1, It.length && Pt())
    }

    function Pt() {
        if (!xt) {
            var e = kt(Tt);
            xt = !0;
            for (var t = It.length; t;) {
                for (Et = It, It = []; ++Ot < t;) Et && Et[Ot].run();
                Ot = -1, t = It.length
            }
            Et = null, xt = !1,
                function(e) {
                    if (St === clearTimeout) return clearTimeout(e);
                    if ((St === wt || !St) && clearTimeout) return St = clearTimeout, clearTimeout(e);
                    try {
                        St(e)
                    } catch (t) {
                        try {
                            return St.call(null, e)
                        } catch (t) {
                            return St.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function At(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        It.push(new Mt(e, t)), 1 !== It.length || xt || kt(Pt)
    }

    function Mt(e, t) {
        this.fun = e, this.array = t
    }
    Mt.prototype.run = function() {
        this.fun.apply(null, this.array)
    };

    function Ct() {}
    var Lt = Ct,
        Rt = Ct,
        Nt = Ct,
        jt = Ct,
        Ut = Ct,
        Dt = Ct,
        Bt = Ct;
    var Ht = ve.performance || {},
        Ft = Ht.now || Ht.mozNow || Ht.msNow || Ht.oNow || Ht.webkitNow || function() {
            return (new Date).getTime()
        };
    var qt = new Date;
    var Vt = {
            nextTick: At,
            title: "browser",
            browser: !0,
            env: {},
            argv: [],
            version: "",
            versions: {},
            on: Lt,
            addListener: Rt,
            once: Nt,
            off: jt,
            removeListener: Ut,
            removeAllListeners: Dt,
            emit: Bt,
            binding: function(e) {
                throw new Error("process.binding is not supported")
            },
            cwd: function() {
                return "/"
            },
            chdir: function(e) {
                throw new Error("process.chdir is not supported")
            },
            umask: function() {
                return 0
            },
            hrtime: function(e) {
                var t = .001 * Ft.call(Ht),
                    r = Math.floor(t),
                    n = Math.floor(t % 1 * 1e9);
                return e && (r -= e[0], (n -= e[1]) < 0 && (r--, n += 1e9)), [r, n]
            },
            platform: "browser",
            release: {},
            config: {},
            uptime: function() {
                return (new Date - qt) / 1e3
            }
        },
        zt = 2147483647,
        Kt = 36,
        Wt = 1,
        Jt = 26,
        Gt = 38,
        Xt = 700,
        Yt = 72,
        $t = 128,
        Qt = "-",
        Zt = /[^\x20-\x7E]/,
        er = /[\x2E\u3002\uFF0E\uFF61]/g,
        tr = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        },
        rr = Kt - Wt,
        nr = Math.floor,
        ir = String.fromCharCode;

    function or(e) {
        throw new RangeError(tr[e])
    }

    function ar(e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
    }

    function sr(e, t, r) {
        var n = 0;
        for (e = r ? nr(e / Xt) : e >> 1, e += nr(e / t); e > rr * Jt >> 1; n += Kt) e = nr(e / rr);
        return nr(n + (rr + 1) * e / (e + Gt))
    }

    function ur(e) {
        return function(e, t) {
            var r = e.split("@"),
                n = "";
            r.length > 1 && (n = r[0] + "@", e = r[1]);
            var i = function(e, t) {
                for (var r = e.length, n = []; r--;) n[r] = t(e[r]);
                return n
            }((e = e.replace(er, ".")).split("."), t).join(".");
            return n + i
        }(e, function(e) {
            return Zt.test(e) ? "xn--" + function(e) {
                var t, r, n, i, o, a, s, u, c, f, h, d, l, p, b, m = [];
                for (d = (e = function(e) {
                        for (var t, r, n = [], i = 0, o = e.length; i < o;)(t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o ? 56320 == (64512 & (r = e.charCodeAt(i++))) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), i--) : n.push(t);
                        return n
                    }(e)).length, t = $t, r = 0, o = Yt, a = 0; a < d; ++a)(h = e[a]) < 128 && m.push(ir(h));
                for (n = i = m.length, i && m.push(Qt); n < d;) {
                    for (s = zt, a = 0; a < d; ++a)(h = e[a]) >= t && h < s && (s = h);
                    for (s - t > nr((zt - r) / (l = n + 1)) && or("overflow"), r += (s - t) * l, t = s, a = 0; a < d; ++a)
                        if ((h = e[a]) < t && ++r > zt && or("overflow"), h == t) {
                            for (u = r, c = Kt; !(u < (f = c <= o ? Wt : c >= o + Jt ? Jt : c - o)); c += Kt) b = u - f, p = Kt - f, m.push(ir(ar(f + b % p, 0))), u = nr(b / p);
                            m.push(ir(ar(u, 0))), o = sr(r, l, n == i), r = 0, ++n
                        }++r, ++t
                }
                return m.join("")
            }(e) : e
        })
    }
    var cr = "function" == typeof Object.create ? function(e, t) {
            e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : function(e, t) {
            e.super_ = t;
            var r = function() {};
            r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
        },
        fr = /%[sdj%]/g;

    function hr(e) {
        if (!kr(e)) {
            for (var t = [], r = 0; r < arguments.length; r++) t.push(br(arguments[r]));
            return t.join(" ")
        }
        r = 1;
        for (var n = arguments, i = n.length, o = String(e).replace(fr, function(e) {
                if ("%%" === e) return "%";
                if (r >= i) return e;
                switch (e) {
                    case "%s":
                        return String(n[r++]);
                    case "%d":
                        return Number(n[r++]);
                    case "%j":
                        try {
                            return JSON.stringify(n[r++])
                        } catch (e) {
                            return "[Circular]"
                        }
                    default:
                        return e
                }
            }), a = n[r]; r < i; a = n[++r]) Sr(a) || !xr(a) ? o += " " + a : o += " " + br(a);
        return o
    }

    function dr(e, t) {
        if (Er(ve.process)) return function() {
            return dr(e, t).apply(this, arguments)
        };
        if (!0 === Vt.noDeprecation) return e;
        var r = !1;
        return function() {
            if (!r) {
                if (Vt.throwDeprecation) throw new Error(t);
                Vt.traceDeprecation ? console.trace(t) : console.error(t), r = !0
            }
            return e.apply(this, arguments)
        }
    }
    var lr, pr = {};

    function br(e, t) {
        var r = {
            seen: [],
            stylize: gr
        };
        return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), _r(t) ? r.showHidden = t : t && function(e, t) {
            if (!t || !xr(t)) return e;
            var r = Object.keys(t),
                n = r.length;
            for (; n--;) e[r[n]] = t[r[n]]
        }(r, t), Er(r.showHidden) && (r.showHidden = !1), Er(r.depth) && (r.depth = 2), Er(r.colors) && (r.colors = !1), Er(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = mr), vr(r, e, r.depth)
    }

    function mr(e, t) {
        var r = br.styles[t];
        return r ? "[" + br.colors[r][0] + "m" + e + "[" + br.colors[r][1] + "m" : e
    }

    function gr(e, t) {
        return e
    }

    function vr(e, t, r) {
        if (e.customInspect && t && Pr(t.inspect) && t.inspect !== br && (!t.constructor || t.constructor.prototype !== t)) {
            var n = t.inspect(r, e);
            return kr(n) || (n = vr(e, n, r)), n
        }
        var i = function(e, t) {
            if (Er(t)) return e.stylize("undefined", "undefined");
            if (kr(t)) {
                var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return e.stylize(r, "string")
            }
            if (n = t, "number" == typeof n) return e.stylize("" + t, "number");
            var n;
            if (_r(t)) return e.stylize("" + t, "boolean");
            if (Sr(t)) return e.stylize("null", "null")
        }(e, t);
        if (i) return i;
        var o = Object.keys(t),
            a = function(e) {
                var t = {};
                return e.forEach(function(e, r) {
                    t[e] = !0
                }), t
            }(o);
        if (e.showHidden && (o = Object.getOwnPropertyNames(t)), Tr(t) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return yr(t);
        if (0 === o.length) {
            if (Pr(t)) {
                var s = t.name ? ": " + t.name : "";
                return e.stylize("[Function" + s + "]", "special")
            }
            if (Ir(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
            if (Or(t)) return e.stylize(Date.prototype.toString.call(t), "date");
            if (Tr(t)) return yr(t)
        }
        var u, c, f = "",
            h = !1,
            d = ["{", "}"];
        (u = t, Array.isArray(u) && (h = !0, d = ["[", "]"]), Pr(t)) && (f = " [Function" + (t.name ? ": " + t.name : "") + "]");
        return Ir(t) && (f = " " + RegExp.prototype.toString.call(t)), Or(t) && (f = " " + Date.prototype.toUTCString.call(t)), Tr(t) && (f = " " + yr(t)), 0 !== o.length || h && 0 != t.length ? r < 0 ? Ir(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(t), c = h ? function(e, t, r, n, i) {
            for (var o = [], a = 0, s = t.length; a < s; ++a) Mr(t, String(a)) ? o.push(wr(e, t, r, n, String(a), !0)) : o.push("");
            return i.forEach(function(i) {
                i.match(/^\d+$/) || o.push(wr(e, t, r, n, i, !0))
            }), o
        }(e, t, r, a, o) : o.map(function(n) {
            return wr(e, t, r, a, n, h)
        }), e.seen.pop(), function(e, t, r) {
            if (e.reduce(function(e, t) {
                    return t.indexOf("\n"), e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0) > 60) return r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1];
            return r[0] + t + " " + e.join(", ") + " " + r[1]
        }(c, f, d)) : d[0] + f + d[1]
    }

    function yr(e) {
        return "[" + Error.prototype.toString.call(e) + "]"
    }

    function wr(e, t, r, n, i, o) {
        var a, s, u;
        if ((u = Object.getOwnPropertyDescriptor(t, i) || {
                value: t[i]
            }).get ? s = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : u.set && (s = e.stylize("[Setter]", "special")), Mr(n, i) || (a = "[" + i + "]"), s || (e.seen.indexOf(u.value) < 0 ? (s = Sr(r) ? vr(e, u.value, null) : vr(e, u.value, r - 1)).indexOf("\n") > -1 && (s = o ? s.split("\n").map(function(e) {
                return "  " + e
            }).join("\n").substr(2) : "\n" + s.split("\n").map(function(e) {
                return "   " + e
            }).join("\n")) : s = e.stylize("[Circular]", "special")), Er(a)) {
            if (o && i.match(/^\d+$/)) return s;
            (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"))
        }
        return a + ": " + s
    }

    function _r(e) {
        return "boolean" == typeof e
    }

    function Sr(e) {
        return null === e
    }

    function kr(e) {
        return "string" == typeof e
    }

    function Er(e) {
        return void 0 === e
    }

    function Ir(e) {
        return xr(e) && "[object RegExp]" === Ar(e)
    }

    function xr(e) {
        return "object" == typeof e && null !== e
    }

    function Or(e) {
        return xr(e) && "[object Date]" === Ar(e)
    }

    function Tr(e) {
        return xr(e) && ("[object Error]" === Ar(e) || e instanceof Error)
    }

    function Pr(e) {
        return "function" == typeof e
    }

    function Ar(e) {
        return Object.prototype.toString.call(e)
    }

    function Mr(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function Cr(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    br.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39]
    }, br.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        regexp: "red"
    };
    var Lr = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    };

    function Rr(e) {
        switch (typeof e) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
        }
    }

    function Nr(e, t) {
        if (e.map) return e.map(t);
        for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
        return r
    }
    var jr = Object.keys || function(e) {
        var t = [];
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
        return t
    };

    function Ur(e, t, r, n) {
        t = t || "&", r = r || "=";
        var i = {};
        if ("string" != typeof e || 0 === e.length) return i;
        var o = /\+/g;
        e = e.split(t);
        var a = 1e3;
        n && "number" == typeof n.maxKeys && (a = n.maxKeys);
        var s = e.length;
        a > 0 && s > a && (s = a);
        for (var u = 0; u < s; ++u) {
            var c, f, h, d, l = e[u].replace(o, "%20"),
                p = l.indexOf(r);
            p >= 0 ? (c = l.substr(0, p), f = l.substr(p + 1)) : (c = l, f = ""), h = decodeURIComponent(c), d = decodeURIComponent(f), Cr(i, h) ? Lr(i[h]) ? i[h].push(d) : i[h] = [i[h], d] : i[h] = d
        }
        return i
    }
    var Dr = {
        parse: Zr,
        resolve: function(e, t) {
            return Zr(e, !1, !0).resolve(t)
        },
        resolveObject: function(e, t) {
            return e ? Zr(e, !1, !0).resolveObject(t) : t
        },
        format: function(e) {
            kr(e) && (e = en({}, e));
            return tn(e)
        },
        Url: Br
    };

    function Br() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }
    var Hr = /^([a-z0-9.+-]+:)/i,
        Fr = /:[0-9]*$/,
        qr = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        Vr = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
        zr = ["'"].concat(Vr),
        Kr = ["%", "/", "?", ";", "#"].concat(zr),
        Wr = ["/", "?", "#"],
        Jr = 255,
        Gr = /^[+a-z0-9A-Z_-]{0,63}$/,
        Xr = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        Yr = {
            javascript: !0,
            "javascript:": !0
        },
        $r = {
            javascript: !0,
            "javascript:": !0
        },
        Qr = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        };

    function Zr(e, t, r) {
        if (e && xr(e) && e instanceof Br) return e;
        var n = new Br;
        return n.parse(e, t, r), n
    }

    function en(e, t, r, n) {
        if (!kr(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
        var i = t.indexOf("?"),
            o = -1 !== i && i < t.indexOf("#") ? "?" : "#",
            a = t.split(o);
        a[0] = a[0].replace(/\\/g, "/");
        var s = t = a.join(o);
        if (s = s.trim(), !n && 1 === t.split("#").length) {
            var u = qr.exec(s);
            if (u) return e.path = s, e.href = s, e.pathname = u[1], u[2] ? (e.search = u[2], e.query = r ? Ur(e.search.substr(1)) : e.search.substr(1)) : r && (e.search = "", e.query = {}), e
        }
        var c, f, h, d, l = Hr.exec(s);
        if (l) {
            var p = (l = l[0]).toLowerCase();
            e.protocol = p, s = s.substr(l.length)
        }
        if (n || l || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var b = "//" === s.substr(0, 2);
            !b || l && $r[l] || (s = s.substr(2), e.slashes = !0)
        }
        if (!$r[l] && (b || l && !Qr[l])) {
            var m, g, v = -1;
            for (c = 0; c < Wr.length; c++) - 1 !== (f = s.indexOf(Wr[c])) && (-1 === v || f < v) && (v = f);
            for (-1 !== (g = -1 === v ? s.lastIndexOf("@") : s.lastIndexOf("@", v)) && (m = s.slice(0, g), s = s.slice(g + 1), e.auth = decodeURIComponent(m)), v = -1, c = 0; c < Kr.length; c++) - 1 !== (f = s.indexOf(Kr[c])) && (-1 === v || f < v) && (v = f); - 1 === v && (v = s.length), e.host = s.slice(0, v), s = s.slice(v), rn(e), e.hostname = e.hostname || "";
            var y = "[" === e.hostname[0] && "]" === e.hostname[e.hostname.length - 1];
            if (!y) {
                var w = e.hostname.split(/\./);
                for (c = 0, h = w.length; c < h; c++) {
                    var _ = w[c];
                    if (_ && !_.match(Gr)) {
                        for (var S = "", k = 0, E = _.length; k < E; k++) _.charCodeAt(k) > 127 ? S += "x" : S += _[k];
                        if (!S.match(Gr)) {
                            var I = w.slice(0, c),
                                x = w.slice(c + 1),
                                O = _.match(Xr);
                            O && (I.push(O[1]), x.unshift(O[2])), x.length && (s = "/" + x.join(".") + s), e.hostname = I.join(".");
                            break
                        }
                    }
                }
            }
            e.hostname.length > Jr ? e.hostname = "" : e.hostname = e.hostname.toLowerCase(), y || (e.hostname = ur(e.hostname)), d = e.port ? ":" + e.port : "";
            var T = e.hostname || "";
            e.host = T + d, e.href += e.host, y && (e.hostname = e.hostname.substr(1, e.hostname.length - 2), "/" !== s[0] && (s = "/" + s))
        }
        if (!Yr[p])
            for (c = 0, h = zr.length; c < h; c++) {
                var P = zr[c];
                if (-1 !== s.indexOf(P)) {
                    var A = encodeURIComponent(P);
                    A === P && (A = escape(P)), s = s.split(P).join(A)
                }
            }
        var M = s.indexOf("#"); - 1 !== M && (e.hash = s.substr(M), s = s.slice(0, M));
        var C = s.indexOf("?");
        if (-1 !== C ? (e.search = s.substr(C), e.query = s.substr(C + 1), r && (e.query = Ur(e.query)), s = s.slice(0, C)) : r && (e.search = "", e.query = {}), s && (e.pathname = s), Qr[p] && e.hostname && !e.pathname && (e.pathname = "/"), e.pathname || e.search) {
            d = e.pathname || "";
            var L = e.search || "";
            e.path = d + L
        }
        return e.href = tn(e), e
    }

    function tn(e) {
        var t = e.auth || "";
        t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
        var r = e.protocol || "",
            n = e.pathname || "",
            i = e.hash || "",
            o = !1,
            a = "";
        e.host ? o = t + e.host : e.hostname && (o = t + (-1 === e.hostname.indexOf(":") ? e.hostname : "[" + this.hostname + "]"), e.port && (o += ":" + e.port)), e.query && xr(e.query) && Object.keys(e.query).length && (a = function(e, t, r, n) {
            return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? Nr(jr(e), function(n) {
                var i = encodeURIComponent(Rr(n)) + r;
                return Lr(e[n]) ? Nr(e[n], function(e) {
                    return i + encodeURIComponent(Rr(e))
                }).join(t) : i + encodeURIComponent(Rr(e[n]))
            }).join(t) : n ? encodeURIComponent(Rr(n)) + r + encodeURIComponent(Rr(e)) : ""
        }(e.query));
        var s = e.search || a && "?" + a || "";
        return r && ":" !== r.substr(-1) && (r += ":"), e.slashes || (!r || Qr[r]) && !1 !== o ? (o = "//" + (o || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : o || (o = ""), i && "#" !== i.charAt(0) && (i = "#" + i), s && "?" !== s.charAt(0) && (s = "?" + s), r + o + (n = n.replace(/[?#]/g, function(e) {
            return encodeURIComponent(e)
        })) + (s = s.replace("#", "%23")) + i
    }

    function rn(e) {
        var t = e.host,
            r = Fr.exec(t);
        r && (":" !== (r = r[0]) && (e.port = r.substr(1)), t = t.substr(0, t.length - r.length)), t && (e.hostname = t)
    }
    Br.prototype.parse = function(e, t, r) {
        return en(this, e, t, r)
    }, Br.prototype.format = function() {
        return tn(this)
    }, Br.prototype.resolve = function(e) {
        return this.resolveObject(Zr(e, !1, !0)).format()
    }, Br.prototype.resolveObject = function(e) {
        if (kr(e)) {
            var t = new Br;
            t.parse(e, !1, !0), e = t
        }
        for (var r, n = new Br, i = Object.keys(this), o = 0; o < i.length; o++) {
            var a = i[o];
            n[a] = this[a]
        }
        if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
        if (e.slashes && !e.protocol) {
            for (var s = Object.keys(e), u = 0; u < s.length; u++) {
                var c = s[u];
                "protocol" !== c && (n[c] = e[c])
            }
            return Qr[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
        }
        if (e.protocol && e.protocol !== n.protocol) {
            if (!Qr[e.protocol]) {
                for (var f = Object.keys(e), h = 0; h < f.length; h++) {
                    var d = f[h];
                    n[d] = e[d]
                }
                return n.href = n.format(), n
            }
            if (n.protocol = e.protocol, e.host || $r[e.protocol]) n.pathname = e.pathname;
            else {
                for (r = (e.pathname || "").split("/"); r.length && !(e.host = r.shift()););
                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== r[0] && r.unshift(""), r.length < 2 && r.unshift(""), n.pathname = r.join("/")
            }
            if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
                var l = n.pathname || "",
                    p = n.search || "";
                n.path = l + p
            }
            return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
        }
        var b, m = n.pathname && "/" === n.pathname.charAt(0),
            g = e.host || e.pathname && "/" === e.pathname.charAt(0),
            v = g || m || n.host && e.pathname,
            y = v,
            w = n.pathname && n.pathname.split("/") || [],
            _ = n.protocol && !Qr[n.protocol];
        if (r = e.pathname && e.pathname.split("/") || [], _ && (n.hostname = "", n.port = null, n.host && ("" === w[0] ? w[0] = n.host : w.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === r[0] ? r[0] = e.host : r.unshift(e.host)), e.host = null), v = v && ("" === r[0] || "" === w[0])), g) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, w = r;
        else if (r.length) w || (w = []), w.pop(), w = w.concat(r), n.search = e.search, n.query = e.query;
        else if (null != e.search) return _ && (n.hostname = n.host = w.shift(), (b = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = b.shift(), n.host = n.hostname = b.shift())), n.search = e.search, n.query = e.query, Sr(n.pathname) && Sr(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
        if (!w.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
        for (var S = w.slice(-1)[0], k = (n.host || e.host || w.length > 1) && ("." === S || ".." === S) || "" === S, E = 0, I = w.length; I >= 0; I--) "." === (S = w[I]) ? w.splice(I, 1) : ".." === S ? (w.splice(I, 1), E++) : E && (w.splice(I, 1), E--);
        if (!v && !y)
            for (; E--; E) w.unshift("..");
        !v || "" === w[0] || w[0] && "/" === w[0].charAt(0) || w.unshift(""), k && "/" !== w.join("/").substr(-1) && w.push("");
        var x = "" === w[0] || w[0] && "/" === w[0].charAt(0);
        return _ && (n.hostname = n.host = x ? "" : w.length ? w.shift() : "", (b = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = b.shift(), n.host = n.hostname = b.shift())), (v = v || n.host && w.length) && !x && w.unshift(""), w.length ? n.pathname = w.join("/") : (n.pathname = null, n.path = null), Sr(n.pathname) && Sr(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
    }, Br.prototype.parseHost = function() {
        return rn(this)
    };
    var nn, on, an = {},
        sn = mn(ve.fetch) && mn(ve.ReadableStream);

    function un(e) {
        on || (on = new ve.XMLHttpRequest).open("GET", ve.location.host ? "/" : "https://example.com");
        try {
            return on.responseType = e, on.responseType === e
        } catch (e) {
            return !1
        }
    }
    var cn = void 0 !== ve.ArrayBuffer,
        fn = cn && mn(ve.ArrayBuffer.prototype.slice),
        hn = cn && un("arraybuffer"),
        dn = !sn && fn && un("ms-stream"),
        ln = !sn && cn && un("moz-chunked-arraybuffer"),
        pn = mn(on.overrideMimeType),
        bn = mn(ve.VBArray);

    function mn(e) {
        return "function" == typeof e
    }

    function gn() {}

    function vn() {
        vn.init.call(this)
    }

    function yn(e) {
        return void 0 === e._maxListeners ? vn.defaultMaxListeners : e._maxListeners
    }

    function wn(e, t, r) {
        if (t) e.call(r);
        else
            for (var n = e.length, i = Tn(e, n), o = 0; o < n; ++o) i[o].call(r)
    }

    function _n(e, t, r, n) {
        if (t) e.call(r, n);
        else
            for (var i = e.length, o = Tn(e, i), a = 0; a < i; ++a) o[a].call(r, n)
    }

    function Sn(e, t, r, n, i) {
        if (t) e.call(r, n, i);
        else
            for (var o = e.length, a = Tn(e, o), s = 0; s < o; ++s) a[s].call(r, n, i)
    }

    function kn(e, t, r, n, i, o) {
        if (t) e.call(r, n, i, o);
        else
            for (var a = e.length, s = Tn(e, a), u = 0; u < a; ++u) s[u].call(r, n, i, o)
    }

    function En(e, t, r, n) {
        if (t) e.apply(r, n);
        else
            for (var i = e.length, o = Tn(e, i), a = 0; a < i; ++a) o[a].apply(r, n)
    }

    function In(e, t, r, n) {
        var i, o, a, s;
        if ("function" != typeof r) throw new TypeError('"listener" argument must be a function');
        if ((o = e._events) ? (o.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), a = o[t]) : (o = e._events = new gn, e._eventsCount = 0), a) {
            if ("function" == typeof a ? a = o[t] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), !a.warned && (i = yn(e)) && i > 0 && a.length > i) {
                a.warned = !0;
                var u = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
                u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = a.length, s = u, "function" == typeof console.warn ? console.warn(s) : console.log(s)
            }
        } else a = o[t] = r, ++e._eventsCount;
        return e
    }

    function xn(e, t, r) {
        var n = !1;

        function i() {
            e.removeListener(t, i), n || (n = !0, r.apply(e, arguments))
        }
        return i.listener = r, i
    }

    function On(e) {
        var t = this._events;
        if (t) {
            var r = t[e];
            if ("function" == typeof r) return 1;
            if (r) return r.length
        }
        return 0
    }

    function Tn(e, t) {
        for (var r = new Array(t); t--;) r[t] = e[t];
        return r
    }

    function Pn() {
        this.head = null, this.tail = null, this.length = 0
    }
    on = null, gn.prototype = Object.create(null), vn.EventEmitter = vn, vn.usingDomains = !1, vn.prototype.domain = void 0, vn.prototype._events = void 0, vn.prototype._maxListeners = void 0, vn.defaultMaxListeners = 10, vn.init = function() {
        this.domain = null, vn.usingDomains && (void 0).active && (void 0).Domain, this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new gn, this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, vn.prototype.setMaxListeners = function(e) {
        if ("number" != typeof e || e < 0 || isNaN(e)) throw new TypeError('"n" argument must be a positive number');
        return this._maxListeners = e, this
    }, vn.prototype.getMaxListeners = function() {
        return yn(this)
    }, vn.prototype.emit = function(e) {
        var t, r, n, i, o, a, s, u = "error" === e;
        if (a = this._events) u = u && null == a.error;
        else if (!u) return !1;
        if (s = this.domain, u) {
            if (t = arguments[1], !s) {
                if (t instanceof Error) throw t;
                var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw c.context = t, c
            }
            return t || (t = new Error('Uncaught, unspecified "error" event')), t.domainEmitter = this, t.domain = s, t.domainThrown = !1, s.emit("error", t), !1
        }
        if (!(r = a[e])) return !1;
        var f = "function" == typeof r;
        switch (n = arguments.length) {
            case 1:
                wn(r, f, this);
                break;
            case 2:
                _n(r, f, this, arguments[1]);
                break;
            case 3:
                Sn(r, f, this, arguments[1], arguments[2]);
                break;
            case 4:
                kn(r, f, this, arguments[1], arguments[2], arguments[3]);
                break;
            default:
                for (i = new Array(n - 1), o = 1; o < n; o++) i[o - 1] = arguments[o];
                En(r, f, this, i)
        }
        return !0
    }, vn.prototype.addListener = function(e, t) {
        return In(this, e, t, !1)
    }, vn.prototype.on = vn.prototype.addListener, vn.prototype.prependListener = function(e, t) {
        return In(this, e, t, !0)
    }, vn.prototype.once = function(e, t) {
        if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
        return this.on(e, xn(this, e, t)), this
    }, vn.prototype.prependOnceListener = function(e, t) {
        if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
        return this.prependListener(e, xn(this, e, t)), this
    }, vn.prototype.removeListener = function(e, t) {
        var r, n, i, o, a;
        if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
        if (!(n = this._events)) return this;
        if (!(r = n[e])) return this;
        if (r === t || r.listener && r.listener === t) 0 == --this._eventsCount ? this._events = new gn : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));
        else if ("function" != typeof r) {
            for (i = -1, o = r.length; o-- > 0;)
                if (r[o] === t || r[o].listener && r[o].listener === t) {
                    a = r[o].listener, i = o;
                    break
                }
            if (i < 0) return this;
            if (1 === r.length) {
                if (r[0] = void 0, 0 == --this._eventsCount) return this._events = new gn, this;
                delete n[e]
            } else ! function(e, t) {
                for (var r = t, n = r + 1, i = e.length; n < i; r += 1, n += 1) e[r] = e[n];
                e.pop()
            }(r, i);
            n.removeListener && this.emit("removeListener", e, a || t)
        }
        return this
    }, vn.prototype.removeAllListeners = function(e) {
        var t, r;
        if (!(r = this._events)) return this;
        if (!r.removeListener) return 0 === arguments.length ? (this._events = new gn, this._eventsCount = 0) : r[e] && (0 == --this._eventsCount ? this._events = new gn : delete r[e]), this;
        if (0 === arguments.length) {
            for (var n, i = Object.keys(r), o = 0; o < i.length; ++o) "removeListener" !== (n = i[o]) && this.removeAllListeners(n);
            return this.removeAllListeners("removeListener"), this._events = new gn, this._eventsCount = 0, this
        }
        if ("function" == typeof(t = r[e])) this.removeListener(e, t);
        else if (t)
            do {
                this.removeListener(e, t[t.length - 1])
            } while (t[0]);
        return this
    }, vn.prototype.listeners = function(e) {
        var t, r = this._events;
        return r && (t = r[e]) ? "function" == typeof t ? [t.listener || t] : function(e) {
            for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
            return t
        }(t) : []
    }, vn.listenerCount = function(e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : On.call(e, t)
    }, vn.prototype.listenerCount = On, vn.prototype.eventNames = function() {
        return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []
    }, Pn.prototype.push = function(e) {
        var t = {
            data: e,
            next: null
        };
        this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
    }, Pn.prototype.unshift = function(e) {
        var t = {
            data: e,
            next: this.head
        };
        0 === this.length && (this.tail = t), this.head = t, ++this.length
    }, Pn.prototype.shift = function() {
        if (0 !== this.length) {
            var e = this.head.data;
            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
        }
    }, Pn.prototype.clear = function() {
        this.head = this.tail = null, this.length = 0
    }, Pn.prototype.join = function(e) {
        if (0 === this.length) return "";
        for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
        return r
    }, Pn.prototype.concat = function(e) {
        if (0 === this.length) return Le.alloc(0);
        if (1 === this.length) return this.head.data;
        for (var t = Le.allocUnsafe(e >>> 0), r = this.head, n = 0; r;) r.data.copy(t, n), n += r.data.length, r = r.next;
        return t
    };
    var An = Le.isEncoding || function(e) {
        switch (e && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
                return !0;
            default:
                return !1
        }
    };

    function Mn(e) {
        switch (this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, ""), function(e) {
            if (e && !An(e)) throw new Error("Unknown encoding: " + e)
        }(e), this.encoding) {
            case "utf8":
                this.surrogateSize = 3;
                break;
            case "ucs2":
            case "utf16le":
                this.surrogateSize = 2, this.detectIncompleteChar = Ln;
                break;
            case "base64":
                this.surrogateSize = 3, this.detectIncompleteChar = Rn;
                break;
            default:
                return void(this.write = Cn)
        }
        this.charBuffer = new Le(6), this.charReceived = 0, this.charLength = 0
    }

    function Cn(e) {
        return e.toString(this.encoding)
    }

    function Ln(e) {
        this.charReceived = e.length % 2, this.charLength = this.charReceived ? 2 : 0
    }

    function Rn(e) {
        this.charReceived = e.length % 3, this.charLength = this.charReceived ? 3 : 0
    }
    Mn.prototype.write = function(e) {
        for (var t = ""; this.charLength;) {
            var r = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;
            if (e.copy(this.charBuffer, this.charReceived, 0, r), this.charReceived += r, this.charReceived < this.charLength) return "";
            if (e = e.slice(r, e.length), !((i = (t = this.charBuffer.slice(0, this.charLength).toString(this.encoding)).charCodeAt(t.length - 1)) >= 55296 && i <= 56319)) {
                if (this.charReceived = this.charLength = 0, 0 === e.length) return t;
                break
            }
            this.charLength += this.surrogateSize, t = ""
        }
        this.detectIncompleteChar(e);
        var n = e.length;
        this.charLength && (e.copy(this.charBuffer, 0, e.length - this.charReceived, n), n -= this.charReceived);
        var i;
        n = (t += e.toString(this.encoding, 0, n)).length - 1;
        if ((i = t.charCodeAt(n)) >= 55296 && i <= 56319) {
            var o = this.surrogateSize;
            return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), e.copy(this.charBuffer, 0, 0, o), t.substring(0, n)
        }
        return t
    }, Mn.prototype.detectIncompleteChar = function(e) {
        for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
            var r = e[e.length - t];
            if (1 == t && r >> 5 == 6) {
                this.charLength = 2;
                break
            }
            if (t <= 2 && r >> 4 == 14) {
                this.charLength = 3;
                break
            }
            if (t <= 3 && r >> 3 == 30) {
                this.charLength = 4;
                break
            }
        }
        this.charReceived = t
    }, Mn.prototype.end = function(e) {
        var t = "";
        if (e && e.length && (t = this.write(e)), this.charReceived) {
            var r = this.charReceived,
                n = this.charBuffer,
                i = this.encoding;
            t += n.slice(0, r).toString(i)
        }
        return t
    };
    var Nn = Object.freeze({
        StringDecoder: Mn
    });
    Dn.ReadableState = Un;
    var jn = function(e) {
        if (Er(lr) && (lr = Vt.env.NODE_DEBUG || ""), e = e.toUpperCase(), !pr[e])
            if (new RegExp("\\b" + e + "\\b", "i").test(lr)) {
                pr[e] = function() {
                    var t = hr.apply(null, arguments);
                    console.error("%s %d: %s", e, 0, t)
                }
            } else pr[e] = function() {};
        return pr[e]
    }("stream");

    function Un(e, t) {
        e = e || {}, this.objectMode = !!e.objectMode, t instanceof di && (this.objectMode = this.objectMode || !!e.readableObjectMode);
        var r = e.highWaterMark,
            n = this.objectMode ? 16 : 16384;
        this.highWaterMark = r || 0 === r ? r : n, this.highWaterMark = ~~this.highWaterMark, this.buffer = new Pn, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (this.decoder = new Mn(e.encoding), this.encoding = e.encoding)
    }

    function Dn(e) {
        if (!(this instanceof Dn)) return new Dn(e);
        this._readableState = new Un(e, this), this.readable = !0, e && "function" == typeof e.read && (this._read = e.read), vn.call(this)
    }

    function Bn(e, t, r, n, i) {
        var o = function(e, t) {
            var r = null;
            mt(t) || "string" == typeof t || null == t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk"));
            return r
        }(t, r);
        if (o) e.emit("error", o);
        else if (null === r) t.reading = !1,
            function(e, t) {
                if (t.ended) return;
                if (t.decoder) {
                    var r = t.decoder.end();
                    r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
                }
                t.ended = !0, qn(e)
            }(e, t);
        else if (t.objectMode || r && r.length > 0)
            if (t.ended && !i) {
                var a = new Error("stream.push() after EOF");
                e.emit("error", a)
            } else if (t.endEmitted && i) {
            var s = new Error("stream.unshift() after end event");
            e.emit("error", s)
        } else {
            var u;
            !t.decoder || i || n || (r = t.decoder.write(r), u = !t.objectMode && 0 === r.length), i || (t.reading = !1), u || (t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, i ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && qn(e))),
                function(e, t) {
                    t.readingMore || (t.readingMore = !0, At(zn, e, t))
                }(e, t)
        } else i || (t.reading = !1);
        return function(e) {
            return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
        }(t)
    }
    cr(Dn, vn), Dn.prototype.push = function(e, t) {
        var r = this._readableState;
        return r.objectMode || "string" != typeof e || (t = t || r.defaultEncoding) !== r.encoding && (e = Le.from(e, t), t = ""), Bn(this, r, e, t, !1)
    }, Dn.prototype.unshift = function(e) {
        return Bn(this, this._readableState, e, "", !0)
    }, Dn.prototype.isPaused = function() {
        return !1 === this._readableState.flowing
    }, Dn.prototype.setEncoding = function(e) {
        return this._readableState.decoder = new Mn(e), this._readableState.encoding = e, this
    };
    var Hn = 8388608;

    function Fn(e, t) {
        return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
            return e >= Hn ? e = Hn : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
        }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
    }

    function qn(e) {
        var t = e._readableState;
        t.needReadable = !1, t.emittedReadable || (jn("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? At(Vn, e) : Vn(e))
    }

    function Vn(e) {
        jn("emit readable"), e.emit("readable"), Jn(e)
    }

    function zn(e, t) {
        for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (jn("maybeReadMore read 0"), e.read(0), r !== t.length);) r = t.length;
        t.readingMore = !1
    }

    function Kn(e) {
        jn("readable nexttick read 0"), e.read(0)
    }

    function Wn(e, t) {
        t.reading || (jn("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), Jn(e), t.flowing && !t.reading && e.read(0)
    }

    function Jn(e) {
        var t = e._readableState;
        for (jn("flow", t.flowing); t.flowing && null !== e.read(););
    }

    function Gn(e, t) {
        return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : r = function(e, t, r) {
            var n;
            e < t.head.data.length ? (n = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : r ? function(e, t) {
                var r = t.head,
                    n = 1,
                    i = r.data;
                e -= i.length;
                for (; r = r.next;) {
                    var o = r.data,
                        a = e > o.length ? o.length : e;
                    if (a === o.length ? i += o : i += o.slice(0, e), 0 === (e -= a)) {
                        a === o.length ? (++n, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = o.slice(a));
                        break
                    }++n
                }
                return t.length -= n, i
            }(e, t) : function(e, t) {
                var r = Le.allocUnsafe(e),
                    n = t.head,
                    i = 1;
                n.data.copy(r), e -= n.data.length;
                for (; n = n.next;) {
                    var o = n.data,
                        a = e > o.length ? o.length : e;
                    if (o.copy(r, r.length - e, 0, a), 0 === (e -= a)) {
                        a === o.length ? (++i, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = o.slice(a));
                        break
                    }++i
                }
                return t.length -= i, r
            }(e, t);
            return n
        }(e, t.buffer, t.decoder), r);
        var r
    }

    function Xn(e) {
        var t = e._readableState;
        if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
        t.endEmitted || (t.ended = !0, At(Yn, t, e))
    }

    function Yn(e, t) {
        e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
    }

    function $n(e, t) {
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r;
        return -1
    }

    function Qn() {}

    function Zn(e, t, r) {
        this.chunk = e, this.encoding = t, this.callback = r, this.next = null
    }

    function ei(e, t) {
        Object.defineProperty(this, "buffer", {
            get: dr(function() {
                return this.getBuffer()
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
        }), e = e || {}, this.objectMode = !!e.objectMode, t instanceof di && (this.objectMode = this.objectMode || !!e.writableObjectMode);
        var r = e.highWaterMark,
            n = this.objectMode ? 16 : 16384;
        this.highWaterMark = r || 0 === r ? r : n, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
        var i = !1 === e.decodeStrings;
        this.decodeStrings = !i, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
            ! function(e, t) {
                var r = e._writableState,
                    n = r.sync,
                    i = r.writecb;
                if (function(e) {
                        e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
                    }(r), t) ! function(e, t, r, n, i) {
                    --t.pendingcb, r ? At(i, n) : i(n);
                    e._writableState.errorEmitted = !0, e.emit("error", n)
                }(e, r, n, t, i);
                else {
                    var o = oi(r);
                    o || r.corked || r.bufferProcessing || !r.bufferedRequest || ii(e, r), n ? At(ni, e, r, o, i) : ni(e, r, o, i)
                }
            }(t, e)
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new ui(this)
    }

    function ti(e) {
        if (!(this instanceof ti || this instanceof di)) return new ti(e);
        this._writableState = new ei(e, this), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev)), vn.call(this)
    }

    function ri(e, t, r, n, i, o, a) {
        t.writelen = n, t.writecb = a, t.writing = !0, t.sync = !0, r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1
    }

    function ni(e, t, r, n) {
        r || function(e, t) {
            0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
        }(e, t), t.pendingcb--, n(), si(e, t)
    }

    function ii(e, t) {
        t.bufferProcessing = !0;
        var r = t.bufferedRequest;
        if (e._writev && r && r.next) {
            var n = t.bufferedRequestCount,
                i = new Array(n),
                o = t.corkedRequestsFree;
            o.entry = r;
            for (var a = 0; r;) i[a] = r, r = r.next, a += 1;
            ri(e, t, !0, t.length, i, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new ui(t)
        } else {
            for (; r;) {
                var s = r.chunk,
                    u = r.encoding,
                    c = r.callback;
                if (ri(e, t, !1, t.objectMode ? 1 : s.length, s, u, c), r = r.next, t.writing) break
            }
            null === r && (t.lastBufferedRequest = null)
        }
        t.bufferedRequestCount = 0, t.bufferedRequest = r, t.bufferProcessing = !1
    }

    function oi(e) {
        return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
    }

    function ai(e, t) {
        t.prefinished || (t.prefinished = !0, e.emit("prefinish"))
    }

    function si(e, t) {
        var r = oi(t);
        return r && (0 === t.pendingcb ? (ai(e, t), t.finished = !0, e.emit("finish")) : ai(e, t)), r
    }

    function ui(e) {
        var t = this;
        this.next = null, this.entry = null, this.finish = function(r) {
            var n = t.entry;
            for (t.entry = null; n;) {
                var i = n.callback;
                e.pendingcb--, i(r), n = n.next
            }
            e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t
        }
    }
    Dn.prototype.read = function(e) {
        jn("read", e), e = parseInt(e, 10);
        var t = this._readableState,
            r = e;
        if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return jn("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? Xn(this) : qn(this), null;
        if (0 === (e = Fn(e, t)) && t.ended) return 0 === t.length && Xn(this), null;
        var n, i = t.needReadable;
        return jn("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && jn("length less than watermark", i = !0), t.ended || t.reading ? jn("reading or ended", i = !1) : i && (jn("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = Fn(r, t))), null === (n = e > 0 ? Gn(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && Xn(this)), null !== n && this.emit("data", n), n
    }, Dn.prototype._read = function(e) {
        this.emit("error", new Error("not implemented"))
    }, Dn.prototype.pipe = function(e, t) {
        var r = this,
            n = this._readableState;
        switch (n.pipesCount) {
            case 0:
                n.pipes = e;
                break;
            case 1:
                n.pipes = [n.pipes, e];
                break;
            default:
                n.pipes.push(e)
        }
        n.pipesCount += 1, jn("pipe count=%d opts=%j", n.pipesCount, t);
        var i = !t || !1 !== t.end ? a : c;

        function o(e) {
            jn("onunpipe"), e === r && c()
        }

        function a() {
            jn("onend"), e.end()
        }
        n.endEmitted ? At(i) : r.once("end", i), e.on("unpipe", o);
        var s = function(e) {
            return function() {
                var t = e._readableState;
                jn("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && e.listeners("data").length && (t.flowing = !0, Jn(e))
            }
        }(r);
        e.on("drain", s);
        var u = !1;

        function c() {
            jn("cleanup"), e.removeListener("close", l), e.removeListener("finish", p), e.removeListener("drain", s), e.removeListener("error", d), e.removeListener("unpipe", o), r.removeListener("end", a), r.removeListener("end", c), r.removeListener("data", h), u = !0, !n.awaitDrain || e._writableState && !e._writableState.needDrain || s()
        }
        var f = !1;

        function h(t) {
            jn("ondata"), f = !1, !1 !== e.write(t) || f || ((1 === n.pipesCount && n.pipes === e || n.pipesCount > 1 && -1 !== $n(n.pipes, e)) && !u && (jn("false write response, pause", r._readableState.awaitDrain), r._readableState.awaitDrain++, f = !0), r.pause())
        }

        function d(t) {
            var r;
            jn("onerror", t), b(), e.removeListener("error", d), 0 === (r = "error", e.listeners(r).length) && e.emit("error", t)
        }

        function l() {
            e.removeListener("finish", p), b()
        }

        function p() {
            jn("onfinish"), e.removeListener("close", l), b()
        }

        function b() {
            jn("unpipe"), r.unpipe(e)
        }
        return r.on("data", h),
            function(e, t, r) {
                if ("function" == typeof e.prependListener) return e.prependListener(t, r);
                e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
            }(e, "error", d), e.once("close", l), e.once("finish", p), e.emit("pipe", r), n.flowing || (jn("pipe resume"), r.resume()), e
    }, Dn.prototype.unpipe = function(e) {
        var t = this._readableState;
        if (0 === t.pipesCount) return this;
        if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this), this);
        if (!e) {
            var r = t.pipes,
                n = t.pipesCount;
            t.pipes = null, t.pipesCount = 0, t.flowing = !1;
            for (var i = 0; i < n; i++) r[i].emit("unpipe", this);
            return this
        }
        var o = $n(t.pipes, e);
        return -1 === o ? this : (t.pipes.splice(o, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this), this)
    }, Dn.prototype.on = function(e, t) {
        var r = vn.prototype.on.call(this, e, t);
        if ("data" === e) !1 !== this._readableState.flowing && this.resume();
        else if ("readable" === e) {
            var n = this._readableState;
            n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && qn(this) : At(Kn, this))
        }
        return r
    }, Dn.prototype.addListener = Dn.prototype.on, Dn.prototype.resume = function() {
        var e = this._readableState;
        return e.flowing || (jn("resume"), e.flowing = !0, function(e, t) {
            t.resumeScheduled || (t.resumeScheduled = !0, At(Wn, e, t))
        }(this, e)), this
    }, Dn.prototype.pause = function() {
        return jn("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (jn("pause"), this._readableState.flowing = !1, this.emit("pause")), this
    }, Dn.prototype.wrap = function(e) {
        var t = this._readableState,
            r = !1,
            n = this;
        for (var i in e.on("end", function() {
                if (jn("wrapped end"), t.decoder && !t.ended) {
                    var e = t.decoder.end();
                    e && e.length && n.push(e)
                }
                n.push(null)
            }), e.on("data", function(i) {
                (jn("wrapped data"), t.decoder && (i = t.decoder.write(i)), t.objectMode && null == i) || (t.objectMode || i && i.length) && (n.push(i) || (r = !0, e.pause()))
            }), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
            return function() {
                return e[t].apply(e, arguments)
            }
        }(i));
        return function(e, t) {
            for (var r = 0, n = e.length; r < n; r++) t(e[r], r)
        }(["error", "close", "destroy", "pause", "resume"], function(t) {
            e.on(t, n.emit.bind(n, t))
        }), n._read = function(t) {
            jn("wrapped _read", t), r && (r = !1, e.resume())
        }, n
    }, Dn._fromList = Gn, ti.WritableState = ei, cr(ti, vn), ei.prototype.getBuffer = function() {
        for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
        return t
    }, ti.prototype.pipe = function() {
        this.emit("error", new Error("Cannot pipe, not readable"))
    }, ti.prototype.write = function(e, t, r) {
        var n = this._writableState,
            i = !1;
        return "function" == typeof t && (r = t, t = null), Le.isBuffer(e) ? t = "buffer" : t || (t = n.defaultEncoding), "function" != typeof r && (r = Qn), n.ended ? function(e, t) {
            var r = new Error("write after end");
            e.emit("error", r), At(t, r)
        }(this, r) : function(e, t, r, n) {
            var i = !0,
                o = !1;
            return null === r ? o = new TypeError("May not write null values to stream") : Le.isBuffer(r) || "string" == typeof r || void 0 === r || t.objectMode || (o = new TypeError("Invalid non-string/buffer chunk")), o && (e.emit("error", o), At(n, o), i = !1), i
        }(this, n, e, r) && (n.pendingcb++, i = function(e, t, r, n, i) {
            r = function(e, t, r) {
                e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = Le.from(t, r));
                return t
            }(t, r, n), Le.isBuffer(r) && (n = "buffer");
            var o = t.objectMode ? 1 : r.length;
            t.length += o;
            var a = t.length < t.highWaterMark;
            a || (t.needDrain = !0);
            if (t.writing || t.corked) {
                var s = t.lastBufferedRequest;
                t.lastBufferedRequest = new Zn(r, n, i), s ? s.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
            } else ri(e, t, !1, o, r, n, i);
            return a
        }(this, n, e, t, r)), i
    }, ti.prototype.cork = function() {
        this._writableState.corked++
    }, ti.prototype.uncork = function() {
        var e = this._writableState;
        e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || ii(this, e))
    }, ti.prototype.setDefaultEncoding = function(e) {
        if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
        return this._writableState.defaultEncoding = e, this
    }, ti.prototype._write = function(e, t, r) {
        r(new Error("not implemented"))
    }, ti.prototype._writev = null, ti.prototype.end = function(e, t, r) {
        var n = this._writableState;
        "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || n.finished || function(e, t, r) {
            t.ending = !0, si(e, t), r && (t.finished ? At(r) : e.once("finish", r));
            t.ended = !0, e.writable = !1
        }(this, n, r)
    }, cr(di, Dn);
    for (var ci = Object.keys(ti.prototype), fi = 0; fi < ci.length; fi++) {
        var hi = ci[fi];
        di.prototype[hi] || (di.prototype[hi] = ti.prototype[hi])
    }

    function di(e) {
        if (!(this instanceof di)) return new di(e);
        Dn.call(this, e), ti.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", li)
    }

    function li() {
        this.allowHalfOpen || this._writableState.ended || At(pi, this)
    }

    function pi(e) {
        e.end()
    }

    function bi(e) {
        this.afterTransform = function(t, r) {
            return function(e, t, r) {
                var n = e._transformState;
                n.transforming = !1;
                var i = n.writecb;
                if (!i) return e.emit("error", new Error("no writecb in Transform class"));
                n.writechunk = null, n.writecb = null, null != r && e.push(r);
                i(t);
                var o = e._readableState;
                o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && e._read(o.highWaterMark)
            }(e, t, r)
        }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null
    }

    function mi(e) {
        if (!(this instanceof mi)) return new mi(e);
        di.call(this, e), this._transformState = new bi(this);
        var t = this;
        this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.once("prefinish", function() {
            "function" == typeof this._flush ? this._flush(function(e) {
                gi(t, e)
            }) : gi(t)
        })
    }

    function gi(e, t) {
        if (t) return e.emit("error", t);
        var r = e._writableState,
            n = e._transformState;
        if (r.length) throw new Error("Calling transform done when ws.length != 0");
        if (n.transforming) throw new Error("Calling transform done when still transforming");
        return e.push(null)
    }

    function vi(e) {
        if (!(this instanceof vi)) return new vi(e);
        mi.call(this, e)
    }

    function yi() {
        vn.call(this)
    }
    cr(mi, di), mi.prototype.push = function(e, t) {
        return this._transformState.needTransform = !1, di.prototype.push.call(this, e, t)
    }, mi.prototype._transform = function(e, t, r) {
        throw new Error("Not implemented")
    }, mi.prototype._write = function(e, t, r) {
        var n = this._transformState;
        if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
            var i = this._readableState;
            (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
        }
    }, mi.prototype._read = function(e) {
        var t = this._transformState;
        null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
    }, cr(vi, mi), vi.prototype._transform = function(e, t, r) {
        r(null, e)
    }, cr(yi, vn), yi.Readable = Dn, yi.Writable = ti, yi.Duplex = di, yi.Transform = mi, yi.PassThrough = vi, yi.Stream = yi, yi.prototype.pipe = function(e, t) {
        var r = this;

        function n(t) {
            e.writable && !1 === e.write(t) && r.pause && r.pause()
        }

        function i() {
            r.readable && r.resume && r.resume()
        }
        r.on("data", n), e.on("drain", i), e._isStdio || t && !1 === t.end || (r.on("end", a), r.on("close", s));
        var o = !1;

        function a() {
            o || (o = !0, e.end())
        }

        function s() {
            o || (o = !0, "function" == typeof e.destroy && e.destroy())
        }

        function u(e) {
            if (c(), 0 === vn.listenerCount(this, "error")) throw e
        }

        function c() {
            r.removeListener("data", n), e.removeListener("drain", i), r.removeListener("end", a), r.removeListener("close", s), r.removeListener("error", u), e.removeListener("error", u), r.removeListener("end", c), r.removeListener("close", c), e.removeListener("close", c)
        }
        return r.on("error", u), e.on("error", u), r.on("end", c), r.on("close", c), e.on("close", c), e.emit("pipe", r), e
    };
    var wi = 3,
        _i = 4;

    function Si(e, t, r) {
        var n, i = this;
        if (Dn.call(i), i._mode = r, i.headers = {}, i.rawHeaders = [], i.trailers = {}, i.rawTrailers = [], i.on("end", function() {
                At(function() {
                    i.emit("close")
                })
            }), "fetch" === r) {
            i._fetchResponse = t, i.url = t.url, i.statusCode = t.status, i.statusMessage = t.statusText;
            for (var o, a, s = t.headers[Symbol.iterator](); o = (a = s.next()).value, !a.done;) i.headers[o[0].toLowerCase()] = o[1], i.rawHeaders.push(o[0], o[1]);
            var u = t.body.getReader();
            (n = function() {
                u.read().then(function(e) {
                    i._destroyed || (e.done ? i.push(null) : (i.push(new Le(e.value)), n()))
                })
            })()
        } else {
            if (i._xhr = e, i._pos = 0, i.url = e.responseURL, i.statusCode = e.status, i.statusMessage = e.statusText, e.getAllResponseHeaders().split(/\r?\n/).forEach(function(e) {
                    var t = e.match(/^([^:]+):\s*(.*)/);
                    if (t) {
                        var r = t[1].toLowerCase();
                        "set-cookie" === r ? (void 0 === i.headers[r] && (i.headers[r] = []), i.headers[r].push(t[2])) : void 0 !== i.headers[r] ? i.headers[r] += ", " + t[2] : i.headers[r] = t[2], i.rawHeaders.push(t[1], t[2])
                    }
                }), i._charset = "x-user-defined", !pn) {
                var c = i.rawHeaders["mime-type"];
                if (c) {
                    var f = c.match(/;\s*charset=([^;])(;|$)/);
                    f && (i._charset = f[1].toLowerCase())
                }
                i._charset || (i._charset = "utf-8")
            }
        }
    }

    function ki(e) {
        var t, r = this;
        ti.call(r), r._opts = e, r._body = [], r._headers = {}, e.auth && r.setHeader("Authorization", "Basic " + new Le(e.auth).toString("base64")), Object.keys(e.headers).forEach(function(t) {
            r.setHeader(t, e.headers[t])
        });
        var n = !0;
        if ("disable-fetch" === e.mode) n = !1, t = !0;
        else if ("prefer-streaming" === e.mode) t = !1;
        else if ("allow-wrong-content-type" === e.mode) t = !pn;
        else {
            if (e.mode && "default" !== e.mode && "prefer-fast" !== e.mode) throw new Error("Invalid value for opts.mode");
            t = !0
        }
        r._mode = function(e, t) {
            return sn && t ? "fetch" : ln ? "moz-chunked-arraybuffer" : dn ? "ms-stream" : hn && e ? "arraybuffer" : bn && e ? "text:vbarray" : "text"
        }(t, n), r.on("finish", function() {
            r._onFinish()
        })
    }
    cr(Si, Dn), Si.prototype._read = function() {}, Si.prototype._onXHRProgress = function() {
        var e = this,
            t = e._xhr,
            r = null;
        switch (e._mode) {
            case "text:vbarray":
                if (t.readyState !== _i) break;
                try {
                    r = new ve.VBArray(t.responseBody).toArray()
                } catch (e) {}
                if (null !== r) {
                    e.push(new Le(r));
                    break
                }
            case "text":
                try {
                    r = t.responseText
                } catch (t) {
                    e._mode = "text:vbarray";
                    break
                }
                if (r.length > e._pos) {
                    var n = r.substr(e._pos);
                    if ("x-user-defined" === e._charset) {
                        for (var i = new Le(n.length), o = 0; o < n.length; o++) i[o] = 255 & n.charCodeAt(o);
                        e.push(i)
                    } else e.push(n, e._charset);
                    e._pos = r.length
                }
                break;
            case "arraybuffer":
                if (t.readyState !== _i || !t.response) break;
                r = t.response, e.push(new Le(new Uint8Array(r)));
                break;
            case "moz-chunked-arraybuffer":
                if (r = t.response, t.readyState !== wi || !r) break;
                e.push(new Le(new Uint8Array(r)));
                break;
            case "ms-stream":
                if (r = t.response, t.readyState !== wi) break;
                var a = new ve.MSStreamReader;
                a.onprogress = function() {
                    a.result.byteLength > e._pos && (e.push(new Le(new Uint8Array(a.result.slice(e._pos)))), e._pos = a.result.byteLength)
                }, a.onload = function() {
                    e.push(null)
                }, a.readAsArrayBuffer(r)
        }
        e._xhr.readyState === _i && "ms-stream" !== e._mode && e.push(null)
    }, cr(ki, ti);
    var Ei = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];

    function Ii(e, t) {
        "string" == typeof e && (e = Zr(e));
        var r = -1 === ve.location.protocol.search(/^https?:$/) ? "http:" : "",
            n = e.protocol || r,
            i = e.hostname || e.host,
            o = e.port,
            a = e.path || "/";
        i && -1 !== i.indexOf(":") && (i = "[" + i + "]"), e.url = (i ? n + "//" + i : "") + (o ? ":" + o : "") + a, e.method = (e.method || "GET").toUpperCase(), e.headers = e.headers || {};
        var s = new ki(e);
        return t && s.on("response", t), s
    }

    function xi() {}
    ki.prototype.setHeader = function(e, t) {
        var r = e.toLowerCase(); - 1 === Ei.indexOf(r) && (this._headers[r] = {
            name: e,
            value: t
        })
    }, ki.prototype.getHeader = function(e) {
        return this._headers[e.toLowerCase()].value
    }, ki.prototype.removeHeader = function(e) {
        delete this._headers[e.toLowerCase()]
    }, ki.prototype._onFinish = function() {
        var e = this;
        if (!e._destroyed) {
            var t, r = e._opts,
                n = e._headers;
            if ("POST" !== r.method && "PUT" !== r.method && "PATCH" !== r.method || (t = function() {
                    if (void 0 !== nn) return nn;
                    try {
                        new ve.Blob([new ArrayBuffer(1)]), nn = !0
                    } catch (e) {
                        nn = !1
                    }
                    return nn
                }() ? new ve.Blob(e._body.map(function(e) {
                    return function(e) {
                        if (e instanceof Uint8Array) {
                            if (0 === e.byteOffset && e.byteLength === e.buffer.byteLength) return e.buffer;
                            if ("function" == typeof e.buffer.slice) return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
                        }
                        if (mt(e)) {
                            for (var t = new Uint8Array(e.length), r = e.length, n = 0; n < r; n++) t[n] = e[n];
                            return t.buffer
                        }
                        throw new Error("Argument must be a Buffer")
                    }(e)
                }), {
                    type: (n["content-type"] || {}).value || ""
                }) : Le.concat(e._body).toString()), "fetch" === e._mode) {
                var i = Object.keys(n).map(function(e) {
                    return [n[e].name, n[e].value]
                });
                ve.fetch(e._opts.url, {
                    method: e._opts.method,
                    headers: i,
                    body: t,
                    mode: "cors",
                    credentials: r.withCredentials ? "include" : "same-origin"
                }).then(function(t) {
                    e._fetchResponse = t, e._connect()
                }, function(t) {
                    e.emit("error", t)
                })
            } else {
                var o = e._xhr = new ve.XMLHttpRequest;
                try {
                    o.open(e._opts.method, e._opts.url, !0)
                } catch (t) {
                    return void At(function() {
                        e.emit("error", t)
                    })
                }
                "responseType" in o && (o.responseType = e._mode.split(":")[0]), "withCredentials" in o && (o.withCredentials = !!r.withCredentials), "text" === e._mode && "overrideMimeType" in o && o.overrideMimeType("text/plain; charset=x-user-defined"), Object.keys(n).forEach(function(e) {
                    o.setRequestHeader(n[e].name, n[e].value)
                }), e._response = null, o.onreadystatechange = function() {
                    switch (o.readyState) {
                        case wi:
                        case _i:
                            e._onXHRProgress()
                    }
                }, "moz-chunked-arraybuffer" === e._mode && (o.onprogress = function() {
                    e._onXHRProgress()
                }), o.onerror = function() {
                    e._destroyed || e.emit("error", new Error("XHR error"))
                };
                try {
                    o.send(t)
                } catch (t) {
                    return void At(function() {
                        e.emit("error", t)
                    })
                }
            }
        }
    }, ki.prototype._onXHRProgress = function() {
        (function(e) {
            try {
                var t = e.status;
                return null !== t && 0 !== t
            } catch (e) {
                return !1
            }
        })(this._xhr) && !this._destroyed && (this._response || this._connect(), this._response._onXHRProgress())
    }, ki.prototype._connect = function() {
        this._destroyed || (this._response = new Si(this._xhr, this._fetchResponse, this._mode), this.emit("response", this._response))
    }, ki.prototype._write = function(e, t, r) {
        this._body.push(e), r()
    }, ki.prototype.abort = ki.prototype.destroy = function() {
        this._destroyed = !0, this._response && (this._response._destroyed = !0), this._xhr && this._xhr.abort()
    }, ki.prototype.end = function(e, t, r) {
        "function" == typeof e && (r = e, e = void 0), ti.prototype.end.call(this, e, t, r)
    }, ki.prototype.flushHeaders = function() {}, ki.prototype.setTimeout = function() {}, ki.prototype.setNoDelay = function() {}, ki.prototype.setSocketKeepAlive = function() {}, xi.defaultMaxSockets = 4;
    var Oi = {
            request: Ii,
            get: function(e, t) {
                var r = Ii(e, t);
                return r.end(), r
            },
            Agent: xi,
            METHODS: ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"],
            STATUS_CODES: {
                100: "Continue",
                101: "Switching Protocols",
                102: "Processing",
                200: "OK",
                201: "Created",
                202: "Accepted",
                203: "Non-Authoritative Information",
                204: "No Content",
                205: "Reset Content",
                206: "Partial Content",
                207: "Multi-Status",
                300: "Multiple Choices",
                301: "Moved Permanently",
                302: "Moved Temporarily",
                303: "See Other",
                304: "Not Modified",
                305: "Use Proxy",
                307: "Temporary Redirect",
                400: "Bad Request",
                401: "Unauthorized",
                402: "Payment Required",
                403: "Forbidden",
                404: "Not Found",
                405: "Method Not Allowed",
                406: "Not Acceptable",
                407: "Proxy Authentication Required",
                408: "Request Time-out",
                409: "Conflict",
                410: "Gone",
                411: "Length Required",
                412: "Precondition Failed",
                413: "Request Entity Too Large",
                414: "Request-URI Too Large",
                415: "Unsupported Media Type",
                416: "Requested Range Not Satisfiable",
                417: "Expectation Failed",
                418: "I'm a teapot",
                422: "Unprocessable Entity",
                423: "Locked",
                424: "Failed Dependency",
                425: "Unordered Collection",
                426: "Upgrade Required",
                428: "Precondition Required",
                429: "Too Many Requests",
                431: "Request Header Fields Too Large",
                500: "Internal Server Error",
                501: "Not Implemented",
                502: "Bad Gateway",
                503: "Service Unavailable",
                504: "Gateway Time-out",
                505: "HTTP Version Not Supported",
                506: "Variant Also Negotiates",
                507: "Insufficient Storage",
                509: "Bandwidth Limit Exceeded",
                510: "Not Extended",
                511: "Network Authentication Required"
            }
        },
        Ti = an.spawn,
        Pi = function() {
            var e, t, r = this,
                n = Oi,
                i = Oi,
                o = {},
                a = !1,
                s = {
                    "User-Agent": "node-XMLHttpRequest",
                    Accept: "*/*"
                },
                u = {},
                c = {},
                f = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "content-transfer-encoding", "cookie", "cookie2", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"],
                h = ["TRACE", "TRACK", "CONNECT"],
                d = !1,
                l = !1,
                p = {};
            this.UNSENT = 0, this.OPENED = 1, this.HEADERS_RECEIVED = 2, this.LOADING = 3, this.DONE = 4, this.readyState = this.UNSENT, this.onreadystatechange = null, this.responseText = "", this.responseXML = "", this.status = null, this.statusText = null, this.withCredentials = !1;
            this.open = function(e, t, r, n, i) {
                if (this.abort(), l = !1, ! function(e) {
                        return e && -1 === h.indexOf(e)
                    }(e)) throw new Error("SecurityError: Request method not allowed");
                o = {
                    method: e,
                    url: t.toString(),
                    async: "boolean" != typeof r || r,
                    user: n || null,
                    password: i || null
                }, b(this.OPENED)
            }, this.setDisableHeaderCheck = function(e) {
                a = e
            }, this.setRequestHeader = function(e, t) {
                if (this.readyState !== this.OPENED) throw new Error("INVALID_STATE_ERR: setRequestHeader can only be called when state is OPEN");
                if (function(e) {
                        return a || e && -1 === f.indexOf(e.toLowerCase())
                    }(e)) {
                    if (d) throw new Error("INVALID_STATE_ERR: send flag is true");
                    e = c[e.toLowerCase()] || e, c[e.toLowerCase()] = e, u[e] = u[e] ? u[e] + ", " + t : t
                } else console.warn('Refused to set unsafe header "' + e + '"')
            }, this.getResponseHeader = function(e) {
                return "string" == typeof e && this.readyState > this.OPENED && t && t.headers && t.headers[e.toLowerCase()] && !l ? t.headers[e.toLowerCase()] : null
            }, this.getAllResponseHeaders = function() {
                if (this.readyState < this.HEADERS_RECEIVED || l) return "";
                var e = "";
                for (var r in t.headers) "set-cookie" !== r && "set-cookie2" !== r && (e += r + ": " + t.headers[r] + "\r\n");
                return e.substr(0, e.length - 2)
            }, this.getRequestHeader = function(e) {
                return "string" == typeof e && c[e.toLowerCase()] ? u[c[e.toLowerCase()]] : ""
            }, this.send = function(a) {
                if (this.readyState !== this.OPENED) throw new Error("INVALID_STATE_ERR: connection must be opened before send() is called");
                if (d) throw new Error("INVALID_STATE_ERR: send has already been called");
                var f, h = !1,
                    p = !1,
                    m = Dr.parse(o.url);
                switch (m.protocol) {
                    case "https:":
                        h = !0;
                    case "http:":
                        f = m.hostname;
                        break;
                    case "file:":
                        p = !0;
                        break;
                    case void 0:
                    case null:
                    case "":
                        f = "localhost";
                        break;
                    default:
                        throw new Error("Protocol not supported.")
                }
                if (p) {
                    if ("GET" !== o.method) throw new Error("XMLHttpRequest: Only GET method is supported");
                    if (o.async) an.readFile(m.pathname, "utf8", function(e, t) {
                        e ? r.handleError(e) : (r.status = 200, r.responseText = t, b(r.DONE))
                    });
                    else try {
                        this.responseText = an.readFileSync(m.pathname, "utf8"), this.status = 200, b(r.DONE)
                    } catch (e) {
                        this.handleError(e)
                    }
                } else {
                    var g = m.port || (h ? 443 : 80),
                        v = m.pathname + (m.search ? m.search : "");
                    for (var y in s) c[y.toLowerCase()] || (u[y] = s[y]);
                    if (u.Host = f, h && 443 === g || 80 === g || (u.Host += ":" + m.port), o.user) {
                        void 0 === o.password && (o.password = "");
                        var w = new Le(o.user + ":" + o.password);
                        u.Authorization = "Basic " + w.toString("base64")
                    }
                    "GET" === o.method || "HEAD" === o.method ? a = null : a ? (u["Content-Length"] = mt(a) ? a.length : Le.byteLength(a), u["Content-Type"] || (u["Content-Type"] = "text/plain;charset=UTF-8")) : "POST" === o.method && (u["Content-Length"] = 0);
                    var _ = {
                        host: f,
                        port: g,
                        path: v,
                        method: o.method,
                        headers: u,
                        agent: !1,
                        withCredentials: r.withCredentials
                    };
                    if (l = !1, o.async) {
                        var S = h ? i.request : n.request;
                        d = !0, r.dispatchEvent("readystatechange");
                        var k = function(e) {
                            r.handleError(e)
                        };
                        e = S(_, function n(i) {
                            if (301 !== (t = i).statusCode && 302 !== t.statusCode && 303 !== t.statusCode && 307 !== t.statusCode) t.setEncoding("utf8"), b(r.HEADERS_RECEIVED), r.status = t.statusCode, t.on("data", function(e) {
                                e && (r.responseText += e), d && b(r.LOADING)
                            }), t.on("end", function() {
                                d && (b(r.DONE), d = !1)
                            }), t.on("error", function(e) {
                                r.handleError(e)
                            });
                            else {
                                o.url = t.headers.location;
                                var a = Dr.parse(o.url);
                                f = a.hostname;
                                var s = {
                                    hostname: a.hostname,
                                    port: a.port,
                                    path: a.path,
                                    method: 303 === t.statusCode ? "GET" : o.method,
                                    headers: u,
                                    withCredentials: r.withCredentials
                                };
                                (e = S(s, n).on("error", k)).end()
                            }
                        }).on("error", k), a && e.write(a), e.end(), r.dispatchEvent("loadstart")
                    } else {
                        var E = ".node-xmlhttprequest-content-" + Vt.pid,
                            I = ".node-xmlhttprequest-sync-" + Vt.pid;
                        an.writeFileSync(I, "", "utf8");
                        for (var x = "var http = require('http'), https = require('https'), fs = require('fs');var doRequest = http" + (h ? "s" : "") + ".request;var options = " + JSON.stringify(_) + ";var responseText = '';var req = doRequest(options, function(response) {response.setEncoding('utf8');response.on('data', function(chunk) {  responseText += chunk;});response.on('end', function() {fs.writeFileSync('" + E + "', JSON.stringify({err: null, data: {statusCode: response.statusCode, headers: response.headers, text: responseText}}), 'utf8');fs.unlinkSync('" + I + "');});response.on('error', function(error) {fs.writeFileSync('" + E + "', JSON.stringify({err: error}), 'utf8');fs.unlinkSync('" + I + "');});}).on('error', function(error) {fs.writeFileSync('" + E + "', JSON.stringify({err: error}), 'utf8');fs.unlinkSync('" + I + "');});" + (a ? "req.write('" + JSON.stringify(a).slice(1, -1).replace(/'/g, "\\'") + "');" : "") + "req.end();", O = Ti(Vt.argv[0], ["-e", x]); an.existsSync(I););
                        var T = JSON.parse(an.readFileSync(E, "utf8"));
                        O.stdin.end(), an.unlinkSync(E), T.err ? r.handleError(T.err) : (t = T.data, r.status = T.data.statusCode, r.responseText = T.data.text, b(r.DONE))
                    }
                }
            }, this.handleError = function(e) {
                this.status = 0, this.statusText = e, this.responseText = e.stack, l = !0, b(this.DONE), this.dispatchEvent("error")
            }, this.abort = function() {
                e && (e.abort(), e = null), u = s, this.status = 0, this.responseText = "", this.responseXML = "", l = !0, this.readyState === this.UNSENT || this.readyState === this.OPENED && !d || this.readyState === this.DONE || (d = !1, b(this.DONE)), this.readyState = this.UNSENT, this.dispatchEvent("abort")
            }, this.addEventListener = function(e, t) {
                e in p || (p[e] = []), p[e].push(t)
            }, this.removeEventListener = function(e, t) {
                e in p && (p[e] = p[e].filter(function(e) {
                    return e !== t
                }))
            }, this.dispatchEvent = function(e) {
                if ("function" == typeof r["on" + e] && r["on" + e](), e in p)
                    for (var t = 0, n = p[e].length; t < n; t++) p[e][t].call(r)
            };
            var b = function(e) {
                e != r.LOADING && r.readyState === e || (r.readyState = e, (o.async || r.readyState < r.OPENED || r.readyState === r.DONE) && r.dispatchEvent("readystatechange"), r.readyState !== r.DONE || l || (r.dispatchEvent("load"), r.dispatchEvent("loadend")))
            }
        },
        Ai = 1e3,
        Mi = 60 * Ai,
        Ci = 60 * Mi,
        Li = 24 * Ci,
        Ri = 7 * Li,
        Ni = 365.25 * Li,
        ji = function(e, t) {
            t = t || {};
            var r = typeof e;
            if ("string" === r && e.length > 0) return function(e) {
                if ((e = String(e)).length > 100) return;
                var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                if (!t) return;
                var r = parseFloat(t[1]);
                switch ((t[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return r * Ni;
                    case "weeks":
                    case "week":
                    case "w":
                        return r * Ri;
                    case "days":
                    case "day":
                    case "d":
                        return r * Li;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return r * Ci;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return r * Mi;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return r * Ai;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return r;
                    default:
                        return
                }
            }(e);
            if ("number" === r && isFinite(e)) return t.long ? function(e) {
                var t = Math.abs(e);
                if (t >= Li) return Ui(e, t, Li, "day");
                if (t >= Ci) return Ui(e, t, Ci, "hour");
                if (t >= Mi) return Ui(e, t, Mi, "minute");
                if (t >= Ai) return Ui(e, t, Ai, "second");
                return e + " ms"
            }(e) : function(e) {
                var t = Math.abs(e);
                if (t >= Li) return Math.round(e / Li) + "d";
                if (t >= Ci) return Math.round(e / Ci) + "h";
                if (t >= Mi) return Math.round(e / Mi) + "m";
                if (t >= Ai) return Math.round(e / Ai) + "s";
                return e + "ms"
            }(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        };

    function Ui(e, t, r, n) {
        var i = t >= 1.5 * r;
        return Math.round(e / r) + " " + n + (i ? "s" : "")
    }
    var Di = function(e) {
            function t(e) {
                let t = 0;
                for (let r = 0; r < e.length; r++) t = (t << 5) - t + e.charCodeAt(r), t |= 0;
                return r.colors[Math.abs(t) % r.colors.length]
            }

            function r(e) {
                let o;

                function a(...e) {
                    if (!a.enabled) return;
                    const t = a,
                        n = Number(new Date),
                        i = n - (o || n);
                    t.diff = i, t.prev = o, t.curr = n, o = n, e[0] = r.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                    let s = 0;
                    e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, i) => {
                        if ("%%" === n) return n;
                        s++;
                        const o = r.formatters[i];
                        if ("function" == typeof o) {
                            const r = e[s];
                            n = o.call(t, r), e.splice(s, 1), s--
                        }
                        return n
                    }), r.formatArgs.call(t, e), (t.log || r.log).apply(t, e)
                }
                return a.namespace = e, a.enabled = r.enabled(e), a.useColors = r.useColors(), a.color = t(e), a.destroy = n, a.extend = i, "function" == typeof r.init && r.init(a), r.instances.push(a), a
            }

            function n() {
                const e = r.instances.indexOf(this);
                return -1 !== e && (r.instances.splice(e, 1), !0)
            }

            function i(e, t) {
                const n = r(this.namespace + (void 0 === t ? ":" : t) + e);
                return n.log = this.log, n
            }

            function o(e) {
                return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
            }
            return r.debug = r, r.default = r, r.coerce = function(e) {
                if (e instanceof Error) return e.stack || e.message;
                return e
            }, r.disable = function() {
                const e = [...r.names.map(o), ...r.skips.map(o).map(e => "-" + e)].join(",");
                return r.enable(""), e
            }, r.enable = function(e) {
                let t;
                r.save(e), r.names = [], r.skips = [];
                const n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                    i = n.length;
                for (t = 0; t < i; t++) n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? r.skips.push(new RegExp("^" + e.substr(1) + "$")) : r.names.push(new RegExp("^" + e + "$")));
                for (t = 0; t < r.instances.length; t++) {
                    const e = r.instances[t];
                    e.enabled = r.enabled(e.namespace)
                }
            }, r.enabled = function(e) {
                if ("*" === e[e.length - 1]) return !0;
                let t, n;
                for (t = 0, n = r.skips.length; t < n; t++)
                    if (r.skips[t].test(e)) return !1;
                for (t = 0, n = r.names.length; t < n; t++)
                    if (r.names[t].test(e)) return !0;
                return !1
            }, r.humanize = ji, Object.keys(e).forEach(t => {
                r[t] = e[t]
            }), r.instances = [], r.names = [], r.skips = [], r.formatters = {}, r.selectColor = t, r.enable(r.load()), r
        },
        Bi = i(function(e, t) {
            t.log = function(...e) {
                return "object" == typeof console && console.log && console.log(...e)
            }, t.formatArgs = function(t) {
                if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
                const r = "color: " + this.color;
                t.splice(1, 0, r, "color: inherit");
                let n = 0,
                    i = 0;
                t[0].replace(/%[a-zA-Z%]/g, e => {
                    "%%" !== e && (n++, "%c" === e && (i = n))
                }), t.splice(i, 0, r)
            }, t.save = function(e) {
                try {
                    e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
                } catch (e) {}
            }, t.load = function() {
                let e;
                try {
                    e = t.storage.getItem("debug")
                } catch (e) {}!e && void 0 !== Vt && "env" in Vt && (e = Vt.env.DEBUG);
                return e
            }, t.useColors = function() {
                if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
                if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }, t.storage = function() {
                try {
                    return localStorage
                } catch (e) {}
            }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.exports = Di(t);
            const {
                formatters: r
            } = e.exports;
            r.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }
        }),
        Hi = (Bi.log, Bi.formatArgs, Bi.save, Bi.load, Bi.useColors, Bi.storage, Bi.colors, Bi("request"));

    function Fi(e) {
        return new Promise(function(t, r) {
            var n = e.url;
            n || r(new Error("URL is missing"));
            var i = new("undefined" == typeof XMLHttpRequest ? Pi : XMLHttpRequest);
            i.onload = function() {
                if (i.status >= 200 && i.status < 300) t(i.responseText);
                else {
                    var e = "Error fetching url:".concat(n, "; status code:").concat(i.status);
                    r(new Error(e))
                }
            }, i.ontimeout = function(e) {
                console.log("ontimeout", e)
            }, i.onreadystatechange = function() {
                404 === i.status && r(new Error("Error fetching url:".concat(n, "; status code:").concat(i.status)))
            }, i.onerror = function() {
                Hi("Request failed with error ".concat(i.responseText)), r(new Error(i.responseText))
            }, i.open(e.method || "GET", n), e.body ? i.send(JSON.stringify(e.body)) : i.send()
        })
    }

    function qi() {
        return (qi = u(a.mark(function e(t) {
            var r, n;
            return a.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (r = $("errors", "getIssuerProfile"), t) {
                            e.next = 3;
                            break
                        }
                        throw new fe(I, r);
                    case 3:
                        return e.next = 5, Fi({
                            url: t
                        }).catch(function() {
                            throw new fe(I, r)
                        });
                    case 5:
                        return n = e.sent, e.abrupt("return", JSON.parse(n));
                    case 7:
                    case "end":
                        return e.stop()
                }
            }, e)
        }))).apply(this, arguments)
    }

    function Vi() {
        return (Vi = u(a.mark(function e(t) {
            var r, n, i;
            return a.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (t) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return", Promise.resolve([]));
                    case 2:
                        return r = $("errors", "getRevokedAssertions"), e.next = 5, Fi({
                            url: t
                        }).catch(function() {
                            throw new fe(x, r)
                        });
                    case 5:
                        return n = e.sent, i = JSON.parse(n), e.abrupt("return", i.revokedAssertions ? i.revokedAssertions : []);
                    case 8:
                    case "end":
                        return e.stop()
                }
            }, e)
        }))).apply(this, arguments)
    }

    function zi(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            if (l(e, n)) return e.slice(n.length)
        }
        return e
    }

    function Ki(e, t) {
        var r, n = "&action=eth_getTransactionByHash&txhash=";
        return r = t === F.ethmain.code ? p.etherScanMainUrl + n + e : p.etherScanRopstenUrl + n + e, new Promise(function(e, n) {
            return Fi({
                url: r
            }).then(function(r) {
                var i = JSON.parse(r);
                try {
                    (function(e, t) {
                        var r, n = e.result.blockNumber,
                            i = "&action=eth_getBlockByNumber&boolean=true&tag=";
                        r = t === F.ethmain.code ? p.etherScanMainUrl + i + n : p.etherScanRopstenUrl + i + n;
                        return new Promise(function(e, i) {
                            return Fi({
                                url: r
                            }).then(function(r) {
                                var o = JSON.parse(r).result;
                                try {
                                    (function(e, t) {
                                        var r, n = "&action=eth_blockNumber";
                                        r = e === F.ethmain.code ? p.etherScanMainUrl + n : p.etherScanRopstenUrl + n;
                                        return new Promise(function(e, n) {
                                            return Fi({
                                                url: r
                                            }).then(function(r) {
                                                var i = JSON.parse(r).result;
                                                try {
                                                    i - t < V.MininumConfirmations && n(new fe(E, $("errors", "checkEtherScanConfirmations"))), e(i)
                                                } catch (e) {
                                                    n(new fe(E, $("errors", "getBlockcypherFetcher")))
                                                }
                                            }).catch(function() {
                                                n(new fe(E, $("errors", "getBlockcypherFetcher")))
                                            })
                                        })
                                    })(t, n).then(function() {
                                        e(o)
                                    }).catch(function() {
                                        i(new fe(E, $("errors", "getBlockcypherFetcher")))
                                    })
                                } catch (e) {
                                    i(new fe(E, $("errors", "getBlockcypherFetcher")))
                                }
                            }).catch(function() {
                                i(new fe(E, $("errors", "getBlockcypherFetcher")))
                            })
                        })
                    })(i, t).then(function(t) {
                        var r = function(e, t) {
                            var r = e.result,
                                n = new Date(1e3 * parseInt(t.timestamp, 16)),
                                i = r.from,
                                o = zi(r.input, F.ethmain.prefixes);
                            return new re(o, i, n, void 0)
                        }(i, t);
                        e(r)
                    }).catch(function() {
                        n(new fe(E, $("errors", "getBlockcypherFetcher")))
                    })
                } catch (e) {
                    n(new fe(E, $("errors", "getBlockcypherFetcher")))
                }
            }).catch(function() {
                n(new fe(E, $("errors", "getBlockcypherFetcher")))
            })
        })
    }

    function Wi(e) {
        var t = Date.parse(e);
        if (t) return new Date(t);
        var r = function(e) {
            var t = e.slice(0, -5).split(/\D/).map(function(e) {
                return parseInt(e, 10) || 0
            });
            t[1] -= 1, t = new Date(Date.UTC.apply(Date, t));
            var r = e.slice(-5),
                n = parseInt(r, 10) / 100;
            return "+" === r.slice(0, 1) && (n *= -1), t.setHours(t.getHours() + n), t.getTime()
        }(e);
        return r || function(e) {
            var t, r, n = /^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/.exec(e) || [];
            return n[1] ? ((t = n[1].split(/\D/).map(function(e) {
                return parseInt(e, 10) || 0
            }))[1] -= 1, (t = new Date(Date.UTC.apply(Date, t))).getDate() ? (n[5] && (r = parseInt(n[5], 10) / 100 * 60, n[6] && (r += parseInt(n[6], 10)), "+" === n[4] && (r *= -1), r && t.setUTCMinutes(t.getUTCMinutes() + r)), t) : NaN) : NaN
        }(e)
    }

    function Ji(e) {
        return "" === e ? "" : Wi(e)
    }

    function Gi(e, t) {
        var r;
        return r = t === F.bitcoin.code ? p.blockCypherUrl + e + "?limit=500" : p.blockCypherTestUrl + e + "?limit=500", new Promise(function(e, t) {
            return Fi({
                url: r
            }).then(function(r) {
                var n = JSON.parse(r);
                try {
                    var i = function(e) {
                        if (e.confirmations < V.MininumConfirmations) throw new fe(E, $("errors", "parseBlockCypherResponse"));
                        var t = Ji(e.received),
                            r = e.outputs,
                            n = r[r.length - 1],
                            i = e.inputs[0].addresses[0],
                            o = zi(n.script, F.bitcoin.prefixes),
                            a = r.filter(function(e) {
                                return !!e.spent_by
                            }).map(function(e) {
                                return e.addresses[0]
                            });
                        return new re(o, i, t, a)
                    }(n);
                    e(i)
                } catch (e) {
                    t(e.message)
                }
            }).catch(function() {
                t(new fe(E, $("errors", "getBlockcypherFetcher")))
            })
        })
    }

    function Xi(e, t) {
        var r;
        return r = t === F.bitcoin.code ? p.chainSoUrl + e : p.chainSoTestUrl + e, new Promise(function(e, t) {
            return Fi({
                url: r
            }).then(function(r) {
                var n = JSON.parse(r);
                try {
                    var i = function(e) {
                        if (e.data.confirmations < V.MininumConfirmations) throw new fe(E, $("errors", "parseChainSoResponse"));
                        var t = new Date(1e3 * e.data.time),
                            r = e.data.outputs,
                            n = r[r.length - 1],
                            i = e.data.inputs[0].address,
                            o = zi(n.script, F.bitcoin.prefixes);
                        return new re(o, i, t, void 0)
                    }(n);
                    e(i)
                } catch (e) {
                    t(new fe(E, $("errors", "getChainSoFetcher")))
                }
            }).catch(function() {
                t(new fe(E, $("errors", "getChainSoFetcher")))
            })
        })
    }
    var Yi = [function(e, t) {
            return Xi(e, t)
        }, function(e, t) {
            return Gi(e, t)
        }],
        $i = [function(e, t) {
            return Ki(e, t)
        }],
        Qi = [function(e, t) {
            return Gi(e, t)
        }],
        Zi = Bi("blockchainConnectors");

    function eo(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            r = e.created ? Ji(e.created) : null,
            n = e.revoked ? Ji(e.revoked) : null,
            i = e.expires ? Ji(e.expires) : null,
            o = t;
        t || (o = (e.id || e.publicKey).replace("ecdsa-koblitz-pubkey:", ""));
        return new ee(o, r, n, i)
    }
    var to = {
        addresses: X,
        certificates: ge,
        chains: de,
        i18n: Z,
        verifier: Object.freeze({
            getIssuerProfile: function(e) {
                return qi.apply(this, arguments)
            },
            getRevokedAssertions: function(e) {
                return Vi.apply(this, arguments)
            },
            lookForTx: function(e, t, r) {
                var n;
                switch (t) {
                    case F.bitcoin.code:
                    case F.regtest.code:
                    case F.testnet.code:
                    case F.mocknet.code:
                        n = Yi;
                        break;
                    case F.ethmain.code:
                    case F.ethropst.code:
                        n = $i;
                        break;
                    default:
                        return Promise.reject(new fe(E, $("errors", "lookForTxInvalidChain")))
                }
                if (V.MinimumBlockchainExplorers > n.length) return Promise.reject(new fe(E, $("errors", "lookForTxInvalidAppConfig")));
                if (V.MinimumBlockchainExplorers > Qi.length && (r === b.V1_1 || r === b.V1_2)) return Promise.reject(new fe(E, $("errors", "lookForTxInvalidAppConfig")));
                var i, o = [];
                if (r === b.V1_1 || r === b.V1_2) {
                    i = Qi.length;
                    for (var a = 0; a < i; a++) o.push(Qi[a](e, t))
                } else {
                    i = n.length;
                    for (var s = 0; s < i; s++) o.push(n[s](e, t))
                }
                return new Promise(function(e, t) {
                    return function e(t, r) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        if ((t = Array.from(t)).length < r) return Promise.reject(new fe(E, $("errors", "couldNotConfirmTx")));
                        var i = t.map(function(e, t) {
                            return e.then(function() {
                                return t
                            }).catch(function(e) {
                                throw Zi(e), t
                            })
                        });
                        return Promise.race(i).then(function(i) {
                            return t.splice(i, 1)[0].then(function(e) {
                                return n.push(e)
                            }), 1 === r ? n : e(t, r - 1, n)
                        }).catch(function(i) {
                            return t.splice(i, 1), e(t, r, n)
                        })
                    }(o, V.MinimumBlockchainExplorers).then(function(t) {
                        if (!t || 0 === t.length) return Promise.reject(new fe(E, $("errors", "lookForTxCouldNotConfirm")));
                        for (var r = t[0], n = 1; n < t.length; n++) {
                            var i = t[n];
                            if (r.issuingAddress !== i.issuingAddress) throw new fe(E, $("errors", "lookForTxDifferentAddresses"));
                            if (r.remoteHash !== i.remoteHash) throw new fe(E, $("errors", "lookForTxDifferentRemoteHashes"))
                        }
                        e(r)
                    }).catch(function(e) {
                        t(new fe(E, e.message))
                    })
                })
            },
            parseIssuerKeys: function(e) {
                try {
                    var t = {};
                    if ("@context" in e)
                        for (var r = e.publicKey || e.publicKeys, n = 0; n < r.length; n++) {
                            var i = eo(r[n]);
                            t[i.publicKey] = i
                        } else {
                            var o = eo({}, (e.issuerKeys || [])[0].key);
                            t[o.publicKey] = o
                        }
                    return t
                } catch (e) {
                    throw new fe(x, $("errors", "parseIssuerKeys"))
                }
            },
            parseRevocationKey: function(e) {
                return e && e.hasOwnProperty("revocationKeys") && e.revocationKeys.length > 0 ? e.revocationKeys[0].key : null
            }
        })
    };

    function ro(e, t) {
        var r = [];
        switch (t) {
            case b.V1_1:
            case b.V1_2:
                if (e.constructor === Array)
                    for (var n in e) {
                        var i = e[n],
                            o = "jobTitle" in i ? i.jobTitle : null,
                            a = "name" in i ? i.name : null,
                            s = new te(i.image, o, a);
                        r.push(s)
                    } else {
                        var u = new te(e, null, null);
                        r.push(u)
                    }
                break;
            case b.V2_0:
                for (var c in e) {
                    var f = e[c],
                        h = new te(f.image, f.jobTitle, f.name);
                    r.push(h)
                }
        }
        return r
    }

    function no(e) {
        var t;
        try {
            return (t = e["@context"] instanceof Array ? function(e) {
                var t = e.id,
                    r = e.expires,
                    n = e.signature,
                    i = e.badge,
                    o = i.image,
                    a = i.name,
                    s = i.description,
                    u = i.subtitle,
                    c = i.issuer,
                    f = e.verification.publicKey || e.verification.creator,
                    h = e.recipientProfile || e.recipient.recipientProfile,
                    d = b.V2_0;
                return {
                    certificateImage: o,
                    chain: to.certificates.getChain(f, e.signature),
                    description: s,
                    expires: r,
                    id: t,
                    issuedOn: e.issuedOn,
                    issuer: c,
                    metadataJson: e.metadataJson,
                    name: a,
                    publicKey: h.publicKey,
                    receipt: n,
                    recipientFullName: h.name,
                    recordLink: e.id,
                    revocationKey: null,
                    sealImage: c.image,
                    signature: null,
                    signatureImage: ro(i.signatureLines, d),
                    subtitle: u,
                    version: d
                }
            }(e) : function(e) {
                var t = e.certificate || e.document.certificate,
                    r = e.recipient || e.document.recipient,
                    n = e.document.assertion,
                    i = e.receipt,
                    o = void 0 === i ? b.V1_1 : b.V1_2,
                    a = t.image,
                    s = t.description,
                    u = t.issuer,
                    f = t.subtitle,
                    h = r.publicKey,
                    d = to.certificates.getChain(h),
                    l = n.expires,
                    p = n.uid,
                    m = n.issuedOn,
                    g = n.metadataJson,
                    v = "".concat(r.givenName, " ").concat(r.familyName),
                    y = n.id,
                    w = r.revocationKey || null,
                    _ = u.image,
                    S = e.document.signature,
                    k = ro(e.document && e.document.assertion && e.document.assertion["image:signature"], o);
                return "object" === c(f) && (f = f.display ? f.content : ""), {
                    certificateImage: a,
                    chain: d,
                    description: s,
                    expires: l,
                    id: p,
                    issuedOn: m,
                    issuer: u,
                    metadataJson: g,
                    name: t.title || t.name,
                    publicKey: h,
                    receipt: i,
                    recipientFullName: v,
                    recordLink: y,
                    revocationKey: w,
                    sealImage: _,
                    signature: S,
                    signatureImage: k,
                    subtitle: f,
                    version: o
                }
            }(e)).isFormatValid = !0, t
        } catch (e) {
            return {
                isFormatValid: !1
            }
        }
    }
    var io = i(function(e) {
            (function() {
                function n(e) {
                    return "function" == typeof e
                }
                var i, o, a = Array.isArray ? Array.isArray : function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    s = 0,
                    u = function(e, t) {
                        w[s] = e, w[s + 1] = t, 2 === (s += 2) && (o ? o(_) : b())
                    };
                var c = "undefined" != typeof window ? window : void 0,
                    f = c || {},
                    h = f.MutationObserver || f.WebKitMutationObserver,
                    d = void 0 !== Vt && "[object process]" === {}.toString.call(Vt),
                    l = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                function p() {
                    return function() {
                        setTimeout(_, 1)
                    }
                }
                var b, m, g, v, y, w = new Array(1e3);

                function _() {
                    for (var e = 0; e < s; e += 2) {
                        (0, w[e])(w[e + 1]), w[e] = void 0, w[e + 1] = void 0
                    }
                    s = 0
                }

                function S() {}
                d ? b = function() {
                    var e = At,
                        t = Vt.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
                    return Array.isArray(t) && "0" === t[1] && "10" === t[2] && (e = setImmediate),
                        function() {
                            e(_)
                        }
                }() : h ? (g = 0, v = new h(_), y = document.createTextNode(""), v.observe(y, {
                    characterData: !0
                }), b = function() {
                    y.data = g = ++g % 2
                }) : l ? ((m = new MessageChannel).port1.onmessage = _, b = function() {
                    m.port2.postMessage(0)
                }) : b = void 0 === c ? function() {
                    try {
                        var e = r("vertx");
                        return i = e.runOnLoop || e.runOnContext,
                            function() {
                                i(_)
                            }
                    } catch (e) {
                        return p()
                    }
                }() : p();
                var k = void 0,
                    E = 1,
                    I = 2,
                    x = new R;

                function O(e, t) {
                    if (t.constructor === e.constructor) ! function(e, t) {
                        t._state === E ? A(e, t._result) : t._state === I ? M(e, t._result) : C(t, void 0, function(t) {
                            T(e, t)
                        }, function(t) {
                            M(e, t)
                        })
                    }(e, t);
                    else {
                        var r = function(e) {
                            try {
                                return e.then
                            } catch (e) {
                                return x.error = e, x
                            }
                        }(t);
                        r === x ? M(e, x.error) : void 0 === r ? A(e, t) : n(r) ? function(e, t, r) {
                            u(function(e) {
                                var n = !1,
                                    i = function(e, t, r, n) {
                                        try {
                                            e.call(t, r, n)
                                        } catch (e) {
                                            return e
                                        }
                                    }(r, t, function(r) {
                                        n || (n = !0, t !== r ? T(e, r) : A(e, r))
                                    }, function(t) {
                                        n || (n = !0, M(e, t))
                                    }, e._label);
                                !n && i && (n = !0, M(e, i))
                            }, e)
                        }(e, t, r) : A(e, t)
                    }
                }

                function T(e, t) {
                    e === t ? M(e, new TypeError("You cannot resolve a promise with itself")) : ! function(e) {
                        return "function" == typeof e || "object" == typeof e && null !== e
                    }(t) ? A(e, t) : O(e, t)
                }

                function P(e) {
                    e._onerror && e._onerror(e._result), L(e)
                }

                function A(e, t) {
                    e._state === k && (e._result = t, e._state = E, 0 !== e._subscribers.length && u(L, e))
                }

                function M(e, t) {
                    e._state === k && (e._state = I, e._result = t, u(P, e))
                }

                function C(e, t, r, n) {
                    var i = e._subscribers,
                        o = i.length;
                    e._onerror = null, i[o] = t, i[o + E] = r, i[o + I] = n, 0 === o && e._state && u(L, e)
                }

                function L(e) {
                    var t = e._subscribers,
                        r = e._state;
                    if (0 !== t.length) {
                        for (var n, i, o = e._result, a = 0; a < t.length; a += 3) n = t[a], i = t[a + r], n ? j(r, n, i, o) : i(o);
                        e._subscribers.length = 0
                    }
                }

                function R() {
                    this.error = null
                }
                var N = new R;

                function j(e, t, r, i) {
                    var o, a, s, u, c = n(r);
                    if (c) {
                        if ((o = function(e, t) {
                                try {
                                    return e(t)
                                } catch (e) {
                                    return N.error = e, N
                                }
                            }(r, i)) === N ? (u = !0, a = o.error, o = null) : s = !0, t === o) return void M(t, new TypeError("A promises callback cannot return that same promise."))
                    } else o = i, s = !0;
                    t._state !== k || (c && s ? T(t, o) : u ? M(t, a) : e === E ? A(t, o) : e === I && M(t, o))
                }

                function U(e, t) {
                    this._instanceConstructor = e, this.promise = new e(S), this._validateInput(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._init(), 0 === this.length ? A(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && A(this.promise, this._result))) : M(this.promise, this._validationError())
                }
                U.prototype._validateInput = function(e) {
                    return a(e)
                }, U.prototype._validationError = function() {
                    return new Error("Array Methods must be provided an Array")
                }, U.prototype._init = function() {
                    this._result = new Array(this.length)
                };
                var D = U;
                U.prototype._enumerate = function() {
                    for (var e = this.length, t = this.promise, r = this._input, n = 0; t._state === k && n < e; n++) this._eachEntry(r[n], n)
                }, U.prototype._eachEntry = function(e, t) {
                    var r = this._instanceConstructor;
                    ! function(e) {
                        return "object" == typeof e && null !== e
                    }(e) ? (this._remaining--, this._result[t] = e) : e.constructor === r && e._state !== k ? (e._onerror = null, this._settledAt(e._state, t, e._result)) : this._willSettleAt(r.resolve(e), t)
                }, U.prototype._settledAt = function(e, t, r) {
                    var n = this.promise;
                    n._state === k && (this._remaining--, e === I ? M(n, r) : this._result[t] = r), 0 === this._remaining && A(n, this._result)
                }, U.prototype._willSettleAt = function(e, t) {
                    var r = this;
                    C(e, void 0, function(e) {
                        r._settledAt(E, t, e)
                    }, function(e) {
                        r._settledAt(I, t, e)
                    })
                };
                var B = function(e) {
                    return new D(this, e).promise
                };
                var H = function(e) {
                    var t = new this(S);
                    if (!a(e)) return M(t, new TypeError("You must pass an array to race.")), t;
                    var r = e.length;

                    function n(e) {
                        T(t, e)
                    }

                    function i(e) {
                        M(t, e)
                    }
                    for (var o = 0; t._state === k && o < r; o++) C(this.resolve(e[o]), void 0, n, i);
                    return t
                };
                var F = function(e) {
                    if (e && "object" == typeof e && e.constructor === this) return e;
                    var t = new this(S);
                    return T(t, e), t
                };
                var q = function(e) {
                        var t = new this(S);
                        return M(t, e), t
                    },
                    V = 0;
                var z = K;

                function K(e) {
                    this._id = V++, this._state = void 0, this._result = void 0, this._subscribers = [], S !== e && (n(e) || function() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }(), this instanceof K || function() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }(), function(e, t) {
                        try {
                            t(function(t) {
                                T(e, t)
                            }, function(t) {
                                M(e, t)
                            })
                        } catch (t) {
                            M(e, t)
                        }
                    }(this, e))
                }
                K.all = B, K.race = H, K.resolve = F, K.reject = q, K._setScheduler = function(e) {
                    o = e
                }, K._setAsap = function(e) {
                    u = e
                }, K._asap = u, K.prototype = {
                    constructor: K,
                    then: function(e, t) {
                        var r = this,
                            n = r._state;
                        if (n === E && !e || n === I && !t) return this;
                        var i = new this.constructor(S),
                            o = r._result;
                        if (n) {
                            var a = arguments[n - 1];
                            u(function() {
                                j(n, i, a, o)
                            })
                        } else C(r, i, e, t);
                        return i
                    },
                    catch: function(e) {
                        return this.then(null, e)
                    }
                };
                var W = function() {
                        var e;
                        if (void 0 !== t) e = t;
                        else if ("undefined" != typeof self) e = self;
                        else try {
                            e = Function("return this")()
                        } catch (e) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                        var r = e.Promise;
                        r && "[object Promise]" === Object.prototype.toString.call(r.resolve()) && !r.cast || (e.Promise = z)
                    },
                    J = {
                        Promise: z,
                        polyfill: W
                    };
                e.exports ? e.exports = J : void 0 !== this && (this.ES6Promise = J), W()
            }).call(t)
        }),
        oo = Object.freeze({}),
        ao = i(function(e) {
            var r, n, i, o;
            r = void 0 !== Vt && Vt.versions && Vt.versions.node, n = !r && ("undefined" != typeof window || "undefined" != typeof self), o = function() {
                return i(function() {
                    return o()
                })
            }, (i = function(e) {
                function i() {}
                e.compact = function(t, r, n, i) {
                    if (arguments.length < 2) return e.nextTick(function() {
                        i(new TypeError("Could not compact, too few arguments."))
                    });
                    if ("function" == typeof n && (i = n, n = {}), n = n || {}, null === r) return e.nextTick(function() {
                        i(new x("The compaction context must not be null.", "jsonld.CompactError", {
                            code: "invalid local context"
                        }))
                    });
                    if (null === t) return e.nextTick(function() {
                        i(null, null)
                    });
                    "base" in n || (n.base = "string" == typeof t ? t : ""), "compactArrays" in n || (n.compactArrays = !0), "graph" in n || (n.graph = !1), "skipExpansion" in n || (n.skipExpansion = !1), "documentLoader" in n || (n.documentLoader = e.loadDocument), "link" in n || (n.link = !1), n.link && (n.skipExpansion = !0);
                    var o = function(t, r, n) {
                        if (r.skipExpansion) return e.nextTick(function() {
                            n(null, t)
                        });
                        e.expand(t, r, n)
                    };

                    function a(e, t, n, o) {
                        if (e) return i(e);
                        o.compactArrays && !o.graph && ee(t) ? 1 === t.length ? t = t[0] : 0 === t.length && (t = {}) : o.graph && Z(t) && (t = [t]), Z(r) && "@context" in r && (r = r["@context"]), ee(r = de(r)) || (r = [r]);
                        var a = r;
                        r = [];
                        for (var s = 0; s < a.length; ++s)(!Z(a[s]) || Object.keys(a[s]).length > 0) && r.push(a[s]);
                        var u = r.length > 0;
                        if (1 === r.length && (r = r[0]), ee(t)) {
                            var c = G(n, "@graph"),
                                f = t;
                            t = {}, u && (t["@context"] = r), t[c] = f
                        } else if (Z(t) && u)
                            for (var h in f = t, t = {
                                    "@context": r
                                }, f) t[h] = f[h];
                        i(null, t, n)
                    }
                    o(t, n, function(t, o) {
                        if (t) return i(new x("Could not expand input before compaction.", "jsonld.CompactError", {
                            cause: t
                        }));
                        var s = $(n);
                        e.processContext(s, r, n, function(e, t) {
                            if (e) return i(new x("Could not process context before compaction.", "jsonld.CompactError", {
                                cause: e
                            }));
                            var r;
                            try {
                                r = (new O).compact(t, null, o, n)
                            } catch (e) {
                                return i(e)
                            }
                            a(null, r, t, n)
                        })
                    })
                }, e.expand = function(t, r, n) {
                    if (arguments.length < 1) return e.nextTick(function() {
                        n(new TypeError("Could not expand, too few arguments."))
                    });

                    function i(e) {
                        "base" in r || (r.base = e.documentUrl || "");
                        var t = {
                            document: de(e.document),
                            remoteContext: {
                                "@context": e.contextUrl
                            }
                        };
                        if ("expandContext" in r) {
                            var i = de(r.expandContext);
                            t.expandContext = "object" == typeof i && "@context" in i ? i : {
                                "@context": i
                            }
                        }
                        pe(t, r, function(e, t) {
                            if (e) return n(e);
                            var i;
                            try {
                                var o = new O,
                                    a = $(r),
                                    s = t.document,
                                    u = t.remoteContext["@context"];
                                t.expandContext && (a = o.processContext(a, t.expandContext["@context"], r)), u && (a = o.processContext(a, u, r)), Z(i = o.expand(a, null, s, r, !1)) && "@graph" in i && 1 === Object.keys(i).length ? i = i["@graph"] : null === i && (i = []), ee(i) || (i = [i])
                            } catch (e) {
                                return n(e)
                            }
                            n(null, i)
                        })
                    }
                    "function" == typeof r && (n = r, r = {}), "documentLoader" in (r = r || {}) || (r.documentLoader = e.loadDocument), "keepFreeFloatingNodes" in r || (r.keepFreeFloatingNodes = !1), e.nextTick(function() {
                        if ("string" != typeof t) i({
                            contextUrl: null,
                            documentUrl: null,
                            document: t
                        });
                        else {
                            var e = function(e, t) {
                                    if (e) return n(e);
                                    try {
                                        if (!t.document) throw new x("No remote document found at the given URL.", "jsonld.NullRemoteDocument");
                                        "string" == typeof t.document && (t.document = JSON.parse(t.document))
                                    } catch (e) {
                                        return n(new x("Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.", "jsonld.LoadDocumentError", {
                                            code: "loading document failed",
                                            cause: e,
                                            remoteDoc: t
                                        }))
                                    }
                                    i(t)
                                },
                                o = r.documentLoader(t, e);
                            o && "then" in o && o.then(e.bind(null, null), e)
                        }
                    })
                }, e.flatten = function(t, r, n, i) {
                    if (arguments.length < 1) return e.nextTick(function() {
                        i(new TypeError("Could not flatten, too few arguments."))
                    });
                    "function" == typeof n ? (i = n, n = {}) : "function" == typeof r && (i = r, r = null, n = {}), "base" in (n = n || {}) || (n.base = "string" == typeof t ? t : ""), "documentLoader" in n || (n.documentLoader = e.loadDocument), e.expand(t, n, function(t, o) {
                        if (t) return i(new x("Could not expand input before flattening.", "jsonld.FlattenError", {
                            cause: t
                        }));
                        var a;
                        try {
                            a = (new O).flatten(o)
                        } catch (e) {
                            return i(e)
                        }
                        if (null === r) return i(null, a);
                        n.graph = !0, n.skipExpansion = !0, e.compact(a, r, n, function(e, t) {
                            if (e) return i(new x("Could not compact flattened output.", "jsonld.FlattenError", {
                                cause: e
                            }));
                            i(null, t)
                        })
                    })
                }, e.frame = function(t, r, n, i) {
                    if (arguments.length < 2) return e.nextTick(function() {
                        i(new TypeError("Could not frame, too few arguments."))
                    });

                    function o(r) {
                        var o, a = r.document;
                        a ? (o = a["@context"], r.contextUrl ? (o ? ee(o) ? o.push(r.contextUrl) : o = [o, r.contextUrl] : o = r.contextUrl, a["@context"] = o) : o = o || {}) : o = {}, e.expand(t, n, function(t, r) {
                            if (t) return i(new x("Could not expand input before framing.", "jsonld.FrameError", {
                                cause: t
                            }));
                            var s = de(n);
                            s.isFrame = !0, s.keepFreeFloatingNodes = !0, e.expand(a, s, function(t, n) {
                                if (t) return i(new x("Could not expand frame before framing.", "jsonld.FrameError", {
                                    cause: t
                                }));
                                var a;
                                try {
                                    a = (new O).frame(r, n, s)
                                } catch (e) {
                                    return i(e)
                                }
                                s.graph = !0, s.skipExpansion = !0, s.link = {}, e.compact(a, o, s, function(e, t, r) {
                                    if (e) return i(new x("Could not compact framed output.", "jsonld.FrameError", {
                                        cause: e
                                    }));
                                    var n = G(r, "@graph");
                                    s.link = {}, t[n] = W(r, t[n], s), i(null, t)
                                })
                            })
                        })
                    }
                    "function" == typeof n && (i = n, n = {}), "base" in (n = n || {}) || (n.base = "string" == typeof t ? t : ""), "documentLoader" in n || (n.documentLoader = e.loadDocument), "embed" in n || (n.embed = "@last"), n.explicit = n.explicit || !1, "requireAll" in n || (n.requireAll = !0), n.omitDefault = n.omitDefault || !1, e.nextTick(function() {
                        if ("string" != typeof r) o({
                            contextUrl: null,
                            documentUrl: null,
                            document: r
                        });
                        else {
                            var e = function(e, t) {
                                    if (e) return i(e);
                                    try {
                                        if (!t.document) throw new x("No remote document found at the given URL.", "jsonld.NullRemoteDocument");
                                        "string" == typeof t.document && (t.document = JSON.parse(t.document))
                                    } catch (e) {
                                        return i(new x("Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.", "jsonld.LoadDocumentError", {
                                            code: "loading document failed",
                                            cause: e,
                                            remoteDoc: t
                                        }))
                                    }
                                    o(t)
                                },
                                t = n.documentLoader(r, e);
                            t && "then" in t && t.then(e.bind(null, null), e)
                        }
                    })
                }, e.link = function(t, r, n, i) {
                    var o = {};
                    r && (o["@context"] = r), o["@embed"] = "@link", e.frame(t, o, n, i)
                }, e.objectify = function(t, r, n, i) {
                    "function" == typeof n && (i = n, n = {}), "base" in (n = n || {}) || (n.base = "string" == typeof t ? t : ""), "documentLoader" in n || (n.documentLoader = e.loadDocument), e.expand(t, n, function(t, o) {
                        if (t) return i(new x("Could not expand input before linking.", "jsonld.LinkError", {
                            cause: t
                        }));
                        var a;
                        try {
                            a = (new O).flatten(o)
                        } catch (e) {
                            return i(e)
                        }
                        n.graph = !0, n.skipExpansion = !0, e.compact(a, r, n, function(t, r, n) {
                            if (t) return i(new x("Could not compact flattened output before linking.", "jsonld.LinkError", {
                                cause: t
                            }));
                            var o = r[G(n, "@graph")][0],
                                a = function(t) {
                                    if (Z(t) || ee(t)) {
                                        if (Z(t)) {
                                            if (a.visited[t["@id"]]) return;
                                            a.visited[t["@id"]] = !0
                                        }
                                        for (var r in t) {
                                            var i = t[r],
                                                s = "@id" === e.getContextValue(n, r, "@type");
                                            if (ee(i) || Z(i) || s)
                                                if (re(i) && s) t[r] = i = o[i], a(i);
                                                else if (ee(i))
                                                for (var u = 0; u < i.length; ++u) re(i[u]) && s ? i[u] = o[i[u]] : Z(i[u]) && "@id" in i[u] && (i[u] = o[i[u]["@id"]]), a(i[u]);
                                            else if (Z(i)) {
                                                var c = i["@id"];
                                                t[r] = i = o[c], a(i)
                                            }
                                        }
                                    }
                                };
                            for (var s in a.visited = {}, a(o), r.of_type = {}, o)
                                if ("@type" in o[s]) {
                                    var u = o[s]["@type"];
                                    ee(u) || (u = [u]);
                                    for (var c = 0; c < u.length; ++c) u[c] in r.of_type || (r.of_type[u[c]] = []), r.of_type[u[c]].push(o[s])
                                }
                            i(null, r)
                        })
                    })
                }, e.normalize = function(t, r, n) {
                    if (arguments.length < 1) return e.nextTick(function() {
                        n(new TypeError("Could not normalize, too few arguments."))
                    });
                    if ("function" == typeof r && (n = r, r = {}), "algorithm" in (r = r || {}) || (r.algorithm = "URGNA2012"), "base" in r || (r.base = "string" == typeof t ? t : ""), "documentLoader" in r || (r.documentLoader = e.loadDocument), "inputFormat" in r) {
                        if ("application/nquads" !== r.inputFormat) return n(new x("Unknown normalization input format.", "jsonld.NormalizeError"));
                        var i = be(t);
                        (new O).normalize(i, r, n)
                    } else {
                        var o = de(r);
                        delete o.format, o.produceGeneralizedRdf = !1, e.toRDF(t, o, function(e, t) {
                            if (e) return n(new x("Could not convert input to RDF dataset before normalization.", "jsonld.NormalizeError", {
                                cause: e
                            }));
                            (new O).normalize(t, r, n)
                        })
                    }
                }, e.fromRDF = function(t, r, n) {
                    if (arguments.length < 1) return e.nextTick(function() {
                        n(new TypeError("Could not convert from RDF, too few arguments."))
                    });
                    "function" == typeof r && (n = r, r = {}), "useRdfType" in (r = r || {}) || (r.useRdfType = !1), "useNativeTypes" in r || (r.useNativeTypes = !1), "format" in r || !re(t) || "format" in r || (r.format = "application/nquads"), e.nextTick(function() {
                        var e;
                        if (r.format) {
                            if (!(e = r.rdfParser || u[r.format])) return n(new x("Unknown input format.", "jsonld.UnknownFormat", {
                                format: r.format
                            }))
                        } else e = function() {
                            return t
                        };
                        var i = !1;
                        try {
                            t = e(t, function(e, t) {
                                if (i = !0, e) return n(e);
                                o(t, r, n)
                            })
                        } catch (e) {
                            if (!i) return n(e);
                            throw e
                        }
                        if (t) {
                            if ("then" in t) return t.then(function(e) {
                                o(e, r, n)
                            }, n);
                            o(t, r, n)
                        }

                        function o(e, t, r) {
                            (new O).fromRDF(e, t, r)
                        }
                    })
                }, e.toRDF = function(t, r, n) {
                    if (arguments.length < 1) return e.nextTick(function() {
                        n(new TypeError("Could not convert to RDF, too few arguments."))
                    });
                    "function" == typeof r && (n = r, r = {}), "base" in (r = r || {}) || (r.base = "string" == typeof t ? t : ""), "documentLoader" in r || (r.documentLoader = e.loadDocument), e.expand(t, r, function(e, t) {
                        if (e) return n(new x("Could not expand input before serialization to RDF.", "jsonld.RdfError", {
                            cause: e
                        }));
                        var i;
                        try {
                            if (i = O.prototype.toRDF(t, r), r.format) {
                                if ("application/nquads" === r.format) return n(null, me(i));
                                throw new x("Unknown output format.", "jsonld.UnknownFormat", {
                                    format: r.format
                                })
                            }
                        } catch (e) {
                            return n(e)
                        }
                        n(null, i)
                    })
                }, e.createNodeMap = function(t, r, n) {
                    if (arguments.length < 1) return e.nextTick(function() {
                        n(new TypeError("Could not create node map, too few arguments."))
                    });
                    "function" == typeof r && (n = r, r = {}), "base" in (r = r || {}) || (r.base = "string" == typeof t ? t : ""), "documentLoader" in r || (r.documentLoader = e.loadDocument), e.expand(t, r, function(e, t) {
                        if (e) return n(new x("Could not expand input before creating node map.", "jsonld.CreateNodeMapError", {
                            cause: e
                        }));
                        var i;
                        try {
                            i = (new O).createNodeMap(t, r)
                        } catch (e) {
                            return n(e)
                        }
                        n(null, i)
                    })
                }, e.merge = function(t, r, n, i) {
                    if (arguments.length < 1) return e.nextTick(function() {
                        i(new TypeError("Could not merge, too few arguments."))
                    });
                    if (!ee(t)) return e.nextTick(function() {
                        i(new TypeError('Could not merge, "docs" must be an array.'))
                    });
                    "function" == typeof n ? (i = n, n = {}) : "function" == typeof r && (i = r, r = null, n = {}), n = n || {};
                    for (var o = [], a = null, s = t.length, u = 0; u < t.length; ++u) {
                        var c = {};
                        for (var f in n) c[f] = n[f];
                        e.expand(t[u], c, h)
                    }

                    function h(e, t) {
                        if (!a) {
                            if (e) return a = e, i(new x("Could not expand input before flattening.", "jsonld.FlattenError", {
                                cause: e
                            }));
                            o.push(t), 0 == --s && d(o)
                        }
                    }

                    function d(t) {
                        var o = !0;
                        "mergeNodes" in n && (o = n.mergeNodes);
                        var a, s = n.namer || n.issuer || new ve("_:b"),
                            u = {
                                "@default": {}
                            };
                        try {
                            for (var c = 0; c < t.length; ++c) {
                                var f = t[c];
                                f = e.relabelBlankNodes(f, {
                                    issuer: new ve("_:b" + c + "-")
                                });
                                var h = o || 0 === c ? u : {
                                    "@default": {}
                                };
                                if (D(f, h, "@default", s), h !== u)
                                    for (var d in h) {
                                        var l = h[d];
                                        if (d in u) {
                                            var p = u[d];
                                            for (var b in l) b in p || (p[b] = l[b])
                                        } else u[d] = l
                                    }
                            }
                            a = B(u)
                        } catch (e) {
                            return i(e)
                        }
                        for (var m = [], g = Object.keys(a).sort(), v = 0; v < g.length; ++v) {
                            var y = a[g[v]];
                            se(y) || m.push(y)
                        }
                        if (null === r) return i(null, m);
                        n.graph = !0, n.skipExpansion = !0, e.compact(m, r, n, function(e, t) {
                            if (e) return i(new x("Could not compact merged output.", "jsonld.MergeError", {
                                cause: e
                            }));
                            i(null, t)
                        })
                    }
                }, e.relabelBlankNodes = function(e, t) {
                    return function e(t, r) {
                        if (ee(r))
                            for (var n = 0; n < r.length; ++n) r[n] = e(t, r[n]);
                        else if (ce(r)) r["@list"] = e(t, r["@list"]);
                        else if (Z(r)) {
                            fe(r) && (r["@id"] = t.getId(r["@id"]));
                            for (var i = Object.keys(r).sort(), o = 0; o < i.length; ++o) {
                                var a = i[o];
                                "@id" !== a && (r[a] = e(t, r[a]))
                            }
                        }
                        return r
                    }((t = t || {}).namer || t.issuer || new ve("_:b"), e)
                }, e.prependBase = function(t, r) {
                    return function(t, r) {
                        if (null === t) return r;
                        if (-1 !== r.indexOf(":")) return r;
                        re(t) && (t = e.url.parse(t || ""));
                        var n = e.url.parse(r),
                            i = {
                                protocol: t.protocol || ""
                            };
                        if (null !== n.authority) i.authority = n.authority, i.path = n.path, i.query = n.query;
                        else if (i.authority = t.authority, "" === n.path) i.path = t.path, null !== n.query ? i.query = n.query : i.query = t.query;
                        else {
                            if (0 === n.path.indexOf("/")) i.path = n.path;
                            else {
                                var o = t.path;
                                "" !== n.path && ((o = o.substr(0, o.lastIndexOf("/") + 1)).length > 0 && "/" !== o.substr(-1) && (o += "/"), o += n.path), i.path = o
                            }
                            i.query = n.query
                        }
                        i.path = Se(i.path, !!i.authority);
                        var a = i.protocol;
                        return null !== i.authority && (a += "//" + i.authority), a += i.path, null !== i.query && (a += "?" + i.query), null !== n.fragment && (a += "#" + n.fragment), "" === a && (a = "./"), a
                    }(t, r)
                }, e.documentLoader = function(t, n) {
                    var i = new x("Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.", "jsonld.LoadDocumentError", {
                        code: "loading document failed"
                    });
                    return r ? n(i, {
                        contextUrl: null,
                        documentUrl: t,
                        document: null
                    }) : e.promisify(function(e) {
                        e(i)
                    })
                }, e.loadDocument = function(t, r) {
                    var n = e.documentLoader(t, r);
                    n && "then" in n && n.then(r.bind(null, null), r)
                }, e.promises = function(r) {
                    r = r || {};
                    var n = Array.prototype.slice,
                        i = e.promisify,
                        o = r.api || {},
                        a = r.version || "jsonld.js";
                    "string" == typeof r.api && (r.version || (a = r.api), o = {}), o.expand = function(t) {
                        if (arguments.length < 1) throw new TypeError("Could not expand, too few arguments.");
                        return i.apply(null, [e.expand].concat(n.call(arguments)))
                    }, o.compact = function(t, r) {
                        if (arguments.length < 2) throw new TypeError("Could not compact, too few arguments.");
                        var o = function(t, r, n, i) {
                            "function" == typeof n && (i = n, n = {}), n = n || {}, e.compact(t, r, n, function(e, t) {
                                i(e, t)
                            })
                        };
                        return i.apply(null, [o].concat(n.call(arguments)))
                    }, o.flatten = function(t) {
                        if (arguments.length < 1) throw new TypeError("Could not flatten, too few arguments.");
                        return i.apply(null, [e.flatten].concat(n.call(arguments)))
                    }, o.frame = function(t, r) {
                        if (arguments.length < 2) throw new TypeError("Could not frame, too few arguments.");
                        return i.apply(null, [e.frame].concat(n.call(arguments)))
                    }, o.fromRDF = function(t) {
                        if (arguments.length < 1) throw new TypeError("Could not convert from RDF, too few arguments.");
                        return i.apply(null, [e.fromRDF].concat(n.call(arguments)))
                    }, o.toRDF = function(t) {
                        if (arguments.length < 1) throw new TypeError("Could not convert to RDF, too few arguments.");
                        return i.apply(null, [e.toRDF].concat(n.call(arguments)))
                    }, o.normalize = function(t) {
                        if (arguments.length < 1) throw new TypeError("Could not normalize, too few arguments.");
                        return i.apply(null, [e.normalize].concat(n.call(arguments)))
                    }, "jsonld.js" === a && (o.link = function(t, r) {
                        if (arguments.length < 2) throw new TypeError("Could not link, too few arguments.");
                        return i.apply(null, [e.link].concat(n.call(arguments)))
                    }, o.objectify = function(t) {
                        return i.apply(null, [e.objectify].concat(n.call(arguments)))
                    }, o.createNodeMap = function(t) {
                        return i.apply(null, [e.createNodeMap].concat(n.call(arguments)))
                    }, o.merge = function(t) {
                        return i.apply(null, [e.merge].concat(n.call(arguments)))
                    });
                    try {
                        e.Promise = t.Promise || io.Promise
                    } catch (e) {
                        var s = function() {
                            throw new Error("Unable to find a Promise implementation.")
                        };
                        for (var u in o) o[u] = s
                    }
                    return o
                }, e.promisify = function(r) {
                    if (!e.Promise) try {
                        e.Promise = t.Promise || io.Promise
                    } catch (e) {
                        throw new Error("Unable to find a Promise implementation.")
                    }
                    var n = Array.prototype.slice.call(arguments, 1);
                    return new e.Promise(function(e, t) {
                        r.apply(null, n.concat(function(r, n) {
                            r ? t(r) : e(n)
                        }))
                    })
                }, e.promises({
                    api: e.promises
                }), i.prototype = e.promises({
                    version: "json-ld-1.0"
                }), i.prototype.toString = function() {
                    return this instanceof i ? "[object JsonLdProcessor]" : "[object JsonLdProcessorPrototype]"
                }, e.JsonLdProcessor = i;
                var o = !!Object.defineProperty;
                if (o) try {
                    Object.defineProperty({}, "x", {})
                } catch (e) {
                    o = !1
                }
                o && (Object.defineProperty(i, "prototype", {
                    writable: !1,
                    enumerable: !1
                }), Object.defineProperty(i.prototype, "constructor", {
                    writable: !0,
                    enumerable: !1,
                    configurable: !0,
                    value: i
                })), n && void 0 === t.JsonLdProcessor && (o ? Object.defineProperty(t, "JsonLdProcessor", {
                    writable: !0,
                    enumerable: !1,
                    configurable: !0,
                    value: i
                }) : t.JsonLdProcessor = i);
                var a = "function" == typeof setImmediate && setImmediate,
                    s = a ? function(e) {
                        a(e)
                    } : function(e) {
                        setTimeout(e, 0)
                    };
                e.nextTick = "object" == typeof Vt ? At : s, e.setImmediate = a ? s : e.nextTick, e.parseLinkHeader = function(e) {
                    for (var t = {}, r = e.match(/(?:<[^>]*?>|"[^"]*?"|[^,])+/g), n = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/, i = 0; i < r.length; ++i) {
                        var o = r[i].match(n);
                        if (o) {
                            for (var a = {
                                    target: o[1]
                                }, s = o[2], u = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g; o = u.exec(s);) a[o[1]] = void 0 === o[2] ? o[3] : o[2];
                            var c = a.rel || "";
                            ee(t[c]) ? t[c].push(a) : t[c] = c in t ? [t[c], a] : a
                        }
                    }
                    return t
                }, e.RequestQueue = function() {
                    this._requests = {}
                }, e.RequestQueue.prototype.wrapLoader = function(e) {
                    return this._loader = e, this._usePromise = 1 === e.length, this.add.bind(this)
                }, e.RequestQueue.prototype.add = function(t, r) {
                    var n = this;
                    if (!r && !n._usePromise) throw new Error("callback must be specified.");
                    if (n._usePromise) return new e.Promise(function(e, r) {
                        var i = n._requests[t];
                        i || (i = n._requests[t] = n._loader(t).then(function(e) {
                            return delete n._requests[t], e
                        }).catch(function(e) {
                            throw delete n._requests[t], e
                        })), i.then(function(t) {
                            e(t)
                        }).catch(function(e) {
                            r(e)
                        })
                    });
                    t in n._requests ? n._requests[t].push(r) : (n._requests[t] = [r], n._loader(t, function(e, r) {
                        var i = n._requests[t];
                        delete n._requests[t];
                        for (var o = 0; o < i.length; ++o) i[o](e, r)
                    }))
                }, e.DocumentCache = function(e) {
                    this.order = [], this.cache = {}, this.size = e || 50, this.expires = 3e4
                }, e.DocumentCache.prototype.get = function(e) {
                    if (e in this.cache) {
                        var t = this.cache[e];
                        if (t.expires >= +new Date) return t.ctx;
                        delete this.cache[e], this.order.splice(this.order.indexOf(e), 1)
                    }
                    return null
                }, e.DocumentCache.prototype.set = function(e, t) {
                    this.order.length === this.size && delete this.cache[this.order.shift()], this.order.push(e), this.cache[e] = {
                        ctx: t,
                        expires: +new Date + this.expires
                    }
                }, e.ActiveContextCache = function(e) {
                    this.order = [], this.cache = {}, this.size = e || 100
                }, e.ActiveContextCache.prototype.get = function(e, t) {
                    var r = JSON.stringify(e),
                        n = JSON.stringify(t),
                        i = this.cache[r];
                    return i && n in i ? i[n] : null
                }, e.ActiveContextCache.prototype.set = function(e, t, r) {
                    if (this.order.length === this.size) {
                        var n = this.order.shift();
                        delete this.cache[n.activeCtx][n.localCtx]
                    }
                    var i = JSON.stringify(e),
                        o = JSON.stringify(t);
                    this.order.push({
                        activeCtx: i,
                        localCtx: o
                    }), i in this.cache || (this.cache[i] = {}), this.cache[i][o] = de(r)
                }, e.cache = {
                    activeCtx: new e.ActiveContextCache
                }, e.documentLoaders = {}, e.documentLoaders.jquery = function(t, r) {
                    r = r || {};
                    var n = new e.RequestQueue;
                    return ("usePromise" in r ? r.usePromise : "undefined" != typeof Promise) ? n.wrapLoader(function(t) {
                        return e.promisify(i, t)
                    }) : n.wrapLoader(i);

                    function i(n, i) {
                        return 0 !== n.indexOf("http:") && 0 !== n.indexOf("https:") ? i(new x('URL could not be dereferenced; only "http" and "https" URLs are supported.', "jsonld.InvalidUrl", {
                            code: "loading document failed",
                            url: n
                        }), {
                            contextUrl: null,
                            documentUrl: n,
                            document: null
                        }) : r.secure && 0 !== n.indexOf("https") ? i(new x('URL could not be dereferenced; secure mode is enabled and the URL\'s scheme is not "https".', "jsonld.InvalidUrl", {
                            code: "loading document failed",
                            url: n
                        }), {
                            contextUrl: null,
                            documentUrl: n,
                            document: null
                        }) : void t.ajax({
                            url: n,
                            accepts: {
                                json: "application/ld+json, application/json"
                            },
                            headers: {
                                Accept: "application/ld+json, application/json"
                            },
                            dataType: "json",
                            crossDomain: !0,
                            success: function(t, r, o) {
                                var a = {
                                        contextUrl: null,
                                        documentUrl: n,
                                        document: t
                                    },
                                    s = o.getResponseHeader("Content-Type"),
                                    u = o.getResponseHeader("Link");
                                if (u && "application/ld+json" !== s) {
                                    if (ee(u = e.parseLinkHeader(u)[E])) return i(new x("URL could not be dereferenced, it has more than one associated HTTP Link Header.", "jsonld.InvalidUrl", {
                                        code: "multiple context link headers",
                                        url: n
                                    }), a);
                                    u && (a.contextUrl = u.target)
                                }
                                i(null, a)
                            },
                            error: function(e, t, r) {
                                i(new x("URL could not be dereferenced, an error occurred.", "jsonld.LoadDocumentError", {
                                    code: "loading document failed",
                                    url: n,
                                    cause: r
                                }), {
                                    contextUrl: null,
                                    documentUrl: n,
                                    document: null
                                })
                            }
                        })
                    }
                }, e.documentLoaders.node = function(t) {
                    var r = !("strictSSL" in (t = t || {})) || t.strictSSL,
                        n = "maxRedirects" in t ? t.maxRedirects : -1,
                        i = "request" in t ? t.request : oo,
                        o = "application/ld+json, application/json",
                        a = oo,
                        s = new e.RequestQueue;
                    if (t.usePromise) return s.wrapLoader(function(t) {
                        return e.promisify(c, t, [])
                    });
                    var u = t.headers || {};
                    if ("Accept" in u || "accept" in u) throw new RangeError('Accept header may not be specified as an option; only "' + o + '" is supported.');
                    return s.wrapLoader(function(e, t) {
                        c(e, [], t)
                    });

                    function c(s, u, f) {
                        if (0 !== s.indexOf("http:") && 0 !== s.indexOf("https:")) return f(new x('URL could not be dereferenced; only "http" and "https" URLs are supported.', "jsonld.InvalidUrl", {
                            code: "loading document failed",
                            url: s
                        }), {
                            contextUrl: null,
                            documentUrl: s,
                            document: null
                        });
                        if (t.secure && 0 !== s.indexOf("https")) return f(new x('URL could not be dereferenced; secure mode is enabled and the URL\'s scheme is not "https".', "jsonld.InvalidUrl", {
                            code: "loading document failed",
                            url: s
                        }), {
                            contextUrl: null,
                            documentUrl: s,
                            document: null
                        });
                        var h = null;
                        if (null !== h) return f(null, h);
                        var d = {
                            Accept: o
                        };
                        for (var l in t.headers) d[l] = t.headers[l];
                        i({
                            url: s,
                            headers: d,
                            strictSSL: r,
                            followRedirect: !1
                        }, function(t, r, i) {
                            if (h = {
                                    contextUrl: null,
                                    documentUrl: s,
                                    document: i || null
                                }, t) return f(new x("URL could not be dereferenced, an error occurred.", "jsonld.LoadDocumentError", {
                                code: "loading document failed",
                                url: s,
                                cause: t
                            }), h);
                            var o = a.STATUS_CODES[r.statusCode];
                            if (r.statusCode >= 400) return f(new x("URL could not be dereferenced: " + o, "jsonld.InvalidUrl", {
                                code: "loading document failed",
                                url: s,
                                httpStatusCode: r.statusCode
                            }), h);
                            if (r.headers.link && "application/ld+json" !== r.headers["content-type"]) {
                                var d = e.parseLinkHeader(r.headers.link)[E];
                                if (ee(d)) return f(new x("URL could not be dereferenced, it has more than one associated HTTP Link Header.", "jsonld.InvalidUrl", {
                                    code: "multiple context link headers",
                                    url: s
                                }), h);
                                d && (h.contextUrl = d.target)
                            }
                            if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) return u.length === n ? f(new x("URL could not be dereferenced; there were too many redirects.", "jsonld.TooManyRedirects", {
                                code: "loading document failed",
                                url: s,
                                httpStatusCode: r.statusCode,
                                redirects: u
                            }), h) : -1 !== u.indexOf(s) ? f(new x("URL could not be dereferenced; infinite redirection was detected.", "jsonld.InfiniteRedirectDetected", {
                                code: "recursive context inclusion",
                                url: s,
                                httpStatusCode: r.statusCode,
                                redirects: u
                            }), h) : (u.push(s), c(r.headers.location, u, f));
                            u.push(s), f(t, h)
                        })
                    }
                }, e.documentLoaders.xhr = function(t) {
                    t = t || {};
                    var r = /(^|(\r\n))link:/i,
                        n = new e.RequestQueue;
                    return ("usePromise" in t ? t.usePromise : "undefined" != typeof Promise) ? n.wrapLoader(function(t) {
                        return e.promisify(i, t)
                    }) : n.wrapLoader(i);

                    function i(n, i) {
                        if (0 !== n.indexOf("http:") && 0 !== n.indexOf("https:")) return i(new x('URL could not be dereferenced; only "http" and "https" URLs are supported.', "jsonld.InvalidUrl", {
                            code: "loading document failed",
                            url: n
                        }), {
                            contextUrl: null,
                            documentUrl: n,
                            document: null
                        });
                        if (t.secure && 0 !== n.indexOf("https")) return i(new x('URL could not be dereferenced; secure mode is enabled and the URL\'s scheme is not "https".', "jsonld.InvalidUrl", {
                            code: "loading document failed",
                            url: n
                        }), {
                            contextUrl: null,
                            documentUrl: n,
                            document: null
                        });
                        var o = new(t.xhr || XMLHttpRequest);
                        o.onload = function() {
                            if (o.status >= 400) return i(new x("URL could not be dereferenced: " + o.statusText, "jsonld.LoadDocumentError", {
                                code: "loading document failed",
                                url: n,
                                httpStatusCode: o.status
                            }), {
                                contextUrl: null,
                                documentUrl: n,
                                document: null
                            });
                            var t, a = {
                                    contextUrl: null,
                                    documentUrl: n,
                                    document: o.response
                                },
                                s = o.getResponseHeader("Content-Type");
                            if (r.test(o.getAllResponseHeaders()) && (t = o.getResponseHeader("Link")), t && "application/ld+json" !== s) {
                                if (ee(t = e.parseLinkHeader(t)[E])) return i(new x("URL could not be dereferenced, it has more than one associated HTTP Link Header.", "jsonld.InvalidUrl", {
                                    code: "multiple context link headers",
                                    url: n
                                }), a);
                                t && (a.contextUrl = t.target)
                            }
                            i(null, a)
                        }, o.onerror = function() {
                            i(new x("URL could not be dereferenced, an error occurred.", "jsonld.LoadDocumentError", {
                                code: "loading document failed",
                                url: n
                            }), {
                                contextUrl: null,
                                documentUrl: n,
                                document: null
                            })
                        }, o.open("GET", n, !0), o.setRequestHeader("Accept", "application/ld+json, application/json"), o.send()
                    }
                }, e.useDocumentLoader = function(t) {
                    if (!(t in e.documentLoaders)) throw new x('Unknown document loader type: "' + t + '"', "jsonld.UnknownDocumentLoader", {
                        type: t
                    });
                    e.documentLoader = e.documentLoaders[t].apply(e, Array.prototype.slice.call(arguments, 1))
                }, e.processContext = function(t, r) {
                    var n = {},
                        i = 2;
                    arguments.length > 3 && (n = arguments[2] || {}, i += 1);
                    var o = arguments[i];
                    if ("base" in n || (n.base = ""), "documentLoader" in n || (n.documentLoader = e.loadDocument), null === r) return o(null, $(n));
                    Z(r = de(r)) && "@context" in r || (r = {
                        "@context": r
                    }), pe(r, n, function(e, r) {
                        if (e) return o(e);
                        try {
                            r = (new O).processContext(t, r, n)
                        } catch (e) {
                            return o(e)
                        }
                        o(null, r)
                    })
                }, e.hasProperty = function(e, t) {
                    var r = !1;
                    if (t in e) {
                        var n = e[t];
                        r = !ee(n) || n.length > 0
                    }
                    return r
                }, e.hasValue = function(t, r, n) {
                    var i = !1;
                    if (e.hasProperty(t, r)) {
                        var o = t[r],
                            a = ce(o);
                        if (ee(o) || a) {
                            a && (o = o["@list"]);
                            for (var s = 0; s < o.length; ++s)
                                if (e.compareValues(n, o[s])) {
                                    i = !0;
                                    break
                                }
                        } else ee(n) || (i = e.compareValues(n, o))
                    }
                    return i
                }, e.addValue = function(t, r, n, i) {
                    if ("propertyIsArray" in (i = i || {}) || (i.propertyIsArray = !1), "allowDuplicate" in i || (i.allowDuplicate = !0), ee(n)) {
                        0 !== n.length || !i.propertyIsArray || r in t || (t[r] = []);
                        for (var o = 0; o < n.length; ++o) e.addValue(t, r, n[o], i)
                    } else if (r in t) {
                        var a = !i.allowDuplicate && e.hasValue(t, r, n);
                        ee(t[r]) || a && !i.propertyIsArray || (t[r] = [t[r]]), a || t[r].push(n)
                    } else t[r] = i.propertyIsArray ? [n] : n
                }, e.getValues = function(e, t) {
                    var r = e[t] || [];
                    return ee(r) || (r = [r]), r
                }, e.removeProperty = function(e, t) {
                    delete e[t]
                }, e.removeValue = function(t, r, n, i) {
                    "propertyIsArray" in (i = i || {}) || (i.propertyIsArray = !1);
                    var o = e.getValues(t, r).filter(function(t) {
                        return !e.compareValues(t, n)
                    });
                    0 === o.length ? e.removeProperty(t, r) : 1 !== o.length || i.propertyIsArray ? t[r] = o : t[r] = o[0]
                }, e.compareValues = function(e, t) {
                    return e === t || !(!ue(e) || !ue(t) || e["@value"] !== t["@value"] || e["@type"] !== t["@type"] || e["@language"] !== t["@language"] || e["@index"] !== t["@index"]) || !!(Z(e) && "@id" in e && Z(t) && "@id" in t) && e["@id"] === t["@id"]
                }, e.getContextValue = function(e, t, r) {
                    var n = null;
                    if (null === t) return n;
                    if ("@language" === r && r in e && (n = e[r]), e.mappings[t]) {
                        var i = e.mappings[t];
                        oe(r) ? n = i : r in i && (n = i[r])
                    }
                    return n
                };
                var u = {};
                if (e.registerRDFParser = function(e, t) {
                        u[e] = t
                    }, e.unregisterRDFParser = function(e) {
                        delete u[e]
                    }, r) {
                    if (void 0 === c) var c = null;
                    if (void 0 === f) var f = {
                        ELEMENT_NODE: 1,
                        ATTRIBUTE_NODE: 2,
                        TEXT_NODE: 3,
                        CDATA_SECTION_NODE: 4,
                        ENTITY_REFERENCE_NODE: 5,
                        ENTITY_NODE: 6,
                        PROCESSING_INSTRUCTION_NODE: 7,
                        COMMENT_NODE: 8,
                        DOCUMENT_NODE: 9,
                        DOCUMENT_TYPE_NODE: 10,
                        DOCUMENT_FRAGMENT_NODE: 11,
                        NOTATION_NODE: 12
                    }
                }
                var h = "http://www.w3.org/2001/XMLSchema#boolean",
                    d = "http://www.w3.org/2001/XMLSchema#double",
                    l = "http://www.w3.org/2001/XMLSchema#integer",
                    p = "http://www.w3.org/2001/XMLSchema#string",
                    b = "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                    m = b + "first",
                    g = b + "rest",
                    v = b + "nil",
                    y = b + "type",
                    w = b + "PlainLiteral",
                    _ = b + "XMLLiteral",
                    S = b + "object",
                    k = b + "langString",
                    E = "http://www.w3.org/ns/json-ld#context",
                    I = 10,
                    x = function(e, t, n) {
                        r ? (Error.call(this), Error.captureStackTrace(this, this.constructor)) : "undefined" != typeof Error && (this.stack = (new Error).stack), this.name = t || "jsonld.Error", this.message = e || "An unspecified JSON-LD error occurred.", this.details = n || {}
                    };
                r ? oo.inherits(x, Error) : "undefined" != typeof Error && (x.prototype = new Error);
                var O = function() {};

                function T(e) {
                    for (var t = [], r = Object.keys(e).sort(), n = 0; n < r.length; ++n) {
                        var i = r[n],
                            o = e[i];
                        ee(o) || (o = [o]);
                        for (var a = 0; a < o.length; ++a) {
                            var s = o[a];
                            if (null !== s) {
                                if (!re(s)) throw new x("Invalid JSON-LD syntax; language map values must be strings.", "jsonld.SyntaxError", {
                                    code: "invalid language map value",
                                    languageMap: e
                                });
                                t.push({
                                    "@value": s,
                                    "@language": i.toLowerCase()
                                })
                            }
                        }
                    }
                    return t
                }

                function P(e, t, r) {
                    for (var n = [], i = Object.keys(e).sort(), o = 0; o < i.length; ++o)
                        for (var a = i[o], s = e[a], u = Object.keys(s).sort(), c = 0; c < u.length; ++c) {
                            var f = u[c],
                                h = s[f];
                            if ("@type" === f) f = y;
                            else if (Q(f)) continue;
                            for (var d = 0; d < h.length; ++d) {
                                var l = h[d],
                                    p = {};
                                if (p.type = 0 === a.indexOf("_:") ? "blank node" : "IRI", p.value = a, he(a)) {
                                    var b = {};
                                    if (b.type = 0 === f.indexOf("_:") ? "blank node" : "IRI", b.value = f, he(f) && ("blank node" !== b.type || r.produceGeneralizedRdf))
                                        if (ce(l)) A(l["@list"], t, p, b, n);
                                        else {
                                            var m = M(l);
                                            m && n.push({
                                                subject: p,
                                                predicate: b,
                                                object: m
                                            })
                                        }
                                }
                            }
                        }
                    return n
                }

                function A(e, t, r, n, i) {
                    for (var o = {
                            type: "IRI",
                            value: m
                        }, a = {
                            type: "IRI",
                            value: g
                        }, s = {
                            type: "IRI",
                            value: v
                        }, u = 0; u < e.length; ++u) {
                        var c = e[u],
                            f = {
                                type: "blank node",
                                value: t.getId()
                            };
                        i.push({
                            subject: r,
                            predicate: n,
                            object: f
                        }), r = f, n = o;
                        var h = M(c);
                        h && i.push({
                            subject: r,
                            predicate: n,
                            object: h
                        }), n = a
                    }
                    i.push({
                        subject: r,
                        predicate: n,
                        object: s
                    })
                }

                function M(e) {
                    var t = {};
                    if (ue(e)) {
                        t.type = "literal";
                        var r = e["@value"],
                            n = e["@type"] || null;
                        ! function(e) {
                            return "boolean" == typeof e || "[object Boolean]" === Object.prototype.toString.call(e)
                        }(r) ? ie(r) || n === d ? (ie(r) || (r = parseFloat(r)), t.value = r.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), t.datatype = n || d) : ne(r) ? (t.value = r.toFixed(0), t.datatype = n || l) : "@language" in e ? (t.value = r, t.datatype = n || k, t.language = e["@language"]) : (t.value = r, t.datatype = n || p): (t.value = r.toString(), t.datatype = n || h)
                    } else {
                        var i = Z(e) ? e["@id"] : e;
                        t.type = 0 === i.indexOf("_:") ? "blank node" : "IRI", t.value = i
                    }
                    return "IRI" !== t.type || he(t.value) ? t : null
                }

                function C(e, t) {
                    if ("IRI" === e.type || "blank node" === e.type) return {
                        "@id": e.value
                    };
                    var r = {
                        "@value": e.value
                    };
                    if (e.language) r["@language"] = e.language;
                    else {
                        var n = e.datatype;
                        if (n || (n = p), t) {
                            if (n === h) "true" === r["@value"] ? r["@value"] = !0 : "false" === r["@value"] && (r["@value"] = !1);
                            else if (function(e) {
                                    return !isNaN(parseFloat(e)) && isFinite(e)
                                }(r["@value"]))
                                if (n === l) {
                                    var i = parseInt(r["@value"], 10);
                                    i.toFixed(0) === r["@value"] && (r["@value"] = i)
                                } else n === d && (r["@value"] = parseFloat(r["@value"])); - 1 === [h, l, d, p].indexOf(n) && (r["@type"] = n)
                        } else n !== p && (r["@type"] = n)
                    }
                    return r
                }

                function L(e, t) {
                    for (var r = ["subject", "predicate", "object"], n = 0; n < r.length; ++n) {
                        var i = r[n];
                        if (e[i].type !== t[i].type || e[i].value !== t[i].value) return !1
                    }
                    return e.object.language === t.object.language && e.object.datatype === t.object.datatype
                }
                O.prototype.compact = function(t, r, n, i) {
                    if (ee(n)) {
                        for (var o = [], a = 0; a < n.length; ++a) {
                            var s = this.compact(t, r, n[a], i);
                            null !== s && o.push(s)
                        }
                        return i.compactArrays && 1 === o.length && null === (S = e.getContextValue(t, r, "@container")) && (o = o[0]), o
                    }
                    if (Z(n)) {
                        if (i.link && "@id" in n && n["@id"] in i.link) {
                            var u = i.link[n["@id"]];
                            for (a = 0; a < u.length; ++a)
                                if (u[a].expanded === n) return u[a].compacted
                        }
                        if (ue(n) || se(n)) return o = function(t, r, n) {
                            if (ue(n)) {
                                var i = e.getContextValue(t, r, "@type"),
                                    o = e.getContextValue(t, r, "@language"),
                                    a = e.getContextValue(t, r, "@container"),
                                    s = "@index" in n && "@index" !== a;
                                if (!s && (n["@type"] === i || n["@language"] === o)) return n["@value"];
                                var u = Object.keys(n).length,
                                    c = 1 === u || 2 === u && "@index" in n && !s,
                                    f = "@language" in t,
                                    h = re(n["@value"]),
                                    d = t.mappings[r] && null === t.mappings[r]["@language"];
                                if (c && (!f || !h || d)) return n["@value"];
                                var l = {};
                                return s && (l[G(t, "@index")] = n["@index"]), "@type" in n ? l[G(t, "@type")] = G(t, n["@type"], null, {
                                    vocab: !0
                                }) : "@language" in n && (l[G(t, "@language")] = n["@language"]), l[G(t, "@value")] = n["@value"], l
                            }
                            var p = Y(t, r, {
                                    vocab: !0
                                }),
                                b = (i = e.getContextValue(t, r, "@type"), G(t, n["@id"], null, {
                                    vocab: "@vocab" === i
                                }));
                            return "@id" === i || "@vocab" === i || "@graph" === p ? b : ((l = {})[G(t, "@id")] = b, l)
                        }(t, r, n), i.link && se(n) && (n["@id"] in i.link || (i.link[n["@id"]] = []), i.link[n["@id"]].push({
                            expanded: n,
                            compacted: o
                        })), o;
                        var c = "@reverse" === r;
                        o = {}, i.link && "@id" in n && (n["@id"] in i.link || (i.link[n["@id"]] = []), i.link[n["@id"]].push({
                            expanded: n,
                            compacted: o
                        }));
                        for (var f = Object.keys(n).sort(), h = 0; h < f.length; ++h) {
                            var d = f[h],
                                l = n[d];
                            if ("@id" !== d && "@type" !== d)
                                if ("@reverse" !== d)
                                    if ("@index" !== d)
                                        if ("@graph" !== d && "@list" !== d && Q(d)) I = G(t, d), e.addValue(o, I, l);
                                        else {
                                            if (0 === l.length) {
                                                var p = G(t, d, l, {
                                                    vocab: !0
                                                }, c);
                                                e.addValue(o, p, l, {
                                                    propertyIsArray: !0
                                                })
                                            }
                                            for (T = 0; T < l.length; ++T) {
                                                var b = l[T],
                                                    m = (p = G(t, d, b, {
                                                        vocab: !0
                                                    }, c), S = e.getContextValue(t, p, "@container"), ce(b)),
                                                    g = null;
                                                m && (g = b["@list"]);
                                                var v, y = this.compact(t, p, m ? g : b, i);
                                                if (m)
                                                    if (ee(y) || (y = [y]), "@list" !== S) {
                                                        var w = {};
                                                        w[G(t, "@list")] = y, y = w, "@index" in b && (y[G(t, "@index")] = b["@index"])
                                                    } else if (p in o) throw new x('JSON-LD compact error; property has a "@list" @container rule but there is more than a single @list that matches the compacted term in the document. Compaction might mix unwanted items into the list.', "jsonld.SyntaxError", {
                                                    code: "compaction to list of lists"
                                                });
                                                if ("@language" === S || "@index" === S) p in o ? v = o[p] : o[p] = v = {}, "@language" === S && ue(y) && (y = y["@value"]), e.addValue(v, b[S], y);
                                                else P = !i.compactArrays || "@set" === S || "@list" === S || ee(y) && 0 === y.length || "@list" === d || "@graph" === d, e.addValue(o, p, y, {
                                                    propertyIsArray: P
                                                })
                                            }
                                        } else {
                                if ("@index" === (S = e.getContextValue(t, r, "@container"))) continue;
                                I = G(t, d), e.addValue(o, I, l)
                            } else {
                                for (var _ in O = this.compact(t, "@reverse", l, i))
                                    if (t.mappings[_] && t.mappings[_].reverse) {
                                        var S, k = O[_],
                                            E = "@set" === (S = e.getContextValue(t, _, "@container")) || !i.compactArrays;
                                        e.addValue(o, _, k, {
                                            propertyIsArray: E
                                        }), delete O[_]
                                    }
                                if (Object.keys(O).length > 0) {
                                    var I = G(t, d);
                                    e.addValue(o, I, O)
                                }
                            } else {
                                var O;
                                if (re(l)) O = G(t, l, null, {
                                    vocab: "@type" === d
                                });
                                else {
                                    O = [];
                                    for (var T = 0; T < l.length; ++T) O.push(G(t, l[T], null, {
                                        vocab: !0
                                    }))
                                }
                                var I = G(t, d),
                                    P = ee(O) && 0 === l.length;
                                e.addValue(o, I, O, {
                                    propertyIsArray: P
                                })
                            }
                        }
                        return o
                    }
                    return n
                }, O.prototype.expand = function(t, r, n, i, o) {
                    var a = this;
                    if (null == n) return null;
                    if (!ee(n) && !Z(n)) return o || null !== r && "@graph" !== Y(t, r, {
                        vocab: !0
                    }) ? function(t, r, n) {
                        if (null == n) return null;
                        var i = Y(t, r, {
                            vocab: !0
                        });
                        if ("@id" === i) return Y(t, n, {
                            base: !0
                        });
                        if ("@type" === i) return Y(t, n, {
                            vocab: !0,
                            base: !0
                        });
                        var o = e.getContextValue(t, r, "@type");
                        if ("@id" === o || "@graph" === i && re(n)) return {
                            "@id": Y(t, n, {
                                base: !0
                            })
                        };
                        if ("@vocab" === o) return {
                            "@id": Y(t, n, {
                                vocab: !0,
                                base: !0
                            })
                        };
                        if (Q(i)) return n;
                        var a = {};
                        if (null !== o) a["@type"] = o;
                        else if (re(n)) {
                            var s = e.getContextValue(t, r, "@language");
                            null !== s && (a["@language"] = s)
                        }
                        return -1 === ["boolean", "number", "string"].indexOf(typeof n) && (n = n.toString()), a["@value"] = n, a
                    }(t, r, n) : null;
                    if (ee(n)) {
                        var s = [],
                            u = e.getContextValue(t, r, "@container");
                        o = o || "@list" === u;
                        for (var c = 0; c < n.length; ++c) {
                            var f = a.expand(t, r, n[c], i);
                            if (o && (ee(f) || ce(f))) throw new x("Invalid JSON-LD syntax; lists of lists are not permitted.", "jsonld.SyntaxError", {
                                code: "list of lists"
                            });
                            null !== f && (ee(f) ? s = s.concat(f) : s.push(f))
                        }
                        return s
                    }
                    "@context" in n && (t = a.processContext(t, n["@context"], i));
                    for (var h = Y(t, r, {
                            vocab: !0
                        }), d = (s = {}, Object.keys(n).sort()), l = 0; l < d.length; ++l) {
                        var p, b = d[l],
                            m = n[b];
                        if ("@context" !== b) {
                            var g = Y(t, b, {
                                vocab: !0
                            });
                            if (null !== g && (he(g) || Q(g))) {
                                if (Q(g)) {
                                    if ("@reverse" === h) throw new x("Invalid JSON-LD syntax; a keyword cannot be used as a @reverse property.", "jsonld.SyntaxError", {
                                        code: "invalid reverse property map",
                                        value: m
                                    });
                                    if (g in s) throw new x("Invalid JSON-LD syntax; colliding keywords detected.", "jsonld.SyntaxError", {
                                        code: "colliding keywords",
                                        keyword: g
                                    })
                                }
                                if ("@id" === g && !re(m)) {
                                    if (!i.isFrame) throw new x('Invalid JSON-LD syntax; "@id" value must a string.', "jsonld.SyntaxError", {
                                        code: "invalid @id value",
                                        value: m
                                    });
                                    if (!Z(m)) throw new x('Invalid JSON-LD syntax; "@id" value must be a string or an object.', "jsonld.SyntaxError", {
                                        code: "invalid @id value",
                                        value: m
                                    })
                                }
                                if ("@type" === g && te(m), "@graph" === g && !Z(m) && !ee(m)) throw new x('Invalid JSON-LD syntax; "@graph" value must not be an object or an array.', "jsonld.SyntaxError", {
                                    code: "invalid @graph value",
                                    value: m
                                });
                                if ("@value" === g && (Z(m) || ee(m))) throw new x('Invalid JSON-LD syntax; "@value" value must not be an object or an array.', "jsonld.SyntaxError", {
                                    code: "invalid value object value",
                                    value: m
                                });
                                if ("@language" === g) {
                                    if (null === m) continue;
                                    if (!re(m)) throw new x('Invalid JSON-LD syntax; "@language" value must be a string.', "jsonld.SyntaxError", {
                                        code: "invalid language-tagged string",
                                        value: m
                                    });
                                    m = m.toLowerCase()
                                }
                                if ("@index" === g && !re(m)) throw new x('Invalid JSON-LD syntax; "@index" value must be a string.', "jsonld.SyntaxError", {
                                    code: "invalid @index value",
                                    value: m
                                });
                                if ("@reverse" !== g) {
                                    if ("@language" === (u = e.getContextValue(t, b, "@container")) && Z(m)) p = T(m);
                                    else if ("@index" === u && Z(m)) p = function(e) {
                                        for (var r = [], n = Object.keys(m).sort(), o = 0; o < n.length; ++o) {
                                            var s = n[o],
                                                u = m[s];
                                            ee(u) || (u = [u]), u = a.expand(t, e, u, i, !1);
                                            for (var c = 0; c < u.length; ++c) {
                                                var f = u[c];
                                                "@index" in f || (f["@index"] = s), r.push(f)
                                            }
                                        }
                                        return r
                                    }(b);
                                    else {
                                        var v = "@list" === g;
                                        if (v || "@set" === g) {
                                            var y = r;
                                            if (v && "@graph" === h && (y = null), p = a.expand(t, y, m, i, v), v && ce(p)) throw new x("Invalid JSON-LD syntax; lists of lists are not permitted.", "jsonld.SyntaxError", {
                                                code: "list of lists"
                                            })
                                        } else p = a.expand(t, b, m, i, !1)
                                    }
                                    if (null !== p || "@value" === g)
                                        if ("@list" === g || ce(p) || "@list" !== u || (p = {
                                                "@list": p = ee(p) ? p : [p]
                                            }), t.mappings[b] && t.mappings[b].reverse)
                                            for (S = s["@reverse"] = s["@reverse"] || {}, ee(p) || (p = [p]), E = 0; E < p.length; ++E) {
                                                if (ue(I = p[E]) || ce(I)) throw new x('Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.', "jsonld.SyntaxError", {
                                                    code: "invalid reverse property value",
                                                    value: p
                                                });
                                                e.addValue(S, g, I, {
                                                    propertyIsArray: !0
                                                })
                                            } else {
                                                var w = -1 === ["@index", "@id", "@type", "@value", "@language"].indexOf(g);
                                                e.addValue(s, g, p, {
                                                    propertyIsArray: w
                                                })
                                            }
                                } else {
                                    if (!Z(m)) throw new x('Invalid JSON-LD syntax; "@reverse" value must be an object.', "jsonld.SyntaxError", {
                                        code: "invalid @reverse value",
                                        value: m
                                    });
                                    if ("@reverse" in (p = a.expand(t, "@reverse", m, i)))
                                        for (var _ in p["@reverse"]) e.addValue(s, _, p["@reverse"][_], {
                                            propertyIsArray: !0
                                        });
                                    var S = s["@reverse"] || null;
                                    for (var _ in p)
                                        if ("@reverse" !== _) {
                                            null === S && (S = s["@reverse"] = {}), e.addValue(S, _, [], {
                                                propertyIsArray: !0
                                            });
                                            for (var k = p[_], E = 0; E < k.length; ++E) {
                                                var I;
                                                if (ue(I = k[E]) || ce(I)) throw new x('Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.', "jsonld.SyntaxError", {
                                                    code: "invalid reverse property value",
                                                    value: p
                                                });
                                                e.addValue(S, _, I, {
                                                    propertyIsArray: !0
                                                })
                                            }
                                        }
                                }
                            }
                        }
                    }
                    var O = (d = Object.keys(s)).length;
                    if ("@value" in s) {
                        if ("@type" in s && "@language" in s) throw new x('Invalid JSON-LD syntax; an element containing "@value" may not contain both "@type" and "@language".', "jsonld.SyntaxError", {
                            code: "invalid value object",
                            element: s
                        });
                        var P = O - 1;
                        if ("@type" in s && (P -= 1), "@index" in s && (P -= 1), "@language" in s && (P -= 1), 0 !== P) throw new x('Invalid JSON-LD syntax; an element containing "@value" may only have an "@index" property and at most one other property which can be "@type" or "@language".', "jsonld.SyntaxError", {
                            code: "invalid value object",
                            element: s
                        });
                        if (null === s["@value"]) s = null;
                        else {
                            if ("@language" in s && !re(s["@value"])) throw new x("Invalid JSON-LD syntax; only strings may be language-tagged.", "jsonld.SyntaxError", {
                                code: "invalid language-tagged value",
                                element: s
                            });
                            if ("@type" in s && (!he(s["@type"]) || 0 === s["@type"].indexOf("_:"))) throw new x('Invalid JSON-LD syntax; an element containing "@value" and "@type" must have an absolute IRI for the value of "@type".', "jsonld.SyntaxError", {
                                code: "invalid typed value",
                                element: s
                            })
                        }
                    } else if ("@type" in s && !ee(s["@type"])) s["@type"] = [s["@type"]];
                    else if ("@set" in s || "@list" in s) {
                        if (O > 1 && !(2 === O && "@index" in s)) throw new x('Invalid JSON-LD syntax; if an element has the property "@set" or "@list", then it can have at most one other property that is "@index".', "jsonld.SyntaxError", {
                            code: "invalid set or list object",
                            element: s
                        });
                        "@set" in s && (s = s["@set"], O = (d = Object.keys(s)).length)
                    } else 1 === O && "@language" in s && (s = null);
                    return !Z(s) || i.keepFreeFloatingNodes || o || null !== r && "@graph" !== h || (0 === O || "@value" in s || "@list" in s || 1 === O && "@id" in s) && (s = null), s
                }, O.prototype.createNodeMap = function(e, t) {
                    var r = {
                        "@default": {}
                    };
                    return D(e, r, "@default", (t = t || {}).namer || t.issuer || new ve("_:b")), B(r)
                }, O.prototype.flatten = function(e) {
                    for (var t = this.createNodeMap(e), r = [], n = Object.keys(t).sort(), i = 0; i < n.length; ++i) {
                        var o = t[n[i]];
                        se(o) || r.push(o)
                    }
                    return r
                }, O.prototype.frame = function(e, t, r) {
                    var n = {
                            options: r,
                            graphs: {
                                "@default": {},
                                "@merged": {}
                            },
                            subjectStack: [],
                            link: {}
                        },
                        i = new ve("_:b");
                    D(e, n.graphs, "@merged", i), n.subjects = n.graphs["@merged"];
                    var o = [];
                    return function e(t, r, n, i, o) {
                        ! function(e) {
                            if (!ee(e) || 1 !== e.length || !Z(e[0])) throw new x("Invalid JSON-LD syntax; a JSON-LD frame must be a single object.", "jsonld.SyntaxError", {
                                frame: e
                            })
                        }(n), n = n[0];
                        for (var a = t.options, s = {
                                embed: q(n, a, "embed"),
                                explicit: q(n, a, "explicit"),
                                requireAll: q(n, a, "requireAll")
                            }, u = function(e, t, r, n) {
                                for (var i = {}, o = 0; o < t.length; ++o) {
                                    var a = t[o],
                                        s = e.subjects[a];
                                    V(s, r, n) && (i[a] = s)
                                }
                                return i
                            }(t, r, n, s), c = Object.keys(u).sort(), f = 0; f < c.length; ++f) {
                            var h = c[f],
                                d = u[h];
                            if ("@link" === s.embed && h in t.link) K(i, o, t.link[h]);
                            else {
                                null === o && (t.uniqueEmbeds = {});
                                var l = {};
                                if (l["@id"] = h, t.link[h] = l, "@never" === s.embed || F(d, t.subjectStack)) K(i, o, l);
                                else {
                                    "@last" === s.embed && (h in t.uniqueEmbeds && z(t, h), t.uniqueEmbeds[h] = {
                                        parent: i,
                                        property: o
                                    }), t.subjectStack.push(d);
                                    for (var p = Object.keys(d).sort(), b = 0; b < p.length; b++) {
                                        var m = p[b];
                                        if (Q(m)) l[m] = de(d[m]);
                                        else if (!s.explicit || m in n)
                                            for (var g = d[m], v = 0; v < g.length; ++v) {
                                                var y = g[v];
                                                if (ce(y)) {
                                                    var w = {
                                                        "@list": []
                                                    };
                                                    K(l, m, w);
                                                    var _ = y["@list"];
                                                    for (var S in _)
                                                        if (se(y = _[S])) {
                                                            var k = m in n ? n[m][0]["@list"] : H(s);
                                                            e(t, [y["@id"]], k, w, "@list")
                                                        } else K(w, "@list", de(y))
                                                } else if (se(y)) {
                                                    var k = m in n ? n[m] : H(s);
                                                    e(t, [y["@id"]], k, l, m)
                                                } else K(l, m, de(y))
                                            }
                                    }
                                    for (var p = Object.keys(n).sort(), b = 0; b < p.length; ++b) {
                                        var m = p[b];
                                        if (!Q(m)) {
                                            var E = n[m][0],
                                                I = q(E, a, "omitDefault");
                                            if (!(I || m in l)) {
                                                var O = "@null";
                                                "@default" in E && (O = de(E["@default"])), ee(O) || (O = [O]), l[m] = [{
                                                    "@preserve": O
                                                }]
                                            }
                                        }
                                    }
                                    K(i, o, l), t.subjectStack.pop()
                                }
                            }
                        }
                    }(n, Object.keys(n.subjects).sort(), t, o, null), o
                }, O.prototype.normalize = function(e, t, r) {
                    return "URDNA2015" === t.algorithm ? new j(t).main(e, r) : "URGNA2012" === t.algorithm ? new U(t).main(e, r) : void r(new Error("Invalid RDF Dataset Normalization algorithm: " + t.algorithm))
                }, O.prototype.fromRDF = function(t, r, n) {
                    var i = {},
                        o = {
                            "@default": i
                        },
                        a = {};
                    for (var s in t) {
                        var u = t[s];
                        s in o || (o[s] = {}), "@default" === s || s in i || (i[s] = {
                            "@id": s
                        });
                        for (var c = o[s], f = 0; f < u.length; ++f) {
                            var h = u[f],
                                d = h.subject.value,
                                l = h.predicate.value,
                                p = h.object;
                            d in c || (c[d] = {
                                "@id": d
                            });
                            var b = c[d],
                                w = "IRI" === p.type || "blank node" === p.type;
                            if (!w || p.value in c || (c[p.value] = {
                                    "@id": p.value
                                }), l !== y || r.useRdfType || !w) {
                                var _ = C(p, r.useNativeTypes);
                                if (e.addValue(b, l, _, {
                                        propertyIsArray: !0
                                    }), w)
                                    if (p.value === v) {
                                        var S = c[p.value];
                                        "usages" in S || (S.usages = []), S.usages.push({
                                            node: b,
                                            property: l,
                                            value: _
                                        })
                                    } else p.value in a ? a[p.value] = !1 : a[p.value] = {
                                        node: b,
                                        property: l,
                                        value: _
                                    }
                            } else e.addValue(b, "@type", p.value, {
                                propertyIsArray: !0
                            })
                        }
                    }
                    for (var s in o) {
                        var k = o[s];
                        if (v in k) {
                            for (var E = k[v], I = 0; I < E.usages.length; ++I) {
                                for (var x = E.usages[I], O = (b = x.node, x.property), T = x.value, P = [], A = [], M = Object.keys(b).length; O === g && Z(a[b["@id"]]) && ee(b[m]) && 1 === b[m].length && ee(b[g]) && 1 === b[g].length && (3 === M || 4 === M && ee(b["@type"]) && 1 === b["@type"].length && "http://www.w3.org/1999/02/22-rdf-syntax-ns#List" === b["@type"][0]) && (P.push(b[m][0]), A.push(b["@id"]), b = (x = a[b["@id"]]).node, O = x.property, T = x.value, M = Object.keys(b).length, 0 === b["@id"].indexOf("_:")););
                                if (O === m) {
                                    if (b["@id"] === v) continue;
                                    T = k[T["@id"]][g][0], P.pop(), A.pop()
                                }
                                delete T["@id"], T["@list"] = P.reverse();
                                for (var L = 0; L < A.length; ++L) delete k[A[L]]
                            }
                            delete E.usages
                        }
                    }
                    var R = [],
                        N = Object.keys(i).sort();
                    for (I = 0; I < N.length; ++I) {
                        var j = N[I];
                        if (b = i[j], j in o) {
                            u = b["@graph"] = [], k = o[j];
                            for (var U = Object.keys(k).sort(), D = 0; D < U.length; ++D) {
                                var B = k[U[D]];
                                se(B) || u.push(B)
                            }
                        }
                        se(b) || R.push(b)
                    }
                    n(null, R)
                }, O.prototype.toRDF = function(e, t) {
                    var r = new ve("_:b"),
                        n = {
                            "@default": {}
                        };
                    D(e, n, "@default", r);
                    for (var i = {}, o = Object.keys(n).sort(), a = 0; a < o.length; ++a) {
                        var s = o[a];
                        ("@default" === s || he(s)) && (i[s] = P(n[s], r, t))
                    }
                    return i
                }, O.prototype.processContext = function(t, r, n) {
                    Z(r) && "@context" in r && ee(r["@context"]) && (r = r["@context"]);
                    var i = ee(r) ? r : [r];
                    if (0 === i.length) return t.clone();
                    for (var o = t, a = 0; a < i.length; ++a) {
                        var s = i[a];
                        if (null !== s) {
                            if (Z(s) && "@context" in s && (s = s["@context"]), !Z(s)) throw new x("Invalid JSON-LD syntax; @context must be an object.", "jsonld.SyntaxError", {
                                code: "invalid local context",
                                context: s
                            });
                            if (e.cache.activeCtx) {
                                var u = e.cache.activeCtx.get(t, s);
                                if (u) {
                                    o = t = u;
                                    continue
                                }
                            }
                            t = o, o = o.clone();
                            var c = {};
                            if ("@base" in s) {
                                var f = s["@base"];
                                if (null === f) f = null;
                                else {
                                    if (!re(f)) throw new x('Invalid JSON-LD syntax; the value of "@base" in a @context must be a string or null.', "jsonld.SyntaxError", {
                                        code: "invalid base IRI",
                                        context: s
                                    });
                                    if ("" !== f && !he(f)) throw new x('Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI or the empty string.', "jsonld.SyntaxError", {
                                        code: "invalid base IRI",
                                        context: s
                                    })
                                }
                                null !== f && (f = e.url.parse(f || "")), o["@base"] = f, c["@base"] = !0
                            }
                            if ("@vocab" in s) {
                                if (null === (h = s["@vocab"])) delete o["@vocab"];
                                else {
                                    if (!re(h)) throw new x('Invalid JSON-LD syntax; the value of "@vocab" in a @context must be a string or null.', "jsonld.SyntaxError", {
                                        code: "invalid vocab mapping",
                                        context: s
                                    });
                                    if (!he(h)) throw new x('Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.', "jsonld.SyntaxError", {
                                        code: "invalid vocab mapping",
                                        context: s
                                    });
                                    o["@vocab"] = h
                                }
                                c["@vocab"] = !0
                            }
                            if ("@language" in s) {
                                var h;
                                if (null === (h = s["@language"])) delete o["@language"];
                                else {
                                    if (!re(h)) throw new x('Invalid JSON-LD syntax; the value of "@language" in a @context must be a string or null.', "jsonld.SyntaxError", {
                                        code: "invalid default language",
                                        context: s
                                    });
                                    o["@language"] = h.toLowerCase()
                                }
                                c["@language"] = !0
                            }
                            for (var d in s) X(o, s, d, c);
                            e.cache.activeCtx && e.cache.activeCtx.set(t, s, o)
                        } else o = t = $(n)
                    }
                    return o
                };
                var R, N, j = (R = {
                        subject: "s",
                        object: "o",
                        name: "g"
                    }, (N = function(e) {
                        e = e || {}, this.name = "URDNA2015", this.options = e, this.blankNodeInfo = {}, this.hashToBlankNodes = {}, this.canonicalIssuer = new ve("_:c14n"), this.quads = [], this.schedule = {}, this.schedule.MAX_DEPTH = "maxCallStackDepth" in e ? e.maxCallStackDepth : 500, this.schedule.MAX_TOTAL_DEPTH = "maxTotalCallStackDepth" in e ? e.maxCallStackDepth : 4294967295, this.schedule.depth = 0, this.schedule.totalDepth = 0, this.schedule.timeSlice = "timeSlice" in e ? e.timeSlice : 10
                    }).prototype.doWork = function(t, r) {
                        var n = this.schedule;
                        if (n.totalDepth >= n.MAX_TOTAL_DEPTH) return r(new Error("Maximum total call stack depth exceeded; normalization aborting."));
                        ! function i() {
                            if (n.depth === n.MAX_DEPTH) return n.depth = 0, n.running = !1, e.nextTick(i);
                            var o = (new Date).getTime();
                            if (n.running || (n.start = (new Date).getTime(), n.deadline = n.start + n.timeSlice), o < n.deadline) return n.running = !0, n.depth++, n.totalDepth++, t(function(e, t) {
                                n.depth--, n.totalDepth--, r(e, t)
                            });
                            n.depth = 0, n.running = !1, e.setImmediate(i)
                        }()
                    }, N.prototype.forEach = function(e, t, r) {
                        var n, i, o = this,
                            a = 0;
                        if (ee(e)) i = e.length, n = function() {
                            return a !== i && (n.value = e[a++], n.key = a, !0)
                        };
                        else {
                            var s = Object.keys(e);
                            i = s.length, n = function() {
                                return a !== i && (n.key = s[a++], n.value = e[n.key], !0)
                            }
                        }! function e(i, a) {
                            return i ? r(i) : n() ? o.doWork(function() {
                                t(n.value, n.key, e)
                            }) : void r()
                        }()
                    }, N.prototype.waterfall = function(e, t) {
                        var r = this;
                        r.forEach(e, function(e, t, n) {
                            r.doWork(e, n)
                        }, t)
                    }, N.prototype.whilst = function(e, t, r) {
                        var n = this;
                        ! function i(o) {
                            return o ? r(o) : e() ? void n.doWork(t, i) : r()
                        }()
                    }, N.prototype.main = function(e, t) {
                        var r, n = this;
                        if (n.schedule.start = (new Date).getTime(), n.options.format && "application/nquads" !== n.options.format) return t(new x("Unknown output format.", "jsonld.UnknownFormat", {
                            format: n.options.format
                        }));
                        var i = {};
                        n.waterfall([function(t) {
                            n.forEach(e, function(e, t, r) {
                                "@default" === t && (t = null), n.forEach(e, function(e, r, o) {
                                    null !== t && (0 === t.indexOf("_:") ? e.name = {
                                        type: "blank node",
                                        value: t
                                    } : e.name = {
                                        type: "IRI",
                                        value: t
                                    }), n.quads.push(e), n.forEachComponent(e, function(t) {
                                        if ("blank node" === t.type) {
                                            var r = t.value;
                                            r in n.blankNodeInfo ? n.blankNodeInfo[r].quads.push(e) : (i[r] = !0, n.blankNodeInfo[r] = {
                                                quads: [e]
                                            })
                                        }
                                    }), o()
                                }, r)
                            }, t)
                        }, function(e) {
                            var t = !0;
                            n.whilst(function() {
                                return t
                            }, function(e) {
                                t = !1, n.hashToBlankNodes = {}, n.waterfall([function(e) {
                                    n.forEach(i, function(e, t, r) {
                                        n.hashFirstDegreeQuads(t, function(e, i) {
                                            if (e) return r(e);
                                            i in n.hashToBlankNodes ? n.hashToBlankNodes[i].push(t) : n.hashToBlankNodes[i] = [t], r()
                                        })
                                    }, e)
                                }, function(e) {
                                    var r = Object.keys(n.hashToBlankNodes).sort();
                                    n.forEach(r, function(e, r, o) {
                                        var a = n.hashToBlankNodes[e];
                                        if (a.length > 1) return o();
                                        var s = a[0];
                                        n.canonicalIssuer.getId(s), delete i[s], delete n.hashToBlankNodes[e], t = !0, o()
                                    }, e)
                                }], e)
                            }, e)
                        }, function(e) {
                            var t = Object.keys(n.hashToBlankNodes).sort();
                            n.forEach(t, function(e, t, r) {
                                var i = [],
                                    o = n.hashToBlankNodes[e];
                                n.waterfall([function(e) {
                                    n.forEach(o, function(e, t, r) {
                                        if (n.canonicalIssuer.hasId(e)) return r();
                                        var o = new ve("_:b");
                                        o.getId(e), n.hashNDegreeQuads(e, o, function(e, t) {
                                            if (e) return r(e);
                                            i.push(t), r()
                                        })
                                    }, e)
                                }, function(e) {
                                    i.sort(function(e, t) {
                                        return e.hash < t.hash ? -1 : e.hash > t.hash ? 1 : 0
                                    }), n.forEach(i, function(e, t, r) {
                                        for (var i in e.issuer.existing) n.canonicalIssuer.getId(i);
                                        r()
                                    }, e)
                                }], r)
                            }, e)
                        }, function(e) {
                            var t = [];
                            n.waterfall([function(e) {
                                n.forEach(n.quads, function(e, r, i) {
                                    n.forEachComponent(e, function(e) {
                                        "blank node" === e.type && 0 !== e.value.indexOf(n.canonicalIssuer.prefix) && (e.value = n.canonicalIssuer.getId(e.value))
                                    }), t.push(ge(e)), i()
                                }, e)
                            }, function(e) {
                                if (t.sort(), "application/nquads" === n.options.format) return r = t.join(""), e();
                                r = be(t.join("")), e()
                            }], e)
                        }], function(e) {
                            t(e, r)
                        })
                    }, N.prototype.hashFirstDegreeQuads = function(e, t) {
                        var r = this,
                            n = r.blankNodeInfo[e];
                        if ("hash" in n) return t(null, n.hash);
                        var i = [],
                            o = n.quads;
                        r.forEach(o, function(t, n, o) {
                            var a = {
                                predicate: t.predicate
                            };
                            r.forEachComponent(t, function(t, n) {
                                a[n] = r.modifyFirstDegreeComponent(e, t, n)
                            }), i.push(ge(a)), o()
                        }, function(e) {
                            if (e) return t(e);
                            i.sort(), n.hash = we.hashNQuads(r.name, i), t(null, n.hash)
                        })
                    }, N.prototype.modifyFirstDegreeComponent = function(e, t) {
                        return "blank node" !== t.type ? t : ((t = de(t)).value = t.value === e ? "_:a" : "_:z", t)
                    }, N.prototype.hashRelatedBlankNode = function(e, t, r, n, i) {
                        var o, a = this;
                        a.waterfall([function(t) {
                            return a.canonicalIssuer.hasId(e) ? (o = a.canonicalIssuer.getId(e), t()) : r.hasId(e) ? (o = r.getId(e), t()) : void a.hashFirstDegreeQuads(e, function(e, r) {
                                if (e) return t(e);
                                o = r, t()
                            })
                        }], function(e) {
                            if (e) return i(e);
                            var r = new we(a.name);
                            return r.update(n), "g" !== n && r.update(a.getRelatedPredicate(t)), r.update(o), i(null, r.digest())
                        })
                    }, N.prototype.getRelatedPredicate = function(e) {
                        return "<" + e.predicate.value + ">"
                    }, N.prototype.hashNDegreeQuads = function(e, t, r) {
                        var n, i = this,
                            o = new we(i.name);
                        i.waterfall([function(r) {
                            i.createHashToRelated(e, t, function(e, t) {
                                if (e) return r(e);
                                n = t, r()
                            })
                        }, function(e) {
                            var r = Object.keys(n).sort();
                            i.forEach(r, function(e, r, a) {
                                o.update(e);
                                var s, u = "",
                                    c = new ye(n[e]);
                                i.whilst(function() {
                                    return c.hasNext()
                                }, function(e) {
                                    var r = c.next(),
                                        n = t.clone(),
                                        o = "",
                                        a = [];
                                    i.waterfall([function(t) {
                                        i.forEach(r, function(t, r, s) {
                                            if (i.canonicalIssuer.hasId(t) ? o += i.canonicalIssuer.getId(t) : (n.hasId(t) || a.push(t), o += n.getId(t)), 0 !== u.length && o.length >= u.length && o > u) return e();
                                            s()
                                        }, t)
                                    }, function(t) {
                                        i.forEach(a, function(t, r, a) {
                                            i.hashNDegreeQuads(t, n, function(r, i) {
                                                return r ? a(r) : (o += n.getId(t), o += "<" + i.hash + ">", n = i.issuer, 0 !== u.length && o.length >= u.length && o > u ? e() : void a())
                                            })
                                        }, t)
                                    }, function(e) {
                                        (0 === u.length || o < u) && (u = o, s = n), e()
                                    }], e)
                                }, function(e) {
                                    if (e) return a(e);
                                    o.update(u), t = s, a()
                                })
                            }, e)
                        }], function(e) {
                            r(e, {
                                hash: o.digest(),
                                issuer: t
                            })
                        })
                    }, N.prototype.createHashToRelated = function(e, t, r) {
                        var n = this,
                            i = {},
                            o = n.blankNodeInfo[e].quads;
                        n.forEach(o, function(r, o, a) {
                            n.forEach(r, function(o, a, s) {
                                if ("predicate" === a || "blank node" !== o.type || o.value === e) return s();
                                var u = o.value,
                                    c = R[a];
                                n.hashRelatedBlankNode(u, r, t, c, function(e, t) {
                                    if (e) return s(e);
                                    t in i ? i[t].push(u) : i[t] = [u], s()
                                })
                            }, a)
                        }, function(e) {
                            r(e, i)
                        })
                    }, N.prototype.forEachComponent = function(e, t) {
                        for (var r in e) "predicate" !== r && t(e[r], r, e)
                    }, N),
                    U = function() {
                        var e = function(e) {
                            j.call(this, e), this.name = "URGNA2012"
                        };
                        return (e.prototype = new j).modifyFirstDegreeComponent = function(e, t, r) {
                            return "blank node" !== t.type ? t : ((t = de(t)).value = "name" === r ? "_:g" : t.value === e ? "_:a" : "_:z", t)
                        }, e.prototype.getRelatedPredicate = function(e) {
                            return e.predicate.value
                        }, e.prototype.createHashToRelated = function(e, t, r) {
                            var n = this,
                                i = {},
                                o = n.blankNodeInfo[e].quads;
                            n.forEach(o, function(r, o, a) {
                                var s, u;
                                if ("blank node" === r.subject.type && r.subject.value !== e) u = r.subject.value, s = "p";
                                else {
                                    if ("blank node" !== r.object.type || r.object.value === e) return a();
                                    u = r.object.value, s = "r"
                                }
                                n.hashRelatedBlankNode(u, r, t, s, function(e, t) {
                                    t in i ? i[t].push(u) : i[t] = [u], a()
                                })
                            }, function(e) {
                                r(e, i)
                            })
                        }, e
                    }();

                function D(t, r, n, i, o, a) {
                    if (ee(t))
                        for (var s = 0; s < t.length; ++s) D(t[s], r, n, i, void 0, a);
                    else if (Z(t))
                        if (ue(t)) "@type" in t && 0 === (c = t["@type"]).indexOf("_:") && (t["@type"] = c = i.getId(c)), a && a.push(t);
                        else {
                            if ("@type" in t) {
                                var u = t["@type"];
                                for (s = 0; s < u.length; ++s) {
                                    var c;
                                    0 === (c = u[s]).indexOf("_:") && i.getId(c)
                                }
                            }
                            oe(o) && (o = fe(t) ? i.getId(t["@id"]) : t["@id"]), a && a.push({
                                "@id": o
                            });
                            var f = r[n],
                                h = f[o] = f[o] || {};
                            h["@id"] = o;
                            for (var d = Object.keys(t).sort(), l = 0; l < d.length; ++l) {
                                var p = d[l];
                                if ("@id" !== p)
                                    if ("@reverse" !== p)
                                        if ("@graph" !== p)
                                            if ("@type" !== p && Q(p)) {
                                                if ("@index" === p && p in h && (t[p] !== h[p] || t[p]["@id"] !== h[p]["@id"])) throw new x("Invalid JSON-LD syntax; conflicting @index property detected.", "jsonld.SyntaxError", {
                                                    code: "conflicting indexes",
                                                    subject: h
                                                });
                                                h[p] = t[p]
                                            } else {
                                                var b = t[p];
                                                if (0 === p.indexOf("_:") && (p = i.getId(p)), 0 !== b.length)
                                                    for (var m = 0; m < b.length; ++m) {
                                                        var g = b[m];
                                                        if ("@type" === p && (g = 0 === g.indexOf("_:") ? i.getId(g) : g), ae(g) || se(g)) {
                                                            var v = fe(g) ? i.getId(g["@id"]) : g["@id"];
                                                            e.addValue(h, p, {
                                                                "@id": v
                                                            }, {
                                                                propertyIsArray: !0,
                                                                allowDuplicate: !1
                                                            }), D(g, r, n, i, v)
                                                        } else if (ce(g)) {
                                                            var y = [];
                                                            D(g["@list"], r, n, i, o, y), g = {
                                                                "@list": y
                                                            }, e.addValue(h, p, g, {
                                                                propertyIsArray: !0,
                                                                allowDuplicate: !1
                                                            })
                                                        } else D(g, r, n, i, o), e.addValue(h, p, g, {
                                                            propertyIsArray: !0,
                                                            allowDuplicate: !1
                                                        })
                                                    } else e.addValue(h, p, [], {
                                                        propertyIsArray: !0
                                                    })
                                            } else {
                                    o in r || (r[o] = {});
                                    var w = "@merged" === n ? n : o;
                                    D(t[p], r, w, i)
                                } else {
                                    var _ = {
                                            "@id": o
                                        },
                                        S = t["@reverse"];
                                    for (var k in S)
                                        for (var E = S[k], I = 0; I < E.length; ++I) {
                                            var O = E[I],
                                                T = O["@id"];
                                            fe(O) && (T = i.getId(T)), D(O, r, n, i, T), e.addValue(f[T], k, _, {
                                                propertyIsArray: !0,
                                                allowDuplicate: !1
                                            })
                                        }
                                }
                            }
                        } else a && a.push(t)
                }

                function B(e) {
                    for (var t = e["@default"], r = Object.keys(e).sort(), n = 0; n < r.length; ++n) {
                        var i = r[n];
                        if ("@default" !== i) {
                            var o = e[i],
                                a = t[i];
                            a ? "@graph" in a || (a["@graph"] = []) : t[i] = a = {
                                "@id": i,
                                "@graph": []
                            };
                            for (var s = a["@graph"], u = Object.keys(o).sort(), c = 0; c < u.length; ++c) {
                                var f = o[u[c]];
                                se(f) || s.push(f)
                            }
                        }
                    }
                    return t
                }

                function H(e) {
                    var t = {};
                    for (var r in e) void 0 !== e[r] && (t["@" + r] = [e[r]]);
                    return [t]
                }

                function F(e, t) {
                    for (var r = t.length - 1; r >= 0; --r)
                        if (t[r]["@id"] === e["@id"]) return !0;
                    return !1
                }

                function q(e, t, r) {
                    var n = "@" + r,
                        i = n in e ? e[n][0] : t[r];
                    return "embed" === r && (!0 === i ? i = "@last" : !1 === i ? i = "@never" : "@always" !== i && "@never" !== i && "@link" !== i && (i = "@last")), i
                }

                function V(t, r, n) {
                    if ("@type" in r && (1 !== r["@type"].length || !Z(r["@type"][0]))) {
                        for (var i = r["@type"], o = 0; o < i.length; ++o)
                            if (e.hasValue(t, "@type", i[o])) return !0;
                        return !1
                    }
                    var a = !0,
                        s = !1;
                    for (var u in r) {
                        if (Q(u)) {
                            if ("@id" !== u && "@type" !== u) continue;
                            if (a = !1, "@id" === u && re(r[u])) {
                                if (t[u] !== r[u]) return !1;
                                s = !0;
                                continue
                            }
                        }
                        if (a = !1, u in t) {
                            if (ee(r[u]) && 0 === r[u].length && void 0 !== t[u]) return !1;
                            s = !0
                        } else {
                            var c = ee(r[u]) && Z(r[u][0]) && "@default" in r[u][0];
                            if (n.requireAll && !c) return !1
                        }
                    }
                    return a || s
                }

                function z(t, r) {
                    var n = t.uniqueEmbeds,
                        i = n[r],
                        o = i.parent,
                        a = i.property,
                        s = {
                            "@id": r
                        };
                    if (ee(o)) {
                        for (var u = 0; u < o.length; ++u)
                            if (e.compareValues(o[u], s)) {
                                o[u] = s;
                                break
                            }
                    } else {
                        var c = ee(o[a]);
                        e.removeValue(o, a, s, {
                            propertyIsArray: c
                        }), e.addValue(o, a, s, {
                            propertyIsArray: c
                        })
                    }
                    var f = function(e) {
                        for (var t = Object.keys(n), r = 0; r < t.length; ++r) {
                            var i = t[r];
                            i in n && Z(n[i].parent) && n[i].parent["@id"] === e && (delete n[i], f(i))
                        }
                    };
                    f(r)
                }

                function K(t, r, n) {
                    Z(t) ? e.addValue(t, r, n, {
                        propertyIsArray: !0
                    }) : t.push(n)
                }

                function W(t, r, n) {
                    if (ee(r)) {
                        for (var i = [], o = 0; o < r.length; ++o) null !== (f = W(t, r[o], n)) && i.push(f);
                        r = i
                    } else if (Z(r)) {
                        if ("@preserve" in r) return "@null" === r["@preserve"] ? null : r["@preserve"];
                        if (ue(r)) return r;
                        if (ce(r)) return r["@list"] = W(t, r["@list"], n), r;
                        var a = G(t, "@id");
                        if (a in r) {
                            var s = r[a];
                            if (s in n.link) {
                                var u = n.link[s].indexOf(r);
                                if (-1 !== u) return n.link[s][u];
                                n.link[s].push(r)
                            } else n.link[s] = [r]
                        }
                        for (var c in r) {
                            var f = W(t, r[c], n),
                                h = e.getContextValue(t, c, "@container");
                            n.compactArrays && ee(f) && 1 === f.length && null === h && (f = f[0]), r[c] = f
                        }
                    }
                    return r
                }

                function J(e, t) {
                    return e.length < t.length ? -1 : t.length < e.length ? 1 : e === t ? 0 : e < t ? -1 : 1
                }

                function G(t, r, n, i, o) {
                    if (null === r) return r;
                    oe(n) && (n = null), oe(o) && (o = !1), i = i || {};
                    var a = t.getInverse();
                    if (Q(r)) return r in a ? a[r]["@none"]["@type"]["@none"] : r;
                    if (i.vocab && r in a) {
                        var s = t["@language"] || "@none",
                            u = [];
                        Z(n) && "@index" in n && u.push("@index");
                        var c = "@language",
                            f = "@null";
                        if (o) c = "@type", f = "@reverse", u.push("@set");
                        else if (ce(n)) {
                            "@index" in n || u.push("@list");
                            for (var h = n["@list"], d = 0 === h.length ? s : null, l = null, p = 0; p < h.length; ++p) {
                                var b = h[p],
                                    m = "@none",
                                    g = "@none";
                                if (ue(b) ? "@language" in b ? m = b["@language"] : "@type" in b ? g = b["@type"] : m = "@null" : g = "@id", null === d ? d = m : m !== d && ue(b) && (d = "@none"), null === l ? l = g : g !== l && (l = "@none"), "@none" === d && "@none" === l) break
                            }
                            d = d || "@none", "@none" !== (l = l || "@none") ? (c = "@type", f = l) : f = d
                        } else ue(n) ? "@language" in n && !("@index" in n) ? (u.push("@language"), f = n["@language"]) : "@type" in n && (c = "@type", f = n["@type"]) : (c = "@type", f = "@id"), u.push("@set");
                        u.push("@none");
                        var v = function(e, t, r, n, i, o) {
                            null === o && (o = "@null");
                            var a = [];
                            if ("@id" !== o && "@reverse" !== o || !se(r)) a.push(o);
                            else {
                                "@reverse" === o && a.push("@reverse");
                                var s = G(e, r["@id"], null, {
                                    vocab: !0
                                });
                                s in e.mappings && e.mappings[s] && e.mappings[s]["@id"] === r["@id"] ? a.push.apply(a, ["@vocab", "@id"]) : a.push.apply(a, ["@id", "@vocab"])
                            }
                            a.push("@none");
                            for (var u = e.inverse[t], c = 0; c < n.length; ++c) {
                                var f = n[c];
                                if (f in u)
                                    for (var h = u[f][i], d = 0; d < a.length; ++d) {
                                        var l = a[d];
                                        if (l in h) return h[l]
                                    }
                            }
                            return null
                        }(t, r, n, u, c, f);
                        if (null !== v) return v
                    }
                    if (i.vocab && "@vocab" in t) {
                        var y = t["@vocab"];
                        if (0 === r.indexOf(y) && r !== y) {
                            var w = r.substr(y.length);
                            if (!(w in t.mappings)) return w
                        }
                    }
                    for (var _ = null, S = 0, k = [], E = t.fastCurieMap, I = r.length - 1; S < I && r[S] in E; ++S) "" in (E = E[r[S]]) && k.push(E[""][0]);
                    for (p = k.length - 1; p >= 0; --p)
                        for (var x = k[p], O = x.terms, T = 0; T < O.length; ++T) {
                            var P = O[T] + ":" + r.substr(x.iri.length);
                            (!(P in t.mappings) || null === n && t.mappings[P]["@id"] === r) && (null === _ || J(P, _) < 0) && (_ = P)
                        }
                    return null !== _ ? _ : i.vocab ? r : function(t, r) {
                        if (null === t) return r;
                        re(t) && (t = e.url.parse(t || ""));
                        var n = "";
                        if ("" !== t.href ? n += (t.protocol || "") + "//" + (t.authority || "") : r.indexOf("//") && (n += "//"), 0 !== r.indexOf(n)) return r;
                        for (var i = e.url.parse(r.substr(n.length)), o = t.normalizedPath.split("/"), a = i.normalizedPath.split("/"), s = i.fragment || i.query ? 0 : 1; o.length > 0 && a.length > s && o[0] === a[0];) o.shift(), a.shift();
                        var u = "";
                        if (o.length > 0) {
                            o.pop();
                            for (var c = 0; c < o.length; ++c) u += "../"
                        }
                        return u += a.join("/"), null !== i.query && (u += "?" + i.query), null !== i.fragment && (u += "#" + i.fragment), "" === u && (u = "./"), u
                    }(t["@base"], r)
                }

                function X(e, t, r, n) {
                    if (r in n) {
                        if (n[r]) return;
                        throw new x("Cyclical context definition detected.", "jsonld.CyclicalContext", {
                            code: "cyclic IRI mapping",
                            context: t,
                            term: r
                        })
                    }
                    if (n[r] = !1, Q(r)) throw new x("Invalid JSON-LD syntax; keywords cannot be overridden.", "jsonld.SyntaxError", {
                        code: "keyword redefinition",
                        context: t,
                        term: r
                    });
                    if ("" === r) throw new x("Invalid JSON-LD syntax; a term cannot be an empty string.", "jsonld.SyntaxError", {
                        code: "invalid term definition",
                        context: t
                    });
                    e.mappings[r] && delete e.mappings[r];
                    var i = t[r];
                    if (null === i || Z(i) && null === i["@id"]) return e.mappings[r] = null, void(n[r] = !0);
                    if (re(i) && (i = {
                            "@id": i
                        }), !Z(i)) throw new x("Invalid JSON-LD syntax; @context property values must be strings or objects.", "jsonld.SyntaxError", {
                        code: "invalid term definition",
                        context: t
                    });
                    var o = e.mappings[r] = {};
                    if (o.reverse = !1, "@reverse" in i) {
                        if ("@id" in i) throw new x("Invalid JSON-LD syntax; a @reverse term definition must not contain @id.", "jsonld.SyntaxError", {
                            code: "invalid reverse property",
                            context: t
                        });
                        var a = i["@reverse"];
                        if (!re(a)) throw new x("Invalid JSON-LD syntax; a @context @reverse value must be a string.", "jsonld.SyntaxError", {
                            code: "invalid IRI mapping",
                            context: t
                        });
                        if (!he(s = Y(e, a, {
                                vocab: !0,
                                base: !1
                            }, t, n))) throw new x("Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.", "jsonld.SyntaxError", {
                            code: "invalid IRI mapping",
                            context: t
                        });
                        o["@id"] = s, o.reverse = !0
                    } else if ("@id" in i) {
                        if (!re(s = i["@id"])) throw new x("Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.", "jsonld.SyntaxError", {
                            code: "invalid IRI mapping",
                            context: t
                        });
                        if (s !== r) {
                            if (!he(s = Y(e, s, {
                                    vocab: !0,
                                    base: !1
                                }, t, n)) && !Q(s)) throw new x("Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.", "jsonld.SyntaxError", {
                                code: "invalid IRI mapping",
                                context: t
                            });
                            o["@id"] = s
                        }
                    }
                    var s, u = r.indexOf(":");
                    if (o._termHasColon = -1 !== u, !("@id" in o))
                        if (o._termHasColon) {
                            var c = r.substr(0, u);
                            if (c in t && X(e, t, c, n), e.mappings[c]) {
                                var f = r.substr(u + 1);
                                o["@id"] = e.mappings[c]["@id"] + f
                            } else o["@id"] = r
                        } else {
                            if (!("@vocab" in e)) throw new x("Invalid JSON-LD syntax; @context terms must define an @id.", "jsonld.SyntaxError", {
                                code: "invalid IRI mapping",
                                context: t,
                                term: r
                            });
                            o["@id"] = e["@vocab"] + r
                        }
                    if (n[r] = !0, "@type" in i) {
                        var h = i["@type"];
                        if (!re(h)) throw new x("Invalid JSON-LD syntax; an @context @type values must be a string.", "jsonld.SyntaxError", {
                            code: "invalid type mapping",
                            context: t
                        });
                        if ("@id" !== h && "@vocab" !== h) {
                            if (!he(h = Y(e, h, {
                                    vocab: !0,
                                    base: !1
                                }, t, n))) throw new x("Invalid JSON-LD syntax; an @context @type value must be an absolute IRI.", "jsonld.SyntaxError", {
                                code: "invalid type mapping",
                                context: t
                            });
                            if (0 === h.indexOf("_:")) throw new x("Invalid JSON-LD syntax; an @context @type values must be an IRI, not a blank node identifier.", "jsonld.SyntaxError", {
                                code: "invalid type mapping",
                                context: t
                            })
                        }
                        o["@type"] = h
                    }
                    if ("@container" in i) {
                        var d = i["@container"];
                        if ("@list" !== d && "@set" !== d && "@index" !== d && "@language" !== d) throw new x("Invalid JSON-LD syntax; @context @container value must be one of the following: @list, @set, @index, or @language.", "jsonld.SyntaxError", {
                            code: "invalid container mapping",
                            context: t
                        });
                        if (o.reverse && "@index" !== d && "@set" !== d && null !== d) throw new x("Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.", "jsonld.SyntaxError", {
                            code: "invalid reverse property",
                            context: t
                        });
                        o["@container"] = d
                    }
                    if ("@language" in i && !("@type" in i)) {
                        var l = i["@language"];
                        if (null !== l && !re(l)) throw new x("Invalid JSON-LD syntax; @context @language value must be a string or null.", "jsonld.SyntaxError", {
                            code: "invalid language mapping",
                            context: t
                        });
                        null !== l && (l = l.toLowerCase()), o["@language"] = l
                    }
                    if ("@context" === (s = o["@id"]) || "@preserve" === s) throw new x("Invalid JSON-LD syntax; @context and @preserve cannot be aliased.", "jsonld.SyntaxError", {
                        code: "invalid keyword alias",
                        context: t
                    })
                }

                function Y(t, r, n, i, o) {
                    if (null === r || Q(r)) return r;
                    if (r = String(r), i && r in i && !0 !== o[r] && X(t, i, r, o), (n = n || {}).vocab) {
                        if (null === (s = t.mappings[r])) return null;
                        if (s) return s["@id"]
                    }
                    var a = r.indexOf(":");
                    if (-1 !== a) {
                        var s, u = r.substr(0, a),
                            c = r.substr(a + 1);
                        return "_" === u || 0 === c.indexOf("//") ? r : (i && u in i && X(t, i, u, o), (s = t.mappings[u]) ? s["@id"] + c : r)
                    }
                    if (n.vocab && "@vocab" in t) return t["@vocab"] + r;
                    var f = r;
                    return n.base && (f = e.prependBase(t["@base"], f)), f
                }

                function $(t) {
                    return {
                        "@base": e.url.parse(t.base || ""),
                        mappings: {},
                        inverse: null,
                        getInverse: function() {
                            if (this.inverse) return this.inverse;
                            for (var e = this.inverse = {}, t = this.fastCurieMap = {}, i = {}, o = this["@language"] || "@none", a = this.mappings, s = Object.keys(a).sort(J), u = 0; u < s.length; ++u) {
                                var c = s[u],
                                    f = a[c];
                                if (null !== f) {
                                    var h = f["@container"] || "@none",
                                        d = f["@id"];
                                    ee(d) || (d = [d]);
                                    for (var l = 0; l < d.length; ++l) {
                                        var p = d[l],
                                            b = e[p],
                                            m = Q(p);
                                        if (b) m || f._termHasColon || i[p].push(c);
                                        else if (e[p] = b = {}, !m && !f._termHasColon) {
                                            i[p] = [c];
                                            var g = {
                                                iri: p,
                                                terms: i[p]
                                            };
                                            p[0] in t ? t[p[0]].push(g) : t[p[0]] = [g]
                                        }
                                        if (b[h] || (b[h] = {
                                                "@language": {},
                                                "@type": {}
                                            }), b = b[h], f.reverse) n(0, c, b["@type"], "@reverse");
                                        else if ("@type" in f) n(0, c, b["@type"], f["@type"]);
                                        else if ("@language" in f) {
                                            var v = f["@language"] || "@null";
                                            n(0, c, b["@language"], v)
                                        } else n(0, c, b["@language"], o), n(0, c, b["@type"], "@none"), n(0, c, b["@language"], "@none")
                                    }
                                }
                            }
                            for (var y in t) r(t, y, 1);
                            return e
                        },
                        clone: function() {
                            var e = {};
                            return e["@base"] = this["@base"], e.mappings = de(this.mappings), e.clone = this.clone, e.inverse = null, e.getInverse = this.getInverse, "@language" in this && (e["@language"] = this["@language"]), "@vocab" in this && (e["@vocab"] = this["@vocab"]), e
                        }
                    };

                    function r(e, t, n) {
                        for (var i, o, a = e[t], s = e[t] = {}, u = 0; u < a.length; ++u)(o = n >= (i = a[u].iri).length ? "" : i[n]) in s ? s[o].push(a[u]) : s[o] = [a[u]];
                        for (var t in s) "" !== t && r(s, t, n + 1)
                    }

                    function n(e, t, r, n) {
                        n in r || (r[n] = t)
                    }
                }

                function Q(e) {
                    if (!re(e)) return !1;
                    switch (e) {
                        case "@base":
                        case "@context":
                        case "@container":
                        case "@default":
                        case "@embed":
                        case "@explicit":
                        case "@graph":
                        case "@id":
                        case "@index":
                        case "@language":
                        case "@list":
                        case "@omitDefault":
                        case "@preserve":
                        case "@requireAll":
                        case "@reverse":
                        case "@set":
                        case "@type":
                        case "@value":
                        case "@vocab":
                            return !0
                    }
                    return !1
                }

                function Z(e) {
                    return "[object Object]" === Object.prototype.toString.call(e)
                }

                function ee(e) {
                    return Array.isArray(e)
                }

                function te(e) {
                    if (!re(e) && ! function(e) {
                            return Z(e) && 0 === Object.keys(e).length
                        }(e)) {
                        var t = !1;
                        if (ee(e)) {
                            t = !0;
                            for (var r = 0; r < e.length; ++r)
                                if (!re(e[r])) {
                                    t = !1;
                                    break
                                }
                        }
                        if (!t) throw new x('Invalid JSON-LD syntax; "@type" value must a string, an array of strings, or an empty object.', "jsonld.SyntaxError", {
                            code: "invalid type value",
                            value: e
                        })
                    }
                }

                function re(e) {
                    return "string" == typeof e || "[object String]" === Object.prototype.toString.call(e)
                }

                function ne(e) {
                    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
                }

                function ie(e) {
                    return ne(e) && -1 !== String(e).indexOf(".")
                }

                function oe(e) {
                    return void 0 === e
                }

                function ae(e) {
                    var t = !1;
                    return Z(e) && !("@value" in e || "@set" in e || "@list" in e) && (t = Object.keys(e).length > 1 || !("@id" in e)), t
                }

                function se(e) {
                    return Z(e) && 1 === Object.keys(e).length && "@id" in e
                }

                function ue(e) {
                    return Z(e) && "@value" in e
                }

                function ce(e) {
                    return Z(e) && "@list" in e
                }

                function fe(e) {
                    var t = !1;
                    return Z(e) && (t = "@id" in e ? 0 === e["@id"].indexOf("_:") : 0 === Object.keys(e).length || !("@value" in e || "@set" in e || "@list" in e)), t
                }

                function he(e) {
                    return re(e) && -1 !== e.indexOf(":")
                }

                function de(e) {
                    if (e && "object" == typeof e) {
                        var t;
                        if (ee(e)) {
                            t = [];
                            for (var r = 0; r < e.length; ++r) t[r] = de(e[r])
                        } else if (Z(e))
                            for (var n in t = {}, e) t[n] = de(e[n]);
                        else t = e.toString();
                        return t
                    }
                    return e
                }

                function le(t, r, n, i) {
                    var o = Object.keys(r).length;
                    if (ee(t)) {
                        for (var a = 0; a < t.length; ++a) le(t[a], r, n, i);
                        return o < Object.keys(r).length
                    }
                    if (Z(t)) {
                        for (var s in t)
                            if ("@context" === s) {
                                var u = t[s];
                                if (ee(u)) {
                                    var c = u.length;
                                    for (a = 0; a < c; ++a) {
                                        var f = u[a];
                                        re(f) && (f = e.prependBase(i, f), n ? ee(f = r[f]) ? (Array.prototype.splice.apply(u, [a, 1].concat(f)), a += f.length - 1, c = u.length) : u[a] = f : f in r || (r[f] = !1))
                                    }
                                } else re(u) && (u = e.prependBase(i, u), n ? t[s] = r[u] : u in r || (r[u] = !1))
                            } else le(t[s], r, n, i);
                        return o < Object.keys(r).length
                    }
                    return !1
                }

                function pe(e, t, r) {
                    var n = null,
                        i = t.documentLoader,
                        o = function(e, t, r, i, a) {
                            if (Object.keys(t).length > I) return n = new x("Maximum number of @context URLs exceeded.", "jsonld.ContextUrlError", {
                                code: "loading remote context failed",
                                max: I
                            }), a(n);
                            var s = {},
                                u = function() {
                                    le(e, s, !0, i), a(null, e)
                                };
                            if (!le(e, s, !1, i)) return u();
                            var c = [];
                            for (var f in s) !1 === s[f] && c.push(f);
                            for (var h = c.length, d = 0; d < c.length; ++d) ! function(e) {
                                if (e in t) return n = new x("Cyclical @context URLs detected.", "jsonld.ContextUrlError", {
                                    code: "recursive context inclusion",
                                    url: e
                                }), a(n);
                                var i = de(t);
                                i[e] = !0;
                                var c = function(t, c) {
                                        if (!n) {
                                            var f = c ? c.document : null;
                                            if (!t && re(f)) try {
                                                f = JSON.parse(f)
                                            } catch (e) {
                                                t = e
                                            }
                                            if (t ? t = new x("Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context.", "jsonld.InvalidUrl", {
                                                    code: "loading remote context failed",
                                                    url: e,
                                                    cause: t
                                                }) : Z(f) || (t = new x("Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object.", "jsonld.InvalidUrl", {
                                                    code: "invalid remote context",
                                                    url: e,
                                                    cause: t
                                                })), t) return a(n = t);
                                            f = "@context" in f ? {
                                                "@context": f["@context"]
                                            } : {
                                                "@context": {}
                                            }, c.contextUrl && (ee(f["@context"]) || (f["@context"] = [f["@context"]]), f["@context"].push(c.contextUrl)), o(f, i, r, e, function(t, r) {
                                                if (t) return a(t);
                                                s[e] = r["@context"], 0 == (h -= 1) && u()
                                            })
                                        }
                                    },
                                    f = r(e, c);
                                f && "then" in f && f.then(c.bind(null, null), c)
                            }(c[d])
                        };
                    o(e, {}, i, t.base, r)
                }

                function be(e) {
                    for (var t = new RegExp("^[ \\t]*(?:#.*)?$"), r = new RegExp('^[ \\t]*(?:(?:<([^:]+:[^>]*)>)|(_:(?:[A-Za-z0-9]+)))[ \\t]+(?:<([^:]+:[^>]*)>)[ \\t]+(?:(?:<([^:]+:[^>]*)>)|(_:(?:[A-Za-z0-9]+))|(?:"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"(?:(?:\\^\\^(?:<([^:]+:[^>]*)>))|(?:@([a-z]+(?:-[a-z0-9]+)*)))?))[ \\t]*(?:\\.|(?:(?:(?:<([^:]+:[^>]*)>)|(_:(?:[A-Za-z0-9]+)))[ \\t]*\\.))[ \\t]*(?:#.*)?$'), n = {}, i = e.split(/(?:\r\n)|(?:\n)|(?:\r)/g), o = 0, a = 0; a < i.length; ++a) {
                        var s = i[a];
                        if (o++, !t.test(s)) {
                            var u = s.match(r);
                            if (null === u) throw new x("Error while parsing N-Quads; invalid quad.", "jsonld.ParseError", {
                                line: o
                            });
                            var c = {};
                            if (oe(u[1]) ? c.subject = {
                                    type: "blank node",
                                    value: u[2]
                                } : c.subject = {
                                    type: "IRI",
                                    value: u[1]
                                }, c.predicate = {
                                    type: "IRI",
                                    value: u[3]
                                }, oe(u[4]))
                                if (oe(u[5])) {
                                    c.object = {
                                        type: "literal"
                                    }, oe(u[7]) ? oe(u[8]) ? c.object.datatype = p : (c.object.datatype = k, c.object.language = u[8]) : c.object.datatype = u[7];
                                    var f = u[6].replace(/\\"/g, '"').replace(/\\t/g, "\t").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\\\/g, "\\");
                                    c.object.value = f
                                } else c.object = {
                                    type: "blank node",
                                    value: u[5]
                                };
                            else c.object = {
                                type: "IRI",
                                value: u[4]
                            };
                            var h = "@default";
                            if (oe(u[9]) ? oe(u[10]) || (h = u[10]) : h = u[9], h in n) {
                                for (var d = !0, l = n[h], b = 0; d && b < l.length; ++b) L(l[b], c) && (d = !1);
                                d && l.push(c)
                            } else n[h] = [c]
                        }
                    }
                    return n
                }

                function me(e) {
                    var t = [];
                    for (var r in e)
                        for (var n = e[r], i = 0; i < n.length; ++i) {
                            var o = n[i];
                            "@default" === r && (r = null), t.push(ge(o, r))
                        }
                    return t.sort().join("")
                }

                function ge(e, t) {
                    var r = e.subject,
                        n = e.predicate,
                        i = e.object,
                        o = t || null;
                    "name" in e && e.name && (o = e.name.value);
                    var a = "";
                    return "IRI" === r.type ? a += "<" + r.value + ">" : a += r.value, a += " ", "IRI" === n.type ? a += "<" + n.value + ">" : a += n.value, a += " ", "IRI" === i.type ? a += "<" + i.value + ">" : "blank node" === i.type ? a += i.value : (a += '"' + i.value.replace(/\\/g, "\\\\").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\"/g, '\\"') + '"', i.datatype === k ? i.language && (a += "@" + i.language) : i.datatype !== p && (a += "^^<" + i.datatype + ">")), null != o && (0 !== o.indexOf("_:") ? a += " <" + o + ">" : a += " " + o), a += " .\n"
                }

                function ve(e) {
                    this.prefix = e, this.counter = 0, this.existing = {}
                }
                Object.keys || (Object.keys = function(e) {
                    if (e !== Object(e)) throw new TypeError("Object.keys called on non-object");
                    var t = [];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                    return t
                }), e.registerRDFParser("application/nquads", be), e.registerRDFParser("rdfa-api", function(e) {
                    for (var t = {
                            "@default": []
                        }, r = e.getSubjects(), n = 0; n < r.length; ++n) {
                        var i = r[n];
                        if (null !== i) {
                            var o = e.getSubjectTriples(i);
                            if (null !== o) {
                                var a = o.predicates;
                                for (var s in a)
                                    for (var u = a[s].objects, h = 0; h < u.length; ++h) {
                                        var d = u[h],
                                            l = {};
                                        0 === i.indexOf("_:") ? l.subject = {
                                            type: "blank node",
                                            value: i
                                        } : l.subject = {
                                            type: "IRI",
                                            value: i
                                        }, 0 === s.indexOf("_:") ? l.predicate = {
                                            type: "blank node",
                                            value: s
                                        } : l.predicate = {
                                            type: "IRI",
                                            value: s
                                        };
                                        var b = d.value;
                                        if (d.type === _) {
                                            c || _e();
                                            var m = new c;
                                            b = "";
                                            for (var g = 0; g < d.value.length; g++) d.value[g].nodeType === f.ELEMENT_NODE ? b += m.serializeToString(d.value[g]) : d.value[g].nodeType === f.TEXT_NODE && (b += d.value[g].nodeValue)
                                        }
                                        l.object = {}, d.type === S ? 0 === d.value.indexOf("_:") ? l.object.type = "blank node" : l.object.type = "IRI" : (l.object.type = "literal", d.type === w ? d.language ? (l.object.datatype = k, l.object.language = d.language) : l.object.datatype = p : l.object.datatype = d.type), l.object.value = b, t["@default"].push(l)
                                    }
                            }
                        }
                    }
                    return t
                }), e.IdentifierIssuer = ve, e.UniqueNamer = ve, ve.prototype.clone = function() {
                    var e = new ve(this.prefix);
                    return e.counter = this.counter, e.existing = de(this.existing), e
                }, ve.prototype.getId = function(e) {
                    if (e && e in this.existing) return this.existing[e];
                    var t = this.prefix + this.counter;
                    return this.counter += 1, e && (this.existing[e] = t), t
                }, ve.prototype.getName = ve.prototype.getName, ve.prototype.hasId = function(e) {
                    return e in this.existing
                }, ve.prototype.isNamed = ve.prototype.hasId;
                var ye = function(e) {
                    this.list = e.sort(), this.done = !1, this.left = {};
                    for (var t = 0; t < e.length; ++t) this.left[e[t]] = !0
                };
                ye.prototype.hasNext = function() {
                    return !this.done
                }, ye.prototype.next = function() {
                    for (var e = this.list.slice(), t = null, r = 0, n = this.list.length, i = 0; i < n; ++i) {
                        var o = this.list[i],
                            a = this.left[o];
                        (null === t || o > t) && (a && i > 0 && o > this.list[i - 1] || !a && i < n - 1 && o > this.list[i + 1]) && (t = o, r = i)
                    }
                    if (null === t) this.done = !0;
                    else {
                        var s = this.left[t] ? r - 1 : r + 1;
                        for (this.list[r] = this.list[s], this.list[s] = t, i = 0; i < n; ++i) this.list[i] > t && (this.left[this.list[i]] = !this.left[this.list[i]])
                    }
                    return e
                };
                var we = function(e) {
                    if (!(this instanceof we)) return new we(e);
                    if (-1 === ["URDNA2015", "URGNA2012"].indexOf(e)) throw new Error("Invalid RDF Dataset Normalization algorithm: " + e);
                    we._init.call(this, e)
                };
                if (we.hashNQuads = function(e, t) {
                        for (var r = new we(e), n = 0; n < t.length; ++n) r.update(t[n]);
                        return r.digest()
                    }, function(e) {
                        if (e) {
                            var t = oo;
                            return we._init = function(e) {
                                e = "URDNA2015" === e ? "sha256" : "sha1", this.md = t.createHash(e)
                            }, we.prototype.update = function(e) {
                                return this.md.update(e, "utf8")
                            }, void(we.prototype.digest = function() {
                                return this.md.digest("hex")
                            })
                        }
                        we._init = function(e) {
                            e = "URDNA2015" === e ? new i.Algorithm : new n.Algorithm, this.md = new r(e)
                        }, we.prototype.update = function(e) {
                            return this.md.update(e)
                        }, we.prototype.digest = function() {
                            return this.md.digest().toHex()
                        };
                        var r = function(e) {
                            if (!(this instanceof r)) return new r(e);
                            if (this._algorithm = e, !r._padding || r._padding.length < this._algorithm.blockSize) {
                                r._padding = String.fromCharCode(128);
                                for (var t = String.fromCharCode(0), n = 64; n > 0;) 1 & n && (r._padding += t), (n >>>= 1) > 0 && (t += t)
                            }
                            this.start()
                        };
                        r.prototype.start = function() {
                            this.messageLength = 0, this.fullMessageLength = [];
                            for (var e = this._algorithm.messageLengthSize / 4, t = 0; t < e; ++t) this.fullMessageLength.push(0);
                            return this._input = new r.ByteBuffer, this.state = this._algorithm.start(), this
                        }, r.prototype.update = function(e) {
                            e = new r.ByteBuffer(unescape(encodeURIComponent(e))), this.messageLength += e.length();
                            var t = e.length();
                            t = [t / 4294967296 >>> 0, t >>> 0];
                            for (var n = this.fullMessageLength.length - 1; n >= 0; --n) this.fullMessageLength[n] += t[1], t[1] = t[0] + (this.fullMessageLength[n] / 4294967296 >>> 0), this.fullMessageLength[n] = this.fullMessageLength[n] >>> 0, t[0] = t[1] / 4294967296 >>> 0;
                            for (this._input.putBytes(e.bytes()); this._input.length() >= this._algorithm.blockSize;) this.state = this._algorithm.digest(this.state, this._input);
                            return (this._input.read > 2048 || 0 === this._input.length()) && this._input.compact(), this
                        }, r.prototype.digest = function() {
                            var e = new r.ByteBuffer;
                            e.putBytes(this._input.bytes());
                            var t = this.fullMessageLength[this.fullMessageLength.length - 1] + this._algorithm.messageLengthSize & this._algorithm.blockSize - 1;
                            e.putBytes(r._padding.substr(0, this._algorithm.blockSize - t));
                            for (var n = new r.ByteBuffer, i = 0; i < this.fullMessageLength.length; ++i) n.putInt32(this.fullMessageLength[i] << 3 | this.fullMessageLength[i + 1] >>> 28);
                            this._algorithm.writeMessageLength(e, n);
                            var o = this._algorithm.digest(this.state.copy(), e),
                                a = new r.ByteBuffer;
                            return o.write(a), a
                        }, r.ByteBuffer = function(e) {
                            this.data = "string" == typeof e ? e : "", this.read = 0
                        }, r.ByteBuffer.prototype.putInt32 = function(e) {
                            this.data += String.fromCharCode(e >> 24 & 255) + String.fromCharCode(e >> 16 & 255) + String.fromCharCode(e >> 8 & 255) + String.fromCharCode(255 & e)
                        }, r.ByteBuffer.prototype.getInt32 = function() {
                            var e = this.data.charCodeAt(this.read) << 24 ^ this.data.charCodeAt(this.read + 1) << 16 ^ this.data.charCodeAt(this.read + 2) << 8 ^ this.data.charCodeAt(this.read + 3);
                            return this.read += 4, e
                        }, r.ByteBuffer.prototype.putBytes = function(e) {
                            this.data += e
                        }, r.ByteBuffer.prototype.bytes = function() {
                            return this.data.slice(this.read)
                        }, r.ByteBuffer.prototype.length = function() {
                            return this.data.length - this.read
                        }, r.ByteBuffer.prototype.compact = function() {
                            this.data = this.data.slice(this.read), this.read = 0
                        }, r.ByteBuffer.prototype.toHex = function() {
                            for (var e = "", t = this.read; t < this.data.length; ++t) {
                                var r = this.data.charCodeAt(t);
                                r < 16 && (e += "0"), e += r.toString(16)
                            }
                            return e
                        };
                        var n = {
                            _w: null,
                            Algorithm: function() {
                                this.name = "sha1", this.blockSize = 64, this.digestLength = 20, this.messageLengthSize = 8
                            }
                        };
                        n.Algorithm.prototype.start = function() {
                            return n._w || (n._w = new Array(80)), n._createState()
                        }, n.Algorithm.prototype.writeMessageLength = function(e, t) {
                            e.putBytes(t.bytes())
                        }, n.Algorithm.prototype.digest = function(e, t) {
                            for (var r, i, o, a, s, u, c, f = t.length(), h = n._w; f >= 64;) {
                                for (i = e.h0, o = e.h1, a = e.h2, s = e.h3, u = e.h4, c = 0; c < 16; ++c) r = t.getInt32(), h[c] = r, r = (i << 5 | i >>> 27) + (s ^ o & (a ^ s)) + u + 1518500249 + r, u = s, s = a, a = o << 30 | o >>> 2, o = i, i = r;
                                for (; c < 20; ++c) r = (r = h[c - 3] ^ h[c - 8] ^ h[c - 14] ^ h[c - 16]) << 1 | r >>> 31, h[c] = r, r = (i << 5 | i >>> 27) + (s ^ o & (a ^ s)) + u + 1518500249 + r, u = s, s = a, a = o << 30 | o >>> 2, o = i, i = r;
                                for (; c < 32; ++c) r = (r = h[c - 3] ^ h[c - 8] ^ h[c - 14] ^ h[c - 16]) << 1 | r >>> 31, h[c] = r, r = (i << 5 | i >>> 27) + (o ^ a ^ s) + u + 1859775393 + r, u = s, s = a, a = o << 30 | o >>> 2, o = i, i = r;
                                for (; c < 40; ++c) r = (r = h[c - 6] ^ h[c - 16] ^ h[c - 28] ^ h[c - 32]) << 2 | r >>> 30, h[c] = r, r = (i << 5 | i >>> 27) + (o ^ a ^ s) + u + 1859775393 + r, u = s, s = a, a = o << 30 | o >>> 2, o = i, i = r;
                                for (; c < 60; ++c) r = (r = h[c - 6] ^ h[c - 16] ^ h[c - 28] ^ h[c - 32]) << 2 | r >>> 30, h[c] = r, r = (i << 5 | i >>> 27) + (o & a | s & (o ^ a)) + u + 2400959708 + r, u = s, s = a, a = o << 30 | o >>> 2, o = i, i = r;
                                for (; c < 80; ++c) r = (r = h[c - 6] ^ h[c - 16] ^ h[c - 28] ^ h[c - 32]) << 2 | r >>> 30, h[c] = r, r = (i << 5 | i >>> 27) + (o ^ a ^ s) + u + 3395469782 + r, u = s, s = a, a = o << 30 | o >>> 2, o = i, i = r;
                                e.h0 = e.h0 + i | 0, e.h1 = e.h1 + o | 0, e.h2 = e.h2 + a | 0, e.h3 = e.h3 + s | 0, e.h4 = e.h4 + u | 0, f -= 64
                            }
                            return e
                        }, n._createState = function() {
                            var e = {
                                h0: 1732584193,
                                h1: 4023233417,
                                h2: 2562383102,
                                h3: 271733878,
                                h4: 3285377520,
                                copy: function() {
                                    var t = n._createState();
                                    return t.h0 = e.h0, t.h1 = e.h1, t.h2 = e.h2, t.h3 = e.h3, t.h4 = e.h4, t
                                },
                                write: function(t) {
                                    t.putInt32(e.h0), t.putInt32(e.h1), t.putInt32(e.h2), t.putInt32(e.h3), t.putInt32(e.h4)
                                }
                            };
                            return e
                        };
                        var i = {
                            _k: null,
                            _w: null,
                            Algorithm: function() {
                                this.name = "sha256", this.blockSize = 64, this.digestLength = 32, this.messageLengthSize = 8
                            }
                        };
                        i.Algorithm.prototype.start = function() {
                            return i._k || i._init(), i._createState()
                        }, i.Algorithm.prototype.writeMessageLength = function(e, t) {
                            e.putBytes(t.bytes())
                        }, i.Algorithm.prototype.digest = function(e, t) {
                            for (var r, n, o, a, s, u, c, f, h, d, l, p, b, m = t.length(), g = i._k, v = i._w; m >= 64;) {
                                for (s = 0; s < 16; ++s) v[s] = t.getInt32();
                                for (; s < 64; ++s) r = ((r = v[s - 2]) >>> 17 | r << 15) ^ (r >>> 19 | r << 13) ^ r >>> 10, n = ((n = v[s - 15]) >>> 7 | n << 25) ^ (n >>> 18 | n << 14) ^ n >>> 3, v[s] = r + v[s - 7] + n + v[s - 16] | 0;
                                for (u = e.h0, c = e.h1, f = e.h2, h = e.h3, d = e.h4, l = e.h5, p = e.h6, b = e.h7, s = 0; s < 64; ++s) o = (u >>> 2 | u << 30) ^ (u >>> 13 | u << 19) ^ (u >>> 22 | u << 10), a = u & c | f & (u ^ c), r = b + ((d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7)) + (p ^ d & (l ^ p)) + g[s] + v[s], b = p, p = l, l = d, d = h + r | 0, h = f, f = c, c = u, u = r + (n = o + a) | 0;
                                e.h0 = e.h0 + u | 0, e.h1 = e.h1 + c | 0, e.h2 = e.h2 + f | 0, e.h3 = e.h3 + h | 0, e.h4 = e.h4 + d | 0, e.h5 = e.h5 + l | 0, e.h6 = e.h6 + p | 0, e.h7 = e.h7 + b | 0, m -= 64
                            }
                            return e
                        }, i._createState = function() {
                            var e = {
                                h0: 1779033703,
                                h1: 3144134277,
                                h2: 1013904242,
                                h3: 2773480762,
                                h4: 1359893119,
                                h5: 2600822924,
                                h6: 528734635,
                                h7: 1541459225,
                                copy: function() {
                                    var t = i._createState();
                                    return t.h0 = e.h0, t.h1 = e.h1, t.h2 = e.h2, t.h3 = e.h3, t.h4 = e.h4, t.h5 = e.h5, t.h6 = e.h6, t.h7 = e.h7, t
                                },
                                write: function(t) {
                                    t.putInt32(e.h0), t.putInt32(e.h1), t.putInt32(e.h2), t.putInt32(e.h3), t.putInt32(e.h4), t.putInt32(e.h5), t.putInt32(e.h6), t.putInt32(e.h7)
                                }
                            };
                            return e
                        }, i._init = function() {
                            i._k = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], i._w = new Array(64)
                        }
                    }(r), !c) var _e = function() {
                    c = oo.XMLSerializer
                };

                function Se(e, t) {
                    var r = "";
                    0 === e.indexOf("/") && (r = "/");
                    for (var n = e.split("/"), i = []; n.length > 0;) "." === n[0] || "" === n[0] && n.length > 1 ? n.shift() : ".." !== n[0] ? i.push(n.shift()) : (n.shift(), t || i.length > 0 && ".." !== i[i.length - 1] ? i.pop() : i.push(".."));
                    return r + i.join("/")
                }
                if (e.url = {}, e.url.parsers = {
                        simple: {
                            keys: ["href", "scheme", "authority", "path", "query", "fragment"],
                            regex: /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/
                        },
                        full: {
                            keys: ["href", "protocol", "scheme", "authority", "auth", "user", "password", "hostname", "port", "path", "directory", "file", "query", "fragment"],
                            regex: /^(([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?(?:(((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/
                        }
                    }, e.url.parse = function(t, r) {
                        for (var n = {}, i = e.url.parsers[r || "full"], o = i.regex.exec(t), a = i.keys.length; a--;) n[i.keys[a]] = void 0 === o[a] ? null : o[a];
                        return n.normalizedPath = Se(n.path, !!n.authority), n
                    }, r ? e.useDocumentLoader("node") : "undefined" != typeof XMLHttpRequest && e.useDocumentLoader("xhr"), r) {
                    e.use = function(t) {
                        switch (t) {
                            case "request":
                                e.request = oo;
                                break;
                            default:
                                throw new x("Unknown extension.", "jsonld.UnknownExtension", {
                                    extension: t
                                })
                        }
                    };
                    var ke = {
                        exports: {},
                        filename: "/Users/julien/work/cert-verifier-js/node_modules/jsonld/js"
                    };
                    oo(ke, "version"), e.version = ke.exports.version
                }
                return e
            })(o), e.exports && (e.exports = o), n && (void 0 === window.jsonld ? window.jsonld = window.jsonldjs = o : jsonldjs = o)
        }),
        so = (ao.jsonld, i(function(e) {
            ! function(t) {
                var r = {
                    bytesToHex: function(e) {
                        return function(e) {
                            return e.map(function(e) {
                                return t = e.toString(16), r = 2, t.length > r ? t : Array(r - t.length + 1).join("0") + t;
                                var t, r
                            }).join("")
                        }(e)
                    },
                    hexToBytes: function(e) {
                        if (e.length % 2 == 1) throw new Error("hexToBytes can't have a string with an odd number of characters.");
                        return 0 === e.indexOf("0x") && (e = e.slice(2)), e.match(/../g).map(function(e) {
                            return parseInt(e, 16)
                        })
                    }
                };
                e.exports ? e.exports = r : t.convertHex = r
            }(t)
        })),
        uo = i(function(e) {
            ! function(t) {
                var r = {
                    bytesToString: function(e) {
                        return e.map(function(e) {
                            return String.fromCharCode(e)
                        }).join("")
                    },
                    stringToBytes: function(e) {
                        return e.split("").map(function(e) {
                            return e.charCodeAt(0)
                        })
                    }
                };
                r.UTF8 = {
                    bytesToString: function(e) {
                        return decodeURIComponent(escape(r.bytesToString(e)))
                    },
                    stringToBytes: function(e) {
                        return r.stringToBytes(unescape(encodeURIComponent(e)))
                    }
                }, e.exports ? e.exports = r : t.convertString = r
            }(t)
        }),
        co = i(function(e) {
            ! function(t) {
                var r = {};
                e.exports ? (r.bytesToHex = so.bytesToHex, r.convertString = uo, e.exports = u) : (r.bytesToHex = t.convertHex.bytesToHex, r.convertString = t.convertString, t.sha256 = u);
                var n = [];
                ! function() {
                    function e(e) {
                        for (var t = Math.sqrt(e), r = 2; r <= t; r++)
                            if (!(e % r)) return !1;
                        return !0
                    }

                    function t(e) {
                        return 4294967296 * (e - (0 | e)) | 0
                    }
                    for (var r = 2, i = 0; i < 64;) e(r) && (n[i] = t(Math.pow(r, 1 / 3)), i++), r++
                }();
                var i = function(e) {
                        for (var t = [], r = 0, n = 0; r < e.length; r++, n += 8) t[n >>> 5] |= e[r] << 24 - n % 32;
                        return t
                    },
                    o = function(e) {
                        for (var t = [], r = 0; r < 32 * e.length; r += 8) t.push(e[r >>> 5] >>> 24 - r % 32 & 255);
                        return t
                    },
                    a = [],
                    s = function(e, t, r) {
                        for (var i = e[0], o = e[1], s = e[2], u = e[3], c = e[4], f = e[5], h = e[6], d = e[7], l = 0; l < 64; l++) {
                            if (l < 16) a[l] = 0 | t[r + l];
                            else {
                                var p = a[l - 15],
                                    b = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3,
                                    m = a[l - 2],
                                    g = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                                a[l] = b + a[l - 7] + g + a[l - 16]
                            }
                            var v = i & o ^ i & s ^ o & s,
                                y = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22),
                                w = d + ((c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25)) + (c & f ^ ~c & h) + n[l] + a[l];
                            d = h, h = f, f = c, c = u + w | 0, u = s, s = o, o = i, i = w + (y + v) | 0
                        }
                        e[0] = e[0] + i | 0, e[1] = e[1] + o | 0, e[2] = e[2] + s | 0, e[3] = e[3] + u | 0, e[4] = e[4] + c | 0, e[5] = e[5] + f | 0, e[6] = e[6] + h | 0, e[7] = e[7] + d | 0
                    };

                function u(e, t) {
                    e.constructor === String && (e = r.convertString.UTF8.stringToBytes(e));
                    var n = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
                        a = i(e),
                        u = 8 * e.length;
                    a[u >> 5] |= 128 << 24 - u % 32, a[15 + (u + 64 >> 9 << 4)] = u;
                    for (var c = 0; c < a.length; c += 16) s(n, a, c);
                    var f = o(n);
                    return t && t.asBytes ? f : t && t.asString ? r.convertString.bytesToString(f) : r.bytesToHex(f)
                }
                u.x2 = function(e, t) {
                    return u(u(e, {
                        asBytes: !0
                    }), t)
                }
            }(t)
        });

    function fo(e) {
        for (var t = [], r = 0; r < e.length; r += 2) t.push(parseInt(e.substring(r, r + 2), 16));
        return t
    }
    var ho = z,
        lo = K,
        po = W,
        bo = J,
        mo = {};

    function go(e, t) {
        var r = e["@context"],
            n = e;
        t === b.V2_0 && V.CheckForUnmappedFields && (r.find(function(e) {
            return e === Object(e) && "@vocab" in e
        }) ? r = null : r.push({
            "@vocab": "http://fallback.org/"
        }));
        var i = ao.documentLoaders.node();
        ao.documentLoader = function(e, t) {
            return e in mo ? t(null, {
                contextUrl: null,
                document: mo[e],
                documentUrl: e
            }) : i(e, t)
        };
        var o = {
            algorithm: "URDNA2015",
            format: "application/nquads"
        };
        return r && (o.expandContext = r), new Promise(function(e, t) {
            ao.normalize(n, o, function(r, n) {
                !r ? function(e) {
                    var t = /<http:\/\/fallback\.org\/(.*)>/.exec(e);
                    if (t) {
                        for (var r = [], n = 0; n < t.length; n++) r.push(t[n]);
                        return r
                    }
                    return null
                }(n) ? t(new fe(k, $("errors", "foundUnmappedFields"))) : e(co(function(e) {
                    for (var t = [], r = 0; r < e.length; r++) {
                        var n = e.charCodeAt(r);
                        n < 128 ? t.push(n) : n < 2048 ? t.push(192 | n >> 6, 128 | 63 & n) : n < 55296 || n >= 57344 ? t.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (r++, n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(r)), t.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n))
                    }
                    return t
                }(n))) : t(new fe(k, $("errors", "failedJsonLdNormalization")))
            })
        })
    }

    function vo(e, t) {
	console.log('compare', e)
	console.log('against', t)
        if (e !== t) throw new fe(O, $("errors", "ensureHashesEqual"))
    }
    mo["https://w3id.org/blockcerts/schema/2.0-alpha/context.json"] = lo, mo["https://www.blockcerts.org/schema/2.0-alpha/context.json"] = lo, mo["https://w3id.org/openbadges/v2"] = ho, mo["https://openbadgespec.org/v2/context.json"] = ho, mo["https://w3id.org/blockcerts/v2"] = bo, mo["https://www.w3id.org/blockcerts/schema/2.0/context.json"] = bo, mo["https://w3id.org/blockcerts/v1"] = po;
    var yo = i(function(e) {
            "function" == typeof Object.create ? e.exports = function(e, t) {
                t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : e.exports = function(e, t) {
                if (t) {
                    e.super_ = t;
                    var r = function() {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }
            }
        }),
        wo = i(function(e, t) {
            var r = vt.Buffer;

            function n(e, t) {
                for (var r in e) t[r] = e[r]
            }

            function i(e, t, n) {
                return r(e, t, n)
            }
            r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? e.exports = vt : (n(vt, t), t.Buffer = i), i.prototype = Object.create(r.prototype), n(r, i), i.from = function(e, t, n) {
                if ("number" == typeof e) throw new TypeError("Argument must not be a number");
                return r(e, t, n)
            }, i.alloc = function(e, t, n) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                var i = r(e);
                return void 0 !== t ? "string" == typeof n ? i.fill(t, n) : i.fill(t) : i.fill(0), i
            }, i.allocUnsafe = function(e) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                return r(e)
            }, i.allocUnsafeSlow = function(e) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                return vt.SlowBuffer(e)
            }
        }),
        _o = (wo.Buffer, wo.Buffer),
        So = yi.Transform;

    function ko(e) {
        So.call(this), this._block = _o.allocUnsafe(e), this._blockSize = e, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
    }
    yo(ko, So), ko.prototype._transform = function(e, t, r) {
        var n = null;
        try {
            this.update(e, t)
        } catch (e) {
            n = e
        }
        r(n)
    }, ko.prototype._flush = function(e) {
        var t = null;
        try {
            this.push(this.digest())
        } catch (e) {
            t = e
        }
        e(t)
    }, ko.prototype.update = function(e, t) {
        if (function(e, t) {
                if (!_o.isBuffer(e) && "string" != typeof e) throw new TypeError(t + " must be a string or a buffer")
            }(e, "Data"), this._finalized) throw new Error("Digest already called");
        _o.isBuffer(e) || (e = _o.from(e, t));
        for (var r = this._block, n = 0; this._blockOffset + e.length - n >= this._blockSize;) {
            for (var i = this._blockOffset; i < this._blockSize;) r[i++] = e[n++];
            this._update(), this._blockOffset = 0
        }
        for (; n < e.length;) r[this._blockOffset++] = e[n++];
        for (var o = 0, a = 8 * e.length; a > 0; ++o) this._length[o] += a, (a = this._length[o] / 4294967296 | 0) > 0 && (this._length[o] -= 4294967296 * a);
        return this
    }, ko.prototype._update = function() {
        throw new Error("_update is not implemented")
    }, ko.prototype.digest = function(e) {
        if (this._finalized) throw new Error("Digest already called");
        this._finalized = !0;
        var t = this._digest();
        void 0 !== e && (t = t.toString(e)), this._block.fill(0), this._blockOffset = 0;
        for (var r = 0; r < 4; ++r) this._length[r] = 0;
        return t
    }, ko.prototype._digest = function() {
        throw new Error("_digest is not implemented")
    };
    var Eo = ko,
        Io = wo.Buffer,
        xo = new Array(16);

    function Oo() {
        Eo.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
    }

    function To(e, t) {
        return e << t | e >>> 32 - t
    }

    function Po(e, t, r, n, i, o, a) {
        return To(e + (t & r | ~t & n) + i + o | 0, a) + t | 0
    }

    function Ao(e, t, r, n, i, o, a) {
        return To(e + (t & n | r & ~n) + i + o | 0, a) + t | 0
    }

    function Mo(e, t, r, n, i, o, a) {
        return To(e + (t ^ r ^ n) + i + o | 0, a) + t | 0
    }

    function Co(e, t, r, n, i, o, a) {
        return To(e + (r ^ (t | ~n)) + i + o | 0, a) + t | 0
    }
    yo(Oo, Eo), Oo.prototype._update = function() {
        for (var e = xo, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
        var r = this._a,
            n = this._b,
            i = this._c,
            o = this._d;
        r = Po(r, n, i, o, e[0], 3614090360, 7), o = Po(o, r, n, i, e[1], 3905402710, 12), i = Po(i, o, r, n, e[2], 606105819, 17), n = Po(n, i, o, r, e[3], 3250441966, 22), r = Po(r, n, i, o, e[4], 4118548399, 7), o = Po(o, r, n, i, e[5], 1200080426, 12), i = Po(i, o, r, n, e[6], 2821735955, 17), n = Po(n, i, o, r, e[7], 4249261313, 22), r = Po(r, n, i, o, e[8], 1770035416, 7), o = Po(o, r, n, i, e[9], 2336552879, 12), i = Po(i, o, r, n, e[10], 4294925233, 17), n = Po(n, i, o, r, e[11], 2304563134, 22), r = Po(r, n, i, o, e[12], 1804603682, 7), o = Po(o, r, n, i, e[13], 4254626195, 12), i = Po(i, o, r, n, e[14], 2792965006, 17), r = Ao(r, n = Po(n, i, o, r, e[15], 1236535329, 22), i, o, e[1], 4129170786, 5), o = Ao(o, r, n, i, e[6], 3225465664, 9), i = Ao(i, o, r, n, e[11], 643717713, 14), n = Ao(n, i, o, r, e[0], 3921069994, 20), r = Ao(r, n, i, o, e[5], 3593408605, 5), o = Ao(o, r, n, i, e[10], 38016083, 9), i = Ao(i, o, r, n, e[15], 3634488961, 14), n = Ao(n, i, o, r, e[4], 3889429448, 20), r = Ao(r, n, i, o, e[9], 568446438, 5), o = Ao(o, r, n, i, e[14], 3275163606, 9), i = Ao(i, o, r, n, e[3], 4107603335, 14), n = Ao(n, i, o, r, e[8], 1163531501, 20), r = Ao(r, n, i, o, e[13], 2850285829, 5), o = Ao(o, r, n, i, e[2], 4243563512, 9), i = Ao(i, o, r, n, e[7], 1735328473, 14), r = Mo(r, n = Ao(n, i, o, r, e[12], 2368359562, 20), i, o, e[5], 4294588738, 4), o = Mo(o, r, n, i, e[8], 2272392833, 11), i = Mo(i, o, r, n, e[11], 1839030562, 16), n = Mo(n, i, o, r, e[14], 4259657740, 23), r = Mo(r, n, i, o, e[1], 2763975236, 4), o = Mo(o, r, n, i, e[4], 1272893353, 11), i = Mo(i, o, r, n, e[7], 4139469664, 16), n = Mo(n, i, o, r, e[10], 3200236656, 23), r = Mo(r, n, i, o, e[13], 681279174, 4), o = Mo(o, r, n, i, e[0], 3936430074, 11), i = Mo(i, o, r, n, e[3], 3572445317, 16), n = Mo(n, i, o, r, e[6], 76029189, 23), r = Mo(r, n, i, o, e[9], 3654602809, 4), o = Mo(o, r, n, i, e[12], 3873151461, 11), i = Mo(i, o, r, n, e[15], 530742520, 16), r = Co(r, n = Mo(n, i, o, r, e[2], 3299628645, 23), i, o, e[0], 4096336452, 6), o = Co(o, r, n, i, e[7], 1126891415, 10), i = Co(i, o, r, n, e[14], 2878612391, 15), n = Co(n, i, o, r, e[5], 4237533241, 21), r = Co(r, n, i, o, e[12], 1700485571, 6), o = Co(o, r, n, i, e[3], 2399980690, 10), i = Co(i, o, r, n, e[10], 4293915773, 15), n = Co(n, i, o, r, e[1], 2240044497, 21), r = Co(r, n, i, o, e[8], 1873313359, 6), o = Co(o, r, n, i, e[15], 4264355552, 10), i = Co(i, o, r, n, e[6], 2734768916, 15), n = Co(n, i, o, r, e[13], 1309151649, 21), r = Co(r, n, i, o, e[4], 4149444226, 6), o = Co(o, r, n, i, e[11], 3174756917, 10), i = Co(i, o, r, n, e[2], 718787259, 15), n = Co(n, i, o, r, e[9], 3951481745, 21), this._a = this._a + r | 0, this._b = this._b + n | 0, this._c = this._c + i | 0, this._d = this._d + o | 0
    }, Oo.prototype._digest = function() {
        this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var e = Io.allocUnsafe(16);
        return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e
    };
    var Lo = Oo,
        Ro = vt.Buffer,
        No = new Array(16),
        jo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
        Uo = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
        Do = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
        Bo = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
        Ho = [0, 1518500249, 1859775393, 2400959708, 2840853838],
        Fo = [1352829926, 1548603684, 1836072691, 2053994217, 0];

    function qo() {
        Eo.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
    }

    function Vo(e, t) {
        return e << t | e >>> 32 - t
    }

    function zo(e, t, r, n, i, o, a, s) {
        return Vo(e + (t ^ r ^ n) + o + a | 0, s) + i | 0
    }

    function Ko(e, t, r, n, i, o, a, s) {
        return Vo(e + (t & r | ~t & n) + o + a | 0, s) + i | 0
    }

    function Wo(e, t, r, n, i, o, a, s) {
        return Vo(e + ((t | ~r) ^ n) + o + a | 0, s) + i | 0
    }

    function Jo(e, t, r, n, i, o, a, s) {
        return Vo(e + (t & n | r & ~n) + o + a | 0, s) + i | 0
    }

    function Go(e, t, r, n, i, o, a, s) {
        return Vo(e + (t ^ (r | ~n)) + o + a | 0, s) + i | 0
    }
    yo(qo, Eo), qo.prototype._update = function() {
        for (var e = No, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
        for (var r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, o = 0 | this._d, a = 0 | this._e, s = 0 | this._a, u = 0 | this._b, c = 0 | this._c, f = 0 | this._d, h = 0 | this._e, d = 0; d < 80; d += 1) {
            var l, p;
            d < 16 ? (l = zo(r, n, i, o, a, e[jo[d]], Ho[0], Do[d]), p = Go(s, u, c, f, h, e[Uo[d]], Fo[0], Bo[d])) : d < 32 ? (l = Ko(r, n, i, o, a, e[jo[d]], Ho[1], Do[d]), p = Jo(s, u, c, f, h, e[Uo[d]], Fo[1], Bo[d])) : d < 48 ? (l = Wo(r, n, i, o, a, e[jo[d]], Ho[2], Do[d]), p = Wo(s, u, c, f, h, e[Uo[d]], Fo[2], Bo[d])) : d < 64 ? (l = Jo(r, n, i, o, a, e[jo[d]], Ho[3], Do[d]), p = Ko(s, u, c, f, h, e[Uo[d]], Fo[3], Bo[d])) : (l = Go(r, n, i, o, a, e[jo[d]], Ho[4], Do[d]), p = zo(s, u, c, f, h, e[Uo[d]], Fo[4], Bo[d])), r = a, a = o, o = Vo(i, 10), i = n, n = l, s = h, h = f, f = Vo(c, 10), c = u, u = p
        }
        var b = this._b + i + f | 0;
        this._b = this._c + o + h | 0, this._c = this._d + a + s | 0, this._d = this._e + r + u | 0, this._e = this._a + n + c | 0, this._a = b
    }, qo.prototype._digest = function() {
        this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var e = Ro.alloc ? Ro.alloc(20) : new Ro(20);
        return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e.writeInt32LE(this._e, 16), e
    };
    var Xo = qo,
        Yo = wo.Buffer;

    function $o(e, t) {
        this._block = Yo.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0
    }
    $o.prototype.update = function(e, t) {
        "string" == typeof e && (t = t || "utf8", e = Yo.from(e, t));
        for (var r = this._block, n = this._blockSize, i = e.length, o = this._len, a = 0; a < i;) {
            for (var s = o % n, u = Math.min(i - a, n - s), c = 0; c < u; c++) r[s + c] = e[a + c];
            a += u, (o += u) % n == 0 && this._update(r)
        }
        return this._len += i, this
    }, $o.prototype.digest = function(e) {
        var t = this._len % this._blockSize;
        this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
        var r = 8 * this._len;
        if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
        else {
            var n = (4294967295 & r) >>> 0,
                i = (r - n) / 4294967296;
            this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4)
        }
        this._update(this._block);
        var o = this._hash();
        return e ? o.toString(e) : o
    }, $o.prototype._update = function() {
        throw new Error("_update must be implemented by subclass")
    };
    var Qo = $o,
        Zo = wo.Buffer,
        ea = [1518500249, 1859775393, -1894007588, -899497514],
        ta = new Array(80);

    function ra() {
        this.init(), this._w = ta, Qo.call(this, 64, 56)
    }

    function na(e) {
        return e << 30 | e >>> 2
    }

    function ia(e, t, r, n) {
        return 0 === e ? t & r | ~t & n : 2 === e ? t & r | t & n | r & n : t ^ r ^ n
    }
    yo(ra, Qo), ra.prototype.init = function() {
        return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
    }, ra.prototype._update = function(e) {
        for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, a = 0 | this._d, s = 0 | this._e, u = 0; u < 16; ++u) r[u] = e.readInt32BE(4 * u);
        for (; u < 80; ++u) r[u] = r[u - 3] ^ r[u - 8] ^ r[u - 14] ^ r[u - 16];
        for (var c = 0; c < 80; ++c) {
            var f = ~~(c / 20),
                h = 0 | ((t = n) << 5 | t >>> 27) + ia(f, i, o, a) + s + r[c] + ea[f];
            s = a, a = o, o = na(i), i = n, n = h
        }
        this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = a + this._d | 0, this._e = s + this._e | 0
    }, ra.prototype._hash = function() {
        var e = Zo.allocUnsafe(20);
        return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
    };
    var oa = ra,
        aa = wo.Buffer,
        sa = [1518500249, 1859775393, -1894007588, -899497514],
        ua = new Array(80);

    function ca() {
        this.init(), this._w = ua, Qo.call(this, 64, 56)
    }

    function fa(e) {
        return e << 5 | e >>> 27
    }

    function ha(e) {
        return e << 30 | e >>> 2
    }

    function da(e, t, r, n) {
        return 0 === e ? t & r | ~t & n : 2 === e ? t & r | t & n | r & n : t ^ r ^ n
    }
    yo(ca, Qo), ca.prototype.init = function() {
        return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
    }, ca.prototype._update = function(e) {
        for (var t, r = this._w, n = 0 | this._a, i = 0 | this._b, o = 0 | this._c, a = 0 | this._d, s = 0 | this._e, u = 0; u < 16; ++u) r[u] = e.readInt32BE(4 * u);
        for (; u < 80; ++u) r[u] = (t = r[u - 3] ^ r[u - 8] ^ r[u - 14] ^ r[u - 16]) << 1 | t >>> 31;
        for (var c = 0; c < 80; ++c) {
            var f = ~~(c / 20),
                h = fa(n) + da(f, i, o, a) + s + r[c] + sa[f] | 0;
            s = a, a = o, o = ha(i), i = n, n = h
        }
        this._a = n + this._a | 0, this._b = i + this._b | 0, this._c = o + this._c | 0, this._d = a + this._d | 0, this._e = s + this._e | 0
    }, ca.prototype._hash = function() {
        var e = aa.allocUnsafe(20);
        return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
    };
    var la = ca,
        pa = wo.Buffer,
        ba = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        ma = new Array(64);

    function ga() {
        this.init(), this._w = ma, Qo.call(this, 64, 56)
    }

    function va(e, t, r) {
        return r ^ e & (t ^ r)
    }

    function ya(e, t, r) {
        return e & t | r & (e | t)
    }

    function wa(e) {
        return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)
    }

    function _a(e) {
        return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)
    }

    function Sa(e) {
        return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3
    }

    function ka(e) {
        return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10
    }
    yo(ga, Qo), ga.prototype.init = function() {
        return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
    }, ga.prototype._update = function(e) {
        for (var t = this._w, r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, o = 0 | this._d, a = 0 | this._e, s = 0 | this._f, u = 0 | this._g, c = 0 | this._h, f = 0; f < 16; ++f) t[f] = e.readInt32BE(4 * f);
        for (; f < 64; ++f) t[f] = ka(t[f - 2]) + t[f - 7] + Sa(t[f - 15]) + t[f - 16] | 0;
        for (var h = 0; h < 64; ++h) {
            var d = c + _a(a) + va(a, s, u) + ba[h] + t[h] | 0,
                l = wa(r) + ya(r, n, i) | 0;
            c = u, u = s, s = a, a = o + d | 0, o = i, i = n, n = r, r = d + l | 0
        }
        this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = o + this._d | 0, this._e = a + this._e | 0, this._f = s + this._f | 0, this._g = u + this._g | 0, this._h = c + this._h | 0
    }, ga.prototype._hash = function() {
        var e = pa.allocUnsafe(32);
        return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e
    };
    var Ea = ga,
        Ia = wo.Buffer,
        xa = new Array(64);

    function Oa() {
        this.init(), this._w = xa, Qo.call(this, 64, 56)
    }
    yo(Oa, Ea), Oa.prototype.init = function() {
        return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
    }, Oa.prototype._hash = function() {
        var e = Ia.allocUnsafe(28);
        return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e
    };
    var Ta = Oa,
        Pa = wo.Buffer,
        Aa = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
        Ma = new Array(160);

    function Ca() {
        this.init(), this._w = Ma, Qo.call(this, 128, 112)
    }

    function La(e, t, r) {
        return r ^ e & (t ^ r)
    }

    function Ra(e, t, r) {
        return e & t | r & (e | t)
    }

    function Na(e, t) {
        return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
    }

    function ja(e, t) {
        return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
    }

    function Ua(e, t) {
        return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7
    }

    function Da(e, t) {
        return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25)
    }

    function Ba(e, t) {
        return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6
    }

    function Ha(e, t) {
        return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26)
    }

    function Fa(e, t) {
        return e >>> 0 < t >>> 0 ? 1 : 0
    }
    yo(Ca, Qo), Ca.prototype.init = function() {
        return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
    }, Ca.prototype._update = function(e) {
        for (var t = this._w, r = 0 | this._ah, n = 0 | this._bh, i = 0 | this._ch, o = 0 | this._dh, a = 0 | this._eh, s = 0 | this._fh, u = 0 | this._gh, c = 0 | this._hh, f = 0 | this._al, h = 0 | this._bl, d = 0 | this._cl, l = 0 | this._dl, p = 0 | this._el, b = 0 | this._fl, m = 0 | this._gl, g = 0 | this._hl, v = 0; v < 32; v += 2) t[v] = e.readInt32BE(4 * v), t[v + 1] = e.readInt32BE(4 * v + 4);
        for (; v < 160; v += 2) {
            var y = t[v - 30],
                w = t[v - 30 + 1],
                _ = Ua(y, w),
                S = Da(w, y),
                k = Ba(y = t[v - 4], w = t[v - 4 + 1]),
                E = Ha(w, y),
                I = t[v - 14],
                x = t[v - 14 + 1],
                O = t[v - 32],
                T = t[v - 32 + 1],
                P = S + x | 0,
                A = _ + I + Fa(P, S) | 0;
            A = (A = A + k + Fa(P = P + E | 0, E) | 0) + O + Fa(P = P + T | 0, T) | 0, t[v] = A, t[v + 1] = P
        }
        for (var M = 0; M < 160; M += 2) {
            A = t[M], P = t[M + 1];
            var C = Ra(r, n, i),
                L = Ra(f, h, d),
                R = Na(r, f),
                N = Na(f, r),
                j = ja(a, p),
                U = ja(p, a),
                D = Aa[M],
                B = Aa[M + 1],
                H = La(a, s, u),
                F = La(p, b, m),
                q = g + U | 0,
                V = c + j + Fa(q, g) | 0;
            V = (V = (V = V + H + Fa(q = q + F | 0, F) | 0) + D + Fa(q = q + B | 0, B) | 0) + A + Fa(q = q + P | 0, P) | 0;
            var z = N + L | 0,
                K = R + C + Fa(z, N) | 0;
            c = u, g = m, u = s, m = b, s = a, b = p, a = o + V + Fa(p = l + q | 0, l) | 0, o = i, l = d, i = n, d = h, n = r, h = f, r = V + K + Fa(f = q + z | 0, q) | 0
        }
        this._al = this._al + f | 0, this._bl = this._bl + h | 0, this._cl = this._cl + d | 0, this._dl = this._dl + l | 0, this._el = this._el + p | 0, this._fl = this._fl + b | 0, this._gl = this._gl + m | 0, this._hl = this._hl + g | 0, this._ah = this._ah + r + Fa(this._al, f) | 0, this._bh = this._bh + n + Fa(this._bl, h) | 0, this._ch = this._ch + i + Fa(this._cl, d) | 0, this._dh = this._dh + o + Fa(this._dl, l) | 0, this._eh = this._eh + a + Fa(this._el, p) | 0, this._fh = this._fh + s + Fa(this._fl, b) | 0, this._gh = this._gh + u + Fa(this._gl, m) | 0, this._hh = this._hh + c + Fa(this._hl, g) | 0
    }, Ca.prototype._hash = function() {
        var e = Pa.allocUnsafe(64);

        function t(t, r, n) {
            e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4)
        }
        return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), e
    };
    var qa = Ca,
        Va = wo.Buffer,
        za = new Array(160);

    function Ka() {
        this.init(), this._w = za, Qo.call(this, 128, 112)
    }
    yo(Ka, qa), Ka.prototype.init = function() {
        return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
    }, Ka.prototype._hash = function() {
        var e = Va.allocUnsafe(48);

        function t(t, r, n) {
            e.writeInt32BE(t, n), e.writeInt32BE(r, n + 4)
        }
        return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e
    };
    var Wa = Ka,
        Ja = i(function(e) {
            var t = e.exports = function(e) {
                e = e.toLowerCase();
                var r = t[e];
                if (!r) throw new Error(e + " is not supported (we accept pull requests)");
                return new r
            };
            t.sha = oa, t.sha1 = la, t.sha224 = Ta, t.sha256 = Ea, t.sha384 = Wa, t.sha512 = qa
        }),
        Ga = wo.Buffer,
        Xa = yi.Transform,
        Ya = Nn.StringDecoder;

    function $a(e) {
        Xa.call(this), this.hashMode = "string" == typeof e, this.hashMode ? this[e] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null
    }
    yo($a, Xa), $a.prototype.update = function(e, t, r) {
        "string" == typeof e && (e = Ga.from(e, t));
        var n = this._update(e);
        return this.hashMode ? this : (r && (n = this._toString(n, r)), n)
    }, $a.prototype.setAutoPadding = function() {}, $a.prototype.getAuthTag = function() {
        throw new Error("trying to get auth tag in unsupported state")
    }, $a.prototype.setAuthTag = function() {
        throw new Error("trying to set auth tag in unsupported state")
    }, $a.prototype.setAAD = function() {
        throw new Error("trying to set aad in unsupported state")
    }, $a.prototype._transform = function(e, t, r) {
        var n;
        try {
            this.hashMode ? this._update(e) : this.push(this._update(e))
        } catch (e) {
            n = e
        } finally {
            r(n)
        }
    }, $a.prototype._flush = function(e) {
        var t;
        try {
            this.push(this.__final())
        } catch (e) {
            t = e
        }
        e(t)
    }, $a.prototype._finalOrDigest = function(e) {
        var t = this.__final() || Ga.alloc(0);
        return e && (t = this._toString(t, e, !0)), t
    }, $a.prototype._toString = function(e, t, r) {
        if (this._decoder || (this._decoder = new Ya(t), this._encoding = t), this._encoding !== t) throw new Error("can't switch encodings");
        var n = this._decoder.write(e);
        return r && (n += this._decoder.end()), n
    };
    var Qa = $a;

    function Za(e) {
        Qa.call(this, "digest"), this._hash = e
    }
    yo(Za, Qa), Za.prototype._update = function(e) {
        this._hash.update(e)
    }, Za.prototype._final = function() {
        return this._hash.digest()
    };
    var es = function(e) {
            return "md5" === (e = e.toLowerCase()) ? new Lo : "rmd160" === e || "ripemd160" === e ? new Xo : new Za(Ja(e))
        },
        ts = wo.Buffer,
        rs = ts.alloc(128),
        ns = 64;

    function is(e, t) {
        Qa.call(this, "digest"), "string" == typeof t && (t = ts.from(t)), this._alg = e, this._key = t, t.length > ns ? t = e(t) : t.length < ns && (t = ts.concat([t, rs], ns));
        for (var r = this._ipad = ts.allocUnsafe(ns), n = this._opad = ts.allocUnsafe(ns), i = 0; i < ns; i++) r[i] = 54 ^ t[i], n[i] = 92 ^ t[i];
        this._hash = [r]
    }
    yo(is, Qa), is.prototype._update = function(e) {
        this._hash.push(e)
    }, is.prototype._final = function() {
        var e = this._alg(ts.concat(this._hash));
        return this._alg(ts.concat([this._opad, e]))
    };
    var os = is,
        as = function(e) {
            return (new Lo).update(e).digest()
        },
        ss = wo.Buffer,
        us = ss.alloc(128);

    function cs(e, t) {
        Qa.call(this, "digest"), "string" == typeof t && (t = ss.from(t));
        var r = "sha512" === e || "sha384" === e ? 128 : 64;
        (this._alg = e, this._key = t, t.length > r) ? t = ("rmd160" === e ? new Xo : Ja(e)).update(t).digest(): t.length < r && (t = ss.concat([t, us], r));
        for (var n = this._ipad = ss.allocUnsafe(r), i = this._opad = ss.allocUnsafe(r), o = 0; o < r; o++) n[o] = 54 ^ t[o], i[o] = 92 ^ t[o];
        this._hash = "rmd160" === e ? new Xo : Ja(e), this._hash.update(n)
    }
    yo(cs, Qa), cs.prototype._update = function(e) {
        this._hash.update(e)
    }, cs.prototype._final = function() {
        var e = this._hash.digest();
        return ("rmd160" === this._alg ? new Xo : Ja(this._alg)).update(this._opad).update(e).digest()
    };
    var fs = function(e, t) {
            return "rmd160" === (e = e.toLowerCase()) || "ripemd160" === e ? new cs("rmd160", t) : "md5" === e ? new os(as, t) : new cs(e, t)
        },
        hs = i(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hash160 = function(e) {
                const t = es("sha256").update(e).digest();
                try {
                    return es("rmd160").update(t).digest()
                } catch (e) {
                    return es("ripemd160").update(t).digest()
                }
            }, t.hmacSHA512 = function(e, t) {
                return fs("sha512", e).update(t).digest()
            }
        });
    n(hs);
    hs.hash160, hs.hmacSHA512;
    var ds = wo.Buffer;
    var ls = function(e) {
            if (e.length >= 255) throw new TypeError("Alphabet too long");
            var t = new Uint8Array(256);
            t.fill(255);
            for (var r = 0; r < e.length; r++) {
                var n = e.charAt(r),
                    i = n.charCodeAt(0);
                if (255 !== t[i]) throw new TypeError(n + " is ambiguous");
                t[i] = r
            }
            var o = e.length,
                a = e.charAt(0),
                s = Math.log(o) / Math.log(256),
                u = Math.log(256) / Math.log(o);

            function c(e) {
                if ("string" != typeof e) throw new TypeError("Expected String");
                if (0 === e.length) return ds.alloc(0);
                var r = 0;
                if (" " !== e[r]) {
                    for (var n = 0, i = 0; e[r] === a;) n++, r++;
                    for (var u = (e.length - r) * s + 1 >>> 0, c = new Uint8Array(u); e[r];) {
                        var f = t[e.charCodeAt(r)];
                        if (255 === f) return;
                        for (var h = 0, d = u - 1;
                            (0 !== f || h < i) && -1 !== d; d--, h++) f += o * c[d] >>> 0, c[d] = f % 256 >>> 0, f = f / 256 >>> 0;
                        if (0 !== f) throw new Error("Non-zero carry");
                        i = h, r++
                    }
                    if (" " !== e[r]) {
                        for (var l = u - i; l !== u && 0 === c[l];) l++;
                        var p = ds.allocUnsafe(n + (u - l));
                        p.fill(0, 0, n);
                        for (var b = n; l !== u;) p[b++] = c[l++];
                        return p
                    }
                }
            }
            return {
                encode: function(t) {
                    if (!ds.isBuffer(t)) throw new TypeError("Expected Buffer");
                    if (0 === t.length) return "";
                    for (var r = 0, n = 0, i = 0, s = t.length; i !== s && 0 === t[i];) i++, r++;
                    for (var c = (s - i) * u + 1 >>> 0, f = new Uint8Array(c); i !== s;) {
                        for (var h = t[i], d = 0, l = c - 1;
                            (0 !== h || d < n) && -1 !== l; l--, d++) h += 256 * f[l] >>> 0, f[l] = h % o >>> 0, h = h / o >>> 0;
                        if (0 !== h) throw new Error("Non-zero carry");
                        n = d, i++
                    }
                    for (var p = c - n; p !== c && 0 === f[p];) p++;
                    for (var b = a.repeat(r); p < c; ++p) b += e.charAt(f[p]);
                    return b
                },
                decodeUnsafe: c,
                decode: function(e) {
                    var t = c(e);
                    if (t) return t;
                    throw new Error("Non-base" + o + " character")
                }
            }
        },
        ps = ls("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),
        bs = wo.Buffer;
    var ms = function(e) {
            function t(t) {
                var r = t.slice(0, -4),
                    n = t.slice(-4),
                    i = e(r);
                if (!(n[0] ^ i[0] | n[1] ^ i[1] | n[2] ^ i[2] | n[3] ^ i[3])) return r
            }
            return {
                encode: function(t) {
                    var r = e(t);
                    return ps.encode(bs.concat([t, r], t.length + 4))
                },
                decode: function(e) {
                    var r = t(ps.decode(e));
                    if (!r) throw new Error("Invalid checksum");
                    return r
                },
                decodeUnsafe: function(e) {
                    var r = ps.decodeUnsafe(e);
                    if (r) return t(r)
                }
            }
        }(function(e) {
            var t = es("sha256").update(e).digest();
            return es("sha256").update(t).digest()
        }),
        gs = o(Object.freeze({
            default: {}
        })),
        vs = i(function(e) {
            ! function(e, t) {
                function r(e, t) {
                    if (!e) throw new Error(t || "Assertion failed")
                }

                function n(e, t) {
                    e.super_ = t;
                    var r = function() {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }

                function i(e, t, r) {
                    if (i.isBN(e)) return e;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (r = t, t = 10), this._init(e || 0, t || 10, r || "be"))
                }
                var o;
                "object" == typeof e ? e.exports = i : t.BN = i, i.BN = i, i.wordSize = 26;
                try {
                    o = gs.Buffer
                } catch (e) {}

                function a(e, t, r) {
                    for (var n = 0, i = Math.min(e.length, r), o = t; o < i; o++) {
                        var a = e.charCodeAt(o) - 48;
                        n <<= 4, n |= a >= 49 && a <= 54 ? a - 49 + 10 : a >= 17 && a <= 22 ? a - 17 + 10 : 15 & a
                    }
                    return n
                }

                function s(e, t, r, n) {
                    for (var i = 0, o = Math.min(e.length, r), a = t; a < o; a++) {
                        var s = e.charCodeAt(a) - 48;
                        i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
                    }
                    return i
                }
                i.isBN = function(e) {
                    return e instanceof i || null !== e && "object" == typeof e && e.constructor.wordSize === i.wordSize && Array.isArray(e.words)
                }, i.max = function(e, t) {
                    return e.cmp(t) > 0 ? e : t
                }, i.min = function(e, t) {
                    return e.cmp(t) < 0 ? e : t
                }, i.prototype._init = function(e, t, n) {
                    if ("number" == typeof e) return this._initNumber(e, t, n);
                    if ("object" == typeof e) return this._initArray(e, t, n);
                    "hex" === t && (t = 16), r(t === (0 | t) && t >= 2 && t <= 36);
                    var i = 0;
                    "-" === (e = e.toString().replace(/\s+/g, ""))[0] && i++, 16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i), "-" === e[0] && (this.negative = 1), this.strip(), "le" === n && this._initArray(this.toArray(), t, n)
                }, i.prototype._initNumber = function(e, t, n) {
                    e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (r(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === n && this._initArray(this.toArray(), t, n)
                }, i.prototype._initArray = function(e, t, n) {
                    if (r("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);
                    for (var i = 0; i < this.length; i++) this.words[i] = 0;
                    var o, a, s = 0;
                    if ("be" === n)
                        for (i = e.length - 1, o = 0; i >= 0; i -= 3) a = e[i] | e[i - 1] << 8 | e[i - 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                    else if ("le" === n)
                        for (i = 0, o = 0; i < e.length; i += 3) a = e[i] | e[i + 1] << 8 | e[i + 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                    return this.strip()
                }, i.prototype._parseHex = function(e, t) {
                    this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);
                    for (var r = 0; r < this.length; r++) this.words[r] = 0;
                    var n, i, o = 0;
                    for (r = e.length - 6, n = 0; r >= t; r -= 6) i = a(e, r, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, n++);
                    r + 6 !== t && (i = a(e, t, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303), this.strip()
                }, i.prototype._parseBase = function(e, t, r) {
                    this.words = [0], this.length = 1;
                    for (var n = 0, i = 1; i <= 67108863; i *= t) n++;
                    n--, i = i / t | 0;
                    for (var o = e.length - r, a = o % n, u = Math.min(o, o - a) + r, c = 0, f = r; f < u; f += n) c = s(e, f, f + n, t), this.imuln(i), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                    if (0 !== a) {
                        var h = 1;
                        for (c = s(e, f, e.length, t), f = 0; f < a; f++) h *= t;
                        this.imuln(h), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c)
                    }
                }, i.prototype.copy = function(e) {
                    e.words = new Array(this.length);
                    for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                    e.length = this.length, e.negative = this.negative, e.red = this.red
                }, i.prototype.clone = function() {
                    var e = new i(null);
                    return this.copy(e), e
                }, i.prototype._expand = function(e) {
                    for (; this.length < e;) this.words[this.length++] = 0;
                    return this
                }, i.prototype.strip = function() {
                    for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                    return this._normSign()
                }, i.prototype._normSign = function() {
                    return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                }, i.prototype.inspect = function() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                };
                var u = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    c = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    f = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function h(e, t, r) {
                    r.negative = t.negative ^ e.negative;
                    var n = e.length + t.length | 0;
                    r.length = n, n = n - 1 | 0;
                    var i = 0 | e.words[0],
                        o = 0 | t.words[0],
                        a = i * o,
                        s = 67108863 & a,
                        u = a / 67108864 | 0;
                    r.words[0] = s;
                    for (var c = 1; c < n; c++) {
                        for (var f = u >>> 26, h = 67108863 & u, d = Math.min(c, t.length - 1), l = Math.max(0, c - e.length + 1); l <= d; l++) {
                            var p = c - l | 0;
                            f += (a = (i = 0 | e.words[p]) * (o = 0 | t.words[l]) + h) / 67108864 | 0, h = 67108863 & a
                        }
                        r.words[c] = 0 | h, u = 0 | f
                    }
                    return 0 !== u ? r.words[c] = 0 | u : r.length--, r.strip()
                }
                i.prototype.toString = function(e, t) {
                    var n;
                    if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
                        n = "";
                        for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                            var s = this.words[a],
                                h = (16777215 & (s << i | o)).toString(16);
                            n = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? u[6 - h.length] + h + n : h + n, (i += 2) >= 26 && (i -= 26, a--)
                        }
                        for (0 !== o && (n = o.toString(16) + n); n.length % t != 0;) n = "0" + n;
                        return 0 !== this.negative && (n = "-" + n), n
                    }
                    if (e === (0 | e) && e >= 2 && e <= 36) {
                        var d = c[e],
                            l = f[e];
                        n = "";
                        var p = this.clone();
                        for (p.negative = 0; !p.isZero();) {
                            var b = p.modn(l).toString(e);
                            n = (p = p.idivn(l)).isZero() ? b + n : u[d - b.length] + b + n
                        }
                        for (this.isZero() && (n = "0" + n); n.length % t != 0;) n = "0" + n;
                        return 0 !== this.negative && (n = "-" + n), n
                    }
                    r(!1, "Base should be between 2 and 36")
                }, i.prototype.toNumber = function() {
                    var e = this.words[0];
                    return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
                }, i.prototype.toJSON = function() {
                    return this.toString(16)
                }, i.prototype.toBuffer = function(e, t) {
                    return r(void 0 !== o), this.toArrayLike(o, e, t)
                }, i.prototype.toArray = function(e, t) {
                    return this.toArrayLike(Array, e, t)
                }, i.prototype.toArrayLike = function(e, t, n) {
                    var i = this.byteLength(),
                        o = n || Math.max(1, i);
                    r(i <= o, "byte array longer than desired length"), r(o > 0, "Requested array length <= 0"), this.strip();
                    var a, s, u = "le" === t,
                        c = new e(o),
                        f = this.clone();
                    if (u) {
                        for (s = 0; !f.isZero(); s++) a = f.andln(255), f.iushrn(8), c[s] = a;
                        for (; s < o; s++) c[s] = 0
                    } else {
                        for (s = 0; s < o - i; s++) c[s] = 0;
                        for (s = 0; !f.isZero(); s++) a = f.andln(255), f.iushrn(8), c[o - s - 1] = a
                    }
                    return c
                }, Math.clz32 ? i.prototype._countBits = function(e) {
                    return 32 - Math.clz32(e)
                } : i.prototype._countBits = function(e) {
                    var t = e,
                        r = 0;
                    return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t
                }, i.prototype._zeroBits = function(e) {
                    if (0 === e) return 26;
                    var t = e,
                        r = 0;
                    return 0 == (8191 & t) && (r += 13, t >>>= 13), 0 == (127 & t) && (r += 7, t >>>= 7), 0 == (15 & t) && (r += 4, t >>>= 4), 0 == (3 & t) && (r += 2, t >>>= 2), 0 == (1 & t) && r++, r
                }, i.prototype.bitLength = function() {
                    var e = this.words[this.length - 1],
                        t = this._countBits(e);
                    return 26 * (this.length - 1) + t
                }, i.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var e = 0, t = 0; t < this.length; t++) {
                        var r = this._zeroBits(this.words[t]);
                        if (e += r, 26 !== r) break
                    }
                    return e
                }, i.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, i.prototype.toTwos = function(e) {
                    return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
                }, i.prototype.fromTwos = function(e) {
                    return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
                }, i.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, i.prototype.neg = function() {
                    return this.clone().ineg()
                }, i.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, i.prototype.iuor = function(e) {
                    for (; this.length < e.length;) this.words[this.length++] = 0;
                    for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                    return this.strip()
                }, i.prototype.ior = function(e) {
                    return r(0 == (this.negative | e.negative)), this.iuor(e)
                }, i.prototype.or = function(e) {
                    return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
                }, i.prototype.uor = function(e) {
                    return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
                }, i.prototype.iuand = function(e) {
                    var t;
                    t = this.length > e.length ? e : this;
                    for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];
                    return this.length = t.length, this.strip()
                }, i.prototype.iand = function(e) {
                    return r(0 == (this.negative | e.negative)), this.iuand(e)
                }, i.prototype.and = function(e) {
                    return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
                }, i.prototype.uand = function(e) {
                    return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
                }, i.prototype.iuxor = function(e) {
                    var t, r;
                    this.length > e.length ? (t = this, r = e) : (t = e, r = this);
                    for (var n = 0; n < r.length; n++) this.words[n] = t.words[n] ^ r.words[n];
                    if (this !== t)
                        for (; n < t.length; n++) this.words[n] = t.words[n];
                    return this.length = t.length, this.strip()
                }, i.prototype.ixor = function(e) {
                    return r(0 == (this.negative | e.negative)), this.iuxor(e)
                }, i.prototype.xor = function(e) {
                    return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
                }, i.prototype.uxor = function(e) {
                    return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
                }, i.prototype.inotn = function(e) {
                    r("number" == typeof e && e >= 0);
                    var t = 0 | Math.ceil(e / 26),
                        n = e % 26;
                    this._expand(t), n > 0 && t--;
                    for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];
                    return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this.strip()
                }, i.prototype.notn = function(e) {
                    return this.clone().inotn(e)
                }, i.prototype.setn = function(e, t) {
                    r("number" == typeof e && e >= 0);
                    var n = e / 26 | 0,
                        i = e % 26;
                    return this._expand(n + 1), this.words[n] = t ? this.words[n] | 1 << i : this.words[n] & ~(1 << i), this.strip()
                }, i.prototype.iadd = function(e) {
                    var t, r, n;
                    if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
                    this.length > e.length ? (r = this, n = e) : (r = e, n = this);
                    for (var i = 0, o = 0; o < n.length; o++) t = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
                    for (; 0 !== i && o < r.length; o++) t = (0 | r.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
                    if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o];
                    return this
                }, i.prototype.add = function(e) {
                    var t;
                    return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
                }, i.prototype.isub = function(e) {
                    if (0 !== e.negative) {
                        e.negative = 0;
                        var t = this.iadd(e);
                        return e.negative = 1, t._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
                    var r, n, i = this.cmp(e);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (r = this, n = e) : (r = e, n = this);
                    for (var o = 0, a = 0; a < n.length; a++) o = (t = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & t;
                    for (; 0 !== o && a < r.length; a++) o = (t = (0 | r.words[a]) + o) >> 26, this.words[a] = 67108863 & t;
                    if (0 === o && a < r.length && r !== this)
                        for (; a < r.length; a++) this.words[a] = r.words[a];
                    return this.length = Math.max(this.length, a), r !== this && (this.negative = 1), this.strip()
                }, i.prototype.sub = function(e) {
                    return this.clone().isub(e)
                };
                var d = function(e, t, r) {
                    var n, i, o, a = e.words,
                        s = t.words,
                        u = r.words,
                        c = 0,
                        f = 0 | a[0],
                        h = 8191 & f,
                        d = f >>> 13,
                        l = 0 | a[1],
                        p = 8191 & l,
                        b = l >>> 13,
                        m = 0 | a[2],
                        g = 8191 & m,
                        v = m >>> 13,
                        y = 0 | a[3],
                        w = 8191 & y,
                        _ = y >>> 13,
                        S = 0 | a[4],
                        k = 8191 & S,
                        E = S >>> 13,
                        I = 0 | a[5],
                        x = 8191 & I,
                        O = I >>> 13,
                        T = 0 | a[6],
                        P = 8191 & T,
                        A = T >>> 13,
                        M = 0 | a[7],
                        C = 8191 & M,
                        L = M >>> 13,
                        R = 0 | a[8],
                        N = 8191 & R,
                        j = R >>> 13,
                        U = 0 | a[9],
                        D = 8191 & U,
                        B = U >>> 13,
                        H = 0 | s[0],
                        F = 8191 & H,
                        q = H >>> 13,
                        V = 0 | s[1],
                        z = 8191 & V,
                        K = V >>> 13,
                        W = 0 | s[2],
                        J = 8191 & W,
                        G = W >>> 13,
                        X = 0 | s[3],
                        Y = 8191 & X,
                        $ = X >>> 13,
                        Q = 0 | s[4],
                        Z = 8191 & Q,
                        ee = Q >>> 13,
                        te = 0 | s[5],
                        re = 8191 & te,
                        ne = te >>> 13,
                        ie = 0 | s[6],
                        oe = 8191 & ie,
                        ae = ie >>> 13,
                        se = 0 | s[7],
                        ue = 8191 & se,
                        ce = se >>> 13,
                        fe = 0 | s[8],
                        he = 8191 & fe,
                        de = fe >>> 13,
                        le = 0 | s[9],
                        pe = 8191 & le,
                        be = le >>> 13;
                    r.negative = e.negative ^ t.negative, r.length = 19;
                    var me = (c + (n = Math.imul(h, F)) | 0) + ((8191 & (i = (i = Math.imul(h, q)) + Math.imul(d, F) | 0)) << 13) | 0;
                    c = ((o = Math.imul(d, q)) + (i >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, n = Math.imul(p, F), i = (i = Math.imul(p, q)) + Math.imul(b, F) | 0, o = Math.imul(b, q);
                    var ge = (c + (n = n + Math.imul(h, z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, K) | 0) + Math.imul(d, z) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, K) | 0) + (i >>> 13) | 0) + (ge >>> 26) | 0, ge &= 67108863, n = Math.imul(g, F), i = (i = Math.imul(g, q)) + Math.imul(v, F) | 0, o = Math.imul(v, q), n = n + Math.imul(p, z) | 0, i = (i = i + Math.imul(p, K) | 0) + Math.imul(b, z) | 0, o = o + Math.imul(b, K) | 0;
                    var ve = (c + (n = n + Math.imul(h, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, G) | 0) + Math.imul(d, J) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, G) | 0) + (i >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, n = Math.imul(w, F), i = (i = Math.imul(w, q)) + Math.imul(_, F) | 0, o = Math.imul(_, q), n = n + Math.imul(g, z) | 0, i = (i = i + Math.imul(g, K) | 0) + Math.imul(v, z) | 0, o = o + Math.imul(v, K) | 0, n = n + Math.imul(p, J) | 0, i = (i = i + Math.imul(p, G) | 0) + Math.imul(b, J) | 0, o = o + Math.imul(b, G) | 0;
                    var ye = (c + (n = n + Math.imul(h, Y) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, $) | 0) + Math.imul(d, Y) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, $) | 0) + (i >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, n = Math.imul(k, F), i = (i = Math.imul(k, q)) + Math.imul(E, F) | 0, o = Math.imul(E, q), n = n + Math.imul(w, z) | 0, i = (i = i + Math.imul(w, K) | 0) + Math.imul(_, z) | 0, o = o + Math.imul(_, K) | 0, n = n + Math.imul(g, J) | 0, i = (i = i + Math.imul(g, G) | 0) + Math.imul(v, J) | 0, o = o + Math.imul(v, G) | 0, n = n + Math.imul(p, Y) | 0, i = (i = i + Math.imul(p, $) | 0) + Math.imul(b, Y) | 0, o = o + Math.imul(b, $) | 0;
                    var we = (c + (n = n + Math.imul(h, Z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ee) | 0) + Math.imul(d, Z) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, ee) | 0) + (i >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, n = Math.imul(x, F), i = (i = Math.imul(x, q)) + Math.imul(O, F) | 0, o = Math.imul(O, q), n = n + Math.imul(k, z) | 0, i = (i = i + Math.imul(k, K) | 0) + Math.imul(E, z) | 0, o = o + Math.imul(E, K) | 0, n = n + Math.imul(w, J) | 0, i = (i = i + Math.imul(w, G) | 0) + Math.imul(_, J) | 0, o = o + Math.imul(_, G) | 0, n = n + Math.imul(g, Y) | 0, i = (i = i + Math.imul(g, $) | 0) + Math.imul(v, Y) | 0, o = o + Math.imul(v, $) | 0, n = n + Math.imul(p, Z) | 0, i = (i = i + Math.imul(p, ee) | 0) + Math.imul(b, Z) | 0, o = o + Math.imul(b, ee) | 0;
                    var _e = (c + (n = n + Math.imul(h, re) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ne) | 0) + Math.imul(d, re) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, ne) | 0) + (i >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, n = Math.imul(P, F), i = (i = Math.imul(P, q)) + Math.imul(A, F) | 0, o = Math.imul(A, q), n = n + Math.imul(x, z) | 0, i = (i = i + Math.imul(x, K) | 0) + Math.imul(O, z) | 0, o = o + Math.imul(O, K) | 0, n = n + Math.imul(k, J) | 0, i = (i = i + Math.imul(k, G) | 0) + Math.imul(E, J) | 0, o = o + Math.imul(E, G) | 0, n = n + Math.imul(w, Y) | 0, i = (i = i + Math.imul(w, $) | 0) + Math.imul(_, Y) | 0, o = o + Math.imul(_, $) | 0, n = n + Math.imul(g, Z) | 0, i = (i = i + Math.imul(g, ee) | 0) + Math.imul(v, Z) | 0, o = o + Math.imul(v, ee) | 0, n = n + Math.imul(p, re) | 0, i = (i = i + Math.imul(p, ne) | 0) + Math.imul(b, re) | 0, o = o + Math.imul(b, ne) | 0;
                    var Se = (c + (n = n + Math.imul(h, oe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ae) | 0) + Math.imul(d, oe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, ae) | 0) + (i >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, n = Math.imul(C, F), i = (i = Math.imul(C, q)) + Math.imul(L, F) | 0, o = Math.imul(L, q), n = n + Math.imul(P, z) | 0, i = (i = i + Math.imul(P, K) | 0) + Math.imul(A, z) | 0, o = o + Math.imul(A, K) | 0, n = n + Math.imul(x, J) | 0, i = (i = i + Math.imul(x, G) | 0) + Math.imul(O, J) | 0, o = o + Math.imul(O, G) | 0, n = n + Math.imul(k, Y) | 0, i = (i = i + Math.imul(k, $) | 0) + Math.imul(E, Y) | 0, o = o + Math.imul(E, $) | 0, n = n + Math.imul(w, Z) | 0, i = (i = i + Math.imul(w, ee) | 0) + Math.imul(_, Z) | 0, o = o + Math.imul(_, ee) | 0, n = n + Math.imul(g, re) | 0, i = (i = i + Math.imul(g, ne) | 0) + Math.imul(v, re) | 0, o = o + Math.imul(v, ne) | 0, n = n + Math.imul(p, oe) | 0, i = (i = i + Math.imul(p, ae) | 0) + Math.imul(b, oe) | 0, o = o + Math.imul(b, ae) | 0;
                    var ke = (c + (n = n + Math.imul(h, ue) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ce) | 0) + Math.imul(d, ue) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, ce) | 0) + (i >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, n = Math.imul(N, F), i = (i = Math.imul(N, q)) + Math.imul(j, F) | 0, o = Math.imul(j, q), n = n + Math.imul(C, z) | 0, i = (i = i + Math.imul(C, K) | 0) + Math.imul(L, z) | 0, o = o + Math.imul(L, K) | 0, n = n + Math.imul(P, J) | 0, i = (i = i + Math.imul(P, G) | 0) + Math.imul(A, J) | 0, o = o + Math.imul(A, G) | 0, n = n + Math.imul(x, Y) | 0, i = (i = i + Math.imul(x, $) | 0) + Math.imul(O, Y) | 0, o = o + Math.imul(O, $) | 0, n = n + Math.imul(k, Z) | 0, i = (i = i + Math.imul(k, ee) | 0) + Math.imul(E, Z) | 0, o = o + Math.imul(E, ee) | 0, n = n + Math.imul(w, re) | 0, i = (i = i + Math.imul(w, ne) | 0) + Math.imul(_, re) | 0, o = o + Math.imul(_, ne) | 0, n = n + Math.imul(g, oe) | 0, i = (i = i + Math.imul(g, ae) | 0) + Math.imul(v, oe) | 0, o = o + Math.imul(v, ae) | 0, n = n + Math.imul(p, ue) | 0, i = (i = i + Math.imul(p, ce) | 0) + Math.imul(b, ue) | 0, o = o + Math.imul(b, ce) | 0;
                    var Ee = (c + (n = n + Math.imul(h, he) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, de) | 0) + Math.imul(d, he) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, de) | 0) + (i >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, n = Math.imul(D, F), i = (i = Math.imul(D, q)) + Math.imul(B, F) | 0, o = Math.imul(B, q), n = n + Math.imul(N, z) | 0, i = (i = i + Math.imul(N, K) | 0) + Math.imul(j, z) | 0, o = o + Math.imul(j, K) | 0, n = n + Math.imul(C, J) | 0, i = (i = i + Math.imul(C, G) | 0) + Math.imul(L, J) | 0, o = o + Math.imul(L, G) | 0, n = n + Math.imul(P, Y) | 0, i = (i = i + Math.imul(P, $) | 0) + Math.imul(A, Y) | 0, o = o + Math.imul(A, $) | 0, n = n + Math.imul(x, Z) | 0, i = (i = i + Math.imul(x, ee) | 0) + Math.imul(O, Z) | 0, o = o + Math.imul(O, ee) | 0, n = n + Math.imul(k, re) | 0, i = (i = i + Math.imul(k, ne) | 0) + Math.imul(E, re) | 0, o = o + Math.imul(E, ne) | 0, n = n + Math.imul(w, oe) | 0, i = (i = i + Math.imul(w, ae) | 0) + Math.imul(_, oe) | 0, o = o + Math.imul(_, ae) | 0, n = n + Math.imul(g, ue) | 0, i = (i = i + Math.imul(g, ce) | 0) + Math.imul(v, ue) | 0, o = o + Math.imul(v, ce) | 0, n = n + Math.imul(p, he) | 0, i = (i = i + Math.imul(p, de) | 0) + Math.imul(b, he) | 0, o = o + Math.imul(b, de) | 0;
                    var Ie = (c + (n = n + Math.imul(h, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, be) | 0) + Math.imul(d, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(d, be) | 0) + (i >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, n = Math.imul(D, z), i = (i = Math.imul(D, K)) + Math.imul(B, z) | 0, o = Math.imul(B, K), n = n + Math.imul(N, J) | 0, i = (i = i + Math.imul(N, G) | 0) + Math.imul(j, J) | 0, o = o + Math.imul(j, G) | 0, n = n + Math.imul(C, Y) | 0, i = (i = i + Math.imul(C, $) | 0) + Math.imul(L, Y) | 0, o = o + Math.imul(L, $) | 0, n = n + Math.imul(P, Z) | 0, i = (i = i + Math.imul(P, ee) | 0) + Math.imul(A, Z) | 0, o = o + Math.imul(A, ee) | 0, n = n + Math.imul(x, re) | 0, i = (i = i + Math.imul(x, ne) | 0) + Math.imul(O, re) | 0, o = o + Math.imul(O, ne) | 0, n = n + Math.imul(k, oe) | 0, i = (i = i + Math.imul(k, ae) | 0) + Math.imul(E, oe) | 0, o = o + Math.imul(E, ae) | 0, n = n + Math.imul(w, ue) | 0, i = (i = i + Math.imul(w, ce) | 0) + Math.imul(_, ue) | 0, o = o + Math.imul(_, ce) | 0, n = n + Math.imul(g, he) | 0, i = (i = i + Math.imul(g, de) | 0) + Math.imul(v, he) | 0, o = o + Math.imul(v, de) | 0;
                    var xe = (c + (n = n + Math.imul(p, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, be) | 0) + Math.imul(b, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(b, be) | 0) + (i >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, n = Math.imul(D, J), i = (i = Math.imul(D, G)) + Math.imul(B, J) | 0, o = Math.imul(B, G), n = n + Math.imul(N, Y) | 0, i = (i = i + Math.imul(N, $) | 0) + Math.imul(j, Y) | 0, o = o + Math.imul(j, $) | 0, n = n + Math.imul(C, Z) | 0, i = (i = i + Math.imul(C, ee) | 0) + Math.imul(L, Z) | 0, o = o + Math.imul(L, ee) | 0, n = n + Math.imul(P, re) | 0, i = (i = i + Math.imul(P, ne) | 0) + Math.imul(A, re) | 0, o = o + Math.imul(A, ne) | 0, n = n + Math.imul(x, oe) | 0, i = (i = i + Math.imul(x, ae) | 0) + Math.imul(O, oe) | 0, o = o + Math.imul(O, ae) | 0, n = n + Math.imul(k, ue) | 0, i = (i = i + Math.imul(k, ce) | 0) + Math.imul(E, ue) | 0, o = o + Math.imul(E, ce) | 0, n = n + Math.imul(w, he) | 0, i = (i = i + Math.imul(w, de) | 0) + Math.imul(_, he) | 0, o = o + Math.imul(_, de) | 0;
                    var Oe = (c + (n = n + Math.imul(g, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(g, be) | 0) + Math.imul(v, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(v, be) | 0) + (i >>> 13) | 0) + (Oe >>> 26) | 0, Oe &= 67108863, n = Math.imul(D, Y), i = (i = Math.imul(D, $)) + Math.imul(B, Y) | 0, o = Math.imul(B, $), n = n + Math.imul(N, Z) | 0, i = (i = i + Math.imul(N, ee) | 0) + Math.imul(j, Z) | 0, o = o + Math.imul(j, ee) | 0, n = n + Math.imul(C, re) | 0, i = (i = i + Math.imul(C, ne) | 0) + Math.imul(L, re) | 0, o = o + Math.imul(L, ne) | 0, n = n + Math.imul(P, oe) | 0, i = (i = i + Math.imul(P, ae) | 0) + Math.imul(A, oe) | 0, o = o + Math.imul(A, ae) | 0, n = n + Math.imul(x, ue) | 0, i = (i = i + Math.imul(x, ce) | 0) + Math.imul(O, ue) | 0, o = o + Math.imul(O, ce) | 0, n = n + Math.imul(k, he) | 0, i = (i = i + Math.imul(k, de) | 0) + Math.imul(E, he) | 0, o = o + Math.imul(E, de) | 0;
                    var Te = (c + (n = n + Math.imul(w, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, be) | 0) + Math.imul(_, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(_, be) | 0) + (i >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, n = Math.imul(D, Z), i = (i = Math.imul(D, ee)) + Math.imul(B, Z) | 0, o = Math.imul(B, ee), n = n + Math.imul(N, re) | 0, i = (i = i + Math.imul(N, ne) | 0) + Math.imul(j, re) | 0, o = o + Math.imul(j, ne) | 0, n = n + Math.imul(C, oe) | 0, i = (i = i + Math.imul(C, ae) | 0) + Math.imul(L, oe) | 0, o = o + Math.imul(L, ae) | 0, n = n + Math.imul(P, ue) | 0, i = (i = i + Math.imul(P, ce) | 0) + Math.imul(A, ue) | 0, o = o + Math.imul(A, ce) | 0, n = n + Math.imul(x, he) | 0, i = (i = i + Math.imul(x, de) | 0) + Math.imul(O, he) | 0, o = o + Math.imul(O, de) | 0;
                    var Pe = (c + (n = n + Math.imul(k, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(k, be) | 0) + Math.imul(E, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(E, be) | 0) + (i >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, n = Math.imul(D, re), i = (i = Math.imul(D, ne)) + Math.imul(B, re) | 0, o = Math.imul(B, ne), n = n + Math.imul(N, oe) | 0, i = (i = i + Math.imul(N, ae) | 0) + Math.imul(j, oe) | 0, o = o + Math.imul(j, ae) | 0, n = n + Math.imul(C, ue) | 0, i = (i = i + Math.imul(C, ce) | 0) + Math.imul(L, ue) | 0, o = o + Math.imul(L, ce) | 0, n = n + Math.imul(P, he) | 0, i = (i = i + Math.imul(P, de) | 0) + Math.imul(A, he) | 0, o = o + Math.imul(A, de) | 0;
                    var Ae = (c + (n = n + Math.imul(x, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, be) | 0) + Math.imul(O, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(O, be) | 0) + (i >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, n = Math.imul(D, oe), i = (i = Math.imul(D, ae)) + Math.imul(B, oe) | 0, o = Math.imul(B, ae), n = n + Math.imul(N, ue) | 0, i = (i = i + Math.imul(N, ce) | 0) + Math.imul(j, ue) | 0, o = o + Math.imul(j, ce) | 0, n = n + Math.imul(C, he) | 0, i = (i = i + Math.imul(C, de) | 0) + Math.imul(L, he) | 0, o = o + Math.imul(L, de) | 0;
                    var Me = (c + (n = n + Math.imul(P, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(P, be) | 0) + Math.imul(A, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(A, be) | 0) + (i >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, n = Math.imul(D, ue), i = (i = Math.imul(D, ce)) + Math.imul(B, ue) | 0, o = Math.imul(B, ce), n = n + Math.imul(N, he) | 0, i = (i = i + Math.imul(N, de) | 0) + Math.imul(j, he) | 0, o = o + Math.imul(j, de) | 0;
                    var Ce = (c + (n = n + Math.imul(C, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(C, be) | 0) + Math.imul(L, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(L, be) | 0) + (i >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, n = Math.imul(D, he), i = (i = Math.imul(D, de)) + Math.imul(B, he) | 0, o = Math.imul(B, de);
                    var Le = (c + (n = n + Math.imul(N, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(N, be) | 0) + Math.imul(j, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(j, be) | 0) + (i >>> 13) | 0) + (Le >>> 26) | 0, Le &= 67108863;
                    var Re = (c + (n = Math.imul(D, pe)) | 0) + ((8191 & (i = (i = Math.imul(D, be)) + Math.imul(B, pe) | 0)) << 13) | 0;
                    return c = ((o = Math.imul(B, be)) + (i >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863, u[0] = me, u[1] = ge, u[2] = ve, u[3] = ye, u[4] = we, u[5] = _e, u[6] = Se, u[7] = ke, u[8] = Ee, u[9] = Ie, u[10] = xe, u[11] = Oe, u[12] = Te, u[13] = Pe, u[14] = Ae, u[15] = Me, u[16] = Ce, u[17] = Le, u[18] = Re, 0 !== c && (u[19] = c, r.length++), r
                };

                function l(e, t, r) {
                    return (new p).mulp(e, t, r)
                }

                function p(e, t) {
                    this.x = e, this.y = t
                }
                Math.imul || (d = h), i.prototype.mulTo = function(e, t) {
                    var r = this.length + e.length;
                    return 10 === this.length && 10 === e.length ? d(this, e, t) : r < 63 ? h(this, e, t) : r < 1024 ? function(e, t, r) {
                        r.negative = t.negative ^ e.negative, r.length = e.length + t.length;
                        for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                            var a = i;
                            i = 0;
                            for (var s = 67108863 & n, u = Math.min(o, t.length - 1), c = Math.max(0, o - e.length + 1); c <= u; c++) {
                                var f = o - c,
                                    h = (0 | e.words[f]) * (0 | t.words[c]),
                                    d = 67108863 & h;
                                s = 67108863 & (d = d + s | 0), i += (a = (a = a + (h / 67108864 | 0) | 0) + (d >>> 26) | 0) >>> 26, a &= 67108863
                            }
                            r.words[o] = s, n = a, a = i
                        }
                        return 0 !== n ? r.words[o] = n : r.length--, r.strip()
                    }(this, e, t) : l(this, e, t)
                }, p.prototype.makeRBT = function(e) {
                    for (var t = new Array(e), r = i.prototype._countBits(e) - 1, n = 0; n < e; n++) t[n] = this.revBin(n, r, e);
                    return t
                }, p.prototype.revBin = function(e, t, r) {
                    if (0 === e || e === r - 1) return e;
                    for (var n = 0, i = 0; i < t; i++) n |= (1 & e) << t - i - 1, e >>= 1;
                    return n
                }, p.prototype.permute = function(e, t, r, n, i, o) {
                    for (var a = 0; a < o; a++) n[a] = t[e[a]], i[a] = r[e[a]]
                }, p.prototype.transform = function(e, t, r, n, i, o) {
                    this.permute(o, e, t, r, n, i);
                    for (var a = 1; a < i; a <<= 1)
                        for (var s = a << 1, u = Math.cos(2 * Math.PI / s), c = Math.sin(2 * Math.PI / s), f = 0; f < i; f += s)
                            for (var h = u, d = c, l = 0; l < a; l++) {
                                var p = r[f + l],
                                    b = n[f + l],
                                    m = r[f + l + a],
                                    g = n[f + l + a],
                                    v = h * m - d * g;
                                g = h * g + d * m, m = v, r[f + l] = p + m, n[f + l] = b + g, r[f + l + a] = p - m, n[f + l + a] = b - g, l !== s && (v = u * h - c * d, d = u * d + c * h, h = v)
                            }
                }, p.prototype.guessLen13b = function(e, t) {
                    var r = 1 | Math.max(t, e),
                        n = 1 & r,
                        i = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) i++;
                    return 1 << i + 1 + n
                }, p.prototype.conjugate = function(e, t, r) {
                    if (!(r <= 1))
                        for (var n = 0; n < r / 2; n++) {
                            var i = e[n];
                            e[n] = e[r - n - 1], e[r - n - 1] = i, i = t[n], t[n] = -t[r - n - 1], t[r - n - 1] = -i
                        }
                }, p.prototype.normalize13b = function(e, t) {
                    for (var r = 0, n = 0; n < t / 2; n++) {
                        var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
                        e[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return e
                }, p.prototype.convert13b = function(e, t, n, i) {
                    for (var o = 0, a = 0; a < t; a++) o += 0 | e[a], n[2 * a] = 8191 & o, o >>>= 13, n[2 * a + 1] = 8191 & o, o >>>= 13;
                    for (a = 2 * t; a < i; ++a) n[a] = 0;
                    r(0 === o), r(0 == (-8192 & o))
                }, p.prototype.stub = function(e) {
                    for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
                    return t
                }, p.prototype.mulp = function(e, t, r) {
                    var n = 2 * this.guessLen13b(e.length, t.length),
                        i = this.makeRBT(n),
                        o = this.stub(n),
                        a = new Array(n),
                        s = new Array(n),
                        u = new Array(n),
                        c = new Array(n),
                        f = new Array(n),
                        h = new Array(n),
                        d = r.words;
                    d.length = n, this.convert13b(e.words, e.length, a, n), this.convert13b(t.words, t.length, c, n), this.transform(a, o, s, u, n, i), this.transform(c, o, f, h, n, i);
                    for (var l = 0; l < n; l++) {
                        var p = s[l] * f[l] - u[l] * h[l];
                        u[l] = s[l] * h[l] + u[l] * f[l], s[l] = p
                    }
                    return this.conjugate(s, u, n), this.transform(s, u, d, o, n, i), this.conjugate(d, o, n), this.normalize13b(d, n), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r.strip()
                }, i.prototype.mul = function(e) {
                    var t = new i(null);
                    return t.words = new Array(this.length + e.length), this.mulTo(e, t)
                }, i.prototype.mulf = function(e) {
                    var t = new i(null);
                    return t.words = new Array(this.length + e.length), l(this, e, t)
                }, i.prototype.imul = function(e) {
                    return this.clone().mulTo(e, this)
                }, i.prototype.imuln = function(e) {
                    r("number" == typeof e), r(e < 67108864);
                    for (var t = 0, n = 0; n < this.length; n++) {
                        var i = (0 | this.words[n]) * e,
                            o = (67108863 & i) + (67108863 & t);
                        t >>= 26, t += i / 67108864 | 0, t += o >>> 26, this.words[n] = 67108863 & o
                    }
                    return 0 !== t && (this.words[n] = t, this.length++), this
                }, i.prototype.muln = function(e) {
                    return this.clone().imuln(e)
                }, i.prototype.sqr = function() {
                    return this.mul(this)
                }, i.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, i.prototype.pow = function(e) {
                    var t = function(e) {
                        for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
                            var n = r / 26 | 0,
                                i = r % 26;
                            t[r] = (e.words[n] & 1 << i) >>> i
                        }
                        return t
                    }(e);
                    if (0 === t.length) return new i(1);
                    for (var r = this, n = 0; n < t.length && 0 === t[n]; n++, r = r.sqr());
                    if (++n < t.length)
                        for (var o = r.sqr(); n < t.length; n++, o = o.sqr()) 0 !== t[n] && (r = r.mul(o));
                    return r
                }, i.prototype.iushln = function(e) {
                    r("number" == typeof e && e >= 0);
                    var t, n = e % 26,
                        i = (e - n) / 26,
                        o = 67108863 >>> 26 - n << 26 - n;
                    if (0 !== n) {
                        var a = 0;
                        for (t = 0; t < this.length; t++) {
                            var s = this.words[t] & o,
                                u = (0 | this.words[t]) - s << n;
                            this.words[t] = u | a, a = s >>> 26 - n
                        }
                        a && (this.words[t] = a, this.length++)
                    }
                    if (0 !== i) {
                        for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t];
                        for (t = 0; t < i; t++) this.words[t] = 0;
                        this.length += i
                    }
                    return this.strip()
                }, i.prototype.ishln = function(e) {
                    return r(0 === this.negative), this.iushln(e)
                }, i.prototype.iushrn = function(e, t, n) {
                    var i;
                    r("number" == typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0;
                    var o = e % 26,
                        a = Math.min((e - o) / 26, this.length),
                        s = 67108863 ^ 67108863 >>> o << o,
                        u = n;
                    if (i -= a, i = Math.max(0, i), u) {
                        for (var c = 0; c < a; c++) u.words[c] = this.words[c];
                        u.length = a
                    }
                    if (0 === a);
                    else if (this.length > a)
                        for (this.length -= a, c = 0; c < this.length; c++) this.words[c] = this.words[c + a];
                    else this.words[0] = 0, this.length = 1;
                    var f = 0;
                    for (c = this.length - 1; c >= 0 && (0 !== f || c >= i); c--) {
                        var h = 0 | this.words[c];
                        this.words[c] = f << 26 - o | h >>> o, f = h & s
                    }
                    return u && 0 !== f && (u.words[u.length++] = f), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                }, i.prototype.ishrn = function(e, t, n) {
                    return r(0 === this.negative), this.iushrn(e, t, n)
                }, i.prototype.shln = function(e) {
                    return this.clone().ishln(e)
                }, i.prototype.ushln = function(e) {
                    return this.clone().iushln(e)
                }, i.prototype.shrn = function(e) {
                    return this.clone().ishrn(e)
                }, i.prototype.ushrn = function(e) {
                    return this.clone().iushrn(e)
                }, i.prototype.testn = function(e) {
                    r("number" == typeof e && e >= 0);
                    var t = e % 26,
                        n = (e - t) / 26,
                        i = 1 << t;
                    return !(this.length <= n) && !!(this.words[n] & i)
                }, i.prototype.imaskn = function(e) {
                    r("number" == typeof e && e >= 0);
                    var t = e % 26,
                        n = (e - t) / 26;
                    if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= n) return this;
                    if (0 !== t && n++, this.length = Math.min(n, this.length), 0 !== t) {
                        var i = 67108863 ^ 67108863 >>> t << t;
                        this.words[this.length - 1] &= i
                    }
                    return this.strip()
                }, i.prototype.maskn = function(e) {
                    return this.clone().imaskn(e)
                }, i.prototype.iaddn = function(e) {
                    return r("number" == typeof e), r(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e)
                }, i.prototype._iaddn = function(e) {
                    this.words[0] += e;
                    for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                    return this.length = Math.max(this.length, t + 1), this
                }, i.prototype.isubn = function(e) {
                    if (r("number" == typeof e), r(e < 67108864), e < 0) return this.iaddn(-e);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
                    if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
                    return this.strip()
                }, i.prototype.addn = function(e) {
                    return this.clone().iaddn(e)
                }, i.prototype.subn = function(e) {
                    return this.clone().isubn(e)
                }, i.prototype.iabs = function() {
                    return this.negative = 0, this
                }, i.prototype.abs = function() {
                    return this.clone().iabs()
                }, i.prototype._ishlnsubmul = function(e, t, n) {
                    var i, o, a = e.length + n;
                    this._expand(a);
                    var s = 0;
                    for (i = 0; i < e.length; i++) {
                        o = (0 | this.words[i + n]) + s;
                        var u = (0 | e.words[i]) * t;
                        s = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[i + n] = 67108863 & o
                    }
                    for (; i < this.length - n; i++) s = (o = (0 | this.words[i + n]) + s) >> 26, this.words[i + n] = 67108863 & o;
                    if (0 === s) return this.strip();
                    for (r(-1 === s), s = 0, i = 0; i < this.length; i++) s = (o = -(0 | this.words[i]) + s) >> 26, this.words[i] = 67108863 & o;
                    return this.negative = 1, this.strip()
                }, i.prototype._wordDiv = function(e, t) {
                    var r = (this.length, e.length),
                        n = this.clone(),
                        o = e,
                        a = 0 | o.words[o.length - 1];
                    0 !== (r = 26 - this._countBits(a)) && (o = o.ushln(r), n.iushln(r), a = 0 | o.words[o.length - 1]);
                    var s, u = n.length - o.length;
                    if ("mod" !== t) {
                        (s = new i(null)).length = u + 1, s.words = new Array(s.length);
                        for (var c = 0; c < s.length; c++) s.words[c] = 0
                    }
                    var f = n.clone()._ishlnsubmul(o, 1, u);
                    0 === f.negative && (n = f, s && (s.words[u] = 1));
                    for (var h = u - 1; h >= 0; h--) {
                        var d = 67108864 * (0 | n.words[o.length + h]) + (0 | n.words[o.length + h - 1]);
                        for (d = Math.min(d / a | 0, 67108863), n._ishlnsubmul(o, d, h); 0 !== n.negative;) d--, n.negative = 0, n._ishlnsubmul(o, 1, h), n.isZero() || (n.negative ^= 1);
                        s && (s.words[h] = d)
                    }
                    return s && s.strip(), n.strip(), "div" !== t && 0 !== r && n.iushrn(r), {
                        div: s || null,
                        mod: n
                    }
                }, i.prototype.divmod = function(e, t, n) {
                    return r(!e.isZero()), this.isZero() ? {
                        div: new i(0),
                        mod: new i(0)
                    } : 0 !== this.negative && 0 === e.negative ? (s = this.neg().divmod(e, t), "mod" !== t && (o = s.div.neg()), "div" !== t && (a = s.mod.neg(), n && 0 !== a.negative && a.iadd(e)), {
                        div: o,
                        mod: a
                    }) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t), "mod" !== t && (o = s.div.neg()), {
                        div: o,
                        mod: s.mod
                    }) : 0 != (this.negative & e.negative) ? (s = this.neg().divmod(e.neg(), t), "div" !== t && (a = s.mod.neg(), n && 0 !== a.negative && a.isub(e)), {
                        div: s.div,
                        mod: a
                    }) : e.length > this.length || this.cmp(e) < 0 ? {
                        div: new i(0),
                        mod: this
                    } : 1 === e.length ? "div" === t ? {
                        div: this.divn(e.words[0]),
                        mod: null
                    } : "mod" === t ? {
                        div: null,
                        mod: new i(this.modn(e.words[0]))
                    } : {
                        div: this.divn(e.words[0]),
                        mod: new i(this.modn(e.words[0]))
                    } : this._wordDiv(e, t);
                    var o, a, s
                }, i.prototype.div = function(e) {
                    return this.divmod(e, "div", !1).div
                }, i.prototype.mod = function(e) {
                    return this.divmod(e, "mod", !1).mod
                }, i.prototype.umod = function(e) {
                    return this.divmod(e, "mod", !0).mod
                }, i.prototype.divRound = function(e) {
                    var t = this.divmod(e);
                    if (t.mod.isZero()) return t.div;
                    var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                        n = e.ushrn(1),
                        i = e.andln(1),
                        o = r.cmp(n);
                    return o < 0 || 1 === i && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
                }, i.prototype.modn = function(e) {
                    r(e <= 67108863);
                    for (var t = (1 << 26) % e, n = 0, i = this.length - 1; i >= 0; i--) n = (t * n + (0 | this.words[i])) % e;
                    return n
                }, i.prototype.idivn = function(e) {
                    r(e <= 67108863);
                    for (var t = 0, n = this.length - 1; n >= 0; n--) {
                        var i = (0 | this.words[n]) + 67108864 * t;
                        this.words[n] = i / e | 0, t = i % e
                    }
                    return this.strip()
                }, i.prototype.divn = function(e) {
                    return this.clone().idivn(e)
                }, i.prototype.egcd = function(e) {
                    r(0 === e.negative), r(!e.isZero());
                    var t = this,
                        n = e.clone();
                    t = 0 !== t.negative ? t.umod(e) : t.clone();
                    for (var o = new i(1), a = new i(0), s = new i(0), u = new i(1), c = 0; t.isEven() && n.isEven();) t.iushrn(1), n.iushrn(1), ++c;
                    for (var f = n.clone(), h = t.clone(); !t.isZero();) {
                        for (var d = 0, l = 1; 0 == (t.words[0] & l) && d < 26; ++d, l <<= 1);
                        if (d > 0)
                            for (t.iushrn(d); d-- > 0;)(o.isOdd() || a.isOdd()) && (o.iadd(f), a.isub(h)), o.iushrn(1), a.iushrn(1);
                        for (var p = 0, b = 1; 0 == (n.words[0] & b) && p < 26; ++p, b <<= 1);
                        if (p > 0)
                            for (n.iushrn(p); p-- > 0;)(s.isOdd() || u.isOdd()) && (s.iadd(f), u.isub(h)), s.iushrn(1), u.iushrn(1);
                        t.cmp(n) >= 0 ? (t.isub(n), o.isub(s), a.isub(u)) : (n.isub(t), s.isub(o), u.isub(a))
                    }
                    return {
                        a: s,
                        b: u,
                        gcd: n.iushln(c)
                    }
                }, i.prototype._invmp = function(e) {
                    r(0 === e.negative), r(!e.isZero());
                    var t = this,
                        n = e.clone();
                    t = 0 !== t.negative ? t.umod(e) : t.clone();
                    for (var o, a = new i(1), s = new i(0), u = n.clone(); t.cmpn(1) > 0 && n.cmpn(1) > 0;) {
                        for (var c = 0, f = 1; 0 == (t.words[0] & f) && c < 26; ++c, f <<= 1);
                        if (c > 0)
                            for (t.iushrn(c); c-- > 0;) a.isOdd() && a.iadd(u), a.iushrn(1);
                        for (var h = 0, d = 1; 0 == (n.words[0] & d) && h < 26; ++h, d <<= 1);
                        if (h > 0)
                            for (n.iushrn(h); h-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                        t.cmp(n) >= 0 ? (t.isub(n), a.isub(s)) : (n.isub(t), s.isub(a))
                    }
                    return (o = 0 === t.cmpn(1) ? a : s).cmpn(0) < 0 && o.iadd(e), o
                }, i.prototype.gcd = function(e) {
                    if (this.isZero()) return e.abs();
                    if (e.isZero()) return this.abs();
                    var t = this.clone(),
                        r = e.clone();
                    t.negative = 0, r.negative = 0;
                    for (var n = 0; t.isEven() && r.isEven(); n++) t.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; t.isEven();) t.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var i = t.cmp(r);
                        if (i < 0) {
                            var o = t;
                            t = r, r = o
                        } else if (0 === i || 0 === r.cmpn(1)) break;
                        t.isub(r)
                    }
                    return r.iushln(n)
                }, i.prototype.invm = function(e) {
                    return this.egcd(e).a.umod(e)
                }, i.prototype.isEven = function() {
                    return 0 == (1 & this.words[0])
                }, i.prototype.isOdd = function() {
                    return 1 == (1 & this.words[0])
                }, i.prototype.andln = function(e) {
                    return this.words[0] & e
                }, i.prototype.bincn = function(e) {
                    r("number" == typeof e);
                    var t = e % 26,
                        n = (e - t) / 26,
                        i = 1 << t;
                    if (this.length <= n) return this._expand(n + 1), this.words[n] |= i, this;
                    for (var o = i, a = n; 0 !== o && a < this.length; a++) {
                        var s = 0 | this.words[a];
                        o = (s += o) >>> 26, s &= 67108863, this.words[a] = s
                    }
                    return 0 !== o && (this.words[a] = o, this.length++), this
                }, i.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, i.prototype.cmpn = function(e) {
                    var t, n = e < 0;
                    if (0 !== this.negative && !n) return -1;
                    if (0 === this.negative && n) return 1;
                    if (this.strip(), this.length > 1) t = 1;
                    else {
                        n && (e = -e), r(e <= 67108863, "Number is too big");
                        var i = 0 | this.words[0];
                        t = i === e ? 0 : i < e ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -t : t
                }, i.prototype.cmp = function(e) {
                    if (0 !== this.negative && 0 === e.negative) return -1;
                    if (0 === this.negative && 0 !== e.negative) return 1;
                    var t = this.ucmp(e);
                    return 0 !== this.negative ? 0 | -t : t
                }, i.prototype.ucmp = function(e) {
                    if (this.length > e.length) return 1;
                    if (this.length < e.length) return -1;
                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                        var n = 0 | this.words[r],
                            i = 0 | e.words[r];
                        if (n !== i) {
                            n < i ? t = -1 : n > i && (t = 1);
                            break
                        }
                    }
                    return t
                }, i.prototype.gtn = function(e) {
                    return 1 === this.cmpn(e)
                }, i.prototype.gt = function(e) {
                    return 1 === this.cmp(e)
                }, i.prototype.gten = function(e) {
                    return this.cmpn(e) >= 0
                }, i.prototype.gte = function(e) {
                    return this.cmp(e) >= 0
                }, i.prototype.ltn = function(e) {
                    return -1 === this.cmpn(e)
                }, i.prototype.lt = function(e) {
                    return -1 === this.cmp(e)
                }, i.prototype.lten = function(e) {
                    return this.cmpn(e) <= 0
                }, i.prototype.lte = function(e) {
                    return this.cmp(e) <= 0
                }, i.prototype.eqn = function(e) {
                    return 0 === this.cmpn(e)
                }, i.prototype.eq = function(e) {
                    return 0 === this.cmp(e)
                }, i.red = function(e) {
                    return new _(e)
                }, i.prototype.toRed = function(e) {
                    return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
                }, i.prototype.fromRed = function() {
                    return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, i.prototype._forceRed = function(e) {
                    return this.red = e, this
                }, i.prototype.forceRed = function(e) {
                    return r(!this.red, "Already a number in reduction context"), this._forceRed(e)
                }, i.prototype.redAdd = function(e) {
                    return r(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
                }, i.prototype.redIAdd = function(e) {
                    return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
                }, i.prototype.redSub = function(e) {
                    return r(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
                }, i.prototype.redISub = function(e) {
                    return r(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
                }, i.prototype.redShl = function(e) {
                    return r(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
                }, i.prototype.redMul = function(e) {
                    return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
                }, i.prototype.redIMul = function(e) {
                    return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
                }, i.prototype.redSqr = function() {
                    return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, i.prototype.redISqr = function() {
                    return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, i.prototype.redSqrt = function() {
                    return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, i.prototype.redInvm = function() {
                    return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, i.prototype.redNeg = function() {
                    return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, i.prototype.redPow = function(e) {
                    return r(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
                };
                var b = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function m(e, t) {
                    this.name = e, this.p = new i(t, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function g() {
                    m.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function v() {
                    m.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function y() {
                    m.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function w() {
                    m.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function _(e) {
                    if ("string" == typeof e) {
                        var t = i._prime(e);
                        this.m = t.p, this.prime = t
                    } else r(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
                }

                function S(e) {
                    _.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                m.prototype._tmp = function() {
                    var e = new i(null);
                    return e.words = new Array(Math.ceil(this.n / 13)), e
                }, m.prototype.ireduce = function(e) {
                    var t, r = e;
                    do {
                        this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                    } while (t > this.n);
                    var n = t < this.n ? -1 : r.ucmp(this.p);
                    return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : r.strip(), r
                }, m.prototype.split = function(e, t) {
                    e.iushrn(this.n, 0, t)
                }, m.prototype.imulK = function(e) {
                    return e.imul(this.k)
                }, n(g, m), g.prototype.split = function(e, t) {
                    for (var r = Math.min(e.length, 9), n = 0; n < r; n++) t.words[n] = e.words[n];
                    if (t.length = r, e.length <= 9) return e.words[0] = 0, void(e.length = 1);
                    var i = e.words[9];
                    for (t.words[t.length++] = 4194303 & i, n = 10; n < e.length; n++) {
                        var o = 0 | e.words[n];
                        e.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o
                    }
                    i >>>= 22, e.words[n - 10] = i, 0 === i && e.length > 10 ? e.length -= 10 : e.length -= 9
                }, g.prototype.imulK = function(e) {
                    e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var n = 0 | e.words[r];
                        t += 977 * n, e.words[r] = 67108863 & t, t = 64 * n + (t / 67108864 | 0)
                    }
                    return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
                }, n(v, m), n(y, m), n(w, m), w.prototype.imulK = function(e) {
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var n = 19 * (0 | e.words[r]) + t,
                            i = 67108863 & n;
                        n >>>= 26, e.words[r] = i, t = n
                    }
                    return 0 !== t && (e.words[e.length++] = t), e
                }, i._prime = function(e) {
                    if (b[e]) return b[e];
                    var t;
                    if ("k256" === e) t = new g;
                    else if ("p224" === e) t = new v;
                    else if ("p192" === e) t = new y;
                    else {
                        if ("p25519" !== e) throw new Error("Unknown prime " + e);
                        t = new w
                    }
                    return b[e] = t, t
                }, _.prototype._verify1 = function(e) {
                    r(0 === e.negative, "red works only with positives"), r(e.red, "red works only with red numbers")
                }, _.prototype._verify2 = function(e, t) {
                    r(0 == (e.negative | t.negative), "red works only with positives"), r(e.red && e.red === t.red, "red works only with red numbers")
                }, _.prototype.imod = function(e) {
                    return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
                }, _.prototype.neg = function(e) {
                    return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
                }, _.prototype.add = function(e, t) {
                    this._verify2(e, t);
                    var r = e.add(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, _.prototype.iadd = function(e, t) {
                    this._verify2(e, t);
                    var r = e.iadd(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, _.prototype.sub = function(e, t) {
                    this._verify2(e, t);
                    var r = e.sub(t);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                }, _.prototype.isub = function(e, t) {
                    this._verify2(e, t);
                    var r = e.isub(t);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r
                }, _.prototype.shl = function(e, t) {
                    return this._verify1(e), this.imod(e.ushln(t))
                }, _.prototype.imul = function(e, t) {
                    return this._verify2(e, t), this.imod(e.imul(t))
                }, _.prototype.mul = function(e, t) {
                    return this._verify2(e, t), this.imod(e.mul(t))
                }, _.prototype.isqr = function(e) {
                    return this.imul(e, e.clone())
                }, _.prototype.sqr = function(e) {
                    return this.mul(e, e)
                }, _.prototype.sqrt = function(e) {
                    if (e.isZero()) return e.clone();
                    var t = this.m.andln(3);
                    if (r(t % 2 == 1), 3 === t) {
                        var n = this.m.add(new i(1)).iushrn(2);
                        return this.pow(e, n)
                    }
                    for (var o = this.m.subn(1), a = 0; !o.isZero() && 0 === o.andln(1);) a++, o.iushrn(1);
                    r(!o.isZero());
                    var s = new i(1).toRed(this),
                        u = s.redNeg(),
                        c = this.m.subn(1).iushrn(1),
                        f = this.m.bitLength();
                    for (f = new i(2 * f * f).toRed(this); 0 !== this.pow(f, c).cmp(u);) f.redIAdd(u);
                    for (var h = this.pow(f, o), d = this.pow(e, o.addn(1).iushrn(1)), l = this.pow(e, o), p = a; 0 !== l.cmp(s);) {
                        for (var b = l, m = 0; 0 !== b.cmp(s); m++) b = b.redSqr();
                        r(m < p);
                        var g = this.pow(h, new i(1).iushln(p - m - 1));
                        d = d.redMul(g), h = g.redSqr(), l = l.redMul(h), p = m
                    }
                    return d
                }, _.prototype.invm = function(e) {
                    var t = e._invmp(this.m);
                    return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                }, _.prototype.pow = function(e, t) {
                    if (t.isZero()) return new i(1).toRed(this);
                    if (0 === t.cmpn(1)) return e.clone();
                    var r = new Array(16);
                    r[0] = new i(1).toRed(this), r[1] = e;
                    for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);
                    var o = r[0],
                        a = 0,
                        s = 0,
                        u = t.bitLength() % 26;
                    for (0 === u && (u = 26), n = t.length - 1; n >= 0; n--) {
                        for (var c = t.words[n], f = u - 1; f >= 0; f--) {
                            var h = c >> f & 1;
                            o !== r[0] && (o = this.sqr(o)), 0 !== h || 0 !== a ? (a <<= 1, a |= h, (4 === ++s || 0 === n && 0 === f) && (o = this.mul(o, r[a]), s = 0, a = 0)) : s = 0
                        }
                        u = 26
                    }
                    return o
                }, _.prototype.convertTo = function(e) {
                    var t = e.umod(this.m);
                    return t === e ? t.clone() : t
                }, _.prototype.convertFrom = function(e) {
                    var t = e.clone();
                    return t.red = null, t
                }, i.mont = function(e) {
                    return new S(e)
                }, n(S, _), S.prototype.convertTo = function(e) {
                    return this.imod(e.ushln(this.shift))
                }, S.prototype.convertFrom = function(e) {
                    var t = this.imod(e.mul(this.rinv));
                    return t.red = null, t
                }, S.prototype.imul = function(e, t) {
                    if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
                    var r = e.imul(t),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                }, S.prototype.mul = function(e, t) {
                    if (e.isZero() || t.isZero()) return new i(0)._forceRed(this);
                    var r = e.mul(t),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        o = r.isub(n).iushrn(this.shift),
                        a = o;
                    return o.cmp(this.m) >= 0 ? a = o.isub(this.m) : o.cmpn(0) < 0 && (a = o.iadd(this.m)), a._forceRed(this)
                }, S.prototype.invm = function(e) {
                    return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(e, t)
        }),
        ys = "github:xg-wang/elliptic",
        ws = "elliptic@6.4.0",
        _s = {},
        Ss = {
            type: "git",
            raw: "elliptic@github:xg-wang/elliptic",
            name: "elliptic",
            escapedName: "elliptic",
            rawSpec: "github:xg-wang/elliptic",
            saveSpec: "github:xg-wang/elliptic",
            fetchSpec: null,
            gitCommittish: null
        },
        ks = ["/", "/browserify-sign", "/create-ecdh", "/tiny-secp256k1"],
        Es = "github:xg-wang/elliptic#8a6bb93d751559db43036a2670825af215d0aa43",
        Is = "elliptic@github:xg-wang/elliptic",
        xs = "/Users/julien/work/cert-verifier-js",
        Os = {
            name: "Fedor Indutny",
            email: "fedor@indutny.com"
        },
        Ts = {
            url: "https://github.com/indutny/elliptic/issues"
        },
        Ps = {
            "bn.js": "^4.4.0",
            brorand: "^1.0.1",
            "hash.js": "^1.0.0",
            "hmac-drbg": "^1.0.0",
            inherits: "^2.0.1",
            "minimalistic-assert": "^1.0.0",
            "minimalistic-crypto-utils": "^1.0.0"
        },
        As = {
            brfs: "^1.4.3",
            coveralls: "^2.11.3",
            grunt: "^0.4.5",
            "grunt-browserify": "^5.0.0",
            "grunt-cli": "^1.2.0",
            "grunt-contrib-connect": "^1.0.0",
            "grunt-contrib-copy": "^1.0.0",
            "grunt-contrib-uglify": "^1.0.1",
            "grunt-mocha-istanbul": "^3.0.1",
            "grunt-saucelabs": "^8.6.2",
            istanbul: "^0.4.2",
            jscs: "^2.9.0",
            jshint: "^2.6.0",
            mocha: "^2.1.0"
        },
        Ms = ["lib"],
        Cs = "https://github.com/indutny/elliptic",
        Ls = ["EC", "Elliptic", "curve", "Cryptography"],
        Rs = "lib/elliptic.js",
        Ns = {
            type: "git",
            url: "git+ssh://git@github.com/indutny/elliptic.git"
        },
        js = {
            jscs: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
            jshint: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
            lint: "npm run jscs && npm run jshint",
            test: "npm run lint && npm run unit",
            unit: "istanbul test _mocha --reporter=spec test/index.js",
            version: "grunt dist && git add dist/"
        },
        Us = {
            _from: ys,
            _id: ws,
            _inBundle: !1,
            _integrity: "",
            _location: "/elliptic",
            _phantomChildren: _s,
            _requested: Ss,
            _requiredBy: ks,
            _resolved: Es,
            _spec: Is,
            _where: xs,
            author: Os,
            bugs: Ts,
            bundleDependencies: !1,
            dependencies: Ps,
            deprecated: !1,
            description: "EC cryptography",
            devDependencies: As,
            files: Ms,
            homepage: Cs,
            keywords: Ls,
            license: "MIT",
            main: Rs,
            name: "elliptic",
            repository: Ns,
            scripts: js,
            version: "6.4.0"
        },
        Ds = Object.freeze({
            _from: ys,
            _id: ws,
            _inBundle: !1,
            _integrity: "",
            _location: "/elliptic",
            _phantomChildren: _s,
            _requested: Ss,
            _requiredBy: ks,
            _resolved: Es,
            _spec: Is,
            _where: xs,
            author: Os,
            bugs: Ts,
            bundleDependencies: !1,
            dependencies: Ps,
            deprecated: !1,
            description: "EC cryptography",
            devDependencies: As,
            files: Ms,
            homepage: Cs,
            keywords: Ls,
            license: "MIT",
            main: Rs,
            name: "elliptic",
            repository: Ns,
            scripts: js,
            version: "6.4.0",
            default: Us
        }),
        Bs = Hs;

    function Hs(e, t) {
        if (!e) throw new Error(t || "Assertion failed")
    }
    Hs.equal = function(e, t, r) {
        if (e != t) throw new Error(r || "Assertion failed: " + e + " != " + t)
    };
    var Fs, qs = i(function(e, t) {
            var r = t;

            function n(e) {
                return 1 === e.length ? "0" + e : e
            }

            function i(e) {
                for (var t = "", r = 0; r < e.length; r++) t += n(e[r].toString(16));
                return t
            }
            r.toArray = function(e, t) {
                if (Array.isArray(e)) return e.slice();
                if (!e) return [];
                var r = [];
                if ("string" != typeof e) {
                    for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];
                    return r
                }
                if ("hex" === t) {
                    (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e);
                    for (n = 0; n < e.length; n += 2) r.push(parseInt(e[n] + e[n + 1], 16))
                } else
                    for (n = 0; n < e.length; n++) {
                        var i = e.charCodeAt(n),
                            o = i >> 8,
                            a = 255 & i;
                        o ? r.push(o, a) : r.push(a)
                    }
                return r
            }, r.zero2 = n, r.toHex = i, r.encode = function(e, t) {
                return "hex" === t ? i(e) : e
            }
        }),
        Vs = i(function(e, t) {
            var r = t;
            r.assert = Bs, r.toArray = qs.toArray, r.zero2 = qs.zero2, r.toHex = qs.toHex, r.encode = qs.encode, r.getNAF = function(e, t) {
                for (var r = [], n = 1 << t + 1, i = e.clone(); i.cmpn(1) >= 0;) {
                    var o;
                    if (i.isOdd()) {
                        var a = i.andln(n - 1);
                        o = a > (n >> 1) - 1 ? (n >> 1) - a : a, i.isubn(o)
                    } else o = 0;
                    r.push(o);
                    for (var s = 0 !== i.cmpn(0) && 0 === i.andln(n - 1) ? t + 1 : 1, u = 1; u < s; u++) r.push(0);
                    i.iushrn(s)
                }
                return r
            }, r.getJSF = function(e, t) {
                var r = [
                    [],
                    []
                ];
                e = e.clone(), t = t.clone();
                for (var n = 0, i = 0; e.cmpn(-n) > 0 || t.cmpn(-i) > 0;) {
                    var o, a, s, u = e.andln(3) + n & 3,
                        c = t.andln(3) + i & 3;
                    if (3 === u && (u = -1), 3 === c && (c = -1), 0 == (1 & u)) o = 0;
                    else o = 3 !== (s = e.andln(7) + n & 7) && 5 !== s || 2 !== c ? u : -u;
                    if (r[0].push(o), 0 == (1 & c)) a = 0;
                    else a = 3 !== (s = t.andln(7) + i & 7) && 5 !== s || 2 !== u ? c : -c;
                    r[1].push(a), 2 * n === o + 1 && (n = 1 - n), 2 * i === a + 1 && (i = 1 - i), e.iushrn(1), t.iushrn(1)
                }
                return r
            }, r.cachedProperty = function(e, t, r) {
                var n = "_" + t;
                e.prototype[t] = function() {
                    return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
                }
            }, r.parseBytes = function(e) {
                return "string" == typeof e ? r.toArray(e, "hex") : e
            }, r.intFromLE = function(e) {
                return new vs(e, "hex", "le")
            }
        }),
        zs = function(e) {
            return Fs || (Fs = new Ks(null)), Fs.generate(e)
        };

    function Ks(e) {
        this.rand = e
    }
    var Ws = Ks;
    if (Ks.prototype.generate = function(e) {
            return this._rand(e)
        }, Ks.prototype._rand = function(e) {
            if (this.rand.getBytes) return this.rand.getBytes(e);
            for (var t = new Uint8Array(e), r = 0; r < t.length; r++) t[r] = this.rand.getByte();
            return t
        }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? Ks.prototype._rand = function(e) {
        var t = new Uint8Array(e);
        return self.crypto.getRandomValues(t), t
    } : self.msCrypto && self.msCrypto.getRandomValues ? Ks.prototype._rand = function(e) {
        var t = new Uint8Array(e);
        return self.msCrypto.getRandomValues(t), t
    } : "object" == typeof window && (Ks.prototype._rand = function() {
        throw new Error("Not implemented yet")
    });
    else try {
        var Js = gs;
        if ("function" != typeof Js.randomBytes) throw new Error("Not supported");
        Ks.prototype._rand = function(e) {
            return Js.randomBytes(e)
        }
    } catch (e) {}
    zs.Rand = Ws;
    var Gs = Vs.getNAF,
        Xs = Vs.getJSF,
        Ys = Vs.assert;

    function $s(e, t) {
        this.type = e, this.p = new vs(t.p, 16), this.red = t.prime ? vs.red(t.prime) : vs.mont(this.p), this.zero = new vs(0).toRed(this.red), this.one = new vs(1).toRed(this.red), this.two = new vs(2).toRed(this.red), this.n = t.n && new vs(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4);
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
    }
    var Qs = $s;

    function Zs(e, t) {
        this.curve = e, this.type = t, this.precomputed = null
    }
    $s.prototype.point = function() {
        throw new Error("Not implemented")
    }, $s.prototype.validate = function() {
        throw new Error("Not implemented")
    }, $s.prototype._fixedNafMul = function(e, t) {
        Ys(e.precomputed);
        var r = e._getDoubles(),
            n = Gs(t, 1),
            i = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);
        i /= 3;
        for (var o = [], a = 0; a < n.length; a += r.step) {
            var s = 0;
            for (t = a + r.step - 1; t >= a; t--) s = (s << 1) + n[t];
            o.push(s)
        }
        for (var u = this.jpoint(null, null, null), c = this.jpoint(null, null, null), f = i; f > 0; f--) {
            for (a = 0; a < o.length; a++) {
                (s = o[a]) === f ? c = c.mixedAdd(r.points[a]) : s === -f && (c = c.mixedAdd(r.points[a].neg()))
            }
            u = u.add(c)
        }
        return u.toP()
    }, $s.prototype._wnafMul = function(e, t) {
        var r = 4,
            n = e._getNAFPoints(r);
        r = n.wnd;
        for (var i = n.points, o = Gs(t, r), a = this.jpoint(null, null, null), s = o.length - 1; s >= 0; s--) {
            for (t = 0; s >= 0 && 0 === o[s]; s--) t++;
            if (s >= 0 && t++, a = a.dblp(t), s < 0) break;
            var u = o[s];
            Ys(0 !== u), a = "affine" === e.type ? u > 0 ? a.mixedAdd(i[u - 1 >> 1]) : a.mixedAdd(i[-u - 1 >> 1].neg()) : u > 0 ? a.add(i[u - 1 >> 1]) : a.add(i[-u - 1 >> 1].neg())
        }
        return "affine" === e.type ? a.toP() : a
    }, $s.prototype._wnafMulAdd = function(e, t, r, n, i) {
        for (var o = this._wnafT1, a = this._wnafT2, s = this._wnafT3, u = 0, c = 0; c < n; c++) {
            var f = (k = t[c])._getNAFPoints(e);
            o[c] = f.wnd, a[c] = f.points
        }
        for (c = n - 1; c >= 1; c -= 2) {
            var h = c - 1,
                d = c;
            if (1 === o[h] && 1 === o[d]) {
                var l = [t[h], null, null, t[d]];
                0 === t[h].y.cmp(t[d].y) ? (l[1] = t[h].add(t[d]), l[2] = t[h].toJ().mixedAdd(t[d].neg())) : 0 === t[h].y.cmp(t[d].y.redNeg()) ? (l[1] = t[h].toJ().mixedAdd(t[d]), l[2] = t[h].add(t[d].neg())) : (l[1] = t[h].toJ().mixedAdd(t[d]), l[2] = t[h].toJ().mixedAdd(t[d].neg()));
                var p = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                    b = Xs(r[h], r[d]);
                u = Math.max(b[0].length, u), s[h] = new Array(u), s[d] = new Array(u);
                for (var m = 0; m < u; m++) {
                    var g = 0 | b[0][m],
                        v = 0 | b[1][m];
                    s[h][m] = p[3 * (g + 1) + (v + 1)], s[d][m] = 0, a[h] = l
                }
            } else s[h] = Gs(r[h], o[h]), s[d] = Gs(r[d], o[d]), u = Math.max(s[h].length, u), u = Math.max(s[d].length, u)
        }
        var y = this.jpoint(null, null, null),
            w = this._wnafT4;
        for (c = u; c >= 0; c--) {
            for (var _ = 0; c >= 0;) {
                var S = !0;
                for (m = 0; m < n; m++) w[m] = 0 | s[m][c], 0 !== w[m] && (S = !1);
                if (!S) break;
                _++, c--
            }
            if (c >= 0 && _++, y = y.dblp(_), c < 0) break;
            for (m = 0; m < n; m++) {
                var k, E = w[m];
                0 !== E && (E > 0 ? k = a[m][E - 1 >> 1] : E < 0 && (k = a[m][-E - 1 >> 1].neg()), y = "affine" === k.type ? y.mixedAdd(k) : y.add(k))
            }
        }
        for (c = 0; c < n; c++) a[c] = null;
        return i ? y : y.toP()
    }, $s.BasePoint = Zs, Zs.prototype.eq = function() {
        throw new Error("Not implemented")
    }, Zs.prototype.validate = function() {
        return this.curve.validate(this)
    }, $s.prototype.decodePoint = function(e, t) {
        e = Vs.toArray(e, t);
        var r = this.p.byteLength();
        if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r) return 6 === e[0] ? Ys(e[e.length - 1] % 2 == 0) : 7 === e[0] && Ys(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
        if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
        throw new Error("Unknown point format")
    }, Zs.prototype.encodeCompressed = function(e) {
        return this.encode(e, !0)
    }, Zs.prototype._encode = function(e) {
        var t = this.curve.p.byteLength(),
            r = this.getX().toArray("be", t);
        return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t))
    }, Zs.prototype.encode = function(e, t) {
        return Vs.encode(this._encode(t), e)
    }, Zs.prototype.precompute = function(e) {
        if (this.precomputed) return this;
        var t = {
            doubles: null,
            naf: null,
            beta: null
        };
        return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
    }, Zs.prototype._hasDoubles = function(e) {
        if (!this.precomputed) return !1;
        var t = this.precomputed.doubles;
        return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
    }, Zs.prototype._getDoubles = function(e, t) {
        if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
        for (var r = [this], n = this, i = 0; i < t; i += e) {
            for (var o = 0; o < e; o++) n = n.dbl();
            r.push(n)
        }
        return {
            step: e,
            points: r
        }
    }, Zs.prototype._getNAFPoints = function(e) {
        if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
        for (var t = [this], r = (1 << e) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) t[i] = t[i - 1].add(n);
        return {
            wnd: e,
            points: t
        }
    }, Zs.prototype._getBeta = function() {
        return null
    }, Zs.prototype.dblp = function(e) {
        for (var t = this, r = 0; r < e; r++) t = t.dbl();
        return t
    };
    var eu = Vs.assert;

    function tu(e) {
        Qs.call(this, "short", e), this.a = new vs(e.a, 16).toRed(this.red), this.b = new vs(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
    }
    yo(tu, Qs);
    var ru = tu;

    function nu(e, t, r, n) {
        Qs.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new vs(t, 16), this.y = new vs(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
    }

    function iu(e, t, r, n) {
        Qs.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new vs(0)) : (this.x = new vs(t, 16), this.y = new vs(r, 16), this.z = new vs(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
    }

    function ou(e) {
        Qs.call(this, "mont", e), this.a = new vs(e.a, 16).toRed(this.red), this.b = new vs(e.b, 16).toRed(this.red), this.i4 = new vs(4).toRed(this.red).redInvm(), this.two = new vs(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
    }
    tu.prototype._getEndomorphism = function(e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var t, r;
            if (e.beta) t = new vs(e.beta, 16).toRed(this.red);
            else {
                var n = this._getEndoRoots(this.p);
                t = (t = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red)
            }
            if (e.lambda) r = new vs(e.lambda, 16);
            else {
                var i = this._getEndoRoots(this.n);
                0 === this.g.mul(i[0]).x.cmp(this.g.x.redMul(t)) ? r = i[0] : (r = i[1], eu(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
            }
            return {
                beta: t,
                lambda: r,
                basis: e.basis ? e.basis.map(function(e) {
                    return {
                        a: new vs(e.a, 16),
                        b: new vs(e.b, 16)
                    }
                }) : this._getEndoBasis(r)
            }
        }
    }, tu.prototype._getEndoRoots = function(e) {
        var t = e === this.p ? this.red : vs.mont(e),
            r = new vs(2).toRed(t).redInvm(),
            n = r.redNeg(),
            i = new vs(3).toRed(t).redNeg().redSqrt().redMul(r);
        return [n.redAdd(i).fromRed(), n.redSub(i).fromRed()]
    }, tu.prototype._getEndoBasis = function(e) {
        for (var t, r, n, i, o, a, s, u, c, f = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), h = e, d = this.n.clone(), l = new vs(1), p = new vs(0), b = new vs(0), m = new vs(1), g = 0; 0 !== h.cmpn(0);) {
            var v = d.div(h);
            u = d.sub(v.mul(h)), c = b.sub(v.mul(l));
            var y = m.sub(v.mul(p));
            if (!n && u.cmp(f) < 0) t = s.neg(), r = l, n = u.neg(), i = c;
            else if (n && 2 == ++g) break;
            s = u, d = h, h = u, b = l, l = c, m = p, p = y
        }
        o = u.neg(), a = c;
        var w = n.sqr().add(i.sqr());
        return o.sqr().add(a.sqr()).cmp(w) >= 0 && (o = t, a = r), n.negative && (n = n.neg(), i = i.neg()), o.negative && (o = o.neg(), a = a.neg()), [{
            a: n,
            b: i
        }, {
            a: o,
            b: a
        }]
    }, tu.prototype._endoSplit = function(e) {
        var t = this.endo.basis,
            r = t[0],
            n = t[1],
            i = n.b.mul(e).divRound(this.n),
            o = r.b.neg().mul(e).divRound(this.n),
            a = i.mul(r.a),
            s = o.mul(n.a),
            u = i.mul(r.b),
            c = o.mul(n.b);
        return {
            k1: e.sub(a).sub(s),
            k2: u.add(c).neg()
        }
    }, tu.prototype.pointFromX = function(e, t) {
        (e = new vs(e, 16)).red || (e = e.toRed(this.red));
        var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
            n = r.redSqrt();
        if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
        var i = n.fromRed().isOdd();
        return (t && !i || !t && i) && (n = n.redNeg()), this.point(e, n)
    }, tu.prototype.validate = function(e) {
        if (e.inf) return !0;
        var t = e.x,
            r = e.y,
            n = this.a.redMul(t),
            i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
        return 0 === r.redSqr().redISub(i).cmpn(0)
    }, tu.prototype._endoWnafMulAdd = function(e, t, r) {
        for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < e.length; o++) {
            var a = this._endoSplit(t[o]),
                s = e[o],
                u = s._getBeta();
            a.k1.negative && (a.k1.ineg(), s = s.neg(!0)), a.k2.negative && (a.k2.ineg(), u = u.neg(!0)), n[2 * o] = s, n[2 * o + 1] = u, i[2 * o] = a.k1, i[2 * o + 1] = a.k2
        }
        for (var c = this._wnafMulAdd(1, n, i, 2 * o, r), f = 0; f < 2 * o; f++) n[f] = null, i[f] = null;
        return c
    }, yo(nu, Qs.BasePoint), tu.prototype.point = function(e, t, r) {
        return new nu(this, e, t, r)
    }, tu.prototype.pointFromJSON = function(e, t) {
        return nu.fromJSON(this, e, t)
    }, nu.prototype._getBeta = function() {
        if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (e) {
                var r = this.curve,
                    n = function(e) {
                        return r.point(e.x.redMul(r.endo.beta), e.y)
                    };
                e.beta = t, t.precomputed = {
                    beta: null,
                    naf: e.naf && {
                        wnd: e.naf.wnd,
                        points: e.naf.points.map(n)
                    },
                    doubles: e.doubles && {
                        step: e.doubles.step,
                        points: e.doubles.points.map(n)
                    }
                }
            }
            return t
        }
    }, nu.prototype.toJSON = function() {
        return this.precomputed ? [this.x, this.y, this.precomputed && {
            doubles: this.precomputed.doubles && {
                step: this.precomputed.doubles.step,
                points: this.precomputed.doubles.points.slice(1)
            },
            naf: this.precomputed.naf && {
                wnd: this.precomputed.naf.wnd,
                points: this.precomputed.naf.points.slice(1)
            }
        }] : [this.x, this.y]
    }, nu.fromJSON = function(e, t, r) {
        "string" == typeof t && (t = JSON.parse(t));
        var n = e.point(t[0], t[1], r);
        if (!t[2]) return n;

        function i(t) {
            return e.point(t[0], t[1], r)
        }
        var o = t[2];
        return n.precomputed = {
            beta: null,
            doubles: o.doubles && {
                step: o.doubles.step,
                points: [n].concat(o.doubles.points.map(i))
            },
            naf: o.naf && {
                wnd: o.naf.wnd,
                points: [n].concat(o.naf.points.map(i))
            }
        }, n
    }, nu.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
    }, nu.prototype.isInfinity = function() {
        return this.inf
    }, nu.prototype.add = function(e) {
        if (this.inf) return e;
        if (e.inf) return this;
        if (this.eq(e)) return this.dbl();
        if (this.neg().eq(e)) return this.curve.point(null, null);
        if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
        var t = this.y.redSub(e.y);
        0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
        var r = t.redSqr().redISub(this.x).redISub(e.x),
            n = t.redMul(this.x.redSub(r)).redISub(this.y);
        return this.curve.point(r, n)
    }, nu.prototype.dbl = function() {
        if (this.inf) return this;
        var e = this.y.redAdd(this.y);
        if (0 === e.cmpn(0)) return this.curve.point(null, null);
        var t = this.curve.a,
            r = this.x.redSqr(),
            n = e.redInvm(),
            i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
            o = i.redSqr().redISub(this.x.redAdd(this.x)),
            a = i.redMul(this.x.redSub(o)).redISub(this.y);
        return this.curve.point(o, a)
    }, nu.prototype.getX = function() {
        return this.x.fromRed()
    }, nu.prototype.getY = function() {
        return this.y.fromRed()
    }, nu.prototype.mul = function(e) {
        return e = new vs(e, 16), this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
    }, nu.prototype.mulAdd = function(e, t, r) {
        var n = [this, t],
            i = [e, r];
        return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
    }, nu.prototype.jmulAdd = function(e, t, r) {
        var n = [this, t],
            i = [e, r];
        return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
    }, nu.prototype.eq = function(e) {
        return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
    }, nu.prototype.neg = function(e) {
        if (this.inf) return this;
        var t = this.curve.point(this.x, this.y.redNeg());
        if (e && this.precomputed) {
            var r = this.precomputed,
                n = function(e) {
                    return e.neg()
                };
            t.precomputed = {
                naf: r.naf && {
                    wnd: r.naf.wnd,
                    points: r.naf.points.map(n)
                },
                doubles: r.doubles && {
                    step: r.doubles.step,
                    points: r.doubles.points.map(n)
                }
            }
        }
        return t
    }, nu.prototype.toJ = function() {
        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
    }, yo(iu, Qs.BasePoint), tu.prototype.jpoint = function(e, t, r) {
        return new iu(this, e, t, r)
    }, iu.prototype.toP = function() {
        if (this.isInfinity()) return this.curve.point(null, null);
        var e = this.z.redInvm(),
            t = e.redSqr(),
            r = this.x.redMul(t),
            n = this.y.redMul(t).redMul(e);
        return this.curve.point(r, n)
    }, iu.prototype.neg = function() {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
    }, iu.prototype.add = function(e) {
        if (this.isInfinity()) return e;
        if (e.isInfinity()) return this;
        var t = e.z.redSqr(),
            r = this.z.redSqr(),
            n = this.x.redMul(t),
            i = e.x.redMul(r),
            o = this.y.redMul(t.redMul(e.z)),
            a = e.y.redMul(r.redMul(this.z)),
            s = n.redSub(i),
            u = o.redSub(a);
        if (0 === s.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var c = s.redSqr(),
            f = c.redMul(s),
            h = n.redMul(c),
            d = u.redSqr().redIAdd(f).redISub(h).redISub(h),
            l = u.redMul(h.redISub(d)).redISub(o.redMul(f)),
            p = this.z.redMul(e.z).redMul(s);
        return this.curve.jpoint(d, l, p)
    }, iu.prototype.mixedAdd = function(e) {
        if (this.isInfinity()) return e.toJ();
        if (e.isInfinity()) return this;
        var t = this.z.redSqr(),
            r = this.x,
            n = e.x.redMul(t),
            i = this.y,
            o = e.y.redMul(t).redMul(this.z),
            a = r.redSub(n),
            s = i.redSub(o);
        if (0 === a.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var u = a.redSqr(),
            c = u.redMul(a),
            f = r.redMul(u),
            h = s.redSqr().redIAdd(c).redISub(f).redISub(f),
            d = s.redMul(f.redISub(h)).redISub(i.redMul(c)),
            l = this.z.redMul(a);
        return this.curve.jpoint(h, d, l)
    }, iu.prototype.dblp = function(e) {
        if (0 === e) return this;
        if (this.isInfinity()) return this;
        if (!e) return this.dbl();
        if (this.curve.zeroA || this.curve.threeA) {
            for (var t = this, r = 0; r < e; r++) t = t.dbl();
            return t
        }
        var n = this.curve.a,
            i = this.curve.tinv,
            o = this.x,
            a = this.y,
            s = this.z,
            u = s.redSqr().redSqr(),
            c = a.redAdd(a);
        for (r = 0; r < e; r++) {
            var f = o.redSqr(),
                h = c.redSqr(),
                d = h.redSqr(),
                l = f.redAdd(f).redIAdd(f).redIAdd(n.redMul(u)),
                p = o.redMul(h),
                b = l.redSqr().redISub(p.redAdd(p)),
                m = p.redISub(b),
                g = l.redMul(m);
            g = g.redIAdd(g).redISub(d);
            var v = c.redMul(s);
            r + 1 < e && (u = u.redMul(d)), o = b, s = v, c = g
        }
        return this.curve.jpoint(o, c.redMul(i), s)
    }, iu.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
    }, iu.prototype._zeroDbl = function() {
        var e, t, r;
        if (this.zOne) {
            var n = this.x.redSqr(),
                i = this.y.redSqr(),
                o = i.redSqr(),
                a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            a = a.redIAdd(a);
            var s = n.redAdd(n).redIAdd(n),
                u = s.redSqr().redISub(a).redISub(a),
                c = o.redIAdd(o);
            c = (c = c.redIAdd(c)).redIAdd(c), e = u, t = s.redMul(a.redISub(u)).redISub(c), r = this.y.redAdd(this.y)
        } else {
            var f = this.x.redSqr(),
                h = this.y.redSqr(),
                d = h.redSqr(),
                l = this.x.redAdd(h).redSqr().redISub(f).redISub(d);
            l = l.redIAdd(l);
            var p = f.redAdd(f).redIAdd(f),
                b = p.redSqr(),
                m = d.redIAdd(d);
            m = (m = m.redIAdd(m)).redIAdd(m), e = b.redISub(l).redISub(l), t = p.redMul(l.redISub(e)).redISub(m), r = (r = this.y.redMul(this.z)).redIAdd(r)
        }
        return this.curve.jpoint(e, t, r)
    }, iu.prototype._threeDbl = function() {
        var e, t, r;
        if (this.zOne) {
            var n = this.x.redSqr(),
                i = this.y.redSqr(),
                o = i.redSqr(),
                a = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
            a = a.redIAdd(a);
            var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                u = s.redSqr().redISub(a).redISub(a);
            e = u;
            var c = o.redIAdd(o);
            c = (c = c.redIAdd(c)).redIAdd(c), t = s.redMul(a.redISub(u)).redISub(c), r = this.y.redAdd(this.y)
        } else {
            var f = this.z.redSqr(),
                h = this.y.redSqr(),
                d = this.x.redMul(h),
                l = this.x.redSub(f).redMul(this.x.redAdd(f));
            l = l.redAdd(l).redIAdd(l);
            var p = d.redIAdd(d),
                b = (p = p.redIAdd(p)).redAdd(p);
            e = l.redSqr().redISub(b), r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(f);
            var m = h.redSqr();
            m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m), t = l.redMul(p.redISub(e)).redISub(m)
        }
        return this.curve.jpoint(e, t, r)
    }, iu.prototype._dbl = function() {
        var e = this.curve.a,
            t = this.x,
            r = this.y,
            n = this.z,
            i = n.redSqr().redSqr(),
            o = t.redSqr(),
            a = r.redSqr(),
            s = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
            u = t.redAdd(t),
            c = (u = u.redIAdd(u)).redMul(a),
            f = s.redSqr().redISub(c.redAdd(c)),
            h = c.redISub(f),
            d = a.redSqr();
        d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
        var l = s.redMul(h).redISub(d),
            p = r.redAdd(r).redMul(n);
        return this.curve.jpoint(f, l, p)
    }, iu.prototype.trpl = function() {
        if (!this.curve.zeroA) return this.dbl().add(this);
        var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr(),
            n = t.redSqr(),
            i = e.redAdd(e).redIAdd(e),
            o = i.redSqr(),
            a = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
            s = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(o)).redSqr(),
            u = n.redIAdd(n);
        u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
        var c = i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(u),
            f = t.redMul(c);
        f = (f = f.redIAdd(f)).redIAdd(f);
        var h = this.x.redMul(s).redISub(f);
        h = (h = h.redIAdd(h)).redIAdd(h);
        var d = this.y.redMul(c.redMul(u.redISub(c)).redISub(a.redMul(s)));
        d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
        var l = this.z.redAdd(a).redSqr().redISub(r).redISub(s);
        return this.curve.jpoint(h, d, l)
    }, iu.prototype.mul = function(e, t) {
        return e = new vs(e, t), this.curve._wnafMul(this, e)
    }, iu.prototype.eq = function(e) {
        if ("affine" === e.type) return this.eq(e.toJ());
        if (this === e) return !0;
        var t = this.z.redSqr(),
            r = e.z.redSqr();
        if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
        var n = t.redMul(this.z),
            i = r.redMul(e.z);
        return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)
    }, iu.prototype.eqXToP = function(e) {
        var t = this.z.redSqr(),
            r = e.toRed(this.curve.red).redMul(t);
        if (0 === this.x.cmp(r)) return !0;
        for (var n = e.clone(), i = this.curve.redN.redMul(t);;) {
            if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
            if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0
        }
    }, iu.prototype.inspect = function() {
        return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
    }, iu.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0)
    }, yo(ou, Qs);
    var au = ou;

    function su(e, t, r) {
        Qs.BasePoint.call(this, e, "projective"), null === t && null === r ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new vs(t, 16), this.z = new vs(r, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
    }
    ou.prototype.validate = function(e) {
        var t = e.normalize().x,
            r = t.redSqr(),
            n = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
        return 0 === n.redSqrt().redSqr().cmp(n)
    }, yo(su, Qs.BasePoint), ou.prototype.decodePoint = function(e, t) {
        return this.point(Vs.toArray(e, t), 1)
    }, ou.prototype.point = function(e, t) {
        return new su(this, e, t)
    }, ou.prototype.pointFromJSON = function(e) {
        return su.fromJSON(this, e)
    }, su.prototype.precompute = function() {}, su.prototype._encode = function() {
        return this.getX().toArray("be", this.curve.p.byteLength())
    }, su.fromJSON = function(e, t) {
        return new su(e, t[0], t[1] || e.one)
    }, su.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }, su.prototype.isInfinity = function() {
        return 0 === this.z.cmpn(0)
    }, su.prototype.dbl = function() {
        var e = this.x.redAdd(this.z).redSqr(),
            t = this.x.redSub(this.z).redSqr(),
            r = e.redSub(t),
            n = e.redMul(t),
            i = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
        return this.curve.point(n, i)
    }, su.prototype.add = function() {
        throw new Error("Not supported on Montgomery curve")
    }, su.prototype.diffAdd = function(e, t) {
        var r = this.x.redAdd(this.z),
            n = this.x.redSub(this.z),
            i = e.x.redAdd(e.z),
            o = e.x.redSub(e.z).redMul(r),
            a = i.redMul(n),
            s = t.z.redMul(o.redAdd(a).redSqr()),
            u = t.x.redMul(o.redISub(a).redSqr());
        return this.curve.point(s, u)
    }, su.prototype.mul = function(e) {
        for (var t = e.clone(), r = this, n = this.curve.point(null, null), i = []; 0 !== t.cmpn(0); t.iushrn(1)) i.push(t.andln(1));
        for (var o = i.length - 1; o >= 0; o--) 0 === i[o] ? (r = r.diffAdd(n, this), n = n.dbl()) : (n = r.diffAdd(n, this), r = r.dbl());
        return n
    }, su.prototype.mulAdd = function() {
        throw new Error("Not supported on Montgomery curve")
    }, su.prototype.jumlAdd = function() {
        throw new Error("Not supported on Montgomery curve")
    }, su.prototype.eq = function(e) {
        return 0 === this.getX().cmp(e.getX())
    }, su.prototype.normalize = function() {
        return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
    }, su.prototype.getX = function() {
        return this.normalize(), this.x.fromRed()
    };
    var uu = Vs.assert;

    function cu(e) {
        this.twisted = 1 != (0 | e.a), this.mOneA = this.twisted && -1 == (0 | e.a), this.extended = this.mOneA, Qs.call(this, "edwards", e), this.a = new vs(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new vs(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new vs(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), uu(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | e.c)
    }
    yo(cu, Qs);
    var fu = cu;

    function hu(e, t, r, n, i) {
        Qs.BasePoint.call(this, e, "projective"), null === t && null === r && null === n ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new vs(t, 16), this.y = new vs(r, 16), this.z = n ? new vs(n, 16) : this.curve.one, this.t = i && new vs(i, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
    }
    cu.prototype._mulA = function(e) {
        return this.mOneA ? e.redNeg() : this.a.redMul(e)
    }, cu.prototype._mulC = function(e) {
        return this.oneC ? e : this.c.redMul(e)
    }, cu.prototype.jpoint = function(e, t, r, n) {
        return this.point(e, t, r, n)
    }, cu.prototype.pointFromX = function(e, t) {
        (e = new vs(e, 16)).red || (e = e.toRed(this.red));
        var r = e.redSqr(),
            n = this.c2.redSub(this.a.redMul(r)),
            i = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
            o = n.redMul(i.redInvm()),
            a = o.redSqrt();
        if (0 !== a.redSqr().redSub(o).cmp(this.zero)) throw new Error("invalid point");
        var s = a.fromRed().isOdd();
        return (t && !s || !t && s) && (a = a.redNeg()), this.point(e, a)
    }, cu.prototype.pointFromY = function(e, t) {
        (e = new vs(e, 16)).red || (e = e.toRed(this.red));
        var r = e.redSqr(),
            n = r.redSub(this.c2),
            i = r.redMul(this.d).redMul(this.c2).redSub(this.a),
            o = n.redMul(i.redInvm());
        if (0 === o.cmp(this.zero)) {
            if (t) throw new Error("invalid point");
            return this.point(this.zero, e)
        }
        var a = o.redSqrt();
        if (0 !== a.redSqr().redSub(o).cmp(this.zero)) throw new Error("invalid point");
        return a.fromRed().isOdd() !== t && (a = a.redNeg()), this.point(a, e)
    }, cu.prototype.validate = function(e) {
        if (e.isInfinity()) return !0;
        e.normalize();
        var t = e.x.redSqr(),
            r = e.y.redSqr(),
            n = t.redMul(this.a).redAdd(r),
            i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
        return 0 === n.cmp(i)
    }, yo(hu, Qs.BasePoint), cu.prototype.pointFromJSON = function(e) {
        return hu.fromJSON(this, e)
    }, cu.prototype.point = function(e, t, r, n) {
        return new hu(this, e, t, r, n)
    }, hu.fromJSON = function(e, t) {
        return new hu(e, t[0], t[1], t[2])
    }, hu.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }, hu.prototype.isInfinity = function() {
        return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
    }, hu.prototype._extDbl = function() {
        var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr();
        r = r.redIAdd(r);
        var n = this.curve._mulA(e),
            i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
            o = n.redAdd(t),
            a = o.redSub(r),
            s = n.redSub(t),
            u = i.redMul(a),
            c = o.redMul(s),
            f = i.redMul(s),
            h = a.redMul(o);
        return this.curve.point(u, c, h, f)
    }, hu.prototype._projDbl = function() {
        var e, t, r, n = this.x.redAdd(this.y).redSqr(),
            i = this.x.redSqr(),
            o = this.y.redSqr();
        if (this.curve.twisted) {
            var a = (c = this.curve._mulA(i)).redAdd(o);
            if (this.zOne) e = n.redSub(i).redSub(o).redMul(a.redSub(this.curve.two)), t = a.redMul(c.redSub(o)), r = a.redSqr().redSub(a).redSub(a);
            else {
                var s = this.z.redSqr(),
                    u = a.redSub(s).redISub(s);
                e = n.redSub(i).redISub(o).redMul(u), t = a.redMul(c.redSub(o)), r = a.redMul(u)
            }
        } else {
            var c = i.redAdd(o);
            s = this.curve._mulC(this.z).redSqr(), u = c.redSub(s).redSub(s);
            e = this.curve._mulC(n.redISub(c)).redMul(u), t = this.curve._mulC(c).redMul(i.redISub(o)), r = c.redMul(u)
        }
        return this.curve.point(e, t, r)
    }, hu.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
    }, hu.prototype._extAdd = function(e) {
        var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            n = this.t.redMul(this.curve.dd).redMul(e.t),
            i = this.z.redMul(e.z.redAdd(e.z)),
            o = r.redSub(t),
            a = i.redSub(n),
            s = i.redAdd(n),
            u = r.redAdd(t),
            c = o.redMul(a),
            f = s.redMul(u),
            h = o.redMul(u),
            d = a.redMul(s);
        return this.curve.point(c, f, d, h)
    }, hu.prototype._projAdd = function(e) {
        var t, r, n = this.z.redMul(e.z),
            i = n.redSqr(),
            o = this.x.redMul(e.x),
            a = this.y.redMul(e.y),
            s = this.curve.d.redMul(o).redMul(a),
            u = i.redSub(s),
            c = i.redAdd(s),
            f = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(o).redISub(a),
            h = n.redMul(u).redMul(f);
        return this.curve.twisted ? (t = n.redMul(c).redMul(a.redSub(this.curve._mulA(o))), r = u.redMul(c)) : (t = n.redMul(c).redMul(a.redSub(o)), r = this.curve._mulC(u).redMul(c)), this.curve.point(h, t, r)
    }, hu.prototype.add = function(e) {
        return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
    }, hu.prototype.mul = function(e) {
        return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
    }, hu.prototype.mulAdd = function(e, t, r) {
        return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1)
    }, hu.prototype.jmulAdd = function(e, t, r) {
        return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0)
    }, hu.prototype.normalize = function() {
        if (this.zOne) return this;
        var e = this.z.redInvm();
        return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this
    }, hu.prototype.neg = function() {
        return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
    }, hu.prototype.getX = function() {
        return this.normalize(), this.x.fromRed()
    }, hu.prototype.getY = function() {
        return this.normalize(), this.y.fromRed()
    }, hu.prototype.eq = function(e) {
        return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY())
    }, hu.prototype.eqXToP = function(e) {
        var t = e.toRed(this.curve.red).redMul(this.z);
        if (0 === this.x.cmp(t)) return !0;
        for (var r = e.clone(), n = this.curve.redN.redMul(this.z);;) {
            if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
            if (t.redIAdd(n), 0 === this.x.cmp(t)) return !0
        }
    }, hu.prototype.toP = hu.prototype.normalize, hu.prototype.mixedAdd = hu.prototype.add;
    var du = i(function(e, t) {
        var r = t;
        r.base = Qs, r.short = ru, r.mont = au, r.edwards = fu
    });

    function lu(e, t) {
        return 55296 == (64512 & e.charCodeAt(t)) && (!(t < 0 || t + 1 >= e.length) && 56320 == (64512 & e.charCodeAt(t + 1)))
    }

    function pu(e) {
        return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0
    }

    function bu(e) {
        return 1 === e.length ? "0" + e : e
    }

    function mu(e) {
        return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e
    }
    var gu = {
        inherits: yo,
        toArray: function(e, t) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var r = [];
            if ("string" == typeof e)
                if (t) {
                    if ("hex" === t)
                        for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), i = 0; i < e.length; i += 2) r.push(parseInt(e[i] + e[i + 1], 16))
                } else
                    for (var n = 0, i = 0; i < e.length; i++) {
                        var o = e.charCodeAt(i);
                        o < 128 ? r[n++] = o : o < 2048 ? (r[n++] = o >> 6 | 192, r[n++] = 63 & o | 128) : lu(e, i) ? (o = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++i)), r[n++] = o >> 18 | 240, r[n++] = o >> 12 & 63 | 128, r[n++] = o >> 6 & 63 | 128, r[n++] = 63 & o | 128) : (r[n++] = o >> 12 | 224, r[n++] = o >> 6 & 63 | 128, r[n++] = 63 & o | 128)
                    } else
                        for (i = 0; i < e.length; i++) r[i] = 0 | e[i];
            return r
        },
        toHex: function(e) {
            for (var t = "", r = 0; r < e.length; r++) t += bu(e[r].toString(16));
            return t
        },
        htonl: pu,
        toHex32: function(e, t) {
            for (var r = "", n = 0; n < e.length; n++) {
                var i = e[n];
                "little" === t && (i = pu(i)), r += mu(i.toString(16))
            }
            return r
        },
        zero2: bu,
        zero8: mu,
        join32: function(e, t, r, n) {
            var i = r - t;
            Bs(i % 4 == 0);
            for (var o = new Array(i / 4), a = 0, s = t; a < o.length; a++, s += 4) {
                var u;
                u = "big" === n ? e[s] << 24 | e[s + 1] << 16 | e[s + 2] << 8 | e[s + 3] : e[s + 3] << 24 | e[s + 2] << 16 | e[s + 1] << 8 | e[s], o[a] = u >>> 0
            }
            return o
        },
        split32: function(e, t) {
            for (var r = new Array(4 * e.length), n = 0, i = 0; n < e.length; n++, i += 4) {
                var o = e[n];
                "big" === t ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o)
            }
            return r
        },
        rotr32: function(e, t) {
            return e >>> t | e << 32 - t
        },
        rotl32: function(e, t) {
            return e << t | e >>> 32 - t
        },
        sum32: function(e, t) {
            return e + t >>> 0
        },
        sum32_3: function(e, t, r) {
            return e + t + r >>> 0
        },
        sum32_4: function(e, t, r, n) {
            return e + t + r + n >>> 0
        },
        sum32_5: function(e, t, r, n, i) {
            return e + t + r + n + i >>> 0
        },
        sum64: function(e, t, r, n) {
            var i = e[t],
                o = n + e[t + 1] >>> 0,
                a = (o < n ? 1 : 0) + r + i;
            e[t] = a >>> 0, e[t + 1] = o
        },
        sum64_hi: function(e, t, r, n) {
            return (t + n >>> 0 < t ? 1 : 0) + e + r >>> 0
        },
        sum64_lo: function(e, t, r, n) {
            return t + n >>> 0
        },
        sum64_4_hi: function(e, t, r, n, i, o, a, s) {
            var u = 0,
                c = t;
            return u += (c = c + n >>> 0) < t ? 1 : 0, u += (c = c + o >>> 0) < o ? 1 : 0, e + r + i + a + (u += (c = c + s >>> 0) < s ? 1 : 0) >>> 0
        },
        sum64_4_lo: function(e, t, r, n, i, o, a, s) {
            return t + n + o + s >>> 0
        },
        sum64_5_hi: function(e, t, r, n, i, o, a, s, u, c) {
            var f = 0,
                h = t;
            return f += (h = h + n >>> 0) < t ? 1 : 0, f += (h = h + o >>> 0) < o ? 1 : 0, f += (h = h + s >>> 0) < s ? 1 : 0, e + r + i + a + u + (f += (h = h + c >>> 0) < c ? 1 : 0) >>> 0
        },
        sum64_5_lo: function(e, t, r, n, i, o, a, s, u, c) {
            return t + n + o + s + c >>> 0
        },
        rotr64_hi: function(e, t, r) {
            return (t << 32 - r | e >>> r) >>> 0
        },
        rotr64_lo: function(e, t, r) {
            return (e << 32 - r | t >>> r) >>> 0
        },
        shr64_hi: function(e, t, r) {
            return e >>> r
        },
        shr64_lo: function(e, t, r) {
            return (e << 32 - r | t >>> r) >>> 0
        }
    };

    function vu() {
        this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
    }
    var yu = vu;
    vu.prototype.update = function(e, t) {
        if (e = gu.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
            var r = (e = this.pending).length % this._delta8;
            this.pending = e.slice(e.length - r, e.length), 0 === this.pending.length && (this.pending = null), e = gu.join32(e, 0, e.length - r, this.endian);
            for (var n = 0; n < e.length; n += this._delta32) this._update(e, n, n + this._delta32)
        }
        return this
    }, vu.prototype.digest = function(e) {
        return this.update(this._pad()), Bs(null === this.pending), this._digest(e)
    }, vu.prototype._pad = function() {
        var e = this.pendingTotal,
            t = this._delta8,
            r = t - (e + this.padLength) % t,
            n = new Array(r + this.padLength);
        n[0] = 128;
        for (var i = 1; i < r; i++) n[i] = 0;
        if (e <<= 3, "big" === this.endian) {
            for (var o = 8; o < this.padLength; o++) n[i++] = 0;
            n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = e >>> 24 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 8 & 255, n[i++] = 255 & e
        } else
            for (n[i++] = 255 & e, n[i++] = e >>> 8 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, o = 8; o < this.padLength; o++) n[i++] = 0;
        return n
    };
    var wu = {
            BlockHash: yu
        },
        _u = gu.rotr32;

    function Su(e, t, r) {
        return e & t ^ ~e & r
    }

    function ku(e, t, r) {
        return e & t ^ e & r ^ t & r
    }

    function Eu(e, t, r) {
        return e ^ t ^ r
    }
    var Iu = {
            ft_1: function(e, t, r, n) {
                return 0 === e ? Su(t, r, n) : 1 === e || 3 === e ? Eu(t, r, n) : 2 === e ? ku(t, r, n) : void 0
            },
            ch32: Su,
            maj32: ku,
            p32: Eu,
            s0_256: function(e) {
                return _u(e, 2) ^ _u(e, 13) ^ _u(e, 22)
            },
            s1_256: function(e) {
                return _u(e, 6) ^ _u(e, 11) ^ _u(e, 25)
            },
            g0_256: function(e) {
                return _u(e, 7) ^ _u(e, 18) ^ e >>> 3
            },
            g1_256: function(e) {
                return _u(e, 17) ^ _u(e, 19) ^ e >>> 10
            }
        },
        xu = gu.rotl32,
        Ou = gu.sum32,
        Tu = gu.sum32_5,
        Pu = Iu.ft_1,
        Au = wu.BlockHash,
        Mu = [1518500249, 1859775393, 2400959708, 3395469782];

    function Cu() {
        if (!(this instanceof Cu)) return new Cu;
        Au.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
    }
    gu.inherits(Cu, Au);
    var Lu = Cu;
    Cu.blockSize = 512, Cu.outSize = 160, Cu.hmacStrength = 80, Cu.padLength = 64, Cu.prototype._update = function(e, t) {
        for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
        for (; n < r.length; n++) r[n] = xu(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
        var i = this.h[0],
            o = this.h[1],
            a = this.h[2],
            s = this.h[3],
            u = this.h[4];
        for (n = 0; n < r.length; n++) {
            var c = ~~(n / 20),
                f = Tu(xu(i, 5), Pu(c, o, a, s), u, r[n], Mu[c]);
            u = s, s = a, a = xu(o, 30), o = i, i = f
        }
        this.h[0] = Ou(this.h[0], i), this.h[1] = Ou(this.h[1], o), this.h[2] = Ou(this.h[2], a), this.h[3] = Ou(this.h[3], s), this.h[4] = Ou(this.h[4], u)
    }, Cu.prototype._digest = function(e) {
        return "hex" === e ? gu.toHex32(this.h, "big") : gu.split32(this.h, "big")
    };
    var Ru = gu.sum32,
        Nu = gu.sum32_4,
        ju = gu.sum32_5,
        Uu = Iu.ch32,
        Du = Iu.maj32,
        Bu = Iu.s0_256,
        Hu = Iu.s1_256,
        Fu = Iu.g0_256,
        qu = Iu.g1_256,
        Vu = wu.BlockHash,
        zu = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

    function Ku() {
        if (!(this instanceof Ku)) return new Ku;
        Vu.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = zu, this.W = new Array(64)
    }
    gu.inherits(Ku, Vu);
    var Wu = Ku;

    function Ju() {
        if (!(this instanceof Ju)) return new Ju;
        Wu.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
    }
    Ku.blockSize = 512, Ku.outSize = 256, Ku.hmacStrength = 192, Ku.padLength = 64, Ku.prototype._update = function(e, t) {
        for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
        for (; n < r.length; n++) r[n] = Nu(qu(r[n - 2]), r[n - 7], Fu(r[n - 15]), r[n - 16]);
        var i = this.h[0],
            o = this.h[1],
            a = this.h[2],
            s = this.h[3],
            u = this.h[4],
            c = this.h[5],
            f = this.h[6],
            h = this.h[7];
        for (Bs(this.k.length === r.length), n = 0; n < r.length; n++) {
            var d = ju(h, Hu(u), Uu(u, c, f), this.k[n], r[n]),
                l = Ru(Bu(i), Du(i, o, a));
            h = f, f = c, c = u, u = Ru(s, d), s = a, a = o, o = i, i = Ru(d, l)
        }
        this.h[0] = Ru(this.h[0], i), this.h[1] = Ru(this.h[1], o), this.h[2] = Ru(this.h[2], a), this.h[3] = Ru(this.h[3], s), this.h[4] = Ru(this.h[4], u), this.h[5] = Ru(this.h[5], c), this.h[6] = Ru(this.h[6], f), this.h[7] = Ru(this.h[7], h)
    }, Ku.prototype._digest = function(e) {
        return "hex" === e ? gu.toHex32(this.h, "big") : gu.split32(this.h, "big")
    }, gu.inherits(Ju, Wu);
    var Gu = Ju;
    Ju.blockSize = 512, Ju.outSize = 224, Ju.hmacStrength = 192, Ju.padLength = 64, Ju.prototype._digest = function(e) {
        return "hex" === e ? gu.toHex32(this.h.slice(0, 7), "big") : gu.split32(this.h.slice(0, 7), "big")
    };
    var Xu = gu.rotr64_hi,
        Yu = gu.rotr64_lo,
        $u = gu.shr64_hi,
        Qu = gu.shr64_lo,
        Zu = gu.sum64,
        ec = gu.sum64_hi,
        tc = gu.sum64_lo,
        rc = gu.sum64_4_hi,
        nc = gu.sum64_4_lo,
        ic = gu.sum64_5_hi,
        oc = gu.sum64_5_lo,
        ac = wu.BlockHash,
        sc = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

    function uc() {
        if (!(this instanceof uc)) return new uc;
        ac.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = sc, this.W = new Array(160)
    }
    gu.inherits(uc, ac);
    var cc = uc;

    function fc(e, t, r, n, i) {
        var o = e & r ^ ~e & i;
        return o < 0 && (o += 4294967296), o
    }

    function hc(e, t, r, n, i, o) {
        var a = t & n ^ ~t & o;
        return a < 0 && (a += 4294967296), a
    }

    function dc(e, t, r, n, i) {
        var o = e & r ^ e & i ^ r & i;
        return o < 0 && (o += 4294967296), o
    }

    function lc(e, t, r, n, i, o) {
        var a = t & n ^ t & o ^ n & o;
        return a < 0 && (a += 4294967296), a
    }

    function pc(e, t) {
        var r = Xu(e, t, 28) ^ Xu(t, e, 2) ^ Xu(t, e, 7);
        return r < 0 && (r += 4294967296), r
    }

    function bc(e, t) {
        var r = Yu(e, t, 28) ^ Yu(t, e, 2) ^ Yu(t, e, 7);
        return r < 0 && (r += 4294967296), r
    }

    function mc(e, t) {
        var r = Xu(e, t, 14) ^ Xu(e, t, 18) ^ Xu(t, e, 9);
        return r < 0 && (r += 4294967296), r
    }

    function gc(e, t) {
        var r = Yu(e, t, 14) ^ Yu(e, t, 18) ^ Yu(t, e, 9);
        return r < 0 && (r += 4294967296), r
    }

    function vc(e, t) {
        var r = Xu(e, t, 1) ^ Xu(e, t, 8) ^ $u(e, t, 7);
        return r < 0 && (r += 4294967296), r
    }

    function yc(e, t) {
        var r = Yu(e, t, 1) ^ Yu(e, t, 8) ^ Qu(e, t, 7);
        return r < 0 && (r += 4294967296), r
    }

    function wc(e, t) {
        var r = Xu(e, t, 19) ^ Xu(t, e, 29) ^ $u(e, t, 6);
        return r < 0 && (r += 4294967296), r
    }

    function _c(e, t) {
        var r = Yu(e, t, 19) ^ Yu(t, e, 29) ^ Qu(e, t, 6);
        return r < 0 && (r += 4294967296), r
    }

    function Sc() {
        if (!(this instanceof Sc)) return new Sc;
        cc.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
    }
    uc.blockSize = 1024, uc.outSize = 512, uc.hmacStrength = 192, uc.padLength = 128, uc.prototype._prepareBlock = function(e, t) {
        for (var r = this.W, n = 0; n < 32; n++) r[n] = e[t + n];
        for (; n < r.length; n += 2) {
            var i = wc(r[n - 4], r[n - 3]),
                o = _c(r[n - 4], r[n - 3]),
                a = r[n - 14],
                s = r[n - 13],
                u = vc(r[n - 30], r[n - 29]),
                c = yc(r[n - 30], r[n - 29]),
                f = r[n - 32],
                h = r[n - 31];
            r[n] = rc(i, o, a, s, u, c, f, h), r[n + 1] = nc(i, o, a, s, u, c, f, h)
        }
    }, uc.prototype._update = function(e, t) {
        this._prepareBlock(e, t);
        var r = this.W,
            n = this.h[0],
            i = this.h[1],
            o = this.h[2],
            a = this.h[3],
            s = this.h[4],
            u = this.h[5],
            c = this.h[6],
            f = this.h[7],
            h = this.h[8],
            d = this.h[9],
            l = this.h[10],
            p = this.h[11],
            b = this.h[12],
            m = this.h[13],
            g = this.h[14],
            v = this.h[15];
        Bs(this.k.length === r.length);
        for (var y = 0; y < r.length; y += 2) {
            var w = g,
                _ = v,
                S = mc(h, d),
                k = gc(h, d),
                E = fc(h, d, l, p, b),
                I = hc(h, d, l, p, b, m),
                x = this.k[y],
                O = this.k[y + 1],
                T = r[y],
                P = r[y + 1],
                A = ic(w, _, S, k, E, I, x, O, T, P),
                M = oc(w, _, S, k, E, I, x, O, T, P);
            w = pc(n, i), _ = bc(n, i), S = dc(n, i, o, a, s), k = lc(n, i, o, a, s, u);
            var C = ec(w, _, S, k),
                L = tc(w, _, S, k);
            g = b, v = m, b = l, m = p, l = h, p = d, h = ec(c, f, A, M), d = tc(f, f, A, M), c = s, f = u, s = o, u = a, o = n, a = i, n = ec(A, M, C, L), i = tc(A, M, C, L)
        }
        Zu(this.h, 0, n, i), Zu(this.h, 2, o, a), Zu(this.h, 4, s, u), Zu(this.h, 6, c, f), Zu(this.h, 8, h, d), Zu(this.h, 10, l, p), Zu(this.h, 12, b, m), Zu(this.h, 14, g, v)
    }, uc.prototype._digest = function(e) {
        return "hex" === e ? gu.toHex32(this.h, "big") : gu.split32(this.h, "big")
    }, gu.inherits(Sc, cc);
    var kc = Sc;
    Sc.blockSize = 1024, Sc.outSize = 384, Sc.hmacStrength = 192, Sc.padLength = 128, Sc.prototype._digest = function(e) {
        return "hex" === e ? gu.toHex32(this.h.slice(0, 12), "big") : gu.split32(this.h.slice(0, 12), "big")
    };
    var Ec = {
            sha1: Lu,
            sha224: Gu,
            sha256: Wu,
            sha384: kc,
            sha512: cc
        },
        Ic = gu.rotl32,
        xc = gu.sum32,
        Oc = gu.sum32_3,
        Tc = gu.sum32_4,
        Pc = wu.BlockHash;

    function Ac() {
        if (!(this instanceof Ac)) return new Ac;
        Pc.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
    }
    gu.inherits(Ac, Pc);
    var Mc = Ac;

    function Cc(e, t, r, n) {
        return e <= 15 ? t ^ r ^ n : e <= 31 ? t & r | ~t & n : e <= 47 ? (t | ~r) ^ n : e <= 63 ? t & n | r & ~n : t ^ (r | ~n)
    }

    function Lc(e) {
        return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838
    }

    function Rc(e) {
        return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0
    }
    Ac.blockSize = 512, Ac.outSize = 160, Ac.hmacStrength = 192, Ac.padLength = 64, Ac.prototype._update = function(e, t) {
        for (var r = this.h[0], n = this.h[1], i = this.h[2], o = this.h[3], a = this.h[4], s = r, u = n, c = i, f = o, h = a, d = 0; d < 80; d++) {
            var l = xc(Ic(Tc(r, Cc(d, n, i, o), e[Nc[d] + t], Lc(d)), Uc[d]), a);
            r = a, a = o, o = Ic(i, 10), i = n, n = l, l = xc(Ic(Tc(s, Cc(79 - d, u, c, f), e[jc[d] + t], Rc(d)), Dc[d]), h), s = h, h = f, f = Ic(c, 10), c = u, u = l
        }
        l = Oc(this.h[1], i, f), this.h[1] = Oc(this.h[2], o, h), this.h[2] = Oc(this.h[3], a, s), this.h[3] = Oc(this.h[4], r, u), this.h[4] = Oc(this.h[0], n, c), this.h[0] = l
    }, Ac.prototype._digest = function(e) {
        return "hex" === e ? gu.toHex32(this.h, "little") : gu.split32(this.h, "little")
    };
    var Nc = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
        jc = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
        Uc = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
        Dc = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
        Bc = {
            ripemd160: Mc
        };

    function Hc(e, t, r) {
        if (!(this instanceof Hc)) return new Hc(e, t, r);
        this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(gu.toArray(t, r))
    }
    var Fc = Hc;
    Hc.prototype._init = function(e) {
        e.length > this.blockSize && (e = (new this.Hash).update(e).digest()), Bs(e.length <= this.blockSize);
        for (var t = e.length; t < this.blockSize; t++) e.push(0);
        for (t = 0; t < e.length; t++) e[t] ^= 54;
        for (this.inner = (new this.Hash).update(e), t = 0; t < e.length; t++) e[t] ^= 106;
        this.outer = (new this.Hash).update(e)
    }, Hc.prototype.update = function(e, t) {
        return this.inner.update(e, t), this
    }, Hc.prototype.digest = function(e) {
        return this.outer.update(this.inner.digest()), this.outer.digest(e)
    };
    var qc = i(function(e, t) {
            var r = t;
            r.utils = gu, r.common = wu, r.sha = Ec, r.ripemd = Bc, r.hmac = Fc, r.sha1 = r.sha.sha1, r.sha256 = r.sha.sha256, r.sha224 = r.sha.sha224, r.sha384 = r.sha.sha384, r.sha512 = r.sha.sha512, r.ripemd160 = r.ripemd.ripemd160
        }),
        Vc = {
            doubles: {
                step: 4,
                points: [
                    ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                    ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                    ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                    ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                    ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                    ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                    ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                    ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                    ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                    ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                    ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                    ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                    ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                    ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                    ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                    ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                    ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                    ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                    ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                    ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                    ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                    ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                    ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                    ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                    ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                    ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                    ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                    ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                    ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                    ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                    ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                    ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                    ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                    ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                    ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                    ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                    ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                    ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                    ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                    ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                    ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                    ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                    ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                    ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                    ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                    ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                    ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                    ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                    ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                    ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                    ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                    ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                    ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                    ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                    ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                    ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                    ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                    ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                    ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                    ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                    ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                    ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                    ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                    ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                    ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
                ]
            },
            naf: {
                wnd: 7,
                points: [
                    ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                    ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                    ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                    ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                    ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                    ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                    ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                    ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                    ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                    ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                    ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                    ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                    ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                    ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                    ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                    ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                    ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                    ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                    ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                    ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                    ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                    ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                    ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                    ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                    ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                    ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                    ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                    ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                    ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                    ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                    ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                    ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                    ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                    ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                    ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                    ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                    ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                    ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                    ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                    ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                    ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                    ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                    ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                    ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                    ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                    ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                    ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                    ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                    ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                    ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                    ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                    ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                    ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                    ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                    ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                    ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                    ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                    ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                    ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                    ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                    ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                    ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                    ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                    ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                    ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                    ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                    ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                    ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                    ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                    ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                    ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                    ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                    ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                    ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                    ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                    ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                    ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                    ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                    ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                    ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                    ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                    ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                    ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                    ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                    ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                    ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                    ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                    ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                    ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                    ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                    ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                    ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                    ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                    ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                    ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                    ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                    ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                    ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                    ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                    ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                    ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                    ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                    ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                    ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                    ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                    ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                    ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                    ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                    ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                    ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                    ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                    ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                    ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                    ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                    ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                    ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                    ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                    ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                    ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                    ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                    ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                    ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                    ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                    ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                    ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                    ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                    ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
                ]
            }
        },
        zc = i(function(e, t) {
            var r, n = t,
                i = Vs.assert;

            function o(e) {
                "short" === e.type ? this.curve = new du.short(e) : "edwards" === e.type ? this.curve = new du.edwards(e) : this.curve = new du.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
            }

            function a(e, t) {
                Object.defineProperty(n, e, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        var r = new o(t);
                        return Object.defineProperty(n, e, {
                            configurable: !0,
                            enumerable: !0,
                            value: r
                        }), r
                    }
                })
            }
            n.PresetCurve = o, a("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: qc.sha256,
                gRed: !1,
                g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
            }), a("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: qc.sha256,
                gRed: !1,
                g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
            }), a("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: qc.sha256,
                gRed: !1,
                g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
            }), a("p384", {
                type: "short",
                prime: null,
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                hash: qc.sha384,
                gRed: !1,
                g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
            }), a("p521", {
                type: "short",
                prime: null,
                p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                hash: qc.sha512,
                gRed: !1,
                g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
            }), a("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "1",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: qc.sha256,
                gRed: !1,
                g: ["9"]
            }), a("ed25519", {
                type: "edwards",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: qc.sha256,
                gRed: !1,
                g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
            });
            try {
                r = Vc
            } catch (e) {
                r = void 0
            }
            a("secp256k1", {
                type: "short",
                prime: "k256",
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                a: "0",
                b: "7",
                n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                h: "1",
                hash: qc.sha256,
                beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                basis: [{
                    a: "3086d221a7d46bcde86c90e49284eb15",
                    b: "-e4437ed6010e88286f547fa90abfe4c3"
                }, {
                    a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                    b: "3086d221a7d46bcde86c90e49284eb15"
                }],
                gRed: !1,
                g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
            })
        });

    function Kc(e) {
        if (!(this instanceof Kc)) return new Kc(e);
        this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
        var t = qs.toArray(e.entropy, e.entropyEnc || "hex"),
            r = qs.toArray(e.nonce, e.nonceEnc || "hex"),
            n = qs.toArray(e.pers, e.persEnc || "hex");
        Bs(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, n)
    }
    var Wc = Kc;
    Kc.prototype._init = function(e, t, r) {
        var n = e.concat(t).concat(r);
        this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
        for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
        this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
    }, Kc.prototype._hmac = function() {
        return new qc.hmac(this.hash, this.K)
    }, Kc.prototype._update = function(e) {
        var t = this._hmac().update(this.V).update([0]);
        e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
    }, Kc.prototype.reseed = function(e, t, r, n) {
        "string" != typeof t && (n = r, r = t, t = null), e = qs.toArray(e, t), r = qs.toArray(r, n), Bs(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1
    }, Kc.prototype.generate = function(e, t, r, n) {
        if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
        "string" != typeof t && (n = r, r = t, t = null), r && (r = qs.toArray(r, n || "hex"), this._update(r));
        for (var i = []; i.length < e;) this.V = this._hmac().update(this.V).digest(), i = i.concat(this.V);
        var o = i.slice(0, e);
        return this._update(r), this._reseed++, qs.encode(o, t)
    };
    var Jc = Vs.assert;

    function Gc(e, t) {
        this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
    }
    var Xc = Gc;
    Gc.fromPublic = function(e, t, r) {
        return t instanceof Gc ? t : new Gc(e, {
            pub: t,
            pubEnc: r
        })
    }, Gc.fromPrivate = function(e, t, r) {
        return t instanceof Gc ? t : new Gc(e, {
            priv: t,
            privEnc: r
        })
    }, Gc.prototype.validate = function() {
        var e = this.getPublic();
        return e.isInfinity() ? {
            result: !1,
            reason: "Invalid public key"
        } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
            result: !0,
            reason: null
        } : {
            result: !1,
            reason: "Public key * N != O"
        } : {
            result: !1,
            reason: "Public key is not a point"
        }
    }, Gc.prototype.getPublic = function(e, t) {
        return "string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub
    }, Gc.prototype.getPrivate = function(e) {
        return "hex" === e ? this.priv.toString(16, 2) : this.priv
    }, Gc.prototype._importPrivate = function(e, t) {
        this.priv = new vs(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n)
    }, Gc.prototype._importPublic = function(e, t) {
        if (e.x || e.y) return "mont" === this.ec.curve.type ? Jc(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || Jc(e.x && e.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(e.x, e.y));
        this.pub = this.ec.curve.decodePoint(e, t)
    }, Gc.prototype.derive = function(e) {
        return e.mul(this.priv).getX()
    }, Gc.prototype.sign = function(e, t, r) {
        return this.ec.sign(e, this, t, r)
    }, Gc.prototype.verify = function(e, t) {
        return this.ec.verify(e, t, this)
    }, Gc.prototype.inspect = function() {
        return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
    };
    var Yc = Vs.assert;

    function $c(e, t) {
        if (e instanceof $c) return e;
        this._importDER(e, t) || (Yc(e.r && e.s, "Signature without r or s"), this.r = new vs(e.r, 16), this.s = new vs(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
    }
    var Qc = $c;

    function Zc() {
        this.place = 0
    }

    function ef(e, t) {
        var r = e[t.place++];
        if (!(128 & r)) return r;
        for (var n = 15 & r, i = 0, o = 0, a = t.place; o < n; o++, a++) i <<= 8, i |= e[a];
        return t.place = a, i
    }

    function tf(e) {
        for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;) t++;
        return 0 === t ? e : e.slice(t)
    }

    function rf(e, t) {
        if (t < 128) e.push(t);
        else {
            var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
            for (e.push(128 | r); --r;) e.push(t >>> (r << 3) & 255);
            e.push(t)
        }
    }
    $c.prototype._importDER = function(e, t) {
        e = Vs.toArray(e, t);
        var r = new Zc;
        if (48 !== e[r.place++]) return !1;
        if (ef(e, r) + r.place !== e.length) return !1;
        if (2 !== e[r.place++]) return !1;
        var n = ef(e, r),
            i = e.slice(r.place, n + r.place);
        if (r.place += n, 2 !== e[r.place++]) return !1;
        var o = ef(e, r);
        if (e.length !== o + r.place) return !1;
        var a = e.slice(r.place, o + r.place);
        return 0 === i[0] && 128 & i[1] && (i = i.slice(1)), 0 === a[0] && 128 & a[1] && (a = a.slice(1)), this.r = new vs(i), this.s = new vs(a), this.recoveryParam = null, !0
    }, $c.prototype.toDER = function(e) {
        var t = this.r.toArray(),
            r = this.s.toArray();
        for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = tf(t), r = tf(r); !(r[0] || 128 & r[1]);) r = r.slice(1);
        var n = [2];
        rf(n, t.length), (n = n.concat(t)).push(2), rf(n, r.length);
        var i = n.concat(r),
            o = [48];
        return rf(o, i.length), o = o.concat(i), Vs.encode(o, e)
    };
    var nf = Vs.assert;

    function of(e) {
        if (!(this instanceof of)) return new of(e);
        "string" == typeof e && (nf(zc.hasOwnProperty(e), "Unknown curve " + e), e = zc[e]), e instanceof zc.PresetCurve && (e = {
            curve: e
        }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
    }
    var af = of;
    of.prototype.keyPair = function(e) {
        return new Xc(this, e)
    }, of.prototype.keyFromPrivate = function(e, t) {
        return Xc.fromPrivate(this, e, t)
    }, of.prototype.keyFromPublic = function(e, t) {
        return Xc.fromPublic(this, e, t)
    }, of.prototype.genKeyPair = function(e) {
        e || (e = {});
        for (var t = new Wc({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || zs(this.hash.hmacStrength),
                entropyEnc: e.entropy && e.entropyEnc || "utf8",
                nonce: this.n.toArray()
            }), r = this.n.byteLength(), n = this.n.sub(new vs(2));;) {
            var i = new vs(t.generate(r));
            if (!(i.cmp(n) > 0)) return i.iaddn(1), this.keyFromPrivate(i)
        }
    }, of.prototype._truncateToN = function(e, t) {
        var r = 8 * e.byteLength() - this.n.bitLength();
        return r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
    }, of.prototype.sign = function(e, t, r, n) {
        "object" == typeof r && (n = r, r = null), n || (n = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new vs(e, 16));
        for (var i = this.n.byteLength(), o = t.getPrivate().toArray("be", i), a = e.toArray("be", i), s = new Wc({
                hash: this.hash,
                entropy: o,
                nonce: a,
                pers: n.pers,
                persEnc: n.persEnc || "utf8"
            }), u = this.n.sub(new vs(1)), c = 0;; c++) {
            var f = n.k ? n.k(c) : new vs(s.generate(this.n.byteLength()));
            if (!((f = this._truncateToN(f, !0)).cmpn(1) <= 0 || f.cmp(u) >= 0)) {
                var h = this.g.mul(f);
                if (!h.isInfinity()) {
                    var d = h.getX(),
                        l = d.umod(this.n);
                    if (0 !== l.cmpn(0)) {
                        var p = f.invm(this.n).mul(l.mul(t.getPrivate()).iadd(e));
                        if (0 !== (p = p.umod(this.n)).cmpn(0)) {
                            var b = (h.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(l) ? 2 : 0);
                            return n.canonical && p.cmp(this.nh) > 0 && (p = this.n.sub(p), b ^= 1), new Qc({
                                r: l,
                                s: p,
                                recoveryParam: b
                            })
                        }
                    }
                }
            }
        }
    }, of.prototype.verify = function(e, t, r, n) {
        e = this._truncateToN(new vs(e, 16)), r = this.keyFromPublic(r, n);
        var i = (t = new Qc(t, "hex")).r,
            o = t.s;
        if (i.cmpn(1) < 0 || i.cmp(this.n) >= 0) return !1;
        if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
        var a, s = o.invm(this.n),
            u = s.mul(e).umod(this.n),
            c = s.mul(i).umod(this.n);
        return this.curve._maxwellTrick ? !(a = this.g.jmulAdd(u, r.getPublic(), c)).isInfinity() && a.eqXToP(i) : !(a = this.g.mulAdd(u, r.getPublic(), c)).isInfinity() && 0 === a.getX().umod(this.n).cmp(i)
    }, of.prototype.recoverPubKey = function(e, t, r, n) {
        nf((3 & r) === r, "The recovery param is more than two bits"), t = new Qc(t, n);
        var i = this.n,
            o = new vs(e),
            a = t.r,
            s = t.s,
            u = 1 & r,
            c = r >> 1;
        if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && c) throw new Error("Unable to find sencond key candinate");
        a = c ? this.curve.pointFromX(a.add(this.curve.n), u) : this.curve.pointFromX(a, u);
        var f = t.r.invm(i),
            h = i.sub(o).mul(f).umod(i),
            d = s.mul(f).umod(i);
        return this.g.mulAdd(h, a, d)
    }, of.prototype.getKeyRecoveryParam = function(e, t, r, n) {
        if (null !== (t = new Qc(t, n)).recoveryParam) return t.recoveryParam;
        for (var i = 0; i < 4; i++) {
            var o;
            try {
                o = this.recoverPubKey(e, t, i)
            } catch (e) {
                continue
            }
            if (o.eq(r)) return i
        }
        throw new Error("Unable to find valid recovery factor")
    };
    var sf = Vs.assert,
        uf = Vs.parseBytes,
        cf = Vs.cachedProperty;

    function ff(e, t) {
        this.eddsa = e, this._secret = uf(t.secret), e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = uf(t.pub)
    }
    ff.fromPublic = function(e, t) {
        return t instanceof ff ? t : new ff(e, {
            pub: t
        })
    }, ff.fromSecret = function(e, t) {
        return t instanceof ff ? t : new ff(e, {
            secret: t
        })
    }, ff.prototype.secret = function() {
        return this._secret
    }, cf(ff, "pubBytes", function() {
        return this.eddsa.encodePoint(this.pub())
    }), cf(ff, "pub", function() {
        return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
    }), cf(ff, "privBytes", function() {
        var e = this.eddsa,
            t = this.hash(),
            r = e.encodingLength - 1,
            n = t.slice(0, e.encodingLength);
        return n[0] &= 248, n[r] &= 127, n[r] |= 64, n
    }), cf(ff, "priv", function() {
        return this.eddsa.decodeInt(this.privBytes())
    }), cf(ff, "hash", function() {
        return this.eddsa.hash().update(this.secret()).digest()
    }), cf(ff, "messagePrefix", function() {
        return this.hash().slice(this.eddsa.encodingLength)
    }), ff.prototype.sign = function(e) {
        return sf(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this)
    }, ff.prototype.verify = function(e, t) {
        return this.eddsa.verify(e, t, this)
    }, ff.prototype.getSecret = function(e) {
        return sf(this._secret, "KeyPair is public only"), Vs.encode(this.secret(), e)
    }, ff.prototype.getPublic = function(e) {
        return Vs.encode(this.pubBytes(), e)
    };
    var hf = ff,
        df = Vs.assert,
        lf = Vs.cachedProperty,
        pf = Vs.parseBytes;

    function bf(e, t) {
        this.eddsa = e, "object" != typeof t && (t = pf(t)), Array.isArray(t) && (t = {
            R: t.slice(0, e.encodingLength),
            S: t.slice(e.encodingLength)
        }), df(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof vs && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded
    }
    lf(bf, "S", function() {
        return this.eddsa.decodeInt(this.Sencoded())
    }), lf(bf, "R", function() {
        return this.eddsa.decodePoint(this.Rencoded())
    }), lf(bf, "Rencoded", function() {
        return this.eddsa.encodePoint(this.R())
    }), lf(bf, "Sencoded", function() {
        return this.eddsa.encodeInt(this.S())
    }), bf.prototype.toBytes = function() {
        return this.Rencoded().concat(this.Sencoded())
    }, bf.prototype.toHex = function() {
        return Vs.encode(this.toBytes(), "hex").toUpperCase()
    };
    var mf = bf,
        gf = Vs.assert,
        vf = Vs.parseBytes;

    function yf(e) {
        if (gf("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof yf)) return new yf(e);
        e = zc[e].curve;
        this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = qc.sha512
    }
    var wf = yf;
    yf.prototype.sign = function(e, t) {
        e = vf(e);
        var r = this.keyFromSecret(t),
            n = this.hashInt(r.messagePrefix(), e),
            i = this.g.mul(n),
            o = this.encodePoint(i),
            a = this.hashInt(o, r.pubBytes(), e).mul(r.priv()),
            s = n.add(a).umod(this.curve.n);
        return this.makeSignature({
            R: i,
            S: s,
            Rencoded: o
        })
    }, yf.prototype.verify = function(e, t, r) {
        e = vf(e), t = this.makeSignature(t);
        var n = this.keyFromPublic(r),
            i = this.hashInt(t.Rencoded(), n.pubBytes(), e),
            o = this.g.mul(t.S());
        return t.R().add(n.pub().mul(i)).eq(o)
    }, yf.prototype.hashInt = function() {
        for (var e = this.hash(), t = 0; t < arguments.length; t++) e.update(arguments[t]);
        return Vs.intFromLE(e.digest()).umod(this.curve.n)
    }, yf.prototype.keyFromPublic = function(e) {
        return hf.fromPublic(this, e)
    }, yf.prototype.keyFromSecret = function(e) {
        return hf.fromSecret(this, e)
    }, yf.prototype.makeSignature = function(e) {
        return e instanceof mf ? e : new mf(this, e)
    }, yf.prototype.encodePoint = function(e) {
        var t = e.getY().toArray("le", this.encodingLength);
        return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, t
    }, yf.prototype.decodePoint = function(e) {
        var t = (e = Vs.parseBytes(e)).length - 1,
            r = e.slice(0, t).concat(-129 & e[t]),
            n = 0 != (128 & e[t]),
            i = Vs.intFromLE(r);
        return this.curve.pointFromY(i, n)
    }, yf.prototype.encodeInt = function(e) {
        return e.toArray("le", this.encodingLength)
    }, yf.prototype.decodeInt = function(e) {
        return Vs.intFromLE(e)
    }, yf.prototype.isPoint = function(e) {
        return e instanceof this.pointClass
    };
    var _f = o(Ds),
        Sf = i(function(e, t) {
            var r = t;
            r.version = _f.version, r.utils = Vs, r.rand = zs, r.curve = du, r.curves = zc, r.ec = af, r.eddsa = wf
        });
    const kf = Le.alloc(1, 1),
        Ef = Le.alloc(1, 0);
    var If = function(e, t, r, n, i) {
        let o = Le.alloc(32, 0),
            a = Le.alloc(32, 1);
        o = fs("sha256", o).update(a).update(Ef).update(t).update(e).update(i || "").digest(), a = fs("sha256", o).update(a).digest(), o = fs("sha256", o).update(a).update(kf).update(t).update(e).update(i || "").digest(), a = fs("sha256", o).update(a).digest();
        let s = a = fs("sha256", o).update(a).digest();
        for (; !n(s) || !r(s);) o = fs("sha256", o).update(a).update(Ef).digest(), a = fs("sha256", o).update(a).digest(), s = a = fs("sha256", o).update(a).digest();
        return s
    };
    const xf = new(0, Sf.ec)("secp256k1"),
        Of = Le.alloc(32, 0),
        Tf = Le.from("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", "hex"),
        Pf = Le.from("fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f", "hex"),
        Af = xf.curve.n,
        Mf = Af.shrn(1),
        Cf = xf.curve.g,
        Lf = "Expected Private",
        Rf = "Expected Point",
        Nf = "Expected Tweak",
        jf = "Expected Hash",
        Uf = "Expected Signature",
        Df = "Expected Extra Data (32 bytes)";

    function Bf(e) {
        return mt(e) && 32 === e.length
    }

    function Hf(e) {
        return !!Bf(e) && e.compare(Tf) < 0
    }

    function Ff(e) {
        if (!mt(e)) return !1;
        if (e.length < 33) return !1;
        const t = e[0],
            r = e.slice(1, 33);
        if (0 === r.compare(Of)) return !1;
        if (r.compare(Pf) >= 0) return !1;
        if ((2 === t || 3 === t) && 33 === e.length) {
            try {
                Jf(e)
            } catch (e) {
                return !1
            }
            return !0
        }
        const n = e.slice(33);
        return 0 !== n.compare(Of) && (!(n.compare(Pf) >= 0) && (4 === t && 65 === e.length))
    }

    function qf(e) {
        return 4 !== e[0]
    }

    function Vf(e) {
        return !!Bf(e) && (e.compare(Of) > 0 && e.compare(Tf) < 0)
    }

    function zf(e, t) {
        return void 0 === e && void 0 !== t ? qf(t) : void 0 === e || e
    }

    function Kf(e) {
        return new vs(e)
    }

    function Wf(e) {
        return e.toArrayLike(Le, "be", 32)
    }

    function Jf(e) {
        return xf.curve.decodePoint(e)
    }

    function Gf(e, t) {
        return Le.from(e._encode(t))
    }

    function Xf(e, t, r) {
        if (!Bf(e)) throw new TypeError(jf);
        if (!Vf(t)) throw new TypeError(Lf);
        if (void 0 !== r && !Bf(r)) throw new TypeError(Df);
        const n = Kf(t),
            i = Kf(e);
        let o, a;
        If(e, t, function(e) {
            const t = Kf(e),
                r = Cf.mul(t);
            return !r.isInfinity() && (0 !== (o = r.x.umod(Af)).isZero() && 0 !== (a = t.invm(Af).mul(i.add(n.mul(o))).umod(Af)).isZero())
        }, Vf, r), a.cmp(Mf) > 0 && (a = Af.sub(a));
        const s = Le.allocUnsafe(64);
        return Wf(o).copy(s, 0), Wf(a).copy(s, 32), s
    }
    var Yf = {
            isPoint: Ff,
            isPointCompressed: function(e) {
                return !!Ff(e) && qf(e)
            },
            isPrivate: Vf,
            pointAdd: function(e, t, r) {
                if (!Ff(e)) throw new TypeError(Rf);
                if (!Ff(t)) throw new TypeError(Rf);
                const n = Jf(e),
                    i = Jf(t),
                    o = n.add(i);
                return o.isInfinity() ? null : Gf(o, zf(r, e))
            },
            pointAddScalar: function(e, t, r) {
                if (!Ff(e)) throw new TypeError(Rf);
                if (!Hf(t)) throw new TypeError(Nf);
                const n = zf(r, e),
                    i = Jf(e);
                if (0 === t.compare(Of)) return Gf(i, n);
                const o = Kf(t),
                    a = Cf.mul(o),
                    s = i.add(a);
                return s.isInfinity() ? null : Gf(s, n)
            },
            pointCompress: function(e, t) {
                if (!Ff(e)) throw new TypeError(Rf);
                const r = Jf(e);
                if (r.isInfinity()) throw new TypeError(Rf);
                return Gf(r, t)
            },
            pointFromScalar: function(e, t) {
                if (!Vf(e)) throw new TypeError(Lf);
                const r = Kf(e),
                    n = Cf.mul(r);
                return n.isInfinity() ? null : Gf(n, zf(t))
            },
            pointMultiply: function(e, t, r) {
                if (!Ff(e)) throw new TypeError(Rf);
                if (!Hf(t)) throw new TypeError(Nf);
                const n = zf(r, e),
                    i = Jf(e),
                    o = Kf(t),
                    a = i.mul(o);
                return a.isInfinity() ? null : Gf(a, n)
            },
            privateAdd: function(e, t) {
                if (!Vf(e)) throw new TypeError(Lf);
                if (!Hf(t)) throw new TypeError(Nf);
                const r = Kf(e),
                    n = Kf(t),
                    i = Wf(r.add(n).umod(Af));
                return Vf(i) ? i : null
            },
            privateSub: function(e, t) {
                if (!Vf(e)) throw new TypeError(Lf);
                if (!Hf(t)) throw new TypeError(Nf);
                const r = Kf(e),
                    n = Kf(t),
                    i = Wf(r.sub(n).umod(Af));
                return Vf(i) ? i : null
            },
            sign: function(e, t) {
                return Xf(e, t)
            },
            signWithEntropy: function(e, t, r) {
                return Xf(e, t, r)
            },
            verify: function(e, t, r) {
                if (!Bf(e)) throw new TypeError(jf);
                if (!Ff(t)) throw new TypeError(Rf);
                if (! function(e) {
                        const t = e.slice(0, 32),
                            r = e.slice(32, 64);
                        return mt(e) && 64 === e.length && t.compare(Tf) < 0 && r.compare(Tf) < 0
                    }(r)) throw new TypeError(Uf);
                const n = Jf(t),
                    i = Kf(r.slice(0, 32)),
                    o = Kf(r.slice(32, 64));
                if (i.gtn(0) <= 0) return !1;
                if (o.gtn(0) <= 0) return !1;
                const a = Kf(e),
                    s = o.invm(Af),
                    u = a.mul(s).umod(Af),
                    c = i.mul(s).umod(Af),
                    f = Cf.mulAdd(u, n, c);
                return !f.isInfinity() && f.x.umod(Af).eq(i)
            }
        },
        $f = {
            Array: function(e) {
                return null != e && e.constructor === Array
            },
            Boolean: function(e) {
                return "boolean" == typeof e
            },
            Function: function(e) {
                return "function" == typeof e
            },
            Nil: function(e) {
                return null == e
            },
            Number: function(e) {
                return "number" == typeof e
            },
            Object: function(e) {
                return "object" == typeof e
            },
            String: function(e) {
                return "string" == typeof e
            },
            "": function() {
                return !0
            }
        };
    for (var Qf in $f.Null = $f.Nil, $f) $f[Qf].toJSON = function(e) {
        return e
    }.bind(null, Qf);
    var Zf = $f;

    function eh(e) {
        return e.name || e.toString().match(/function (.*?)\s*\(/)[1]
    }

    function th(e) {
        return Zf.Nil(e) ? "" : eh(e.constructor)
    }

    function rh(e, t) {
        Error.captureStackTrace && Error.captureStackTrace(e, t)
    }

    function nh(e) {
        return Zf.Function(e) ? e.toJSON ? e.toJSON() : eh(e) : Zf.Array(e) ? "Array" : e && Zf.Object(e) ? "Object" : void 0 !== e ? e : ""
    }

    function ih(e, t, r) {
        var n = function(e) {
            return Zf.Function(e) ? "" : Zf.String(e) ? JSON.stringify(e) : e && Zf.Object(e) ? "" : e
        }(t);
        return "Expected " + nh(e) + ", got" + ("" !== r ? " " + r : "") + ("" !== n ? " " + n : "")
    }

    function oh(e, t, r) {
        r = r || th(t), this.message = ih(e, t, r), rh(this, oh), this.__type = e, this.__value = t, this.__valueTypeName = r
    }

    function ah(e, t, r, n, i) {
        e ? (i = i || th(n), this.message = function(e, t, r, n, i) {
            var o = '" of type ';
            return "key" === t && (o = '" with key type '), ih('property "' + nh(r) + o + nh(e), n, i)
        }(e, r, t, n, i)) : this.message = 'Unexpected property "' + t + '"', rh(this, oh), this.__label = r, this.__property = t, this.__type = e, this.__value = n, this.__valueTypeName = i
    }
    oh.prototype = Object.create(Error.prototype), oh.prototype.constructor = oh, ah.prototype = Object.create(Error.prototype), ah.prototype.constructor = oh;
    var sh = {
        TfTypeError: oh,
        TfPropertyTypeError: ah,
        tfCustomError: function(e, t) {
            return new oh(e, {}, t)
        },
        tfSubError: function(e, t, r) {
            return e instanceof ah ? (t = t + "." + e.__property, e = new ah(e.__type, t, e.__label, e.__value, e.__valueTypeName)) : e instanceof oh && (e = new ah(e.__type, t, r, e.__value, e.__valueTypeName)), rh(e), e
        },
        tfJSON: nh,
        getValueTypeName: th
    };

    function uh(e) {
        return mt(e)
    }

    function ch(e) {
        return "string" == typeof e && /^([0-9a-f]{2})+$/i.test(e)
    }

    function fh(e, t) {
        var r = e.toJSON();

        function n(n) {
            if (!e(n)) return !1;
            if (n.length === t) return !0;
            throw sh.tfCustomError(r + "(Length: " + t + ")", r + "(Length: " + n.length + ")")
        }
        return n.toJSON = function() {
            return r
        }, n
    }
    var hh = fh.bind(null, Zf.Array),
        dh = fh.bind(null, uh),
        lh = fh.bind(null, ch),
        ph = fh.bind(null, Zf.String);
    var bh = Math.pow(2, 53) - 1;
    var mh = {
        ArrayN: hh,
        Buffer: uh,
        BufferN: dh,
        Finite: function(e) {
            return "number" == typeof e && isFinite(e)
        },
        Hex: ch,
        HexN: lh,
        Int8: function(e) {
            return e << 24 >> 24 === e
        },
        Int16: function(e) {
            return e << 16 >> 16 === e
        },
        Int32: function(e) {
            return (0 | e) === e
        },
        Int53: function(e) {
            return "number" == typeof e && e >= -bh && e <= bh && Math.floor(e) === e
        },
        Range: function(e, t, r) {
            function n(n, i) {
                return r(n, i) && n > e && n < t
            }
            return r = r || Zf.Number, n.toJSON = function() {
                return `${r.toJSON()} between [${e}, ${t}]`
            }, n
        },
        StringN: ph,
        UInt8: function(e) {
            return (255 & e) === e
        },
        UInt16: function(e) {
            return (65535 & e) === e
        },
        UInt32: function(e) {
            return e >>> 0 === e
        },
        UInt53: function(e) {
            return "number" == typeof e && e >= 0 && e <= bh && Math.floor(e) === e
        }
    };
    for (var gh in mh) mh[gh].toJSON = function(e) {
        return e
    }.bind(null, gh);
    var vh = mh,
        yh = sh.tfJSON,
        wh = sh.TfTypeError,
        _h = sh.TfPropertyTypeError,
        Sh = sh.tfSubError,
        kh = sh.getValueTypeName,
        Eh = {
            arrayOf: function(e, t) {
                function r(r, n) {
                    return !!Zf.Array(r) && (!Zf.Nil(r) && (!(void 0 !== t.minLength && r.length < t.minLength) && (!(void 0 !== t.maxLength && r.length > t.maxLength) && ((void 0 === t.length || r.length === t.length) && r.every(function(t, r) {
                        try {
                            return xh(e, t, n)
                        } catch (e) {
                            throw Sh(e, r)
                        }
                    })))))
                }
                return e = Ih(e), t = t || {}, r.toJSON = function() {
                    var r = "[" + yh(e) + "]";
                    return void 0 !== t.length ? r += "{" + t.length + "}" : void 0 === t.minLength && void 0 === t.maxLength || (r += "{" + (void 0 === t.minLength ? 0 : t.minLength) + "," + (void 0 === t.maxLength ? 1 / 0 : t.maxLength) + "}"), r
                }, r
            },
            maybe: function e(t) {
                function r(r, n) {
                    return Zf.Nil(r) || t(r, n, e)
                }
                return t = Ih(t), r.toJSON = function() {
                    return "?" + yh(t)
                }, r
            },
            map: function(e, t) {
                function r(r, n) {
                    if (!Zf.Object(r)) return !1;
                    if (Zf.Nil(r)) return !1;
                    for (var i in r) {
                        try {
                            t && xh(t, i, n)
                        } catch (e) {
                            throw Sh(e, i, "key")
                        }
                        try {
                            var o = r[i];
                            xh(e, o, n)
                        } catch (e) {
                            throw Sh(e, i)
                        }
                    }
                    return !0
                }
                return e = Ih(e), t && (t = Ih(t)), r.toJSON = t ? function() {
                    return "{" + yh(t) + ": " + yh(e) + "}"
                } : function() {
                    return "{" + yh(e) + "}"
                }, r
            },
            object: function(e) {
                var t = {};
                for (var r in e) t[r] = Ih(e[r]);

                function n(e, r) {
                    if (!Zf.Object(e)) return !1;
                    if (Zf.Nil(e)) return !1;
                    var n;
                    try {
                        for (n in t) {
                            xh(t[n], e[n], r)
                        }
                    } catch (e) {
                        throw Sh(e, n)
                    }
                    if (r)
                        for (n in e)
                            if (!t[n]) throw new _h(void 0, n);
                    return !0
                }
                return n.toJSON = function() {
                    return yh(t)
                }, n
            },
            anyOf: function() {
                var e = [].slice.call(arguments).map(Ih);

                function t(t, r) {
                    return e.some(function(e) {
                        try {
                            return xh(e, t, r)
                        } catch (e) {
                            return !1
                        }
                    })
                }
                return t.toJSON = function() {
                    return e.map(yh).join("|")
                }, t
            },
            allOf: function() {
                var e = [].slice.call(arguments).map(Ih);

                function t(t, r) {
                    return e.every(function(e) {
                        try {
                            return xh(e, t, r)
                        } catch (e) {
                            return !1
                        }
                    })
                }
                return t.toJSON = function() {
                    return e.map(yh).join(" & ")
                }, t
            },
            quacksLike: function(e) {
                function t(t) {
                    return e === kh(t)
                }
                return t.toJSON = function() {
                    return e
                }, t
            },
            tuple: function() {
                var e = [].slice.call(arguments).map(Ih);

                function t(t, r) {
                    return !Zf.Nil(t) && (!Zf.Nil(t.length) && ((!r || t.length === e.length) && e.every(function(e, n) {
                        try {
                            return xh(e, t[n], r)
                        } catch (e) {
                            throw Sh(e, n)
                        }
                    })))
                }
                return t.toJSON = function() {
                    return "(" + e.map(yh).join(", ") + ")"
                }, t
            },
            value: function(e) {
                function t(t) {
                    return t === e
                }
                return t.toJSON = function() {
                    return e
                }, t
            }
        };

    function Ih(e) {
        if (Zf.String(e)) return "?" === e[0] ? Eh.maybe(e.slice(1)) : Zf[e] || Eh.quacksLike(e);
        if (e && Zf.Object(e)) {
            if (Zf.Array(e)) {
                if (1 !== e.length) throw new TypeError("Expected compile() parameter of type Array of length 1");
                return Eh.arrayOf(e[0])
            }
            return Eh.object(e)
        }
        return Zf.Function(e) ? e : Eh.value(e)
    }

    function xh(e, t, r, n) {
        if (Zf.Function(e)) {
            if (e(t, r)) return !0;
            throw new wh(n || e, t)
        }
        return xh(Ih(e), t, r)
    }
    for (var Oh in Eh.oneOf = Eh.anyOf, Zf) xh[Oh] = Zf[Oh];
    for (Oh in Eh) xh[Oh] = Eh[Oh];
    for (Oh in vh) xh[Oh] = vh[Oh];
    xh.compile = Ih, xh.TfTypeError = wh, xh.TfPropertyTypeError = _h;
    var Th = xh;

    function Ph(e, t) {
        if (void 0 !== t && e[0] !== t) throw new Error("Invalid network version");
        if (33 === e.length) return {
            version: e[0],
            privateKey: e.slice(1, 33),
            compressed: !1
        };
        if (34 !== e.length) throw new Error("Invalid WIF length");
        if (1 !== e[33]) throw new Error("Invalid compression flag");
        return {
            version: e[0],
            privateKey: e.slice(1, 33),
            compressed: !0
        }
    }

    function Ah(e, t, r) {
        var n = new Le(r ? 34 : 33);
        return n.writeUInt8(e, 0), t.copy(n, 1), r && (n[33] = 1), n
    }
    var Mh = {
            decode: function(e, t) {
                return Ph(ms.decode(e), t)
            },
            decodeRaw: Ph,
            encode: function(e, t, r) {
                return "number" == typeof e ? ms.encode(Ah(e, t, r)) : ms.encode(Ah(e.version, e.privateKey, e.compressed))
            },
            encodeRaw: Ah
        },
        Ch = i(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = Th.BufferN(32),
                n = Th.compile({
                    wif: Th.UInt8,
                    bip32: {
                        public: Th.UInt32,
                        private: Th.UInt32
                    }
                }),
                i = {
                    wif: 128,
                    bip32: {
                        public: 76067358,
                        private: 76066276
                    }
                },
                o = 2147483648,
                a = Math.pow(2, 31) - 1;

            function s(e) {
                return Th.String(e) && null !== e.match(/^(m\/)?(\d+'?\/)*\d+'?$/)
            }

            function u(e) {
                return Th.UInt32(e) && e <= a
            }
            class c {
                constructor(e, t, r, i, o = 0, a = 0, s = 0) {
                    this.__D = e, this.__Q = t, this.chainCode = r, this.network = i, this.__DEPTH = o, this.__INDEX = a, this.__PARENT_FINGERPRINT = s, Th(n, i), this.lowR = !1
                }
                get depth() {
                    return this.__DEPTH
                }
                get index() {
                    return this.__INDEX
                }
                get parentFingerprint() {
                    return this.__PARENT_FINGERPRINT
                }
                get publicKey() {
                    return void 0 === this.__Q && (this.__Q = Yf.pointFromScalar(this.__D, !0)), this.__Q
                }
                get privateKey() {
                    return this.__D
                }
                get identifier() {
                    return hs.hash160(this.publicKey)
                }
                get fingerprint() {
                    return this.identifier.slice(0, 4)
                }
                isNeutered() {
                    return void 0 === this.__D
                }
                neutered() {
                    return d(this.publicKey, this.chainCode, this.network, this.depth, this.index, this.parentFingerprint)
                }
                toBase58() {
                    const e = this.network,
                        t = this.isNeutered() ? e.bip32.public : e.bip32.private,
                        r = Le.allocUnsafe(78);
                    return r.writeUInt32BE(t, 0), r.writeUInt8(this.depth, 4), r.writeUInt32BE(this.parentFingerprint, 5), r.writeUInt32BE(this.index, 9), this.chainCode.copy(r, 13), this.isNeutered() ? this.publicKey.copy(r, 45) : (r.writeUInt8(0, 45), this.privateKey.copy(r, 46)), ms.encode(r)
                }
                toWIF() {
                    if (!this.privateKey) throw new TypeError("Missing private key");
                    return Mh.encode(this.network.wif, this.privateKey, !0)
                }
                derive(e) {
                    Th(Th.UInt32, e);
                    const t = e >= o,
                        r = Le.allocUnsafe(37);
                    if (t) {
                        if (this.isNeutered()) throw new TypeError("Missing private key for hardened child key");
                        r[0] = 0, this.privateKey.copy(r, 1), r.writeUInt32BE(e, 33)
                    } else this.publicKey.copy(r, 0), r.writeUInt32BE(e, 33);
                    const n = hs.hmacSHA512(this.chainCode, r),
                        i = n.slice(0, 32),
                        a = n.slice(32);
                    if (!Yf.isPrivate(i)) return this.derive(e + 1);
                    let s;
                    if (this.isNeutered()) {
                        const t = Yf.pointAddScalar(this.publicKey, i, !0);
                        if (null === t) return this.derive(e + 1);
                        s = d(t, a, this.network, this.depth + 1, e, this.fingerprint.readUInt32BE(0))
                    } else {
                        const t = Yf.privateAdd(this.privateKey, i);
                        if (null == t) return this.derive(e + 1);
                        s = h(t, a, this.network, this.depth + 1, e, this.fingerprint.readUInt32BE(0))
                    }
                    return s
                }
                deriveHardened(e) {
                    return Th(u, e), this.derive(e + o)
                }
                derivePath(e) {
                    Th(s, e);
                    let t = e.split("/");
                    if ("m" === t[0]) {
                        if (this.parentFingerprint) throw new TypeError("Expected master, got child");
                        t = t.slice(1)
                    }
                    return t.reduce((e, t) => {
                        let r;
                        return "'" === t.slice(-1) ? (r = parseInt(t.slice(0, -1), 10), e.deriveHardened(r)) : (r = parseInt(t, 10), e.derive(r))
                    }, this)
                }
                sign(e, t) {
                    if (!this.privateKey) throw new Error("Missing private key");
                    if (void 0 === t && (t = this.lowR), !1 === t) return Yf.sign(e, this.privateKey); {
                        let t = Yf.sign(e, this.privateKey);
                        const r = Le.alloc(32, 0);
                        let n = 0;
                        for (; t[0] > 127;) n++, r.writeUIntLE(n, 0, 6), t = Yf.signWithEntropy(e, this.privateKey, r);
                        return t
                    }
                }
                verify(e, t) {
                    return Yf.verify(e, this.publicKey, t)
                }
            }

            function f(e, t, r) {
                return h(e, t, r)
            }

            function h(e, t, n, o, a, s) {
                if (Th({
                        privateKey: r,
                        chainCode: r
                    }, {
                        privateKey: e,
                        chainCode: t
                    }), n = n || i, !Yf.isPrivate(e)) throw new TypeError("Private key not in range [1, n)");
                return new c(e, void 0, t, n, o, a, s)
            }

            function d(e, t, n, o, a, s) {
                if (Th({
                        publicKey: Th.BufferN(33),
                        chainCode: r
                    }, {
                        publicKey: e,
                        chainCode: t
                    }), n = n || i, !Yf.isPoint(e)) throw new TypeError("Point is not on the curve");
                return new c(void 0, e, t, n, o, a, s)
            }
            t.fromBase58 = function(e, t) {
                const r = ms.decode(e);
                if (78 !== r.length) throw new TypeError("Invalid buffer length");
                t = t || i;
                const n = r.readUInt32BE(0);
                if (n !== t.bip32.private && n !== t.bip32.public) throw new TypeError("Invalid network version");
                const o = r[4],
                    a = r.readUInt32BE(5);
                if (0 === o && 0 !== a) throw new TypeError("Invalid parent fingerprint");
                const s = r.readUInt32BE(9);
                if (0 === o && 0 !== s) throw new TypeError("Invalid index");
                const u = r.slice(13, 45);
                let c;
                if (n === t.bip32.private) {
                    if (0 !== r.readUInt8(45)) throw new TypeError("Invalid private key");
                    c = h(r.slice(46, 78), u, t, o, s, a)
                } else {
                    c = d(r.slice(45, 78), u, t, o, s, a)
                }
                return c
            }, t.fromPrivateKey = f, t.fromPublicKey = function(e, t, r) {
                return d(e, t, r)
            }, t.fromSeed = function(e, t) {
                if (Th(Th.Buffer, e), e.length < 16) throw new TypeError("Seed should be at least 128 bits");
                if (e.length > 64) throw new TypeError("Seed should be at most 512 bits");
                t = t || i;
                const r = hs.hmacSHA512(Le.from("Bitcoin seed", "utf8"), e);
                return f(r.slice(0, 32), r.slice(32), t)
            }
        });
    n(Ch);
    Ch.fromBase58, Ch.fromPrivateKey, Ch.fromPublicKey, Ch.fromSeed;
    var Lh = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.fromSeed = Ch.fromSeed, t.fromBase58 = Ch.fromBase58, t.fromPublicKey = Ch.fromPublicKey, t.fromPrivateKey = Ch.fromPrivateKey
    });
    n(Lh);
    Lh.fromSeed, Lh.fromBase58, Lh.fromPublicKey, Lh.fromPrivateKey;
    var Rh = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.bitcoin = {
            messagePrefix: "Bitcoin Signed Message:\n",
            bech32: "bc",
            bip32: {
                public: 76067358,
                private: 76066276
            },
            pubKeyHash: 0,
            scriptHash: 5,
            wif: 128
        }, t.regtest = {
            messagePrefix: "Bitcoin Signed Message:\n",
            bech32: "bcrt",
            bip32: {
                public: 70617039,
                private: 70615956
            },
            pubKeyHash: 111,
            scriptHash: 196,
            wif: 239
        }, t.testnet = {
            messagePrefix: "Bitcoin Signed Message:\n",
            bech32: "tb",
            bip32: {
                public: 70617039,
                private: 70615956
            },
            pubKeyHash: 111,
            scriptHash: 196,
            wif: 239
        }
    });
    n(Rh);
    Rh.bitcoin, Rh.regtest, Rh.testnet;
    var Nh = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.decode = function(e, t, r) {
            t = t || 4, r = void 0 === r || r;
            const n = e.length;
            if (0 === n) return 0;
            if (n > t) throw new TypeError("Script number overflow");
            if (r && 0 == (127 & e[n - 1]) && (n <= 1 || 0 == (128 & e[n - 2]))) throw new Error("Non-minimally encoded script number");
            if (5 === n) {
                const t = e.readUInt32LE(0),
                    r = e.readUInt8(4);
                return 128 & r ? -(4294967296 * (-129 & r) + t) : 4294967296 * r + t
            }
            let i = 0;
            for (let t = 0; t < n; ++t) i |= e[t] << 8 * t;
            return 128 & e[n - 1] ? -(i & ~(128 << 8 * (n - 1))) : i
        }, t.encode = function(e) {
            let t = Math.abs(e);
            const r = (n = t) > 2147483647 ? 5 : n > 8388607 ? 4 : n > 32767 ? 3 : n > 127 ? 2 : n > 0 ? 1 : 0;
            var n;
            const i = Le.allocUnsafe(r),
                o = e < 0;
            for (let e = 0; e < r; ++e) i.writeUInt8(255 & t, e), t >>= 8;
            return 128 & i[r - 1] ? i.writeUInt8(o ? 128 : 0, r - 1) : o && (i[r - 1] |= 128), i
        }
    });
    n(Nh);
    Nh.decode, Nh.encode;
    var jh = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Math.pow(2, 31) - 1;

        function n(e) {
            return Th.String(e) && !!e.match(/^(m\/)?(\d+'?\/)*\d+'?$/)
        }
        t.UInt31 = function(e) {
            return Th.UInt32(e) && e <= r
        }, t.BIP32Path = n, n.toJSON = () => "BIP32 derivation path", t.Signer = function(e) {
            return (Th.Buffer(e.publicKey) || "function" == typeof e.getPublicKey) && "function" == typeof e.sign
        };
        const i = 21e14;
        t.Satoshi = function(e) {
            return Th.UInt53(e) && e <= i
        }, t.ECPoint = Th.quacksLike("Point"), t.Network = Th.compile({
            messagePrefix: Th.oneOf(Th.Buffer, Th.String),
            bip32: {
                public: Th.UInt32,
                private: Th.UInt32
            },
            pubKeyHash: Th.UInt8,
            scriptHash: Th.UInt8,
            wif: Th.UInt8
        }), t.Buffer256bit = Th.BufferN(32), t.Hash160bit = Th.BufferN(20), t.Hash256bit = Th.BufferN(32), t.Number = Th.Number, t.Array = Th.Array, t.Boolean = Th.Boolean, t.String = Th.String, t.Buffer = Th.Buffer, t.Hex = Th.Hex, t.maybe = Th.maybe, t.tuple = Th.tuple, t.UInt8 = Th.UInt8, t.UInt32 = Th.UInt32, t.Function = Th.Function, t.BufferN = Th.BufferN, t.Null = Th.Null, t.oneOf = Th.oneOf
    });
    n(jh);
    jh.UInt31, jh.BIP32Path, jh.Signer, jh.Satoshi, jh.ECPoint, jh.Network, jh.Buffer256bit, jh.Hash160bit, jh.Hash256bit, jh.Number, jh.Array, jh.Boolean, jh.String, jh.Buffer, jh.Hex, jh.maybe, jh.tuple, jh.UInt8, jh.UInt32, jh.Function, jh.BufferN, jh.Null, jh.oneOf;
    var Uh = wo.Buffer;
    var Dh = {
            check: function(e) {
                if (e.length < 8) return !1;
                if (e.length > 72) return !1;
                if (48 !== e[0]) return !1;
                if (e[1] !== e.length - 2) return !1;
                if (2 !== e[2]) return !1;
                var t = e[3];
                if (0 === t) return !1;
                if (5 + t >= e.length) return !1;
                if (2 !== e[4 + t]) return !1;
                var r = e[5 + t];
                return 0 !== r && (6 + t + r === e.length && (!(128 & e[4]) && (!(t > 1 && 0 === e[4] && !(128 & e[5])) && (!(128 & e[t + 6]) && !(r > 1 && 0 === e[t + 6] && !(128 & e[t + 7]))))))
            },
            decode: function(e) {
                if (e.length < 8) throw new Error("DER sequence length is too short");
                if (e.length > 72) throw new Error("DER sequence length is too long");
                if (48 !== e[0]) throw new Error("Expected DER sequence");
                if (e[1] !== e.length - 2) throw new Error("DER sequence length is invalid");
                if (2 !== e[2]) throw new Error("Expected DER integer");
                var t = e[3];
                if (0 === t) throw new Error("R length is zero");
                if (5 + t >= e.length) throw new Error("R length is too long");
                if (2 !== e[4 + t]) throw new Error("Expected DER integer (2)");
                var r = e[5 + t];
                if (0 === r) throw new Error("S length is zero");
                if (6 + t + r !== e.length) throw new Error("S length is invalid");
                if (128 & e[4]) throw new Error("R value is negative");
                if (t > 1 && 0 === e[4] && !(128 & e[5])) throw new Error("R value excessively padded");
                if (128 & e[t + 6]) throw new Error("S value is negative");
                if (r > 1 && 0 === e[t + 6] && !(128 & e[t + 7])) throw new Error("S value excessively padded");
                return {
                    r: e.slice(4, 4 + t),
                    s: e.slice(6 + t)
                }
            },
            encode: function(e, t) {
                var r = e.length,
                    n = t.length;
                if (0 === r) throw new Error("R length is zero");
                if (0 === n) throw new Error("S length is zero");
                if (r > 33) throw new Error("R length is too long");
                if (n > 33) throw new Error("S length is too long");
                if (128 & e[0]) throw new Error("R value is negative");
                if (128 & t[0]) throw new Error("S value is negative");
                if (r > 1 && 0 === e[0] && !(128 & e[1])) throw new Error("R value excessively padded");
                if (n > 1 && 0 === t[0] && !(128 & t[1])) throw new Error("S value excessively padded");
                var i = Uh.allocUnsafe(6 + r + n);
                return i[0] = 48, i[1] = i.length - 2, i[2] = 2, i[3] = e.length, e.copy(i, 4), i[4 + r] = 2, i[5 + r] = t.length, t.copy(i, 6 + r), i
            }
        },
        Bh = i(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = Le.alloc(1, 0);

            function n(e) {
                let t = 0;
                for (; 0 === e[t];) ++t;
                return t === e.length ? r : 128 & (e = e.slice(t))[0] ? Le.concat([r, e], 1 + e.length) : e
            }

            function i(e) {
                0 === e[0] && (e = e.slice(1));
                const t = Le.alloc(32, 0),
                    r = Math.max(0, 32 - e.length);
                return e.copy(t, r), t
            }
            t.decode = function(e) {
                const t = e.readUInt8(e.length - 1),
                    r = -129 & t;
                if (r <= 0 || r >= 4) throw new Error("Invalid hashType " + t);
                const n = Dh.decode(e.slice(0, -1)),
                    o = i(n.r),
                    a = i(n.s);
                return {
                    signature: Le.concat([o, a], 64),
                    hashType: t
                }
            }, t.encode = function(e, t) {
                Th({
                    signature: jh.BufferN(64),
                    hashType: jh.UInt8
                }, {
                    signature: e,
                    hashType: t
                });
                const r = -129 & t;
                if (r <= 0 || r >= 4) throw new Error("Invalid hashType " + t);
                const i = Le.allocUnsafe(1);
                i.writeUInt8(t, 0);
                const o = n(e.slice(0, 32)),
                    a = n(e.slice(32, 64));
                return Le.concat([Dh.encode(o, a), i])
            }
        });
    n(Bh);
    Bh.decode, Bh.encode;
    var Hh = {
            OP_FALSE: 0,
            OP_0: 0,
            OP_PUSHDATA1: 76,
            OP_PUSHDATA2: 77,
            OP_PUSHDATA4: 78,
            OP_1NEGATE: 79,
            OP_RESERVED: 80,
            OP_TRUE: 81,
            OP_1: 81,
            OP_2: 82,
            OP_3: 83,
            OP_4: 84,
            OP_5: 85,
            OP_6: 86,
            OP_7: 87,
            OP_8: 88,
            OP_9: 89,
            OP_10: 90,
            OP_11: 91,
            OP_12: 92,
            OP_13: 93,
            OP_14: 94,
            OP_15: 95,
            OP_16: 96,
            OP_NOP: 97,
            OP_VER: 98,
            OP_IF: 99,
            OP_NOTIF: 100,
            OP_VERIF: 101,
            OP_VERNOTIF: 102,
            OP_ELSE: 103,
            OP_ENDIF: 104,
            OP_VERIFY: 105,
            OP_RETURN: 106,
            OP_TOALTSTACK: 107,
            OP_FROMALTSTACK: 108,
            OP_2DROP: 109,
            OP_2DUP: 110,
            OP_3DUP: 111,
            OP_2OVER: 112,
            OP_2ROT: 113,
            OP_2SWAP: 114,
            OP_IFDUP: 115,
            OP_DEPTH: 116,
            OP_DROP: 117,
            OP_DUP: 118,
            OP_NIP: 119,
            OP_OVER: 120,
            OP_PICK: 121,
            OP_ROLL: 122,
            OP_ROT: 123,
            OP_SWAP: 124,
            OP_TUCK: 125,
            OP_CAT: 126,
            OP_SUBSTR: 127,
            OP_LEFT: 128,
            OP_RIGHT: 129,
            OP_SIZE: 130,
            OP_INVERT: 131,
            OP_AND: 132,
            OP_OR: 133,
            OP_XOR: 134,
            OP_EQUAL: 135,
            OP_EQUALVERIFY: 136,
            OP_RESERVED1: 137,
            OP_RESERVED2: 138,
            OP_1ADD: 139,
            OP_1SUB: 140,
            OP_2MUL: 141,
            OP_2DIV: 142,
            OP_NEGATE: 143,
            OP_ABS: 144,
            OP_NOT: 145,
            OP_0NOTEQUAL: 146,
            OP_ADD: 147,
            OP_SUB: 148,
            OP_MUL: 149,
            OP_DIV: 150,
            OP_MOD: 151,
            OP_LSHIFT: 152,
            OP_RSHIFT: 153,
            OP_BOOLAND: 154,
            OP_BOOLOR: 155,
            OP_NUMEQUAL: 156,
            OP_NUMEQUALVERIFY: 157,
            OP_NUMNOTEQUAL: 158,
            OP_LESSTHAN: 159,
            OP_GREATERTHAN: 160,
            OP_LESSTHANOREQUAL: 161,
            OP_GREATERTHANOREQUAL: 162,
            OP_MIN: 163,
            OP_MAX: 164,
            OP_WITHIN: 165,
            OP_RIPEMD160: 166,
            OP_SHA1: 167,
            OP_SHA256: 168,
            OP_HASH160: 169,
            OP_HASH256: 170,
            OP_CODESEPARATOR: 171,
            OP_CHECKSIG: 172,
            OP_CHECKSIGVERIFY: 173,
            OP_CHECKMULTISIG: 174,
            OP_CHECKMULTISIGVERIFY: 175,
            OP_NOP1: 176,
            OP_NOP2: 177,
            OP_CHECKLOCKTIMEVERIFY: 177,
            OP_NOP3: 178,
            OP_CHECKSEQUENCEVERIFY: 178,
            OP_NOP4: 179,
            OP_NOP5: 180,
            OP_NOP6: 181,
            OP_NOP7: 182,
            OP_NOP8: 183,
            OP_NOP9: 184,
            OP_NOP10: 185,
            OP_PUBKEYHASH: 253,
            OP_PUBKEY: 254,
            OP_INVALIDOPCODE: 255
        },
        Fh = o(Object.freeze({
            OP_FALSE: 0,
            OP_0: 0,
            OP_PUSHDATA1: 76,
            OP_PUSHDATA2: 77,
            OP_PUSHDATA4: 78,
            OP_1NEGATE: 79,
            OP_RESERVED: 80,
            OP_TRUE: 81,
            OP_1: 81,
            OP_2: 82,
            OP_3: 83,
            OP_4: 84,
            OP_5: 85,
            OP_6: 86,
            OP_7: 87,
            OP_8: 88,
            OP_9: 89,
            OP_10: 90,
            OP_11: 91,
            OP_12: 92,
            OP_13: 93,
            OP_14: 94,
            OP_15: 95,
            OP_16: 96,
            OP_NOP: 97,
            OP_VER: 98,
            OP_IF: 99,
            OP_NOTIF: 100,
            OP_VERIF: 101,
            OP_VERNOTIF: 102,
            OP_ELSE: 103,
            OP_ENDIF: 104,
            OP_VERIFY: 105,
            OP_RETURN: 106,
            OP_TOALTSTACK: 107,
            OP_FROMALTSTACK: 108,
            OP_2DROP: 109,
            OP_2DUP: 110,
            OP_3DUP: 111,
            OP_2OVER: 112,
            OP_2ROT: 113,
            OP_2SWAP: 114,
            OP_IFDUP: 115,
            OP_DEPTH: 116,
            OP_DROP: 117,
            OP_DUP: 118,
            OP_NIP: 119,
            OP_OVER: 120,
            OP_PICK: 121,
            OP_ROLL: 122,
            OP_ROT: 123,
            OP_SWAP: 124,
            OP_TUCK: 125,
            OP_CAT: 126,
            OP_SUBSTR: 127,
            OP_LEFT: 128,
            OP_RIGHT: 129,
            OP_SIZE: 130,
            OP_INVERT: 131,
            OP_AND: 132,
            OP_OR: 133,
            OP_XOR: 134,
            OP_EQUAL: 135,
            OP_EQUALVERIFY: 136,
            OP_RESERVED1: 137,
            OP_RESERVED2: 138,
            OP_1ADD: 139,
            OP_1SUB: 140,
            OP_2MUL: 141,
            OP_2DIV: 142,
            OP_NEGATE: 143,
            OP_ABS: 144,
            OP_NOT: 145,
            OP_0NOTEQUAL: 146,
            OP_ADD: 147,
            OP_SUB: 148,
            OP_MUL: 149,
            OP_DIV: 150,
            OP_MOD: 151,
            OP_LSHIFT: 152,
            OP_RSHIFT: 153,
            OP_BOOLAND: 154,
            OP_BOOLOR: 155,
            OP_NUMEQUAL: 156,
            OP_NUMEQUALVERIFY: 157,
            OP_NUMNOTEQUAL: 158,
            OP_LESSTHAN: 159,
            OP_GREATERTHAN: 160,
            OP_LESSTHANOREQUAL: 161,
            OP_GREATERTHANOREQUAL: 162,
            OP_MIN: 163,
            OP_MAX: 164,
            OP_WITHIN: 165,
            OP_RIPEMD160: 166,
            OP_SHA1: 167,
            OP_SHA256: 168,
            OP_HASH160: 169,
            OP_HASH256: 170,
            OP_CODESEPARATOR: 171,
            OP_CHECKSIG: 172,
            OP_CHECKSIGVERIFY: 173,
            OP_CHECKMULTISIG: 174,
            OP_CHECKMULTISIGVERIFY: 175,
            OP_NOP1: 176,
            OP_NOP2: 177,
            OP_CHECKLOCKTIMEVERIFY: 177,
            OP_NOP3: 178,
            OP_CHECKSEQUENCEVERIFY: 178,
            OP_NOP4: 179,
            OP_NOP5: 180,
            OP_NOP6: 181,
            OP_NOP7: 182,
            OP_NOP8: 183,
            OP_NOP9: 184,
            OP_NOP10: 185,
            OP_PUBKEYHASH: 253,
            OP_PUBKEY: 254,
            OP_INVALIDOPCODE: 255,
            default: Hh
        }));

    function qh(e) {
        return e < Fh.OP_PUSHDATA1 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5
    }
    var Vh = {
            encodingLength: qh,
            encode: function(e, t, r) {
                var n = qh(t);
                return 1 === n ? e.writeUInt8(t, r) : 2 === n ? (e.writeUInt8(Fh.OP_PUSHDATA1, r), e.writeUInt8(t, r + 1)) : 3 === n ? (e.writeUInt8(Fh.OP_PUSHDATA2, r), e.writeUInt16LE(t, r + 1)) : (e.writeUInt8(Fh.OP_PUSHDATA4, r), e.writeUInt32LE(t, r + 1)), n
            },
            decode: function(e, t) {
                var r, n, i = e.readUInt8(t);
                if (i < Fh.OP_PUSHDATA1) r = i, n = 1;
                else if (i === Fh.OP_PUSHDATA1) {
                    if (t + 2 > e.length) return null;
                    r = e.readUInt8(t + 1), n = 2
                } else if (i === Fh.OP_PUSHDATA2) {
                    if (t + 3 > e.length) return null;
                    r = e.readUInt16LE(t + 1), n = 3
                } else {
                    if (t + 5 > e.length) return null;
                    if (i !== Fh.OP_PUSHDATA4) throw new Error("Unexpected opcode");
                    r = e.readUInt32LE(t + 1), n = 5
                }
                return {
                    opcode: i,
                    number: r,
                    size: n
                }
            }
        },
        zh = {};
    for (var Kh in Fh) {
        zh[Fh[Kh]] = Kh
    }
    var Wh = zh,
        Jh = i(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OPS = Fh;
            const r = t.OPS.OP_RESERVED;

            function n(e) {
                return jh.Buffer(e) || function(e) {
                    return jh.Number(e) && (e === t.OPS.OP_0 || e >= t.OPS.OP_1 && e <= t.OPS.OP_16 || e === t.OPS.OP_1NEGATE)
                }(e)
            }

            function i(e) {
                return jh.Array(e) && e.every(n)
            }

            function o(e) {
                return 0 === e.length ? t.OPS.OP_0 : 1 === e.length ? e[0] >= 1 && e[0] <= 16 ? r + e[0] : 129 === e[0] ? t.OPS.OP_1NEGATE : void 0 : void 0
            }

            function a(e) {
                return mt(e)
            }

            function s(e) {
                return mt(e)
            }

            function u(e) {
                if (a(e)) return e;
                Th(jh.Array, e);
                const t = e.reduce((e, t) => s(t) ? 1 === t.length && void 0 !== o(t) ? e + 1 : e + Vh.encodingLength(t.length) + t.length : e + 1, 0),
                    r = Le.allocUnsafe(t);
                let n = 0;
                if (e.forEach(e => {
                        if (s(e)) {
                            const t = o(e);
                            if (void 0 !== t) return r.writeUInt8(t, n), void(n += 1);
                            n += Vh.encode(r, e.length, n), e.copy(r, n), n += e.length
                        } else r.writeUInt8(e, n), n += 1
                    }), n !== r.length) throw new Error("Could not decode chunks");
                return r
            }

            function c(e) {
                if (r = e, jh.Array(r)) return e;
                var r;
                Th(jh.Buffer, e);
                const n = [];
                let i = 0;
                for (; i < e.length;) {
                    const r = e[i];
                    if (r > t.OPS.OP_0 && r <= t.OPS.OP_PUSHDATA4) {
                        const t = Vh.decode(e, i);
                        if (null === t) return null;
                        if ((i += t.size) + t.number > e.length) return null;
                        const r = e.slice(i, i + t.number);
                        i += t.number;
                        const a = o(r);
                        void 0 !== a ? n.push(a) : n.push(r)
                    } else n.push(r), i += 1
                }
                return n
            }

            function f(e) {
                const t = -129 & e;
                return t > 0 && t < 4
            }
            t.isPushOnly = i, t.compile = u, t.decompile = c, t.toASM = function(e) {
                return a(e) && (e = c(e)), e.map(e => {
                    if (s(e)) {
                        const t = o(e);
                        if (void 0 === t) return e.toString("hex");
                        e = t
                    }
                    return Wh[e]
                }).join(" ")
            }, t.fromASM = function(e) {
                return Th(jh.String, e), u(e.split(" ").map(e => void 0 !== t.OPS[e] ? t.OPS[e] : (Th(jh.Hex, e), Le.from(e, "hex"))))
            }, t.toStack = function(e) {
                return e = c(e), Th(i, e), e.map(e => s(e) ? e : e === t.OPS.OP_0 ? Le.allocUnsafe(0) : Nh.encode(e - r))
            }, t.isCanonicalPubKey = function(e) {
                return Yf.isPoint(e)
            }, t.isDefinedHashType = f, t.isCanonicalScriptSignature = function(e) {
                return !!mt(e) && (!!f(e[e.length - 1]) && Dh.check(e.slice(0, -1)))
            }, t.number = Nh, t.signature = Bh
        });
    n(Jh);
    Jh.OPS, Jh.isPushOnly, Jh.compile, Jh.decompile, Jh.toASM, Jh.fromASM, Jh.toStack, Jh.isCanonicalPubKey, Jh.isDefinedHashType, Jh.isCanonicalScriptSignature, Jh.number, Jh.signature;
    var Gh = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.prop = function(e, t, r) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get() {
                    const e = r.call(this);
                    return this[t] = e, e
                },
                set(e) {
                    Object.defineProperty(this, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: e,
                        writable: !0
                    })
                }
            })
        }, t.value = function(e) {
            let t;
            return () => void 0 !== t ? t : t = e()
        }
    });
    n(Gh);
    Gh.prop, Gh.value;
    var Xh = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Jh.OPS;
        t.p2data = function(e, t) {
            if (!e.data && !e.output) throw new TypeError("Not enough data");
            t = Object.assign({
                validate: !0
            }, t || {}), Th({
                network: Th.maybe(Th.Object),
                output: Th.maybe(Th.Buffer),
                data: Th.maybe(Th.arrayOf(Th.Buffer))
            }, e);
            const n = {
                name: "embed",
                network: e.network || Rh.bitcoin
            };
            if (Gh.prop(n, "output", () => {
                    if (e.data) return Jh.compile([r.OP_RETURN].concat(e.data))
                }), Gh.prop(n, "data", () => {
                    if (e.output) return Jh.decompile(e.output).slice(1)
                }), t.validate && e.output) {
                const t = Jh.decompile(e.output);
                if (t[0] !== r.OP_RETURN) throw new TypeError("Output is invalid");
                if (!t.slice(1).every(Th.Buffer)) throw new TypeError("Output is invalid");
                if (e.data && ! function(e, t) {
                        return e.length === t.length && e.every((e, r) => e.equals(t[r]))
                    }(e.data, n.data)) throw new TypeError("Data mismatch")
            }
            return Object.assign(n, e)
        }
    });
    n(Xh);
    Xh.p2data;
    var Yh = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Jh.OPS,
            n = r.OP_RESERVED;

        function i(e, t) {
            return e.length === t.length && e.every((e, r) => e.equals(t[r]))
        }
        t.p2ms = function(e, t) {
            if (!(e.input || e.output || e.pubkeys && void 0 !== e.m || e.signatures)) throw new TypeError("Not enough data");

            function o(e) {
                return Jh.isCanonicalScriptSignature(e) || void 0 !== (t.allowIncomplete && e === r.OP_0)
            }
            t = Object.assign({
                validate: !0
            }, t || {}), Th({
                network: Th.maybe(Th.Object),
                m: Th.maybe(Th.Number),
                n: Th.maybe(Th.Number),
                output: Th.maybe(Th.Buffer),
                pubkeys: Th.maybe(Th.arrayOf(Yf.isPoint)),
                signatures: Th.maybe(Th.arrayOf(o)),
                input: Th.maybe(Th.Buffer)
            }, e);
            const a = {
                network: e.network || Rh.bitcoin
            };
            let s = [],
                u = !1;

            function c(e) {
                u || (u = !0, s = Jh.decompile(e), a.m = s[0] - n, a.n = s[s.length - 2] - n, a.pubkeys = s.slice(1, -2))
            }
            if (Gh.prop(a, "output", () => {
                    if (e.m && a.n && e.pubkeys) return Jh.compile([].concat(n + e.m, e.pubkeys, n + a.n, r.OP_CHECKMULTISIG))
                }), Gh.prop(a, "m", () => {
                    if (a.output) return c(a.output), a.m
                }), Gh.prop(a, "n", () => {
                    if (a.pubkeys) return a.pubkeys.length
                }), Gh.prop(a, "pubkeys", () => {
                    if (e.output) return c(e.output), a.pubkeys
                }), Gh.prop(a, "signatures", () => {
                    if (e.input) return Jh.decompile(e.input).slice(1)
                }), Gh.prop(a, "input", () => {
                    if (e.signatures) return Jh.compile([r.OP_0].concat(e.signatures))
                }), Gh.prop(a, "witness", () => {
                    if (a.input) return []
                }), Gh.prop(a, "name", () => {
                    if (a.m && a.n) return `p2ms(${a.m} of ${a.n})`
                }), t.validate) {
                if (e.output) {
                    if (c(e.output), !Th.Number(s[0])) throw new TypeError("Output is invalid");
                    if (!Th.Number(s[s.length - 2])) throw new TypeError("Output is invalid");
                    if (s[s.length - 1] !== r.OP_CHECKMULTISIG) throw new TypeError("Output is invalid");
                    if (a.m <= 0 || a.n > 16 || a.m > a.n || a.n !== s.length - 3) throw new TypeError("Output is invalid");
                    if (!a.pubkeys.every(e => Yf.isPoint(e))) throw new TypeError("Output is invalid");
                    if (void 0 !== e.m && e.m !== a.m) throw new TypeError("m mismatch");
                    if (void 0 !== e.n && e.n !== a.n) throw new TypeError("n mismatch");
                    if (e.pubkeys && !i(e.pubkeys, a.pubkeys)) throw new TypeError("Pubkeys mismatch")
                }
                if (e.pubkeys) {
                    if (void 0 !== e.n && e.n !== e.pubkeys.length) throw new TypeError("Pubkey count mismatch");
                    if (a.n = e.pubkeys.length, a.n < a.m) throw new TypeError("Pubkey count cannot be less than m")
                }
                if (e.signatures) {
                    if (e.signatures.length < a.m) throw new TypeError("Not enough signatures provided");
                    if (e.signatures.length > a.m) throw new TypeError("Too many signatures provided")
                }
                if (e.input) {
                    if (e.input[0] !== r.OP_0) throw new TypeError("Input is invalid");
                    if (0 === a.signatures.length || !a.signatures.every(o)) throw new TypeError("Input has invalid signature(s)");
                    if (e.signatures && !i(e.signatures, a.signatures)) throw new TypeError("Signature mismatch");
                    if (void 0 !== e.m && e.m !== e.signatures.length) throw new TypeError("Signature count mismatch")
                }
            }
            return Object.assign(a, e)
        }
    });
    n(Yh);
    Yh.p2ms;
    var $h = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Jh.OPS;
        t.p2pk = function(e, t) {
            if (!(e.input || e.output || e.pubkey || e.input || e.signature)) throw new TypeError("Not enough data");
            t = Object.assign({
                validate: !0
            }, t || {}), Th({
                network: Th.maybe(Th.Object),
                output: Th.maybe(Th.Buffer),
                pubkey: Th.maybe(Yf.isPoint),
                signature: Th.maybe(Jh.isCanonicalScriptSignature),
                input: Th.maybe(Th.Buffer)
            }, e);
            const n = Gh.value(() => Jh.decompile(e.input)),
                i = {
                    name: "p2pk",
                    network: e.network || Rh.bitcoin
                };
            if (Gh.prop(i, "output", () => {
                    if (e.pubkey) return Jh.compile([e.pubkey, r.OP_CHECKSIG])
                }), Gh.prop(i, "pubkey", () => {
                    if (e.output) return e.output.slice(1, -1)
                }), Gh.prop(i, "signature", () => {
                    if (e.input) return n()[0]
                }), Gh.prop(i, "input", () => {
                    if (e.signature) return Jh.compile([e.signature])
                }), Gh.prop(i, "witness", () => {
                    if (i.input) return []
                }), t.validate) {
                if (e.output) {
                    if (e.output[e.output.length - 1] !== r.OP_CHECKSIG) throw new TypeError("Output is invalid");
                    if (!Yf.isPoint(i.pubkey)) throw new TypeError("Output pubkey is invalid");
                    if (e.pubkey && !e.pubkey.equals(i.pubkey)) throw new TypeError("Pubkey mismatch")
                }
                if (e.signature && e.input && !e.input.equals(i.input)) throw new TypeError("Signature mismatch");
                if (e.input) {
                    if (1 !== n().length) throw new TypeError("Input is invalid");
                    if (!Jh.isCanonicalScriptSignature(i.signature)) throw new TypeError("Input has invalid signature")
                }
            }
            return Object.assign(i, e)
        }
    });
    n($h);
    $h.p2pk;
    var Qh = i(function(e, t) {
        function r(e) {
            try {
                return es("rmd160").update(e).digest()
            } catch (t) {
                return es("ripemd160").update(e).digest()
            }
        }

        function n(e) {
            return es("sha256").update(e).digest()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ripemd160 = r, t.sha1 = function(e) {
            return es("sha1").update(e).digest()
        }, t.sha256 = n, t.hash160 = function(e) {
            return r(n(e))
        }, t.hash256 = function(e) {
            return n(n(e))
        }
    });
    n(Qh);
    Qh.ripemd160, Qh.sha1, Qh.sha256, Qh.hash160, Qh.hash256;
    var Zh = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Jh.OPS;
        t.p2pkh = function(e, t) {
            if (!(e.address || e.hash || e.output || e.pubkey || e.input)) throw new TypeError("Not enough data");
            t = Object.assign({
                validate: !0
            }, t || {}), Th({
                network: Th.maybe(Th.Object),
                address: Th.maybe(Th.String),
                hash: Th.maybe(Th.BufferN(20)),
                output: Th.maybe(Th.BufferN(25)),
                pubkey: Th.maybe(Yf.isPoint),
                signature: Th.maybe(Jh.isCanonicalScriptSignature),
                input: Th.maybe(Th.Buffer)
            }, e);
            const n = Gh.value(() => {
                    const t = ms.decode(e.address);
                    return {
                        version: t.readUInt8(0),
                        hash: t.slice(1)
                    }
                }),
                i = Gh.value(() => Jh.decompile(e.input)),
                o = e.network || Rh.bitcoin,
                a = {
                    name: "p2pkh",
                    network: o
                };
            if (Gh.prop(a, "address", () => {
                    if (!a.hash) return;
                    const e = Le.allocUnsafe(21);
                    return e.writeUInt8(o.pubKeyHash, 0), a.hash.copy(e, 1), ms.encode(e)
                }), Gh.prop(a, "hash", () => e.output ? e.output.slice(3, 23) : e.address ? n().hash : e.pubkey || a.pubkey ? Qh.hash160(e.pubkey || a.pubkey) : void 0), Gh.prop(a, "output", () => {
                    if (a.hash) return Jh.compile([r.OP_DUP, r.OP_HASH160, a.hash, r.OP_EQUALVERIFY, r.OP_CHECKSIG])
                }), Gh.prop(a, "pubkey", () => {
                    if (e.input) return i()[1]
                }), Gh.prop(a, "signature", () => {
                    if (e.input) return i()[0]
                }), Gh.prop(a, "input", () => {
                    if (e.pubkey && e.signature) return Jh.compile([e.signature, e.pubkey])
                }), Gh.prop(a, "witness", () => {
                    if (a.input) return []
                }), t.validate) {
                let t = Le.from([]);
                if (e.address) {
                    if (n().version !== o.pubKeyHash) throw new TypeError("Invalid version or Network mismatch");
                    if (20 !== n().hash.length) throw new TypeError("Invalid address");
                    t = n().hash
                }
                if (e.hash) {
                    if (t.length > 0 && !t.equals(e.hash)) throw new TypeError("Hash mismatch");
                    t = e.hash
                }
                if (e.output) {
                    if (25 !== e.output.length || e.output[0] !== r.OP_DUP || e.output[1] !== r.OP_HASH160 || 20 !== e.output[2] || e.output[23] !== r.OP_EQUALVERIFY || e.output[24] !== r.OP_CHECKSIG) throw new TypeError("Output is invalid");
                    const n = e.output.slice(3, 23);
                    if (t.length > 0 && !t.equals(n)) throw new TypeError("Hash mismatch");
                    t = n
                }
                if (e.pubkey) {
                    const r = Qh.hash160(e.pubkey);
                    if (t.length > 0 && !t.equals(r)) throw new TypeError("Hash mismatch");
                    t = r
                }
                if (e.input) {
                    const r = i();
                    if (2 !== r.length) throw new TypeError("Input is invalid");
                    if (!Jh.isCanonicalScriptSignature(r[0])) throw new TypeError("Input has invalid signature");
                    if (!Yf.isPoint(r[1])) throw new TypeError("Input has invalid pubkey");
                    if (e.signature && !e.signature.equals(r[0])) throw new TypeError("Signature mismatch");
                    if (e.pubkey && !e.pubkey.equals(r[1])) throw new TypeError("Pubkey mismatch");
                    const n = Qh.hash160(r[1]);
                    if (t.length > 0 && !t.equals(n)) throw new TypeError("Hash mismatch")
                }
            }
            return Object.assign(a, e)
        }
    });
    n(Zh);
    Zh.p2pkh;
    var ed = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Jh.OPS;
        t.p2sh = function(e, t) {
            if (!(e.address || e.hash || e.output || e.redeem || e.input)) throw new TypeError("Not enough data");
            t = Object.assign({
                validate: !0
            }, t || {}), Th({
                network: Th.maybe(Th.Object),
                address: Th.maybe(Th.String),
                hash: Th.maybe(Th.BufferN(20)),
                output: Th.maybe(Th.BufferN(23)),
                redeem: Th.maybe({
                    network: Th.maybe(Th.Object),
                    output: Th.maybe(Th.Buffer),
                    input: Th.maybe(Th.Buffer),
                    witness: Th.maybe(Th.arrayOf(Th.Buffer))
                }),
                input: Th.maybe(Th.Buffer),
                witness: Th.maybe(Th.arrayOf(Th.Buffer))
            }, e);
            let n = e.network;
            n || (n = e.redeem && e.redeem.network || Rh.bitcoin);
            const i = {
                    network: n
                },
                o = Gh.value(() => {
                    const t = ms.decode(e.address);
                    return {
                        version: t.readUInt8(0),
                        hash: t.slice(1)
                    }
                }),
                a = Gh.value(() => Jh.decompile(e.input)),
                s = Gh.value(() => {
                    const t = a();
                    return {
                        network: n,
                        output: t[t.length - 1],
                        input: Jh.compile(t.slice(0, -1)),
                        witness: e.witness || []
                    }
                });
            if (Gh.prop(i, "address", () => {
                    if (!i.hash) return;
                    const e = Le.allocUnsafe(21);
                    return e.writeUInt8(i.network.scriptHash, 0), i.hash.copy(e, 1), ms.encode(e)
                }), Gh.prop(i, "hash", () => e.output ? e.output.slice(2, 22) : e.address ? o().hash : i.redeem && i.redeem.output ? Qh.hash160(i.redeem.output) : void 0), Gh.prop(i, "output", () => {
                    if (i.hash) return Jh.compile([r.OP_HASH160, i.hash, r.OP_EQUAL])
                }), Gh.prop(i, "redeem", () => {
                    if (e.input) return s()
                }), Gh.prop(i, "input", () => {
                    if (e.redeem && e.redeem.input && e.redeem.output) return Jh.compile([].concat(Jh.decompile(e.redeem.input), e.redeem.output))
                }), Gh.prop(i, "witness", () => i.redeem && i.redeem.witness ? i.redeem.witness : i.input ? [] : void 0), Gh.prop(i, "name", () => {
                    const e = ["p2sh"];
                    return void 0 !== i.redeem && e.push(i.redeem.name), e.join("-")
                }), t.validate) {
                let t = Le.from([]);
                if (e.address) {
                    if (o().version !== n.scriptHash) throw new TypeError("Invalid version or Network mismatch");
                    if (20 !== o().hash.length) throw new TypeError("Invalid address");
                    t = o().hash
                }
                if (e.hash) {
                    if (t.length > 0 && !t.equals(e.hash)) throw new TypeError("Hash mismatch");
                    t = e.hash
                }
                if (e.output) {
                    if (23 !== e.output.length || e.output[0] !== r.OP_HASH160 || 20 !== e.output[1] || e.output[22] !== r.OP_EQUAL) throw new TypeError("Output is invalid");
                    const n = e.output.slice(2, 22);
                    if (t.length > 0 && !t.equals(n)) throw new TypeError("Hash mismatch");
                    t = n
                }
                const i = e => {
                    if (e.output) {
                        const r = Jh.decompile(e.output);
                        if (!r || r.length < 1) throw new TypeError("Redeem.output too short");
                        const n = Qh.hash160(e.output);
                        if (t.length > 0 && !t.equals(n)) throw new TypeError("Hash mismatch");
                        t = n
                    }
                    if (e.input) {
                        const t = e.input.length > 0,
                            r = e.witness && e.witness.length > 0;
                        if (!t && !r) throw new TypeError("Empty input");
                        if (t && r) throw new TypeError("Input and witness provided");
                        if (t) {
                            const t = Jh.decompile(e.input);
                            if (!Jh.isPushOnly(t)) throw new TypeError("Non push-only scriptSig")
                        }
                    }
                };
                if (e.input) {
                    const e = a();
                    if (!e || e.length < 1) throw new TypeError("Input too short");
                    if (!mt(s().output)) throw new TypeError("Input is invalid");
                    i(s())
                }
                if (e.redeem) {
                    if (e.redeem.network && e.redeem.network !== n) throw new TypeError("Network mismatch");
                    if (e.input) {
                        const t = s();
                        if (e.redeem.output && !e.redeem.output.equals(t.output)) throw new TypeError("Redeem.output mismatch");
                        if (e.redeem.input && !e.redeem.input.equals(t.input)) throw new TypeError("Redeem.input mismatch")
                    }
                    i(e.redeem)
                }
                if (e.witness && e.redeem && e.redeem.witness && ! function(e, t) {
                        return e.length === t.length && e.every((e, r) => e.equals(t[r]))
                    }(e.redeem.witness, e.witness)) throw new TypeError("Witness and redeem.witness mismatch")
            }
            return Object.assign(i, e)
        }
    });
    n(ed);
    ed.p2sh;
    for (var td = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", rd = {}, nd = 0; nd < td.length; nd++) {
        var id = td.charAt(nd);
        if (void 0 !== rd[id]) throw new TypeError(id + " is ambiguous");
        rd[id] = nd
    }

    function od(e) {
        var t = e >> 25;
        return (33554431 & e) << 5 ^ 996825010 & -(t >> 0 & 1) ^ 642813549 & -(t >> 1 & 1) ^ 513874426 & -(t >> 2 & 1) ^ 1027748829 & -(t >> 3 & 1) ^ 705979059 & -(t >> 4 & 1)
    }

    function ad(e) {
        for (var t = 1, r = 0; r < e.length; ++r) {
            var n = e.charCodeAt(r);
            if (n < 33 || n > 126) throw new Error("Invalid prefix (" + e + ")");
            t = od(t) ^ n >> 5
        }
        for (t = od(t), r = 0; r < e.length; ++r) {
            var i = e.charCodeAt(r);
            t = od(t) ^ 31 & i
        }
        return t
    }

    function sd(e, t, r, n) {
        for (var i = 0, o = 0, a = (1 << r) - 1, s = [], u = 0; u < e.length; ++u)
            for (i = i << t | e[u], o += t; o >= r;) o -= r, s.push(i >> o & a);
        if (n) o > 0 && s.push(i << r - o & a);
        else {
            if (o >= t) throw new Error("Excess padding");
            if (i << r - o & a) throw new Error("Non-zero padding")
        }
        return s
    }
    var ud = {
            decode: function(e, t) {
                if (t = t || 90, e.length < 8) throw new TypeError(e + " too short");
                if (e.length > t) throw new TypeError("Exceeds length limit");
                var r = e.toLowerCase(),
                    n = e.toUpperCase();
                if (e !== r && e !== n) throw new Error("Mixed-case string " + e);
                var i = (e = r).lastIndexOf("1");
                if (-1 === i) throw new Error("No separator character for " + e);
                if (0 === i) throw new Error("Missing prefix for " + e);
                var o = e.slice(0, i),
                    a = e.slice(i + 1);
                if (a.length < 6) throw new Error("Data too short");
                for (var s = ad(o), u = [], c = 0; c < a.length; ++c) {
                    var f = a.charAt(c),
                        h = rd[f];
                    if (void 0 === h) throw new Error("Unknown character " + f);
                    s = od(s) ^ h, c + 6 >= a.length || u.push(h)
                }
                if (1 !== s) throw new Error("Invalid checksum for " + e);
                return {
                    prefix: o,
                    words: u
                }
            },
            encode: function(e, t, r) {
                if (r = r || 90, e.length + 7 + t.length > r) throw new TypeError("Exceeds length limit");
                for (var n = ad(e = e.toLowerCase()), i = e + "1", o = 0; o < t.length; ++o) {
                    var a = t[o];
                    if (a >> 5 != 0) throw new Error("Non 5-bit word");
                    n = od(n) ^ a, i += td.charAt(a)
                }
                for (o = 0; o < 6; ++o) n = od(n);
                for (n ^= 1, o = 0; o < 6; ++o) {
                    var s = n >> 5 * (5 - o) & 31;
                    i += td.charAt(s)
                }
                return i
            },
            toWords: function(e) {
                return sd(e, 8, 5, !0)
            },
            fromWords: function(e) {
                return sd(e, 5, 8, !1)
            }
        },
        cd = i(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = Jh.OPS,
                n = Le.alloc(0);
            t.p2wpkh = function(e, t) {
                if (!(e.address || e.hash || e.output || e.pubkey || e.witness)) throw new TypeError("Not enough data");
                t = Object.assign({
                    validate: !0
                }, t || {}), Th({
                    address: Th.maybe(Th.String),
                    hash: Th.maybe(Th.BufferN(20)),
                    input: Th.maybe(Th.BufferN(0)),
                    network: Th.maybe(Th.Object),
                    output: Th.maybe(Th.BufferN(22)),
                    pubkey: Th.maybe(Yf.isPoint),
                    signature: Th.maybe(Jh.isCanonicalScriptSignature),
                    witness: Th.maybe(Th.arrayOf(Th.Buffer))
                }, e);
                const i = Gh.value(() => {
                        const t = ud.decode(e.address),
                            r = t.words.shift(),
                            n = ud.fromWords(t.words);
                        return {
                            version: r,
                            prefix: t.prefix,
                            data: Le.from(n)
                        }
                    }),
                    o = e.network || Rh.bitcoin,
                    a = {
                        name: "p2wpkh",
                        network: o
                    };
                if (Gh.prop(a, "address", () => {
                        if (!a.hash) return;
                        const e = ud.toWords(a.hash);
                        return e.unshift(0), ud.encode(o.bech32, e)
                    }), Gh.prop(a, "hash", () => e.output ? e.output.slice(2, 22) : e.address ? i().data : e.pubkey || a.pubkey ? Qh.hash160(e.pubkey || a.pubkey) : void 0), Gh.prop(a, "output", () => {
                        if (a.hash) return Jh.compile([r.OP_0, a.hash])
                    }), Gh.prop(a, "pubkey", () => e.pubkey ? e.pubkey : e.witness ? e.witness[1] : void 0), Gh.prop(a, "signature", () => {
                        if (e.witness) return e.witness[0]
                    }), Gh.prop(a, "input", () => {
                        if (a.witness) return n
                    }), Gh.prop(a, "witness", () => {
                        if (e.pubkey && e.signature) return [e.signature, e.pubkey]
                    }), t.validate) {
                    let t = Le.from([]);
                    if (e.address) {
                        if (o && o.bech32 !== i().prefix) throw new TypeError("Invalid prefix or Network mismatch");
                        if (0 !== i().version) throw new TypeError("Invalid address version");
                        if (20 !== i().data.length) throw new TypeError("Invalid address data");
                        t = i().data
                    }
                    if (e.hash) {
                        if (t.length > 0 && !t.equals(e.hash)) throw new TypeError("Hash mismatch");
                        t = e.hash
                    }
                    if (e.output) {
                        if (22 !== e.output.length || e.output[0] !== r.OP_0 || 20 !== e.output[1]) throw new TypeError("Output is invalid");
                        if (t.length > 0 && !t.equals(e.output.slice(2))) throw new TypeError("Hash mismatch");
                        t = e.output.slice(2)
                    }
                    if (e.pubkey) {
                        const r = Qh.hash160(e.pubkey);
                        if (t.length > 0 && !t.equals(r)) throw new TypeError("Hash mismatch");
                        t = r
                    }
                    if (e.witness) {
                        if (2 !== e.witness.length) throw new TypeError("Witness is invalid");
                        if (!Jh.isCanonicalScriptSignature(e.witness[0])) throw new TypeError("Witness has invalid signature");
                        if (!Yf.isPoint(e.witness[1])) throw new TypeError("Witness has invalid pubkey");
                        if (e.signature && !e.signature.equals(e.witness[0])) throw new TypeError("Signature mismatch");
                        if (e.pubkey && !e.pubkey.equals(e.witness[1])) throw new TypeError("Pubkey mismatch");
                        const r = Qh.hash160(e.witness[1]);
                        if (t.length > 0 && !t.equals(r)) throw new TypeError("Hash mismatch")
                    }
                }
                return Object.assign(a, e)
            }
        });
    n(cd);
    cd.p2wpkh;
    var fd = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Jh.OPS,
            n = Le.alloc(0);
        t.p2wsh = function(e, t) {
            if (!(e.address || e.hash || e.output || e.redeem || e.witness)) throw new TypeError("Not enough data");
            t = Object.assign({
                validate: !0
            }, t || {}), Th({
                network: Th.maybe(Th.Object),
                address: Th.maybe(Th.String),
                hash: Th.maybe(Th.BufferN(32)),
                output: Th.maybe(Th.BufferN(34)),
                redeem: Th.maybe({
                    input: Th.maybe(Th.Buffer),
                    network: Th.maybe(Th.Object),
                    output: Th.maybe(Th.Buffer),
                    witness: Th.maybe(Th.arrayOf(Th.Buffer))
                }),
                input: Th.maybe(Th.BufferN(0)),
                witness: Th.maybe(Th.arrayOf(Th.Buffer))
            }, e);
            const i = Gh.value(() => {
                    const t = ud.decode(e.address),
                        r = t.words.shift(),
                        n = ud.fromWords(t.words);
                    return {
                        version: r,
                        prefix: t.prefix,
                        data: Le.from(n)
                    }
                }),
                o = Gh.value(() => Jh.decompile(e.redeem.input));
            let a = e.network;
            a || (a = e.redeem && e.redeem.network || Rh.bitcoin);
            const s = {
                network: a
            };
            if (Gh.prop(s, "address", () => {
                    if (!s.hash) return;
                    const e = ud.toWords(s.hash);
                    return e.unshift(0), ud.encode(a.bech32, e)
                }), Gh.prop(s, "hash", () => e.output ? e.output.slice(2) : e.address ? i().data : s.redeem && s.redeem.output ? Qh.sha256(s.redeem.output) : void 0), Gh.prop(s, "output", () => {
                    if (s.hash) return Jh.compile([r.OP_0, s.hash])
                }), Gh.prop(s, "redeem", () => {
                    if (e.witness) return {
                        output: e.witness[e.witness.length - 1],
                        input: n,
                        witness: e.witness.slice(0, -1)
                    }
                }), Gh.prop(s, "input", () => {
                    if (s.witness) return n
                }), Gh.prop(s, "witness", () => {
                    if (e.redeem && e.redeem.input && e.redeem.input.length > 0 && e.redeem.output && e.redeem.output.length > 0) {
                        const t = Jh.toStack(o());
                        return s.redeem = Object.assign({
                            witness: t
                        }, e.redeem), s.redeem.input = n, [].concat(t, e.redeem.output)
                    }
                    if (e.redeem && e.redeem.output && e.redeem.witness) return [].concat(e.redeem.witness, e.redeem.output)
                }), Gh.prop(s, "name", () => {
                    const e = ["p2wsh"];
                    return void 0 !== s.redeem && e.push(s.redeem.name), e.join("-")
                }), t.validate) {
                let t = Le.from([]);
                if (e.address) {
                    if (i().prefix !== a.bech32) throw new TypeError("Invalid prefix or Network mismatch");
                    if (0 !== i().version) throw new TypeError("Invalid address version");
                    if (32 !== i().data.length) throw new TypeError("Invalid address data");
                    t = i().data
                }
                if (e.hash) {
                    if (t.length > 0 && !t.equals(e.hash)) throw new TypeError("Hash mismatch");
                    t = e.hash
                }
                if (e.output) {
                    if (34 !== e.output.length || e.output[0] !== r.OP_0 || 32 !== e.output[1]) throw new TypeError("Output is invalid");
                    const n = e.output.slice(2);
                    if (t.length > 0 && !t.equals(n)) throw new TypeError("Hash mismatch");
                    t = n
                }
                if (e.redeem) {
                    if (e.redeem.network && e.redeem.network !== a) throw new TypeError("Network mismatch");
                    if (e.redeem.input && e.redeem.input.length > 0 && e.redeem.witness && e.redeem.witness.length > 0) throw new TypeError("Ambiguous witness source");
                    if (e.redeem.output) {
                        if (0 === Jh.decompile(e.redeem.output).length) throw new TypeError("Redeem.output is invalid");
                        const r = Qh.sha256(e.redeem.output);
                        if (t.length > 0 && !t.equals(r)) throw new TypeError("Hash mismatch");
                        t = r
                    }
                    if (e.redeem.input && !Jh.isPushOnly(o())) throw new TypeError("Non push-only scriptSig");
                    if (e.witness && e.redeem.witness && ! function(e, t) {
                            return e.length === t.length && e.every((e, r) => e.equals(t[r]))
                        }(e.witness, e.redeem.witness)) throw new TypeError("Witness and redeem.witness mismatch")
                }
                if (e.witness && e.redeem && e.redeem.output && !e.redeem.output.equals(e.witness[e.witness.length - 1])) throw new TypeError("Witness and redeem.output mismatch")
            }
            return Object.assign(s, e)
        }
    });
    n(fd);
    fd.p2wsh;
    var hd = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.embed = Xh.p2data, t.p2ms = Yh.p2ms, t.p2pk = $h.p2pk, t.p2pkh = Zh.p2pkh, t.p2sh = ed.p2sh, t.p2wpkh = cd.p2wpkh, t.p2wsh = fd.p2wsh
    });
    n(hd);
    hd.embed, hd.p2ms, hd.p2pk, hd.p2pkh, hd.p2sh, hd.p2wpkh, hd.p2wsh;
    var dd = i(function(e, t) {
        function r(e) {
            const t = ms.decode(e);
            if (t.length < 21) throw new TypeError(e + " is too short");
            if (t.length > 21) throw new TypeError(e + " is too long");
            return {
                version: t.readUInt8(0),
                hash: t.slice(1)
            }
        }

        function n(e) {
            const t = ud.decode(e),
                r = ud.fromWords(t.words.slice(1));
            return {
                version: t.words[0],
                prefix: t.prefix,
                data: Le.from(r)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.fromBase58Check = r, t.fromBech32 = n, t.toBase58Check = function(e, t) {
            Th(jh.tuple(jh.Hash160bit, jh.UInt8), arguments);
            const r = Le.allocUnsafe(21);
            return r.writeUInt8(t, 0), e.copy(r, 1), ms.encode(r)
        }, t.toBech32 = function(e, t, r) {
            const n = ud.toWords(e);
            return n.unshift(t), ud.encode(r, n)
        }, t.fromOutputScript = function(e, t) {
            t = t || Rh.bitcoin;
            try {
                return hd.p2pkh({
                    output: e,
                    network: t
                }).address
            } catch (e) {}
            try {
                return hd.p2sh({
                    output: e,
                    network: t
                }).address
            } catch (e) {}
            try {
                return hd.p2wpkh({
                    output: e,
                    network: t
                }).address
            } catch (e) {}
            try {
                return hd.p2wsh({
                    output: e,
                    network: t
                }).address
            } catch (e) {}
            throw new Error(Jh.toASM(e) + " has no matching Address")
        }, t.toOutputScript = function(e, t) {
            let i, o;
            t = t || Rh.bitcoin;
            try {
                i = r(e)
            } catch (e) {}
            if (i) {
                if (i.version === t.pubKeyHash) return hd.p2pkh({
                    hash: i.hash
                }).output;
                if (i.version === t.scriptHash) return hd.p2sh({
                    hash: i.hash
                }).output
            } else {
                try {
                    o = n(e)
                } catch (e) {}
                if (o) {
                    if (o.prefix !== t.bech32) throw new Error(e + " has an invalid prefix");
                    if (0 === o.version) {
                        if (20 === o.data.length) return hd.p2wpkh({
                            hash: o.data
                        }).output;
                        if (32 === o.data.length) return hd.p2wsh({
                            hash: o.data
                        }).output
                    }
                }
            }
            throw new Error(e + " has no matching Script")
        }
    });
    n(dd);
    dd.fromBase58Check, dd.fromBech32, dd.toBase58Check, dd.toBech32, dd.fromOutputScript, dd.toOutputScript;
    var ld = i(function(e) {
            var r = 65536,
                n = 4294967295;
            var i = wo.Buffer,
                o = t.crypto || t.msCrypto;
            o && o.getRandomValues ? e.exports = function(e, t) {
                if (e > n) throw new RangeError("requested too many random bytes");
                var a = i.allocUnsafe(e);
                if (e > 0)
                    if (e > r)
                        for (var s = 0; s < e; s += r) o.getRandomValues(a.slice(s, s + r));
                    else o.getRandomValues(a);
                if ("function" == typeof t) return At(function() {
                    t(null, a)
                });
                return a
            } : e.exports = function() {
                throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
            }
        }),
        pd = i(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = Th.maybe(Th.compile({
                compressed: jh.maybe(jh.Boolean),
                network: jh.maybe(jh.Network)
            }));
            class n {
                constructor(e, t, r) {
                    this.__D = e, this.__Q = t, this.lowR = !1, void 0 === r && (r = {}), this.compressed = void 0 === r.compressed || r.compressed, this.network = r.network || Rh.bitcoin, void 0 !== t && (this.__Q = Yf.pointCompress(t, this.compressed))
                }
                get privateKey() {
                    return this.__D
                }
                get publicKey() {
                    return this.__Q || (this.__Q = Yf.pointFromScalar(this.__D, this.compressed)), this.__Q
                }
                toWIF() {
                    if (!this.__D) throw new Error("Missing private key");
                    return Mh.encode(this.network.wif, this.__D, this.compressed)
                }
                sign(e, t) {
                    if (!this.__D) throw new Error("Missing private key");
                    if (void 0 === t && (t = this.lowR), !1 === t) return Yf.sign(e, this.__D); {
                        let t = Yf.sign(e, this.__D);
                        const r = Le.alloc(32, 0);
                        let n = 0;
                        for (; t[0] > 127;) n++, r.writeUIntLE(n, 0, 6), t = Yf.signWithEntropy(e, this.__D, r);
                        return t
                    }
                }
                verify(e, t) {
                    return Yf.verify(e, this.publicKey, t)
                }
            }

            function i(e, t) {
                if (Th(jh.Buffer256bit, e), !Yf.isPrivate(e)) throw new TypeError("Private key not in range [1, n)");
                return Th(r, t), new n(e, void 0, t)
            }
            t.fromPrivateKey = i, t.fromPublicKey = function(e, t) {
                return Th(Yf.isPoint, e), Th(r, t), new n(void 0, e, t)
            }, t.fromWIF = function(e, t) {
                const r = Mh.decode(e),
                    n = r.version;
                if (jh.Array(t)) {
                    if (!(t = t.filter(e => n === e.wif).pop())) throw new Error("Unknown network version")
                } else if (t = t || Rh.bitcoin, n !== t.wif) throw new Error("Invalid network version");
                return i(r.privateKey, {
                    compressed: r.compressed,
                    network: t
                })
            }, t.makeRandom = function(e) {
                Th(r, e), void 0 === e && (e = {});
                const t = e.rng || ld;
                let n;
                do {
                    n = t(32), Th(jh.Buffer256bit, n)
                } while (!Yf.isPrivate(n));
                return i(n, e)
            }
        });
    n(pd);
    pd.fromPrivateKey, pd.fromPublicKey, pd.fromWIF, pd.makeRandom;
    var bd = i(function(e, t) {
        function r(e, t) {
            if ("number" != typeof e) throw new Error("cannot write a non-number as a number");
            if (e < 0) throw new Error("specified a negative value for writing an unsigned value");
            if (e > t) throw new Error("RangeError: value out of range");
            if (Math.floor(e) !== e) throw new Error("value has a fractional component")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.readUInt64LE = function(e, t) {
            const n = e.readUInt32LE(t);
            let i = e.readUInt32LE(t + 4);
            return r((i *= 4294967296) + n, 9007199254740991), i + n
        }, t.writeUInt64LE = function(e, t, n) {
            return r(t, 9007199254740991), e.writeInt32LE(-1 & t, n), e.writeUInt32LE(Math.floor(t / 4294967296), n + 4), n + 8
        }, t.reverseBuffer = function(e) {
            if (e.length < 1) return e;
            let t = e.length - 1,
                r = 0;
            for (let n = 0; n < e.length / 2; n++) r = e[n], e[n] = e[t], e[t] = r, t--;
            return e
        }
    });
    n(bd);
    bd.readUInt64LE, bd.writeUInt64LE, bd.reverseBuffer;
    var md = wo.Buffer,
        gd = 9007199254740991;

    function vd(e) {
        if (e < 0 || e > gd || e % 1 != 0) throw new RangeError("value out of range")
    }

    function yd(e) {
        return vd(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9
    }
    var wd = {
            encode: function e(t, r, n) {
                if (vd(t), r || (r = md.allocUnsafe(yd(t))), !md.isBuffer(r)) throw new TypeError("buffer must be a Buffer instance");
                return n || (n = 0), t < 253 ? (r.writeUInt8(t, n), e.bytes = 1) : t <= 65535 ? (r.writeUInt8(253, n), r.writeUInt16LE(t, n + 1), e.bytes = 3) : t <= 4294967295 ? (r.writeUInt8(254, n), r.writeUInt32LE(t, n + 1), e.bytes = 5) : (r.writeUInt8(255, n), r.writeUInt32LE(t >>> 0, n + 1), r.writeUInt32LE(t / 4294967296 | 0, n + 5), e.bytes = 9), r
            },
            decode: function e(t, r) {
                if (!md.isBuffer(t)) throw new TypeError("buffer must be a Buffer instance");
                r || (r = 0);
                var n = t.readUInt8(r);
                if (n < 253) return e.bytes = 1, n;
                if (253 === n) return e.bytes = 3, t.readUInt16LE(r + 1);
                if (254 === n) return e.bytes = 5, t.readUInt32LE(r + 1);
                e.bytes = 9;
                var i = t.readUInt32LE(r + 1),
                    o = 4294967296 * t.readUInt32LE(r + 5) + i;
                return vd(o), o
            },
            encodingLength: yd
        },
        _d = i(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = bd,
                n = Jh;

            function i(e) {
                const t = e.length;
                return wd.encodingLength(t) + t
            }
            const o = Le.allocUnsafe(0),
                a = [],
                s = Le.from("0000000000000000000000000000000000000000000000000000000000000000", "hex"),
                u = Le.from("0000000000000000000000000000000000000000000000000000000000000001", "hex"),
                c = Le.from("ffffffffffffffff", "hex"),
                f = {
                    script: o,
                    valueBuffer: c
                };
            class h {
                constructor() {
                    this.version = 1, this.locktime = 0, this.ins = [], this.outs = []
                }
                static fromBuffer(e, t) {
                    let r = 0;

                    function n(t) {
                        return r += t, e.slice(r - t, r)
                    }

                    function i() {
                        const t = e.readUInt32LE(r);
                        return r += 4, t
                    }

                    function o() {
                        const t = bd.readUInt64LE(e, r);
                        return r += 8, t
                    }

                    function s() {
                        const t = wd.decode(e, r);
                        return r += wd.decode.bytes, t
                    }

                    function u() {
                        return n(s())
                    }

                    function c() {
                        const e = s(),
                            t = [];
                        for (let r = 0; r < e; r++) t.push(u());
                        return t
                    }
                    const f = new h;
                    f.version = function() {
                        const t = e.readInt32LE(r);
                        return r += 4, t
                    }();
                    const d = e.readUInt8(r),
                        l = e.readUInt8(r + 1);
                    let p = !1;
                    d === h.ADVANCED_TRANSACTION_MARKER && l === h.ADVANCED_TRANSACTION_FLAG && (r += 2, p = !0);
                    const b = s();
                    for (let e = 0; e < b; ++e) f.ins.push({
                        hash: n(32),
                        index: i(),
                        script: u(),
                        sequence: i(),
                        witness: a
                    });
                    const m = s();
                    for (let e = 0; e < m; ++e) f.outs.push({
                        value: o(),
                        script: u()
                    });
                    if (p) {
                        for (let e = 0; e < b; ++e) f.ins[e].witness = c();
                        if (!f.hasWitnesses()) throw new Error("Transaction has superfluous witness data")
                    }
                    if (f.locktime = i(), t) return f;
                    if (r !== e.length) throw new Error("Transaction has unexpected data");
                    return f
                }
                static fromHex(e) {
                    return h.fromBuffer(Le.from(e, "hex"), !1)
                }
                static isCoinbaseHash(e) {
                    Th(jh.Hash256bit, e);
                    for (let t = 0; t < 32; ++t)
                        if (0 !== e[t]) return !1;
                    return !0
                }
                isCoinbase() {
                    return 1 === this.ins.length && h.isCoinbaseHash(this.ins[0].hash)
                }
                addInput(e, t, r, n) {
                    return Th(jh.tuple(jh.Hash256bit, jh.UInt32, jh.maybe(jh.UInt32), jh.maybe(jh.Buffer)), arguments), jh.Null(r) && (r = h.DEFAULT_SEQUENCE), this.ins.push({
                        hash: e,
                        index: t,
                        script: n || o,
                        sequence: r,
                        witness: a
                    }) - 1
                }
                addOutput(e, t) {
                    return Th(jh.tuple(jh.Buffer, jh.Satoshi), arguments), this.outs.push({
                        script: e,
                        value: t
                    }) - 1
                }
                hasWitnesses() {
                    return this.ins.some(e => 0 !== e.witness.length)
                }
                weight() {
                    return 3 * this.__byteLength(!1) + this.__byteLength(!0)
                }
                virtualSize() {
                    return Math.ceil(this.weight() / 4)
                }
                byteLength() {
                    return this.__byteLength(!0)
                }
                clone() {
                    const e = new h;
                    return e.version = this.version, e.locktime = this.locktime, e.ins = this.ins.map(e => ({
                        hash: e.hash,
                        index: e.index,
                        script: e.script,
                        sequence: e.sequence,
                        witness: e.witness
                    })), e.outs = this.outs.map(e => ({
                        script: e.script,
                        value: e.value
                    })), e
                }
                hashForSignature(e, t, r) {
                    if (Th(jh.tuple(jh.UInt32, jh.Buffer, jh.Number), arguments), e >= this.ins.length) return u;
                    const i = Jh.compile(Jh.decompile(t).filter(e => e !== n.OPS.OP_CODESEPARATOR)),
                        a = this.clone();
                    if ((31 & r) === h.SIGHASH_NONE) a.outs = [], a.ins.forEach((t, r) => {
                        r !== e && (t.sequence = 0)
                    });
                    else if ((31 & r) === h.SIGHASH_SINGLE) {
                        if (e >= this.outs.length) return u;
                        a.outs.length = e + 1;
                        for (let t = 0; t < e; t++) a.outs[t] = f;
                        a.ins.forEach((t, r) => {
                            r !== e && (t.sequence = 0)
                        })
                    }
                    r & h.SIGHASH_ANYONECANPAY ? (a.ins = [a.ins[e]], a.ins[0].script = i) : (a.ins.forEach(e => {
                        e.script = o
                    }), a.ins[e].script = i);
                    const s = Le.allocUnsafe(a.__byteLength(!1) + 4);
                    return s.writeInt32LE(r, s.length - 4), a.__toBuffer(s, 0, !1), Qh.hash256(s)
                }
                hashForWitnessV0(e, t, r, n) {
                    Th(jh.tuple(jh.UInt32, jh.Buffer, jh.Satoshi, jh.UInt32), arguments);
                    let o = Le.from([]),
                        a = 0;

                    function u(e) {
                        a += e.copy(o, a)
                    }

                    function c(e) {
                        a = o.writeUInt32LE(e, a)
                    }

                    function f(e) {
                        a = bd.writeUInt64LE(o, e, a)
                    }

                    function d(e) {
                        var t;
                        t = e.length, wd.encode(t, o, a), a += wd.encode.bytes, u(e)
                    }
                    let l = s,
                        p = s,
                        b = s;
                    if (n & h.SIGHASH_ANYONECANPAY || (o = Le.allocUnsafe(36 * this.ins.length), a = 0, this.ins.forEach(e => {
                            u(e.hash), c(e.index)
                        }), p = Qh.hash256(o)), n & h.SIGHASH_ANYONECANPAY || (31 & n) === h.SIGHASH_SINGLE || (31 & n) === h.SIGHASH_NONE || (o = Le.allocUnsafe(4 * this.ins.length), a = 0, this.ins.forEach(e => {
                            c(e.sequence)
                        }), b = Qh.hash256(o)), (31 & n) !== h.SIGHASH_SINGLE && (31 & n) !== h.SIGHASH_NONE) {
                        const e = this.outs.reduce((e, t) => e + 8 + i(t.script), 0);
                        o = Le.allocUnsafe(e), a = 0, this.outs.forEach(e => {
                            f(e.value), d(e.script)
                        }), l = Qh.hash256(o)
                    } else if ((31 & n) === h.SIGHASH_SINGLE && e < this.outs.length) {
                        const t = this.outs[e];
                        o = Le.allocUnsafe(8 + i(t.script)), a = 0, f(t.value), d(t.script), l = Qh.hash256(o)
                    }
                    o = Le.allocUnsafe(156 + i(t)), a = 0;
                    const m = this.ins[e];
                    return c(this.version), u(p), u(b), u(m.hash), c(m.index), d(t), f(r), c(m.sequence), u(l), c(this.locktime), c(n), Qh.hash256(o)
                }
                getHash(e) {
                    return e && this.isCoinbase() ? Le.alloc(32, 0) : Qh.hash256(this.__toBuffer(void 0, void 0, e))
                }
                getId() {
                    return r.reverseBuffer(this.getHash(!1)).toString("hex")
                }
                toBuffer(e, t) {
                    return this.__toBuffer(e, t, !0)
                }
                toHex() {
                    return this.toBuffer(void 0, void 0).toString("hex")
                }
                setInputScript(e, t) {
                    Th(jh.tuple(jh.Number, jh.Buffer), arguments), this.ins[e].script = t
                }
                setWitness(e, t) {
                    Th(jh.tuple(jh.Number, [jh.Buffer]), arguments), this.ins[e].witness = t
                }
                __byteLength(e) {
                    const t = e && this.hasWitnesses();
                    return (t ? 10 : 8) + wd.encodingLength(this.ins.length) + wd.encodingLength(this.outs.length) + this.ins.reduce((e, t) => e + 40 + i(t.script), 0) + this.outs.reduce((e, t) => e + 8 + i(t.script), 0) + (t ? this.ins.reduce((e, t) => e + function(e) {
                        const t = e.length;
                        return wd.encodingLength(t) + e.reduce((e, t) => e + i(t), 0)
                    }(t.witness), 0) : 0)
                }
                __toBuffer(e, t, r) {
                    e || (e = Le.allocUnsafe(this.__byteLength(r)));
                    let n = t || 0;

                    function i(t) {
                        n += t.copy(e, n)
                    }

                    function o(t) {
                        n = e.writeUInt8(t, n)
                    }

                    function a(t) {
                        n = e.writeUInt32LE(t, n)
                    }

                    function s(t) {
                        wd.encode(t, e, n), n += wd.encode.bytes
                    }

                    function u(e) {
                        s(e.length), i(e)
                    }
                    var c;
                    c = this.version, n = e.writeInt32LE(c, n);
                    const f = r && this.hasWitnesses();
                    return f && (o(h.ADVANCED_TRANSACTION_MARKER), o(h.ADVANCED_TRANSACTION_FLAG)), s(this.ins.length), this.ins.forEach(e => {
                        i(e.hash), a(e.index), u(e.script), a(e.sequence)
                    }), s(this.outs.length), this.outs.forEach(t => {
                        ! function(e) {
                            return void 0 !== e.value
                        }(t) ? i(t.valueBuffer): function(t) {
                            n = bd.writeUInt64LE(e, t, n)
                        }(t.value), u(t.script)
                    }), f && this.ins.forEach(e => {
                        ! function(e) {
                            s(e.length), e.forEach(u)
                        }(e.witness)
                    }), a(this.locktime), void 0 !== t ? e.slice(t, n) : e
                }
            }
            h.DEFAULT_SEQUENCE = 4294967295, h.SIGHASH_ALL = 1, h.SIGHASH_NONE = 2, h.SIGHASH_SINGLE = 3, h.SIGHASH_ANYONECANPAY = 128, h.ADVANCED_TRANSACTION_MARKER = 0, h.ADVANCED_TRANSACTION_FLAG = 1, t.Transaction = h
        });
    n(_d);
    _d.Transaction;
    var Sd = function(e, t) {
            if (!Array.isArray(e)) throw TypeError("Expected values Array");
            if ("function" != typeof t) throw TypeError("Expected digest Function");
            for (var r = e.length, n = e.concat(); r > 1;) {
                for (var i = 0, o = 0; o < r; o += 2, ++i) {
                    var a = n[o],
                        s = o + 1 === r ? a : n[o + 1],
                        u = Le.concat([a, s]);
                    n[i] = t(u)
                }
                r = i
            }
            return n[0]
        },
        kd = i(function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = new TypeError("Cannot compute merkle root for zero transactions"),
                n = new TypeError("Cannot compute witness commit for non-segwit block");
            class i {
                constructor() {
                    this.version = 1, this.prevHash = void 0, this.merkleRoot = void 0, this.timestamp = 0, this.witnessCommit = void 0, this.bits = 0, this.nonce = 0, this.transactions = void 0
                }
                static fromBuffer(e) {
                    if (e.length < 80) throw new Error("Buffer too small (< 80 bytes)");
                    let t = 0;
                    const r = r => (t += r, e.slice(t - r, t)),
                        n = () => {
                            const r = e.readUInt32LE(t);
                            return t += 4, r
                        },
                        o = new i;
                    if (o.version = (() => {
                            const r = e.readInt32LE(t);
                            return t += 4, r
                        })(), o.prevHash = r(32), o.merkleRoot = r(32), o.timestamp = n(), o.bits = n(), o.nonce = n(), 80 === e.length) return o;
                    const a = () => {
                            const r = _d.Transaction.fromBuffer(e.slice(t), !0);
                            return t += r.byteLength(), r
                        },
                        s = (() => {
                            const r = wd.decode(e, t);
                            return t += wd.decode.bytes, r
                        })();
                    o.transactions = [];
                    for (let e = 0; e < s; ++e) {
                        const e = a();
                        o.transactions.push(e)
                    }
                    const u = o.getWitnessCommit();
                    return u && (o.witnessCommit = u), o
                }
                static fromHex(e) {
                    return i.fromBuffer(Le.from(e, "hex"))
                }
                static calculateTarget(e) {
                    const t = ((4278190080 & e) >> 24) - 3,
                        r = 8388607 & e,
                        n = Le.alloc(32, 0);
                    return n.writeUIntBE(r, 29 - t, 3), n
                }
                static calculateMerkleRoot(e, t) {
                    if (Th([{
                            getHash: jh.Function
                        }], e), 0 === e.length) throw r;
                    if (t && !o(e)) throw n;
                    const i = e.map(e => e.getHash(t)),
                        a = Sd(i, Qh.hash256);
                    return t ? Qh.hash256(Le.concat([a, e[0].ins[0].witness[0]])) : a
                }
                getWitnessCommit() {
                    if (!o(this.transactions)) return null;
                    const e = this.transactions[0].outs.filter(e => e.script.slice(0, 6).equals(Le.from("6a24aa21a9ed", "hex"))).map(e => e.script.slice(6, 38));
                    if (0 === e.length) return null;
                    const t = e[e.length - 1];
                    return t instanceof Le && 32 === t.length ? t : null
                }
                hasWitnessCommit() {
                    return this.witnessCommit instanceof Le && 32 === this.witnessCommit.length || null !== this.getWitnessCommit()
                }
                hasWitness() {
                    return (e = this.transactions) instanceof Array && e.some(e => "object" == typeof e && e.ins instanceof Array && e.ins.some(e => "object" == typeof e && e.witness instanceof Array && e.witness.length > 0));
                    var e
                }
                byteLength(e) {
                    return e || !this.transactions ? 80 : 80 + wd.encodingLength(this.transactions.length) + this.transactions.reduce((e, t) => e + t.byteLength(), 0)
                }
                getHash() {
                    return Qh.hash256(this.toBuffer(!0))
                }
                getId() {
                    return bd.reverseBuffer(this.getHash()).toString("hex")
                }
                getUTCDate() {
                    const e = new Date(0);
                    return e.setUTCSeconds(this.timestamp), e
                }
                toBuffer(e) {
                    const t = Le.allocUnsafe(this.byteLength(e));
                    let r = 0;
                    const n = e => {
                            e.copy(t, r), r += e.length
                        },
                        i = e => {
                            t.writeUInt32LE(e, r), r += 4
                        };
                    var o;
                    return o = this.version, t.writeInt32LE(o, r), r += 4, n(this.prevHash), n(this.merkleRoot), i(this.timestamp), i(this.bits), i(this.nonce), e || !this.transactions ? t : (wd.encode(this.transactions.length, t, r), r += wd.encode.bytes, this.transactions.forEach(e => {
                        const n = e.byteLength();
                        e.toBuffer(t, r), r += n
                    }), t)
                }
                toHex(e) {
                    return this.toBuffer(e).toString("hex")
                }
                checkTxRoots() {
                    const e = this.hasWitnessCommit();
                    return !(!e && this.hasWitness()) && (this.__checkMerkleRoot() && (!e || this.__checkWitnessCommit()))
                }
                checkProofOfWork() {
                    const e = bd.reverseBuffer(this.getHash()),
                        t = i.calculateTarget(this.bits);
                    return e.compare(t) <= 0
                }
                __checkMerkleRoot() {
                    if (!this.transactions) throw r;
                    const e = i.calculateMerkleRoot(this.transactions);
                    return 0 === this.merkleRoot.compare(e)
                }
                __checkWitnessCommit() {
                    if (!this.transactions) throw r;
                    if (!this.hasWitnessCommit()) throw n;
                    const e = i.calculateMerkleRoot(this.transactions, !0);
                    return 0 === this.witnessCommit.compare(e)
                }
            }

            function o(e) {
                return e instanceof Array && e[0] && e[0].ins && e[0].ins instanceof Array && e[0].ins[0] && e[0].ins[0].witness && e[0].ins[0].witness instanceof Array && e[0].ins[0].witness.length > 0
            }
            t.Block = i
        });
    n(kd);
    kd.Block;
    var Ed = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function(e) {
                e[e.UNSIGNED_TX = 0] = "UNSIGNED_TX", e[e.GLOBAL_XPUB = 1] = "GLOBAL_XPUB"
            }(t.GlobalTypes || (t.GlobalTypes = {})), t.GLOBAL_TYPE_NAMES = ["unsignedTx", "globalXpub"],
            function(e) {
                e[e.NON_WITNESS_UTXO = 0] = "NON_WITNESS_UTXO", e[e.WITNESS_UTXO = 1] = "WITNESS_UTXO", e[e.PARTIAL_SIG = 2] = "PARTIAL_SIG", e[e.SIGHASH_TYPE = 3] = "SIGHASH_TYPE", e[e.REDEEM_SCRIPT = 4] = "REDEEM_SCRIPT", e[e.WITNESS_SCRIPT = 5] = "WITNESS_SCRIPT", e[e.BIP32_DERIVATION = 6] = "BIP32_DERIVATION", e[e.FINAL_SCRIPTSIG = 7] = "FINAL_SCRIPTSIG", e[e.FINAL_SCRIPTWITNESS = 8] = "FINAL_SCRIPTWITNESS", e[e.POR_COMMITMENT = 9] = "POR_COMMITMENT"
            }(t.InputTypes || (t.InputTypes = {})), t.INPUT_TYPE_NAMES = ["nonWitnessUtxo", "witnessUtxo", "partialSig", "sighashType", "redeemScript", "witnessScript", "bip32Derivation", "finalScriptSig", "finalScriptWitness", "porCommitment"],
            function(e) {
                e[e.REDEEM_SCRIPT = 0] = "REDEEM_SCRIPT", e[e.WITNESS_SCRIPT = 1] = "WITNESS_SCRIPT", e[e.BIP32_DERIVATION = 2] = "BIP32_DERIVATION"
            }(t.OutputTypes || (t.OutputTypes = {})), t.OUTPUT_TYPE_NAMES = ["redeemScript", "witnessScript", "bip32Derivation"]
    });
    n(Ed);
    Ed.GlobalTypes, Ed.GLOBAL_TYPE_NAMES, Ed.InputTypes, Ed.INPUT_TYPE_NAMES, Ed.OutputTypes, Ed.OUTPUT_TYPE_NAMES;
    var Id = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = e => [...Array(e).keys()];
        t.decode = function(e) {
            if (e.key[0] !== Ed.GlobalTypes.GLOBAL_XPUB) throw new Error("Decode Error: could not decode globalXpub with key 0x" + e.key.toString("hex"));
            if (79 !== e.key.length || ![2, 3].includes(e.key[46])) throw new Error("Decode Error: globalXpub has invalid extended pubkey in key 0x" + e.key.toString("hex"));
            if (e.value.length / 4 % 1 != 0) throw new Error("Decode Error: Global GLOBAL_XPUB value length should be multiple of 4");
            const t = e.key.slice(1),
                n = {
                    masterFingerprint: e.value.slice(0, 4),
                    extendedPubkey: t,
                    path: "m"
                };
            for (const t of r(e.value.length / 4 - 1)) {
                const r = e.value.readUInt32LE(4 * t + 4),
                    i = !!(2147483648 & r),
                    o = 2147483647 & r;
                n.path += "/" + o.toString(10) + (i ? "'" : "")
            }
            return n
        }, t.encode = function(e) {
            const t = Le.from([Ed.GlobalTypes.GLOBAL_XPUB]),
                r = Le.concat([t, e.extendedPubkey]),
                n = e.path.split("/"),
                i = Le.allocUnsafe(4 * n.length);
            e.masterFingerprint.copy(i, 0);
            let o = 4;
            return n.slice(1).forEach(e => {
                const t = "'" === e.slice(-1);
                let r = 2147483647 & parseInt(t ? e.slice(0, -1) : e, 10);
                t && (r += 2147483648), i.writeUInt32LE(r, o), o += 4
            }), {
                key: r,
                value: i
            }
        }, t.expected = "{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }", t.check = function(e) {
            const t = e.extendedPubkey,
                r = e.masterFingerprint,
                n = e.path;
            return mt(t) && 78 === t.length && [2, 3].indexOf(t[45]) > -1 && mt(r) && 4 === r.length && "string" == typeof n && !!n.match(/^m(\/\d+'?)+$/)
        }, t.canAddToArray = function(e, t, r) {
            const n = t.extendedPubkey.toString("hex");
            return !r.has(n) && (r.add(n), 0 === e.filter(e => e.extendedPubkey.equals(t.extendedPubkey)).length)
        }
    });
    n(Id);
    Id.decode, Id.encode, Id.expected, Id.check, Id.canAddToArray;
    var xd = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.encode = function(e) {
            return {
                key: Le.from([Ed.GlobalTypes.UNSIGNED_TX]),
                value: e.toBuffer()
            }
        }
    });
    n(xd);
    xd.encode;
    var Od = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.decode = function(e) {
            if (e.key[0] !== Ed.InputTypes.FINAL_SCRIPTSIG) throw new Error("Decode Error: could not decode finalScriptSig with key 0x" + e.key.toString("hex"));
            return e.value
        }, t.encode = function(e) {
            return {
                key: Le.from([Ed.InputTypes.FINAL_SCRIPTSIG]),
                value: e
            }
        }, t.expected = "Buffer", t.check = function(e) {
            return mt(e)
        }, t.canAdd = function(e, t) {
            return !!e && !!t && void 0 === e.finalScriptSig
        }
    });
    n(Od);
    Od.decode, Od.encode, Od.expected, Od.check, Od.canAdd;
    var Td = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.decode = function(e) {
            if (e.key[0] !== Ed.InputTypes.FINAL_SCRIPTWITNESS) throw new Error("Decode Error: could not decode finalScriptWitness with key 0x" + e.key.toString("hex"));
            return e.value
        }, t.encode = function(e) {
            return {
                key: Le.from([Ed.InputTypes.FINAL_SCRIPTWITNESS]),
                value: e
            }
        }, t.expected = "Buffer", t.check = function(e) {
            return mt(e)
        }, t.canAdd = function(e, t) {
            return !!e && !!t && void 0 === e.finalScriptWitness
        }
    });
    n(Td);
    Td.decode, Td.encode, Td.expected, Td.check, Td.canAdd;
    var Pd = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.decode = function(e) {
            if (e.key[0] !== Ed.InputTypes.NON_WITNESS_UTXO) throw new Error("Decode Error: could not decode nonWitnessUtxo with key 0x" + e.key.toString("hex"));
            return e.value
        }, t.encode = function(e) {
            return {
                key: Le.from([Ed.InputTypes.NON_WITNESS_UTXO]),
                value: e
            }
        }, t.expected = "Buffer", t.check = function(e) {
            return mt(e)
        }, t.canAdd = function(e, t) {
            return !!e && !!t && void 0 === e.witnessUtxo && void 0 === e.nonWitnessUtxo
        }
    });
    n(Pd);
    Pd.decode, Pd.encode, Pd.expected, Pd.check, Pd.canAdd;
    var Ad = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.decode = function(e) {
            if (e.key[0] !== Ed.InputTypes.PARTIAL_SIG) throw new Error("Decode Error: could not decode partialSig with key 0x" + e.key.toString("hex"));
            if (34 !== e.key.length && 66 !== e.key.length || ![2, 3, 4].includes(e.key[1])) throw new Error("Decode Error: partialSig has invalid pubkey in key 0x" + e.key.toString("hex"));
            return {
                pubkey: e.key.slice(1),
                signature: e.value
            }
        }, t.encode = function(e) {
            const t = Le.from([Ed.InputTypes.PARTIAL_SIG]);
            return {
                key: Le.concat([t, e.pubkey]),
                value: e.signature
            }
        }, t.expected = "{ pubkey: Buffer; signature: Buffer; }", t.check = function(e) {
            return mt(e.pubkey) && mt(e.signature) && [33, 65].includes(e.pubkey.length) && [2, 3, 4].includes(e.pubkey[0]) && function(e) {
                if (!mt(e) || e.length < 9) return !1;
                if (48 !== e[0]) return !1;
                if (e.length !== e[1] + 3) return !1;
                if (2 !== e[2]) return !1;
                const t = e[3];
                if (t > 33 || t < 1) return !1;
                if (2 !== e[3 + t + 1]) return !1;
                const r = e[3 + t + 2];
                return !(r > 33 || r < 1) && e.length === 3 + t + 2 + r + 2
            }(e.signature)
        }, t.canAddToArray = function(e, t, r) {
            const n = t.pubkey.toString("hex");
            return !r.has(n) && (r.add(n), 0 === e.filter(e => e.pubkey.equals(t.pubkey)).length)
        }
    });
    n(Ad);
    Ad.decode, Ad.encode, Ad.expected, Ad.check, Ad.canAddToArray;
    var Md = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.decode = function(e) {
            if (e.key[0] !== Ed.InputTypes.POR_COMMITMENT) throw new Error("Decode Error: could not decode porCommitment with key 0x" + e.key.toString("hex"));
            return e.value.toString("utf8")
        }, t.encode = function(e) {
            return {
                key: Le.from([Ed.InputTypes.POR_COMMITMENT]),
                value: Le.from(e, "utf8")
            }
        }, t.expected = "string", t.check = function(e) {
            return "string" == typeof e
        }, t.canAdd = function(e, t) {
            return !!e && !!t && void 0 === e.porCommitment
        }
    });
    n(Md);
    Md.decode, Md.encode, Md.expected, Md.check, Md.canAdd;
    var Cd = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.decode = function(e) {
            if (e.key[0] !== Ed.InputTypes.SIGHASH_TYPE) throw new Error("Decode Error: could not decode sighashType with key 0x" + e.key.toString("hex"));
            return e.value.readUInt32LE(0)
        }, t.encode = function(e) {
            const t = Le.from([Ed.InputTypes.SIGHASH_TYPE]),
                r = Le.allocUnsafe(4);
            return r.writeUInt32LE(e, 0), {
                key: t,
                value: r
            }
        }, t.expected = "number", t.check = function(e) {
            return "number" == typeof e
        }, t.canAdd = function(e, t) {
            return !!e && !!t && void 0 === e.sighashType
        }
    });
    n(Cd);
    Cd.decode, Cd.encode, Cd.expected, Cd.check, Cd.canAdd;
    var Ld = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = 9007199254740991;

        function n(e) {
            if (e < 0 || e > r || e % 1 != 0) throw new RangeError("value out of range")
        }

        function i(e) {
            return n(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9
        }
        t.encode = function e(t, r, o) {
            if (n(t), r || (r = Le.allocUnsafe(i(t))), !mt(r)) throw new TypeError("buffer must be a Buffer instance");
            return o || (o = 0), t < 253 ? (r.writeUInt8(t, o), Object.assign(e, {
                bytes: 1
            })) : t <= 65535 ? (r.writeUInt8(253, o), r.writeUInt16LE(t, o + 1), Object.assign(e, {
                bytes: 3
            })) : t <= 4294967295 ? (r.writeUInt8(254, o), r.writeUInt32LE(t, o + 1), Object.assign(e, {
                bytes: 5
            })) : (r.writeUInt8(255, o), r.writeUInt32LE(t >>> 0, o + 1), r.writeUInt32LE(t / 4294967296 | 0, o + 5), Object.assign(e, {
                bytes: 9
            })), r
        }, t.decode = function e(t, r) {
            if (!mt(t)) throw new TypeError("buffer must be a Buffer instance");
            r || (r = 0);
            const i = t.readUInt8(r);
            if (i < 253) return Object.assign(e, {
                bytes: 1
            }), i;
            if (253 === i) return Object.assign(e, {
                bytes: 3
            }), t.readUInt16LE(r + 1);
            if (254 === i) return Object.assign(e, {
                bytes: 5
            }), t.readUInt32LE(r + 1); {
                Object.assign(e, {
                    bytes: 9
                });
                const i = t.readUInt32LE(r + 1),
                    o = 4294967296 * t.readUInt32LE(r + 5) + i;
                return n(o), o
            }
        }, t.encodingLength = i
    });
    n(Ld);
    Ld.encode, Ld.decode, Ld.encodingLength;
    var Rd = i(function(e, t) {
        function r(e) {
            const t = e.key.length,
                r = e.value.length,
                n = Ld.encodingLength(t),
                i = Ld.encodingLength(r),
                o = Le.allocUnsafe(n + t + i + r);
            return Ld.encode(t, o, 0), e.key.copy(o, n), Ld.encode(r, o, n + t), e.value.copy(o, n + t + i), o
        }

        function n(e, t) {
            if ("number" != typeof e) throw new Error("cannot write a non-number as a number");
            if (e < 0) throw new Error("specified a negative value for writing an unsigned value");
            if (e > t) throw new Error("RangeError: value out of range");
            if (Math.floor(e) !== e) throw new Error("value has a fractional component")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.range = e => [...Array(e).keys()], t.reverseBuffer = function(e) {
            if (e.length < 1) return e;
            let t = e.length - 1,
                r = 0;
            for (let n = 0; n < e.length / 2; n++) r = e[n], e[n] = e[t], e[t] = r, t--;
            return e
        }, t.keyValsToBuffer = function(e) {
            const t = e.map(e => r(e));
            return t.push(Le.from([0])), Le.concat(t)
        }, t.keyValToBuffer = r, t.readUInt64LE = function(e, t) {
            const r = e.readUInt32LE(t);
            let i = e.readUInt32LE(t + 4);
            return n((i *= 4294967296) + r, 9007199254740991), i + r
        }, t.writeUInt64LE = function(e, t, r) {
            return n(t, 9007199254740991), e.writeInt32LE(-1 & t, r), e.writeUInt32LE(Math.floor(t / 4294967296), r + 4), r + 8
        }
    });
    n(Rd);
    Rd.range, Rd.reverseBuffer, Rd.keyValsToBuffer, Rd.keyValToBuffer, Rd.readUInt64LE, Rd.writeUInt64LE;
    var Nd = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.decode = function(e) {
            if (e.key[0] !== Ed.InputTypes.WITNESS_UTXO) throw new Error("Decode Error: could not decode witnessUtxo with key 0x" + e.key.toString("hex"));
            const t = Rd.readUInt64LE(e.value, 0);
            let r = 8;
            const n = Ld.decode(e.value, r);
            r += Ld.encodingLength(n);
            const i = e.value.slice(r);
            if (i.length !== n) throw new Error("Decode Error: WITNESS_UTXO script is not proper length");
            return {
                script: i,
                value: t
            }
        }, t.encode = function(e) {
            const {
                script: t,
                value: r
            } = e, n = Ld.encodingLength(t.length), i = Le.allocUnsafe(8 + n + t.length);
            return Rd.writeUInt64LE(i, r, 0), Ld.encode(t.length, i, 8), t.copy(i, 8 + n), {
                key: Le.from([Ed.InputTypes.WITNESS_UTXO]),
                value: i
            }
        }, t.expected = "{ script: Buffer; value: number; }", t.check = function(e) {
            return mt(e.script) && "number" == typeof e.value
        }, t.canAdd = function(e, t) {
            return !!e && !!t && void 0 === e.witnessUtxo && void 0 === e.nonWitnessUtxo
        }
    });
    n(Nd);
    Nd.decode, Nd.encode, Nd.expected, Nd.check, Nd.canAdd;
    var jd = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = e => [...Array(e).keys()];
        t.makeConverter = function(e) {
            return {
                decode: function(t) {
                    if (t.key[0] !== e) throw new Error("Decode Error: could not decode bip32Derivation with key 0x" + t.key.toString("hex"));
                    if (34 !== t.key.length && 66 !== t.key.length || ![2, 3, 4].includes(t.key[1])) throw new Error("Decode Error: bip32Derivation has invalid pubkey in key 0x" + t.key.toString("hex"));
                    if (t.value.length / 4 % 1 != 0) throw new Error("Decode Error: Input BIP32_DERIVATION value length should be multiple of 4");
                    const n = t.key.slice(1),
                        i = {
                            masterFingerprint: t.value.slice(0, 4),
                            pubkey: n,
                            path: "m"
                        };
                    for (const e of r(t.value.length / 4 - 1)) {
                        const r = t.value.readUInt32LE(4 * e + 4),
                            n = !!(2147483648 & r),
                            o = 2147483647 & r;
                        i.path += "/" + o.toString(10) + (n ? "'" : "")
                    }
                    return i
                },
                encode: function(t) {
                    const r = Le.from([e]),
                        n = Le.concat([r, t.pubkey]),
                        i = t.path.split("/"),
                        o = Le.allocUnsafe(4 * i.length);
                    t.masterFingerprint.copy(o, 0);
                    let a = 4;
                    return i.slice(1).forEach(e => {
                        const t = "'" === e.slice(-1);
                        let r = 2147483647 & parseInt(t ? e.slice(0, -1) : e, 10);
                        t && (r += 2147483648), o.writeUInt32LE(r, a), a += 4
                    }), {
                        key: n,
                        value: o
                    }
                },
                check: function(e) {
                    return mt(e.pubkey) && mt(e.masterFingerprint) && "string" == typeof e.path && [33, 65].includes(e.pubkey.length) && [2, 3, 4].includes(e.pubkey[0]) && 4 === e.masterFingerprint.length
                },
                expected: "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }",
                canAddToArray: function(e, t, r) {
                    const n = t.pubkey.toString("hex");
                    return !r.has(n) && (r.add(n), 0 === e.filter(e => e.pubkey.equals(t.pubkey)).length)
                }
            }
        }
    });
    n(jd);
    jd.makeConverter;
    var Ud = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.makeChecker = function(e) {
            return function(t) {
                let r;
                if (e.includes(t.key[0]) && (33 !== (r = t.key.slice(1)).length && 65 !== r.length || ![2, 3, 4].includes(r[0]))) throw new Error("Format Error: invalid pubkey in key 0x" + t.key.toString("hex"));
                return r
            }
        }
    });
    n(Ud);
    Ud.makeChecker;
    var Dd = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.makeConverter = function(e) {
            return {
                decode: function(t) {
                    if (t.key[0] !== e) throw new Error("Decode Error: could not decode redeemScript with key 0x" + t.key.toString("hex"));
                    return t.value
                },
                encode: function(t) {
                    return {
                        key: Le.from([e]),
                        value: t
                    }
                },
                check: function(e) {
                    return mt(e)
                },
                expected: "Buffer",
                canAdd: function(e, t) {
                    return !!e && !!t && void 0 === e.redeemScript
                }
            }
        }
    });
    n(Dd);
    Dd.makeConverter;
    var Bd = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.makeConverter = function(e) {
            return {
                decode: function(t) {
                    if (t.key[0] !== e) throw new Error("Decode Error: could not decode witnessScript with key 0x" + t.key.toString("hex"));
                    return t.value
                },
                encode: function(t) {
                    return {
                        key: Le.from([e]),
                        value: t
                    }
                },
                check: function(e) {
                    return mt(e)
                },
                expected: "Buffer",
                canAdd: function(e, t) {
                    return !!e && !!t && void 0 === e.witnessScript
                }
            }
        }
    });
    n(Bd);
    Bd.makeConverter;
    var Hd = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = {
            unsignedTx: xd,
            globalXpub: Id,
            checkPubkey: Ud.makeChecker([])
        };
        t.globals = r;
        const n = {
            nonWitnessUtxo: Pd,
            partialSig: Ad,
            sighashType: Cd,
            finalScriptSig: Od,
            finalScriptWitness: Td,
            porCommitment: Md,
            witnessUtxo: Nd,
            bip32Derivation: jd.makeConverter(Ed.InputTypes.BIP32_DERIVATION),
            redeemScript: Dd.makeConverter(Ed.InputTypes.REDEEM_SCRIPT),
            witnessScript: Bd.makeConverter(Ed.InputTypes.WITNESS_SCRIPT),
            checkPubkey: Ud.makeChecker([Ed.InputTypes.PARTIAL_SIG, Ed.InputTypes.BIP32_DERIVATION])
        };
        t.inputs = n;
        const i = {
            bip32Derivation: jd.makeConverter(Ed.OutputTypes.BIP32_DERIVATION),
            redeemScript: Dd.makeConverter(Ed.OutputTypes.REDEEM_SCRIPT),
            witnessScript: Bd.makeConverter(Ed.OutputTypes.WITNESS_SCRIPT),
            checkPubkey: Ud.makeChecker([Ed.OutputTypes.BIP32_DERIVATION])
        };
        t.outputs = i
    });
    n(Hd);
    Hd.globals, Hd.inputs, Hd.outputs;
    var Fd = i(function(e, t) {
        function r(e, t, r) {
            if (!t.equals(Le.from([r]))) throw new Error(`Format Error: Invalid ${e} key: ${t.toString("hex")}`)
        }

        function n(e, {
            globalMapKeyVals: t,
            inputKeyVals: n,
            outputKeyVals: i
        }) {
            const o = {
                unsignedTx: e
            };
            let a = 0;
            for (const e of t) switch (e.key[0]) {
                case Ed.GlobalTypes.UNSIGNED_TX:
                    if (r("global", e.key, Ed.GlobalTypes.UNSIGNED_TX), a > 0) throw new Error("Format Error: GlobalMap has multiple UNSIGNED_TX");
                    a++;
                    break;
                case Ed.GlobalTypes.GLOBAL_XPUB:
                    void 0 === o.globalXpub && (o.globalXpub = []), o.globalXpub.push(Hd.globals.globalXpub.decode(e));
                    break;
                default:
                    o.unknownKeyVals || (o.unknownKeyVals = []), o.unknownKeyVals.push(e)
            }
            const s = n.length,
                u = i.length,
                c = [],
                f = [];
            for (const e of Rd.range(s)) {
                const t = {};
                for (const i of n[e]) switch (Hd.inputs.checkPubkey(i), i.key[0]) {
                    case Ed.InputTypes.NON_WITNESS_UTXO:
                        if (r("input", i.key, Ed.InputTypes.NON_WITNESS_UTXO), void 0 !== t.nonWitnessUtxo || void 0 !== t.witnessUtxo) throw new Error("Format Error: Input has multiple [NON_]WITNESS_UTXO");
                        t.nonWitnessUtxo = Hd.inputs.nonWitnessUtxo.decode(i);
                        break;
                    case Ed.InputTypes.WITNESS_UTXO:
                        if (r("input", i.key, Ed.InputTypes.WITNESS_UTXO), void 0 !== t.nonWitnessUtxo || void 0 !== t.witnessUtxo) throw new Error("Format Error: Input has multiple [NON_]WITNESS_UTXO");
                        t.witnessUtxo = Hd.inputs.witnessUtxo.decode(i);
                        break;
                    case Ed.InputTypes.PARTIAL_SIG:
                        void 0 === t.partialSig && (t.partialSig = []), t.partialSig.push(Hd.inputs.partialSig.decode(i));
                        break;
                    case Ed.InputTypes.SIGHASH_TYPE:
                        if (r("input", i.key, Ed.InputTypes.SIGHASH_TYPE), void 0 !== t.sighashType) throw new Error("Format Error: Input has multiple SIGHASH_TYPE");
                        t.sighashType = Hd.inputs.sighashType.decode(i);
                        break;
                    case Ed.InputTypes.REDEEM_SCRIPT:
                        if (r("input", i.key, Ed.InputTypes.REDEEM_SCRIPT), void 0 !== t.redeemScript) throw new Error("Format Error: Input has multiple REDEEM_SCRIPT");
                        t.redeemScript = Hd.inputs.redeemScript.decode(i);
                        break;
                    case Ed.InputTypes.WITNESS_SCRIPT:
                        if (r("input", i.key, Ed.InputTypes.WITNESS_SCRIPT), void 0 !== t.witnessScript) throw new Error("Format Error: Input has multiple WITNESS_SCRIPT");
                        t.witnessScript = Hd.inputs.witnessScript.decode(i);
                        break;
                    case Ed.InputTypes.BIP32_DERIVATION:
                        void 0 === t.bip32Derivation && (t.bip32Derivation = []), t.bip32Derivation.push(Hd.inputs.bip32Derivation.decode(i));
                        break;
                    case Ed.InputTypes.FINAL_SCRIPTSIG:
                        r("input", i.key, Ed.InputTypes.FINAL_SCRIPTSIG), t.finalScriptSig = Hd.inputs.finalScriptSig.decode(i);
                        break;
                    case Ed.InputTypes.FINAL_SCRIPTWITNESS:
                        r("input", i.key, Ed.InputTypes.FINAL_SCRIPTWITNESS), t.finalScriptWitness = Hd.inputs.finalScriptWitness.decode(i);
                        break;
                    case Ed.InputTypes.POR_COMMITMENT:
                        r("input", i.key, Ed.InputTypes.POR_COMMITMENT), t.porCommitment = Hd.inputs.porCommitment.decode(i);
                        break;
                    default:
                        t.unknownKeyVals || (t.unknownKeyVals = []), t.unknownKeyVals.push(i)
                }
                c.push(t)
            }
            for (const e of Rd.range(u)) {
                const t = {};
                for (const n of i[e]) switch (Hd.outputs.checkPubkey(n), n.key[0]) {
                    case Ed.OutputTypes.REDEEM_SCRIPT:
                        if (r("output", n.key, Ed.OutputTypes.REDEEM_SCRIPT), void 0 !== t.redeemScript) throw new Error("Format Error: Output has multiple REDEEM_SCRIPT");
                        t.redeemScript = Hd.outputs.redeemScript.decode(n);
                        break;
                    case Ed.OutputTypes.WITNESS_SCRIPT:
                        if (r("output", n.key, Ed.OutputTypes.WITNESS_SCRIPT), void 0 !== t.witnessScript) throw new Error("Format Error: Output has multiple WITNESS_SCRIPT");
                        t.witnessScript = Hd.outputs.witnessScript.decode(n);
                        break;
                    case Ed.OutputTypes.BIP32_DERIVATION:
                        void 0 === t.bip32Derivation && (t.bip32Derivation = []), t.bip32Derivation.push(Hd.outputs.bip32Derivation.decode(n));
                        break;
                    default:
                        t.unknownKeyVals || (t.unknownKeyVals = []), t.unknownKeyVals.push(n)
                }
                f.push(t)
            }
            return {
                globalMap: o,
                inputs: c,
                outputs: f
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.psbtFromBuffer = function(e, t) {
            let r = 0;

            function i() {
                const t = Ld.decode(e, r);
                r += Ld.encodingLength(t);
                const n = e.slice(r, r + t);
                return r += t, n
            }

            function o() {
                return {
                    key: i(),
                    value: i()
                }
            }

            function a() {
                if (r >= e.length) throw new Error("Format Error: Unexpected End of PSBT");
                const t = 0 === e.readUInt8(r);
                return t && r++, t
            }
            if (1886610036 !== function() {
                    const t = e.readUInt32BE(r);
                    return r += 4, t
                }()) throw new Error("Format Error: Invalid Magic Number");
            if (255 !== function() {
                    const t = e.readUInt8(r);
                    return r += 1, t
                }()) throw new Error("Format Error: Magic Number must be followed by 0xff separator");
            const s = [],
                u = {};
            for (; !a();) {
                const e = o(),
                    t = e.key.toString("hex");
                if (u[t]) throw new Error("Format Error: Keys must be unique for global keymap: key " + t);
                u[t] = 1, s.push(e)
            }
            const c = s.filter(e => e.key[0] === Ed.GlobalTypes.UNSIGNED_TX);
            if (1 !== c.length) throw new Error("Format Error: Only one UNSIGNED_TX allowed");
            const f = t(c[0].value),
                {
                    inputCount: h,
                    outputCount: d
                } = f.getInputOutputCounts(),
                l = [],
                p = [];
            for (const e of Rd.range(h)) {
                const t = {},
                    r = [];
                for (; !a();) {
                    const n = o(),
                        i = n.key.toString("hex");
                    if (t[i]) throw new Error("Format Error: Keys must be unique for each input: input index " + e + " key " + i);
                    t[i] = 1, r.push(n)
                }
                l.push(r)
            }
            for (const e of Rd.range(d)) {
                const t = {},
                    r = [];
                for (; !a();) {
                    const n = o(),
                        i = n.key.toString("hex");
                    if (t[i]) throw new Error("Format Error: Keys must be unique for each output: output index " + e + " key " + i);
                    t[i] = 1, r.push(n)
                }
                p.push(r)
            }
            return n(f, {
                globalMapKeyVals: s,
                inputKeyVals: l,
                outputKeyVals: p
            })
        }, t.checkKeyBuffer = r, t.psbtFromKeyVals = n
    });
    n(Fd);
    Fd.psbtFromBuffer, Fd.checkKeyBuffer, Fd.psbtFromKeyVals;
    var qd = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.psbtToBuffer = function({
            globalMap: e,
            inputs: t,
            outputs: r
        }) {
            const {
                globalKeyVals: n,
                inputKeyVals: o,
                outputKeyVals: a
            } = i({
                globalMap: e,
                inputs: t,
                outputs: r
            }), s = Rd.keyValsToBuffer(n), u = e => 0 === e.length ? [Le.from([0])] : e.map(Rd.keyValsToBuffer), c = u(o), f = u(a), h = Le.allocUnsafe(5);
            return h.writeUIntBE(482972169471, 0, 5), Le.concat([h, s].concat(c, f))
        };
        const r = (e, t) => e.key.compare(t.key);

        function n(e, t) {
            const n = Object.keys(e).filter(e => "unknownKeyVals" !== e),
                i = [],
                o = new Set;
            for (const r of n) {
                const n = t[r];
                if (void 0 === n) continue;
                const a = e[r],
                    s = Array.isArray(a) ? a.map(n.encode) : n.encode(a);
                if (Array.isArray(s)) {
                    s.map(e => e.key.toString("hex")).forEach(e => {
                        if (o.has(e)) throw new Error("Serialize Error: Duplicate key: " + e);
                        o.add(e)
                    }), i.push(...s)
                } else {
                    const e = s.key.toString("hex");
                    if (o.has(e)) throw new Error("Serialize Error: Duplicate key: " + e);
                    o.add(e), i.push(s)
                }
            }
            const a = e.unknownKeyVals ? e.unknownKeyVals.filter(e => !o.has(e.key.toString("hex"))) : [];
            return i.concat(a).sort(r)
        }

        function i({
            globalMap: e,
            inputs: t,
            outputs: r
        }) {
            const i = n(e, Hd.globals),
                o = [],
                a = [];
            for (const e of Rd.range(t.length)) {
                const r = n(t[e], Hd.inputs);
                o.push(r)
            }
            for (const e of Rd.range(r.length)) {
                const t = n(r[e], Hd.outputs);
                a.push(t)
            }
            return {
                globalKeyVals: i,
                inputKeyVals: o,
                outputKeyVals: a
            }
        }
        t.psbtToKeyVals = i
    });
    n(qd);
    qd.psbtToBuffer, qd.psbtToKeyVals;
    var Vd = i(function(e, t) {
        function r(e) {
            for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r(Fd), r(qd)
    });
    n(Vd);
    var zd = i(function(e, t) {
        function r(e, t, r) {
            return n => {
                if (e.has(n)) return;
                const i = r.filter(e => e.key.toString("hex") === n)[0];
                t.push(i), e.add(n)
            }
        }

        function n(e) {
            return e.globalMap.unsignedTx
        }

        function i(e) {
            const t = new Set;
            return e.forEach(e => {
                const r = e.key.toString("hex");
                if (t.has(r)) throw new Error("Combine: KeyValue Map keys should be unique");
                t.add(r)
            }), t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.combine = function(e) {
            const t = e[0],
                o = Vd.psbtToKeyVals(t),
                a = e.slice(1);
            if (0 === a.length) throw new Error("Combine: Nothing to combine");
            const s = n(t);
            if (void 0 === s) throw new Error("Combine: Self missing transaction");
            const u = i(o.globalKeyVals),
                c = o.inputKeyVals.map(e => i(e)),
                f = o.outputKeyVals.map(e => i(e));
            for (const e of a) {
                const t = n(e);
                if (void 0 === t || !t.toBuffer().equals(s.toBuffer())) throw new Error("Combine: One of the Psbts does not have the same transaction.");
                const a = Vd.psbtToKeyVals(e);
                i(a.globalKeyVals).forEach(r(u, o.globalKeyVals, a.globalKeyVals)), a.inputKeyVals.map(e => i(e)).forEach((e, t) => e.forEach(r(c[t], o.inputKeyVals[t], a.inputKeyVals[t]))), a.outputKeyVals.map(e => i(e)).forEach((e, t) => e.forEach(r(f[t], o.outputKeyVals[t], a.outputKeyVals[t])))
            }
            return Vd.psbtFromKeyVals(s, {
                globalMapKeyVals: o.globalKeyVals,
                inputKeyVals: o.inputKeyVals,
                outputKeyVals: o.outputKeyVals
            })
        }
    });
    n(zd);
    zd.combine;
    var Kd = i(function(e, t) {
        function r(e, t) {
            const r = e[t];
            if (void 0 === r) throw new Error(`No input #${t}`);
            return r
        }

        function n(e, t, r, n) {
            throw new Error(`Data for ${e} key ${t} is incorrect: Expected ` + `${r} and got ${JSON.stringify(n)}`)
        }

        function i(e) {
            return (t, r) => {
                for (const i of Object.keys(t)) {
                    const o = t[i],
                        {
                            canAdd: a,
                            canAddToArray: s,
                            check: u,
                            expected: c
                        } = Hd[e + "s"][i] || {},
                        f = !!s;
                    if (u)
                        if (f) {
                            if (!Array.isArray(o) || r[i] && !Array.isArray(r[i])) throw new Error(`Key type ${i} must be an array`);
                            o.every(e => u(e)) || n(e, i, c, o);
                            const t = r[i] || [],
                                a = new Set;
                            if (!o.every(e => s(t, e, a))) throw new Error("Can not add duplicate data to array");
                            r[i] = t.concat(o)
                        } else {
                            if (u(o) || n(e, i, c, o), !a(r, o)) throw new Error(`Can not add duplicate data to ${e}`);
                            r[i] = o
                        }
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.checkForInput = r, t.checkForOutput = function(e, t) {
            const r = e[t];
            if (void 0 === r) throw new Error(`No output #${t}`);
            return r
        }, t.checkHasKey = function(e, t, r) {
            if (e.key[0] < r) throw new Error("Use the method for your specific key instead of addUnknownKeyVal*");
            if (t && 0 !== t.filter(t => t.key.equals(e.key)).length) throw new Error(`Duplicate Key: ${e.key.toString("hex")}`)
        }, t.getEnumLength = function(e) {
            let t = 0;
            return Object.keys(e).forEach(e => {
                Number(isNaN(Number(e))) && t++
            }), t
        }, t.inputCheckUncleanFinalized = function(e, t) {
            let r = !1;
            const n = !!t.redeemScript,
                i = !!t.witnessScript,
                o = !!t.nonWitnessUtxo,
                a = !!t.witnessUtxo;
            if (a !== o) {
                const e = a && i,
                    s = !(o || a && n) || !!t.finalScriptSig,
                    u = !e || !!t.finalScriptWitness;
                r = s && u
            }
            if (!1 === r) throw new Error(`Input #${e} has too much or too little data to clean`)
        }, t.updateGlobal = i("global"), t.updateInput = i("input"), t.updateOutput = i("output"), t.addInputAttributes = function(e, n) {
            const i = r(e, e.length - 1);
            t.updateInput(n, i)
        }, t.addOutputAttributes = function(e, n) {
            const i = r(e, e.length - 1);
            t.updateOutput(n, i)
        }, t.defaultVersionSetter = function(e, t) {
            if (!mt(t) || t.length < 4) throw new Error("Set Version: Invalid Transaction");
            return t.writeUInt32LE(e, 0), t
        }, t.defaultLocktimeSetter = function(e, t) {
            if (!mt(t) || t.length < 4) throw new Error("Set Locktime: Invalid Transaction");
            return t.writeUInt32LE(e, t.length - 4), t
        }
    });
    n(Kd);
    Kd.checkForInput, Kd.checkForOutput, Kd.checkHasKey, Kd.getEnumLength, Kd.inputCheckUncleanFinalized, Kd.updateGlobal, Kd.updateInput, Kd.updateOutput, Kd.addInputAttributes, Kd.addOutputAttributes, Kd.defaultVersionSetter, Kd.defaultLocktimeSetter;
    var Wd = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.Psbt = class {
            constructor(e) {
                this.inputs = [], this.outputs = [], this.globalMap = {
                    unsignedTx: e
                }
            }
            static fromBase64(e, t) {
                const r = Le.from(e, "base64");
                return this.fromBuffer(r, t)
            }
            static fromHex(e, t) {
                const r = Le.from(e, "hex");
                return this.fromBuffer(r, t)
            }
            static fromBuffer(e, t) {
                const r = Vd.psbtFromBuffer(e, t),
                    n = new this(r.globalMap.unsignedTx);
                return Object.assign(n, r), n
            }
            toBase64() {
                return this.toBuffer().toString("base64")
            }
            toHex() {
                return this.toBuffer().toString("hex")
            }
            toBuffer() {
                return Vd.psbtToBuffer(this)
            }
            updateGlobal(e) {
                return Kd.updateGlobal(e, this.globalMap), this
            }
            updateInput(e, t) {
                const r = Kd.checkForInput(this.inputs, e);
                return Kd.updateInput(t, r), this
            }
            updateOutput(e, t) {
                const r = Kd.checkForOutput(this.outputs, e);
                return Kd.updateOutput(t, r), this
            }
            addUnknownKeyValToGlobal(e) {
                return Kd.checkHasKey(e, this.globalMap.unknownKeyVals, Kd.getEnumLength(Ed.GlobalTypes)), this.globalMap.unknownKeyVals || (this.globalMap.unknownKeyVals = []), this.globalMap.unknownKeyVals.push(e), this
            }
            addUnknownKeyValToInput(e, t) {
                const r = Kd.checkForInput(this.inputs, e);
                return Kd.checkHasKey(t, r.unknownKeyVals, Kd.getEnumLength(Ed.InputTypes)), r.unknownKeyVals || (r.unknownKeyVals = []), r.unknownKeyVals.push(t), this
            }
            addUnknownKeyValToOutput(e, t) {
                const r = Kd.checkForOutput(this.outputs, e);
                return Kd.checkHasKey(t, r.unknownKeyVals, Kd.getEnumLength(Ed.OutputTypes)), r.unknownKeyVals || (r.unknownKeyVals = []), r.unknownKeyVals.push(t), this
            }
            addInput(e) {
                this.globalMap.unsignedTx.addInput(e), this.inputs.push({
                    unknownKeyVals: []
                });
                const t = e.unknownKeyVals || [],
                    r = this.inputs.length - 1;
                if (!Array.isArray(t)) throw new Error("unknownKeyVals must be an Array");
                return t.forEach(e => this.addUnknownKeyValToInput(r, e)), Kd.addInputAttributes(this.inputs, e), this
            }
            addOutput(e) {
                this.globalMap.unsignedTx.addOutput(e), this.outputs.push({
                    unknownKeyVals: []
                });
                const t = e.unknownKeyVals || [],
                    r = this.outputs.length - 1;
                if (!Array.isArray(t)) throw new Error("unknownKeyVals must be an Array");
                return t.forEach(e => this.addUnknownKeyValToInput(r, e)), Kd.addOutputAttributes(this.outputs, e), this
            }
            clearFinalizedInput(e) {
                const t = Kd.checkForInput(this.inputs, e);
                Kd.inputCheckUncleanFinalized(e, t);
                for (const e of Object.keys(t))["witnessUtxo", "nonWitnessUtxo", "finalScriptSig", "finalScriptWitness", "unknownKeyVals"].includes(e) || delete t[e];
                return this
            }
            combine(...e) {
                const t = zd.combine([this].concat(e));
                return Object.assign(this, t), this
            }
            getTransaction() {
                return this.globalMap.unsignedTx.toBuffer()
            }
        }
    });
    n(Wd);
    Wd.Psbt;
    var Jd = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = {
            network: Rh.bitcoin,
            maximumFeeRate: 5e3
        };
        class n {
            constructor(e = {}, t = new Wd.Psbt(new o)) {
                this.data = t, this.opts = Object.assign({}, r, e), this.__CACHE = {
                    __NON_WITNESS_UTXO_TX_CACHE: [],
                    __NON_WITNESS_UTXO_BUF_CACHE: [],
                    __TX_IN_CACHE: {},
                    __TX: this.data.globalMap.unsignedTx.tx
                }, 0 === this.data.inputs.length && this.setVersion(2);
                const n = (e, t, r, n) => Object.defineProperty(e, t, {
                    enumerable: r,
                    writable: n
                });
                n(this, "__CACHE", !1, !0), n(this, "opts", !1, !0)
            }
            static fromBase64(e, t = {}) {
                const r = Le.from(e, "base64");
                return this.fromBuffer(r, t)
            }
            static fromHex(e, t = {}) {
                const r = Le.from(e, "hex");
                return this.fromBuffer(r, t)
            }
            static fromBuffer(e, t = {}) {
                const r = Wd.Psbt.fromBuffer(e, i),
                    o = new n(t, r);
                var a, s;
                return a = o.__CACHE.__TX, s = o.__CACHE, a.ins.forEach(e => {
                    v(s, e)
                }), o
            }
            get inputCount() {
                return this.data.inputs.length
            }
            combine(...e) {
                return this.data.combine(...e.map(e => e.data)), this
            }
            clone() {
                const e = n.fromBuffer(this.data.toBuffer());
                return e.opts = JSON.parse(JSON.stringify(this.opts)), e
            }
            setMaximumFeeRate(e) {
                p(e), this.opts.maximumFeeRate = e
            }
            setVersion(e) {
                p(e), b(this.data.inputs, "setVersion");
                const t = this.__CACHE;
                return t.__TX.version = e, t.__EXTRACTED_TX = void 0, this
            }
            setLocktime(e) {
                p(e), b(this.data.inputs, "setLocktime");
                const t = this.__CACHE;
                return t.__TX.locktime = e, t.__EXTRACTED_TX = void 0, this
            }
            setInputSequence(e, t) {
                p(t), b(this.data.inputs, "setInputSequence");
                const r = this.__CACHE;
                if (r.__TX.ins.length <= e) throw new Error("Input index too high");
                return r.__TX.ins[e].sequence = t, r.__EXTRACTED_TX = void 0, this
            }
            addInputs(e) {
                return e.forEach(e => this.addInput(e)), this
            }
            addInput(e) {
                b(this.data.inputs, "addInput");
                const t = this.__CACHE;
                this.data.addInput(e), v(t, t.__TX.ins[t.__TX.ins.length - 1]);
                const r = this.data.inputs.length - 1,
                    n = this.data.inputs[r];
                return n.nonWitnessUtxo && O(this.__CACHE, n, r), t.__FEE_RATE = void 0, t.__EXTRACTED_TX = void 0, this
            }
            addOutputs(e) {
                return e.forEach(e => this.addOutput(e)), this
            }
            addOutput(e) {
                b(this.data.inputs, "addOutput");
                const {
                    address: t
                } = e;
                if ("string" == typeof t) {
                    const {
                        network: r
                    } = this.opts, n = dd.toOutputScript(t, r);
                    e = Object.assign(e, {
                        script: n
                    })
                }
                const r = this.__CACHE;
                return this.data.addOutput(e), r.__FEE_RATE = void 0, r.__EXTRACTED_TX = void 0, this
            }
            extractTransaction(e) {
                if (!this.data.inputs.every(s)) throw new Error("Not finalized");
                const t = this.__CACHE;
                if (e || function(e, t, r) {
                        const n = t.__FEE_RATE || e.getFeeRate(),
                            i = t.__EXTRACTED_TX.virtualSize(),
                            o = n * i;
                        if (n >= r.maximumFeeRate) throw new Error(`Warning: You are paying around ${(o/1e8).toFixed(8)} in ` + `fees, which is ${n} satoshi per byte for a transaction ` + `with a VSize of ${i} bytes (segwit counted as 0.25 byte per ` + "byte). Use setMaximumFeeRate method to raise your threshold, or pass true to the first arg of extractTransaction.")
                    }(this, t, this.opts), t.__EXTRACTED_TX) return t.__EXTRACTED_TX;
                const r = t.__TX.clone();
                return T(this.data.inputs, r, t, !0), r
            }
            getFeeRate() {
                if (!this.data.inputs.every(s)) throw new Error("PSBT must be finalized to calculate fee rate");
                const e = this.__CACHE;
                if (e.__FEE_RATE) return e.__FEE_RATE;
                let t, r = !0;
                return e.__EXTRACTED_TX ? (t = e.__EXTRACTED_TX, r = !1) : t = e.__TX.clone(), T(this.data.inputs, t, e, r), e.__FEE_RATE
            }
            finalizeAllInputs() {
                return Kd.checkForInput(this.data.inputs, 0), A(this.data.inputs.length).forEach(e => this.finalizeInput(e)), this
            }
            finalizeInput(e) {
                const t = Kd.checkForInput(this.data.inputs, e),
                    {
                        script: r,
                        isP2SH: n,
                        isP2WSH: i,
                        isSegwit: o
                    } = function(e, t, r) {
                        const n = r.__TX,
                            i = {
                                script: null,
                                isSegwit: !1,
                                isP2SH: !1,
                                isP2WSH: !1
                            };
                        if (t.nonWitnessUtxo)
                            if (t.redeemScript) i.isP2SH = !0, i.script = t.redeemScript;
                            else {
                                const o = P(r, t, e),
                                    a = n.ins[e].index;
                                i.script = o.outs[a].script
                            } else t.witnessUtxo && (i.isSegwit = !0, i.isP2SH = !!t.redeemScript, i.isP2WSH = !!t.witnessScript, t.witnessScript ? i.script = t.witnessScript : t.redeemScript ? i.script = hd.p2wpkh({
                            hash: t.redeemScript.slice(2)
                        }).output : i.script = hd.p2wpkh({
                            hash: t.witnessUtxo.script.slice(2)
                        }).output);
                        return i
                    }(e, t, this.__CACHE);
                if (!r) throw new Error(`No script found for input #${e}`);
                const s = function(e) {
                    return d(e) ? "witnesspubkeyhash" : h(e) ? "pubkeyhash" : c(e) ? "multisig" : f(e) ? "pubkey" : "nonstandard"
                }(r);
                if (! function(e, t, r) {
                        switch (r) {
                            case "pubkey":
                            case "pubkeyhash":
                            case "witnesspubkeyhash":
                                return a(1, e.partialSig);
                            case "multisig":
                                return a(hd.p2ms({
                                    output: t
                                }).m, e.partialSig);
                            default:
                                return !1
                        }
                    }(t, r, s)) throw new Error(`Can not finalize input #${e}`);
                m(t);
                const {
                    finalScriptSig: u,
                    finalScriptWitness: l
                } = function(e, t, r, n, i, o) {
                    let a, s;
                    const u = function(e, t, r) {
                            let n;
                            switch (t) {
                                case "multisig":
                                    const i = function(e, t) {
                                        return hd.p2ms({
                                            output: e
                                        }).pubkeys.map(e => (t.filter(t => t.pubkey.equals(e))[0] || {}).signature).filter(e => !!e)
                                    }(e, r);
                                    n = hd.p2ms({
                                        output: e,
                                        signatures: i
                                    });
                                    break;
                                case "pubkey":
                                    n = hd.p2pk({
                                        output: e,
                                        signature: r[0].signature
                                    });
                                    break;
                                case "pubkeyhash":
                                    n = hd.p2pkh({
                                        output: e,
                                        pubkey: r[0].pubkey,
                                        signature: r[0].signature
                                    });
                                    break;
                                case "witnesspubkeyhash":
                                    n = hd.p2wpkh({
                                        output: e,
                                        pubkey: r[0].pubkey,
                                        signature: r[0].signature
                                    })
                            }
                            return n
                        }(e, t, r),
                        c = o ? hd.p2wsh({
                            redeem: u
                        }) : null,
                        f = i ? hd.p2sh({
                            redeem: c || u
                        }) : null;
                    n ? (s = x(c ? c.witness : u.witness), f && (a = f.input)) : a = f ? f.input : u.input;
                    return {
                        finalScriptSig: a,
                        finalScriptWitness: s
                    }
                }(r, s, t.partialSig, o, n, i);
                if (u && this.data.updateInput(e, {
                        finalScriptSig: u
                    }), l && this.data.updateInput(e, {
                        finalScriptWitness: l
                    }), !u && !l) throw new Error(`Unknown error finalizing input #${e}`);
                return this.data.clearFinalizedInput(e), this
            }
            validateSignaturesOfAllInputs() {
                return Kd.checkForInput(this.data.inputs, 0), A(this.data.inputs.length).map(e => this.validateSignaturesOfInput(e)).reduce((e, t) => !0 === t && e, !0)
            }
            validateSignaturesOfInput(e, t) {
                const r = this.data.inputs[e],
                    n = (r || {}).partialSig;
                if (!r || !n || n.length < 1) throw new Error("No signatures to validate");
                const i = t ? n.filter(e => e.pubkey.equals(t)) : n;
                if (i.length < 1) throw new Error("No signatures for this pubkey");
                const o = [];
                let a, s, u;
                for (const t of i) {
                    const n = Jh.signature.decode(t.signature),
                        {
                            hash: i,
                            script: c
                        } = u !== n.hashType ? k(e, Object.assign({}, r, {
                            sighashType: n.hashType
                        }), this.__CACHE) : {
                            hash: a,
                            script: s
                        };
                    u = n.hashType, a = i, s = c, g(t.pubkey, c, "verify");
                    const f = pd.fromPublicKey(t.pubkey);
                    o.push(f.verify(i, n.signature))
                }
                return o.every(e => !0 === e)
            }
            signAllInputsHD(e, t = [_d.Transaction.SIGHASH_ALL]) {
                if (!e || !e.publicKey || !e.fingerprint) throw new Error("Need HDSigner to sign input");
                const r = [];
                for (const n of A(this.data.inputs.length)) try {
                    this.signInputHD(n, e, t), r.push(!0)
                } catch (e) {
                    r.push(!1)
                }
                if (r.every(e => !1 === e)) throw new Error("No inputs were signed");
                return this
            }
            signAllInputsHDAsync(e, t = [_d.Transaction.SIGHASH_ALL]) {
                return new Promise((r, n) => {
                    if (!e || !e.publicKey || !e.fingerprint) return n(new Error("Need HDSigner to sign input"));
                    const i = [],
                        o = [];
                    for (const r of A(this.data.inputs.length)) o.push(this.signInputHDAsync(r, e, t).then(() => {
                        i.push(!0)
                    }, () => {
                        i.push(!1)
                    }));
                    return Promise.all(o).then(() => {
                        if (i.every(e => !1 === e)) return n(new Error("No inputs were signed"));
                        r()
                    })
                })
            }
            signInputHD(e, t, r = [_d.Transaction.SIGHASH_ALL]) {
                if (!t || !t.publicKey || !t.fingerprint) throw new Error("Need HDSigner to sign input");
                return E(e, this.data.inputs, t).forEach(t => this.signInput(e, t, r)), this
            }
            signInputHDAsync(e, t, r = [_d.Transaction.SIGHASH_ALL]) {
                return new Promise((n, i) => {
                    if (!t || !t.publicKey || !t.fingerprint) return i(new Error("Need HDSigner to sign input"));
                    const o = E(e, this.data.inputs, t).map(t => this.signInputAsync(e, t, r));
                    return Promise.all(o).then(() => {
                        n()
                    }).catch(i)
                })
            }
            signAllInputs(e, t = [_d.Transaction.SIGHASH_ALL]) {
                if (!e || !e.publicKey) throw new Error("Need Signer to sign input");
                const r = [];
                for (const n of A(this.data.inputs.length)) try {
                    this.signInput(n, e, t), r.push(!0)
                } catch (e) {
                    r.push(!1)
                }
                if (r.every(e => !1 === e)) throw new Error("No inputs were signed");
                return this
            }
            signAllInputsAsync(e, t = [_d.Transaction.SIGHASH_ALL]) {
                return new Promise((r, n) => {
                    if (!e || !e.publicKey) return n(new Error("Need Signer to sign input"));
                    const i = [],
                        o = [];
                    for (const [r] of this.data.inputs.entries()) o.push(this.signInputAsync(r, e, t).then(() => {
                        i.push(!0)
                    }, () => {
                        i.push(!1)
                    }));
                    return Promise.all(o).then(() => {
                        if (i.every(e => !1 === e)) return n(new Error("No inputs were signed"));
                        r()
                    })
                })
            }
            signInput(e, t, r = [_d.Transaction.SIGHASH_ALL]) {
                if (!t || !t.publicKey) throw new Error("Need Signer to sign input");
                const {
                    hash: n,
                    sighashType: i
                } = S(this.data.inputs, e, t.publicKey, this.__CACHE, r), o = [{
                    pubkey: t.publicKey,
                    signature: Jh.signature.encode(t.sign(n), i)
                }];
                return this.data.updateInput(e, {
                    partialSig: o
                }), this
            }
            signInputAsync(e, t, r = [_d.Transaction.SIGHASH_ALL]) {
                return new Promise((n, i) => {
                    if (!t || !t.publicKey) return i(new Error("Need Signer to sign input"));
                    const {
                        hash: o,
                        sighashType: a
                    } = S(this.data.inputs, e, t.publicKey, this.__CACHE, r);
                    Promise.resolve(t.sign(o)).then(r => {
                        const i = [{
                            pubkey: t.publicKey,
                            signature: Jh.signature.encode(r, a)
                        }];
                        this.data.updateInput(e, {
                            partialSig: i
                        }), n()
                    })
                })
            }
            toBuffer() {
                return this.data.toBuffer()
            }
            toHex() {
                return this.data.toHex()
            }
            toBase64() {
                return this.data.toBase64()
            }
            updateGlobal(e) {
                return this.data.updateGlobal(e), this
            }
            updateInput(e, t) {
                return this.data.updateInput(e, t), t.nonWitnessUtxo && O(this.__CACHE, this.data.inputs[e], e), this
            }
            updateOutput(e, t) {
                return this.data.updateOutput(e, t), this
            }
            addUnknownKeyValToGlobal(e) {
                return this.data.addUnknownKeyValToGlobal(e), this
            }
            addUnknownKeyValToInput(e, t) {
                return this.data.addUnknownKeyValToInput(e, t), this
            }
            addUnknownKeyValToOutput(e, t) {
                return this.data.addUnknownKeyValToOutput(e, t), this
            }
            clearFinalizedInput(e) {
                return this.data.clearFinalizedInput(e), this
            }
        }
        t.Psbt = n;
        const i = e => new o(e);
        class o {
            constructor(e = Le.from([2, 0, 0, 0, 0, 0, 0, 0, 0, 0])) {
                this.tx = _d.Transaction.fromBuffer(e),
                    function(e) {
                        if (!e.ins.every(e => e.script && 0 === e.script.length && e.witness && 0 === e.witness.length)) throw new Error("Format Error: Transaction ScriptSigs are not empty")
                    }(this.tx), Object.defineProperty(this, "tx", {
                        enumerable: !1,
                        writable: !0
                    })
            }
            getInputOutputCounts() {
                return {
                    inputCount: this.tx.ins.length,
                    outputCount: this.tx.outs.length
                }
            }
            addInput(e) {
                if (void 0 === e.hash || void 0 === e.index || !mt(e.hash) && "string" != typeof e.hash || "number" != typeof e.index) throw new Error("Error adding input.");
                const t = "string" == typeof e.hash ? bd.reverseBuffer(Le.from(e.hash, "hex")) : e.hash;
                this.tx.addInput(t, e.index, e.sequence)
            }
            addOutput(e) {
                if (void 0 === e.script || void 0 === e.value || !mt(e.script) || "number" != typeof e.value) throw new Error("Error adding output.");
                this.tx.addOutput(e.script, e.value)
            }
            toBuffer() {
                return this.tx.toBuffer()
            }
        }

        function a(e, t) {
            if (!t) return !1;
            if (t.length > e) throw new Error("Too many signatures");
            return t.length === e
        }

        function s(e) {
            return !!e.finalScriptSig || !!e.finalScriptWitness
        }

        function u(e) {
            return t => {
                try {
                    return e({
                        output: t
                    }), !0
                } catch (e) {
                    return !1
                }
            }
        }
        const c = u(hd.p2ms),
            f = u(hd.p2pk),
            h = u(hd.p2pkh),
            d = u(hd.p2wpkh),
            l = u(hd.p2wsh);

        function p(e) {
            if ("number" != typeof e || e !== Math.floor(e) || e > 4294967295 || e < 0) throw new Error("Invalid 32 bit integer")
        }

        function b(e, t) {
            e.forEach(e => {
                let r = !1,
                    n = [];
                if (0 === (e.partialSig || []).length) {
                    if (!e.finalScriptSig && !e.finalScriptWitness) return;
                    n = function(e) {
                        const t = e.finalScriptSig && Jh.decompile(e.finalScriptSig) || [],
                            r = e.finalScriptWitness && Jh.decompile(e.finalScriptWitness) || [];
                        return t.concat(r).filter(e => mt(e) && Jh.isCanonicalScriptSignature(e)).map(e => ({
                            signature: e
                        }))
                    }(e)
                } else n = e.partialSig;
                if (n.forEach(e => {
                        const {
                            hashType: n
                        } = Jh.signature.decode(e.signature), i = [];
                        switch (n & _d.Transaction.SIGHASH_ANYONECANPAY && i.push("addInput"), 31 & n) {
                            case _d.Transaction.SIGHASH_ALL:
                                break;
                            case _d.Transaction.SIGHASH_SINGLE:
                            case _d.Transaction.SIGHASH_NONE:
                                i.push("addOutput"), i.push("setInputSequence")
                        } - 1 === i.indexOf(t) && (r = !0)
                    }), r) throw new Error("Can not modify transaction, signatures exist.")
            })
        }

        function m(e) {
            if (!e.sighashType || !e.partialSig) return;
            const {
                partialSig: t,
                sighashType: r
            } = e;
            t.forEach(e => {
                const {
                    hashType: t
                } = Jh.signature.decode(e.signature);
                if (r !== t) throw new Error("Signature sighash does not match input sighash type")
            })
        }

        function g(e, t, r) {
            const n = Qh.hash160(e),
                i = Jh.decompile(t);
            if (null === i) throw new Error("Unknown script error");
            if (!i.some(t => "number" != typeof t && (t.equals(e) || t.equals(n)))) throw new Error(`Can not ${r} for this input with the key ${e.toString("hex")}`)
        }

        function v(e, t) {
            const r = bd.reverseBuffer(Le.from(t.hash)).toString("hex") + ":" + t.index;
            if (e.__TX_IN_CACHE[r]) throw new Error("Duplicate input detected.");
            e.__TX_IN_CACHE[r] = 1
        }

        function y(e, t) {
            return (r, n, i) => {
                const o = e({
                    redeem: {
                        output: i
                    }
                }).output;
                if (!n.equals(o)) throw new Error(`${t} for input #${r} doesn't match the scriptPubKey in the prevout`)
            }
        }
        const w = y(hd.p2sh, "Redeem script"),
            _ = y(hd.p2wsh, "Witness script");

        function S(e, t, r, n, i) {
            const o = Kd.checkForInput(e, t),
                {
                    hash: a,
                    sighashType: s,
                    script: u
                } = k(t, o, n, i);
            return g(r, u, "sign"), {
                hash: a,
                sighashType: s
            }
        }

        function k(e, t, r, n) {
            const i = r.__TX,
                o = t.sighashType || _d.Transaction.SIGHASH_ALL;
            if (n && n.indexOf(o) < 0) {
                const e = function(e) {
                    let t = e & _d.Transaction.SIGHASH_ANYONECANPAY ? "SIGHASH_ANYONECANPAY | " : "";
                    switch (31 & e) {
                        case _d.Transaction.SIGHASH_ALL:
                            t += "SIGHASH_ALL";
                            break;
                        case _d.Transaction.SIGHASH_SINGLE:
                            t += "SIGHASH_SINGLE";
                            break;
                        case _d.Transaction.SIGHASH_NONE:
                            t += "SIGHASH_NONE"
                    }
                    return t
                }(o);
                throw new Error("Sighash type is not allowed. Retry the sign method passing the " + `sighashTypes array of whitelisted types. Sighash type: ${e}`)
            }
            let a, s;
            if (t.nonWitnessUtxo) {
                const n = P(r, t, e),
                    u = i.ins[e].hash,
                    c = n.getHash();
                if (!u.equals(c)) throw new Error(`Non-witness UTXO hash for input #${e} doesn't match the hash specified in the prevout`);
                const f = i.ins[e].index,
                    h = n.outs[f];
                if (t.redeemScript ? (w(e, h.script, t.redeemScript), s = t.redeemScript) : s = h.script, d(s) || l(s)) throw new Error(`Input #${e} has nonWitnessUtxo but segwit script: ` + `${s.toString("hex")}`);
                a = i.hashForSignature(e, s, o)
            } else {
                if (!t.witnessUtxo) throw new Error("Need a Utxo input item for signing"); {
                    let r;
                    if (t.redeemScript ? (w(e, t.witnessUtxo.script, t.redeemScript), r = t.redeemScript) : r = t.witnessUtxo.script, d(r)) {
                        const n = hd.p2pkh({
                            hash: r.slice(2)
                        }).output;
                        a = i.hashForWitnessV0(e, n, t.witnessUtxo.value, o), s = r
                    } else {
                        if (!l(r)) throw new Error(`Input #${e} has witnessUtxo but non-segwit script: ` + `${r.toString("hex")}`);
                        if (!t.witnessScript) throw new Error("Segwit input needs witnessScript if not P2WPKH");
                        _(e, r, t.witnessScript), a = i.hashForWitnessV0(e, t.witnessScript, t.witnessUtxo.value, o), s = t.witnessScript
                    }
                }
            }
            return {
                script: s,
                sighashType: o,
                hash: a
            }
        }

        function E(e, t, r) {
            const n = Kd.checkForInput(t, e);
            if (!n.bip32Derivation || 0 === n.bip32Derivation.length) throw new Error("Need bip32Derivation to sign with HD");
            const i = n.bip32Derivation.map(e => e.masterFingerprint.equals(r.fingerprint) ? e : void 0).filter(e => !!e);
            if (0 === i.length) throw new Error("Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint");
            return i.map(e => {
                const t = r.derivePath(e.path);
                if (!e.pubkey.equals(t.publicKey)) throw new Error("pubkey did not match bip32Derivation");
                return t
            })
        }

        function I(e) {
            let t = 0;

            function r() {
                const r = Ld.decode(e, t);
                return t += Ld.decode.bytes, r
            }

            function n() {
                return function(r) {
                    return t += r, e.slice(t - r, t)
                }(r())
            }
            return function() {
                const e = r(),
                    t = [];
                for (let r = 0; r < e; r++) t.push(n());
                return t
            }()
        }

        function x(e) {
            let t = Le.allocUnsafe(0);

            function r(e) {
                const r = t.length,
                    n = Ld.encodingLength(e);
                t = Le.concat([t, Le.allocUnsafe(n)]), Ld.encode(e, t, r)
            }

            function n(e) {
                r(e.length),
                    function(e) {
                        t = Le.concat([t, Le.from(e)])
                    }(e)
            }
            var i;
            return r((i = e).length), i.forEach(n), t
        }

        function O(e, t, r) {
            e.__NON_WITNESS_UTXO_BUF_CACHE[r] = t.nonWitnessUtxo;
            const n = _d.Transaction.fromBuffer(t.nonWitnessUtxo);
            e.__NON_WITNESS_UTXO_TX_CACHE[r] = n;
            const i = e,
                o = r;
            delete t.nonWitnessUtxo, Object.defineProperty(t, "nonWitnessUtxo", {
                enumerable: !0,
                get() {
                    const e = i.__NON_WITNESS_UTXO_BUF_CACHE[o],
                        t = i.__NON_WITNESS_UTXO_TX_CACHE[o];
                    if (void 0 !== e) return e; {
                        const e = t.toBuffer();
                        return i.__NON_WITNESS_UTXO_BUF_CACHE[o] = e, e
                    }
                },
                set(e) {
                    i.__NON_WITNESS_UTXO_BUF_CACHE[o] = e
                }
            })
        }

        function T(e, t, r, n) {
            let i = 0;
            e.forEach((e, o) => {
                if (n && e.finalScriptSig && (t.ins[o].script = e.finalScriptSig), n && e.finalScriptWitness && (t.ins[o].witness = I(e.finalScriptWitness)), e.witnessUtxo) i += e.witnessUtxo.value;
                else if (e.nonWitnessUtxo) {
                    const n = P(r, e, o),
                        a = t.ins[o].index,
                        s = n.outs[a];
                    i += s.value
                }
            });
            const o = t.outs.reduce((e, t) => e + t.value, 0),
                a = i - o;
            if (a < 0) throw new Error("Outputs are spending more than Inputs");
            const s = t.virtualSize();
            r.__EXTRACTED_TX = t, r.__FEE_RATE = Math.floor(a / s)
        }

        function P(e, t, r) {
            const n = e.__NON_WITNESS_UTXO_TX_CACHE;
            return n[r] || O(e, t, r), n[r]
        }

        function A(e) {
            return [...Array(e).keys()]
        }
    });
    n(Jd);
    Jd.Psbt;
    var Gd = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Jh;

        function n(e) {
            return e === r.OPS.OP_0 || Jh.isCanonicalScriptSignature(e)
        }

        function i(e, t) {
            const i = Jh.decompile(e);
            return !(i.length < 2) && (i[0] === r.OPS.OP_0 && (t ? i.slice(1).every(n) : i.slice(1).every(Jh.isCanonicalScriptSignature)))
        }
        t.check = i, i.toJSON = () => "multisig input"
    });
    n(Gd);
    Gd.check;
    var Xd = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Jh,
            n = r.OPS.OP_RESERVED;

        function i(e, t) {
            const i = Jh.decompile(e);
            if (i.length < 4) return !1;
            if (i[i.length - 1] !== r.OPS.OP_CHECKMULTISIG) return !1;
            if (!jh.Number(i[0])) return !1;
            if (!jh.Number(i[i.length - 2])) return !1;
            const o = i[0] - n,
                a = i[i.length - 2] - n;
            return !(o <= 0) && (!(a > 16) && (!(o > a) && (a === i.length - 3 && (!!t || i.slice(1, -2).every(Jh.isCanonicalPubKey)))))
        }
        t.check = i, i.toJSON = () => "multi-sig output"
    });
    n(Xd);
    Xd.check;
    var Yd = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.input = Gd, t.output = Xd
    });
    n(Yd);
    Yd.input, Yd.output;
    var $d = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Jh.OPS;

        function n(e) {
            const t = Jh.compile(e);
            return t.length > 1 && t[0] === r.OP_RETURN
        }
        t.check = n, n.toJSON = () => "null data output";
        const i = {
            check: n
        };
        t.output = i
    });
    n($d);
    $d.check, $d.output;
    var Qd = i(function(e, t) {
        function r(e) {
            const t = Jh.decompile(e);
            return 1 === t.length && Jh.isCanonicalScriptSignature(t[0])
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.check = r, r.toJSON = () => "pubKey input"
    });
    n(Qd);
    Qd.check;
    var Zd = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Jh;

        function n(e) {
            const t = Jh.decompile(e);
            return 2 === t.length && Jh.isCanonicalPubKey(t[0]) && t[1] === r.OPS.OP_CHECKSIG
        }
        t.check = n, n.toJSON = () => "pubKey output"
    });
    n(Zd);
    Zd.check;
    var el = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.input = Qd, t.output = Zd
    });
    n(el);
    el.input, el.output;
    var tl = i(function(e, t) {
        function r(e) {
            const t = Jh.decompile(e);
            return 2 === t.length && Jh.isCanonicalScriptSignature(t[0]) && Jh.isCanonicalPubKey(t[1])
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.check = r, r.toJSON = () => "pubKeyHash input"
    });
    n(tl);
    tl.check;
    var rl = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Jh;

        function n(e) {
            const t = Jh.compile(e);
            return 25 === t.length && t[0] === r.OPS.OP_DUP && t[1] === r.OPS.OP_HASH160 && 20 === t[2] && t[23] === r.OPS.OP_EQUALVERIFY && t[24] === r.OPS.OP_CHECKSIG
        }
        t.check = n, n.toJSON = () => "pubKeyHash output"
    });
    n(rl);
    rl.check;
    var nl = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.input = tl, t.output = rl
    });
    n(nl);
    nl.input, nl.output;
    var il = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Jh;

        function n(e) {
            const t = Jh.compile(e);
            return 22 === t.length && t[0] === r.OPS.OP_0 && 20 === t[1]
        }
        t.check = n, n.toJSON = () => "Witness pubKeyHash output"
    });
    n(il);
    il.check;
    var ol = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Jh;

        function n(e) {
            const t = Jh.compile(e);
            return 34 === t.length && t[0] === r.OPS.OP_0 && 32 === t[1]
        }
        t.check = n, n.toJSON = () => "Witness scriptHash output"
    });
    n(ol);
    ol.check;
    var al = i(function(e, t) {
        function r(e, t) {
            const r = Jh.decompile(e);
            if (r.length < 1) return !1;
            const n = r[r.length - 1];
            if (!mt(n)) return !1;
            const i = Jh.decompile(Jh.compile(r.slice(0, -1))),
                o = Jh.decompile(n);
            return !!o && (!!Jh.isPushOnly(i) && (1 === r.length ? ol.check(o) || il.check(o) : !(!nl.input.check(i) || !nl.output.check(o)) || (!(!Yd.input.check(i, t) || !Yd.output.check(o)) || !(!el.input.check(i) || !el.output.check(o)))))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.check = r, r.toJSON = () => "scriptHash input"
    });
    n(al);
    al.check;
    var sl = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Jh;

        function n(e) {
            const t = Jh.compile(e);
            return 23 === t.length && t[0] === r.OPS.OP_HASH160 && 20 === t[1] && t[22] === r.OPS.OP_EQUAL
        }
        t.check = n, n.toJSON = () => "scriptHash output"
    });
    n(sl);
    sl.check;
    var ul = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.input = al, t.output = sl
    });
    n(ul);
    ul.input, ul.output;
    var cl = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Jh,
            n = Le.from("aa21a9ed", "hex");

        function i(e) {
            const t = Jh.compile(e);
            return t.length > 37 && t[0] === r.OPS.OP_RETURN && 36 === t[1] && t.slice(2, 6).equals(n)
        }
        t.check = i, i.toJSON = () => "Witness commitment output", t.encode = function(e) {
            Th(jh.Hash256bit, e);
            const t = Le.allocUnsafe(36);
            return n.copy(t, 0), e.copy(t, 4), Jh.compile([r.OPS.OP_RETURN, t])
        }, t.decode = function(e) {
            return Th(i, e), Jh.decompile(e)[1].slice(4, 36)
        }
    });
    n(cl);
    cl.check, cl.encode, cl.decode;
    var fl = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.output = cl
    });
    n(fl);
    fl.output;
    var hl = i(function(e, t) {
        function r(e) {
            const t = Jh.decompile(e);
            return 2 === t.length && Jh.isCanonicalScriptSignature(t[0]) && (r = t[1], Jh.isCanonicalPubKey(r) && 33 === r.length);
            var r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.check = r, r.toJSON = () => "witnessPubKeyHash input"
    });
    n(hl);
    hl.check;
    var dl = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.input = hl, t.output = il
    });
    n(dl);
    dl.input, dl.output;
    var ll = i(function(e, t) {
        function r(e, t) {
            if (Th(Th.Array, e), e.length < 1) return !1;
            const r = e[e.length - 1];
            if (!mt(r)) return !1;
            const n = Jh.decompile(r);
            if (!n || 0 === n.length) return !1;
            const i = Jh.compile(e.slice(0, -1));
            return !(!nl.input.check(i) || !nl.output.check(n)) || (!(!Yd.input.check(i, t) || !Yd.output.check(n)) || !(!el.input.check(i) || !el.output.check(n)))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.check = r, r.toJSON = () => "witnessScriptHash input"
    });
    n(ll);
    ll.check;
    var pl = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.input = ll, t.output = ol
    });
    n(pl);
    pl.input, pl.output;
    var bl = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = {
            P2MS: "multisig",
            NONSTANDARD: "nonstandard",
            NULLDATA: "nulldata",
            P2PK: "pubkey",
            P2PKH: "pubkeyhash",
            P2SH: "scripthash",
            P2WPKH: "witnesspubkeyhash",
            P2WSH: "witnessscripthash",
            WITNESS_COMMITMENT: "witnesscommitment"
        };
        t.types = r, t.output = function(e) {
            if (dl.output.check(e)) return r.P2WPKH;
            if (pl.output.check(e)) return r.P2WSH;
            if (nl.output.check(e)) return r.P2PKH;
            if (ul.output.check(e)) return r.P2SH;
            const t = Jh.decompile(e);
            if (!t) throw new TypeError("Invalid script");
            return Yd.output.check(t) ? r.P2MS : el.output.check(t) ? r.P2PK : fl.output.check(t) ? r.WITNESS_COMMITMENT : $d.output.check(t) ? r.NULLDATA : r.NONSTANDARD
        }, t.input = function(e, t) {
            const n = Jh.decompile(e);
            if (!n) throw new TypeError("Invalid script");
            return nl.input.check(n) ? r.P2PKH : ul.input.check(n, t) ? r.P2SH : Yd.input.check(n, t) ? r.P2MS : el.input.check(n) ? r.P2PK : r.NONSTANDARD
        }, t.witness = function(e, t) {
            const n = Jh.decompile(e);
            if (!n) throw new TypeError("Invalid script");
            return dl.input.check(n) ? r.P2WPKH : pl.input.check(n, t) ? r.P2WSH : r.NONSTANDARD
        }
    });
    n(bl);
    bl.types, bl.output, bl.input, bl.witness;
    var ml = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = Jh,
            n = bl.types,
            i = new Set(["p2pkh", "p2pk", "p2wpkh", "p2ms", "p2sh-p2pkh", "p2sh-p2pk", "p2sh-p2wpkh", "p2sh-p2ms", "p2wsh-p2pkh", "p2wsh-p2pk", "p2wsh-p2ms", "p2sh-p2wsh-p2pkh", "p2sh-p2wsh-p2pk", "p2sh-p2wsh-p2ms"]);

        function o(e, t, r) {
            try {
                Th(e, t)
            } catch (e) {
                throw new Error(r)
            }
        }
        class a {
            constructor(e = Rh.bitcoin, t = 2500) {
                this.network = e, this.maximumFeeRate = t, this.__PREV_TX_SET = {}, this.__INPUTS = [], this.__TX = new _d.Transaction, this.__TX.version = 2, this.__USE_LOW_R = !1, console.warn("Deprecation Warning: TransactionBuilder will be removed in the future. (v6.x.x or later) Please use the Psbt class instead. Examples of usage are available in the transactions-psbt.js integration test file on our Github. A high level explanation is available in the psbt.ts and psbt.js files as well.")
            }
            static fromTransaction(e, t) {
                const r = new a(t);
                return r.setVersion(e.version), r.setLockTime(e.locktime), e.outs.forEach(e => {
                    r.addOutput(e.script, e.value)
                }), e.ins.forEach(e => {
                    r.__addInputUnsafe(e.hash, e.index, {
                        sequence: e.sequence,
                        script: e.script,
                        witness: e.witness
                    })
                }), r.__INPUTS.forEach((t, r) => {
                    ! function(e, t, r) {
                        if (e.redeemScriptType !== n.P2MS || !e.redeemScript) return;
                        if (e.pubkeys.length === e.signatures.length) return;
                        const i = e.signatures.concat();
                        e.signatures = e.pubkeys.map(n => {
                            const o = pd.fromPublicKey(n);
                            let a;
                            return i.some((n, s) => {
                                if (!n) return !1;
                                const u = Jh.signature.decode(n),
                                    c = t.hashForSignature(r, e.redeemScript, u.hashType);
                                return !!o.verify(c, u.signature) && (i[s] = void 0, a = n, !0)
                            }), a
                        })
                    }(t, e, r)
                }), r
            }
            setLowR(e) {
                return Th(Th.maybe(Th.Boolean), e), void 0 === e && (e = !0), this.__USE_LOW_R = e, e
            }
            setLockTime(e) {
                if (Th(jh.UInt32, e), this.__INPUTS.some(e => !!e.signatures && e.signatures.some(e => void 0 !== e))) throw new Error("No, this would invalidate signatures");
                this.__TX.locktime = e
            }
            setVersion(e) {
                Th(jh.UInt32, e), this.__TX.version = e
            }
            addInput(e, t, r, n) {
                if (!this.__canModifyInputs()) throw new Error("No, this would invalidate signatures");
                let i;
                if ("string" == typeof(o = e) || o instanceof String) e = bd.reverseBuffer(Le.from(e, "hex"));
                else if (function(e) {
                        return e instanceof _d.Transaction
                    }(e)) {
                    const r = e.outs[t];
                    n = r.script, i = r.value, e = e.getHash(!1)
                }
                var o;
                return this.__addInputUnsafe(e, t, {
                    sequence: r,
                    prevOutScript: n,
                    value: i
                })
            }
            addOutput(e, t) {
                if (!this.__canModifyOutputs()) throw new Error("No, this would invalidate signatures");
                return "string" == typeof e && (e = dd.toOutputScript(e, this.network)), this.__TX.addOutput(e, t)
            }
            build() {
                return this.__build(!1)
            }
            buildIncomplete() {
                return this.__build(!0)
            }
            sign(e, t, r, a, c, f) {
                ! function({
                    input: e,
                    ourPubKey: t,
                    keyPair: r,
                    signatureHash: n,
                    hashType: i,
                    useLowR: o
                }) {
                    let a = !1;
                    for (const [s, u] of e.pubkeys.entries()) {
                        if (!t.equals(u)) continue;
                        if (e.signatures[s]) throw new Error("Signature already exists");
                        if (33 !== t.length && e.hasWitness) throw new Error("BIP143 rejects uncompressed public keys in P2WPKH or P2WSH");
                        const c = r.sign(n, o);
                        e.signatures[s] = Jh.signature.encode(c, i), a = !0
                    }
                    if (!a) throw new Error("Key pair cannot sign for this input")
                }(function(e, t, r, a, c, f, h, d, l, p, b) {
                    let m;
                    if ("number" == typeof c) console.warn("DEPRECATED: TransactionBuilder sign method arguments will change in v6, please use the TxbSignArg interface"), m = c;
                    else {
                        if ("object" != typeof c) throw new TypeError("TransactionBuilder sign first arg must be TxbSignArg or number");
                        ! function(e, t) {
                            if (!i.has(t.prevOutScriptType)) throw new TypeError(`Unknown prevOutScriptType "${t.prevOutScriptType}"`);
                            o(Th.Number, t.vin, "sign must include vin parameter as Number (input index)"), o(jh.Signer, t.keyPair, "sign must include keyPair parameter as Signer interface"), o(Th.maybe(Th.Number), t.hashType, "sign hashType parameter must be a number");
                            const r = (e[t.vin] || []).prevOutType,
                                n = t.prevOutScriptType;
                            switch (n) {
                                case "p2pkh":
                                    if (r && "pubkeyhash" !== r) throw new TypeError(`input #${t.vin} is not of type p2pkh: ${r}`);
                                    o(Th.value(void 0), t.witnessScript, `${n} requires NO witnessScript`), o(Th.value(void 0), t.redeemScript, `${n} requires NO redeemScript`), o(Th.value(void 0), t.witnessValue, `${n} requires NO witnessValue`);
                                    break;
                                case "p2pk":
                                    if (r && "pubkey" !== r) throw new TypeError(`input #${t.vin} is not of type p2pk: ${r}`);
                                    o(Th.value(void 0), t.witnessScript, `${n} requires NO witnessScript`), o(Th.value(void 0), t.redeemScript, `${n} requires NO redeemScript`), o(Th.value(void 0), t.witnessValue, `${n} requires NO witnessValue`);
                                    break;
                                case "p2wpkh":
                                    if (r && "witnesspubkeyhash" !== r) throw new TypeError(`input #${t.vin} is not of type p2wpkh: ${r}`);
                                    o(Th.value(void 0), t.witnessScript, `${n} requires NO witnessScript`), o(Th.value(void 0), t.redeemScript, `${n} requires NO redeemScript`), o(jh.Satoshi, t.witnessValue, `${n} requires witnessValue`);
                                    break;
                                case "p2ms":
                                    if (r && "multisig" !== r) throw new TypeError(`input #${t.vin} is not of type p2ms: ${r}`);
                                    o(Th.value(void 0), t.witnessScript, `${n} requires NO witnessScript`), o(Th.value(void 0), t.redeemScript, `${n} requires NO redeemScript`), o(Th.value(void 0), t.witnessValue, `${n} requires NO witnessValue`);
                                    break;
                                case "p2sh-p2wpkh":
                                    if (r && "scripthash" !== r) throw new TypeError(`input #${t.vin} is not of type p2sh-p2wpkh: ${r}`);
                                    o(Th.value(void 0), t.witnessScript, `${n} requires NO witnessScript`), o(Th.Buffer, t.redeemScript, `${n} requires redeemScript`), o(jh.Satoshi, t.witnessValue, `${n} requires witnessValue`);
                                    break;
                                case "p2sh-p2ms":
                                case "p2sh-p2pk":
                                case "p2sh-p2pkh":
                                    if (r && "scripthash" !== r) throw new TypeError(`input #${t.vin} is not of type ${n}: ${r}`);
                                    o(Th.value(void 0), t.witnessScript, `${n} requires NO witnessScript`), o(Th.Buffer, t.redeemScript, `${n} requires redeemScript`), o(Th.value(void 0), t.witnessValue, `${n} requires NO witnessValue`);
                                    break;
                                case "p2wsh-p2ms":
                                case "p2wsh-p2pk":
                                case "p2wsh-p2pkh":
                                    if (r && "witnessscripthash" !== r) throw new TypeError(`input #${t.vin} is not of type ${n}: ${r}`);
                                    o(Th.Buffer, t.witnessScript, `${n} requires witnessScript`), o(Th.value(void 0), t.redeemScript, `${n} requires NO redeemScript`), o(jh.Satoshi, t.witnessValue, `${n} requires witnessValue`);
                                    break;
                                case "p2sh-p2wsh-p2ms":
                                case "p2sh-p2wsh-p2pk":
                                case "p2sh-p2wsh-p2pkh":
                                    if (r && "scripthash" !== r) throw new TypeError(`input #${t.vin} is not of type ${n}: ${r}`);
                                    o(Th.Buffer, t.witnessScript, `${n} requires witnessScript`), o(Th.Buffer, t.redeemScript, `${n} requires witnessScript`), o(jh.Satoshi, t.witnessValue, `${n} requires witnessScript`)
                            }
                        }(t, c), ({
                            vin: m,
                            keyPair: f,
                            redeemScript: h,
                            hashType: d,
                            witnessValue: l,
                            witnessScript: p
                        } = c)
                    }
                    if (void 0 === f) throw new Error("sign requires keypair");
                    if (f.network && f.network !== e) throw new TypeError("Inconsistent network");
                    if (!t[m]) throw new Error("No input at index: " + m);
                    if (d = d || _d.Transaction.SIGHASH_ALL, r(d)) throw new Error("Transaction needs outputs");
                    const g = t[m];
                    if (void 0 !== g.redeemScript && h && !g.redeemScript.equals(h)) throw new Error("Inconsistent redeemScript");
                    const v = f.publicKey || f.getPublicKey && f.getPublicKey();
                    if (!u(g)) {
                        if (void 0 !== l) {
                            if (void 0 !== g.value && g.value !== l) throw new Error("Input did not match witnessValue");
                            Th(jh.Satoshi, l), g.value = l
                        }
                        if (!u(g)) {
                            const e = function(e, t, r, i) {
                                if (r && i) {
                                    const o = hd.p2wsh({
                                            redeem: {
                                                output: i
                                            }
                                        }),
                                        a = hd.p2wsh({
                                            output: r
                                        }),
                                        u = hd.p2sh({
                                            redeem: {
                                                output: r
                                            }
                                        }),
                                        c = hd.p2sh({
                                            redeem: o
                                        });
                                    if (!o.hash.equals(a.hash)) throw new Error("Witness script inconsistent with prevOutScript");
                                    if (!u.hash.equals(c.hash)) throw new Error("Redeem script inconsistent with prevOutScript");
                                    const f = s(o.redeem.output, t);
                                    if (!f.pubkeys) throw new Error(f.type + " not supported as witnessScript (" + Jh.toASM(i) + ")");
                                    e.signatures && e.signatures.some(e => void 0 !== e) && (f.signatures = e.signatures);
                                    const h = i;
                                    if (f.type === n.P2WPKH) throw new Error("P2SH(P2WSH(P2WPKH)) is a consensus failure");
                                    return {
                                        redeemScript: r,
                                        redeemScriptType: n.P2WSH,
                                        witnessScript: i,
                                        witnessScriptType: f.type,
                                        prevOutType: n.P2SH,
                                        prevOutScript: u.output,
                                        hasWitness: !0,
                                        signScript: h,
                                        signType: f.type,
                                        pubkeys: f.pubkeys,
                                        signatures: f.signatures,
                                        maxSignatures: f.maxSignatures
                                    }
                                }
                                if (r) {
                                    const i = hd.p2sh({
                                        redeem: {
                                            output: r
                                        }
                                    });
                                    if (e.prevOutScript) {
                                        let t;
                                        try {
                                            t = hd.p2sh({
                                                output: e.prevOutScript
                                            })
                                        } catch (e) {
                                            throw new Error("PrevOutScript must be P2SH")
                                        }
                                        if (!i.hash.equals(t.hash)) throw new Error("Redeem script inconsistent with prevOutScript")
                                    }
                                    const o = s(i.redeem.output, t);
                                    if (!o.pubkeys) throw new Error(o.type + " not supported as redeemScript (" + Jh.toASM(r) + ")");
                                    e.signatures && e.signatures.some(e => void 0 !== e) && (o.signatures = e.signatures);
                                    let a = r;
                                    return o.type === n.P2WPKH && (a = hd.p2pkh({
                                        pubkey: o.pubkeys[0]
                                    }).output), {
                                        redeemScript: r,
                                        redeemScriptType: o.type,
                                        prevOutType: n.P2SH,
                                        prevOutScript: i.output,
                                        hasWitness: o.type === n.P2WPKH,
                                        signScript: a,
                                        signType: o.type,
                                        pubkeys: o.pubkeys,
                                        signatures: o.signatures,
                                        maxSignatures: o.maxSignatures
                                    }
                                }
                                if (i) {
                                    const r = hd.p2wsh({
                                        redeem: {
                                            output: i
                                        }
                                    });
                                    if (e.prevOutScript) {
                                        const t = hd.p2wsh({
                                            output: e.prevOutScript
                                        });
                                        if (!r.hash.equals(t.hash)) throw new Error("Witness script inconsistent with prevOutScript")
                                    }
                                    const o = s(r.redeem.output, t);
                                    if (!o.pubkeys) throw new Error(o.type + " not supported as witnessScript (" + Jh.toASM(i) + ")");
                                    e.signatures && e.signatures.some(e => void 0 !== e) && (o.signatures = e.signatures);
                                    const a = i;
                                    if (o.type === n.P2WPKH) throw new Error("P2WSH(P2WPKH) is a consensus failure");
                                    return {
                                        witnessScript: i,
                                        witnessScriptType: o.type,
                                        prevOutType: n.P2WSH,
                                        prevOutScript: r.output,
                                        hasWitness: !0,
                                        signScript: a,
                                        signType: o.type,
                                        pubkeys: o.pubkeys,
                                        signatures: o.signatures,
                                        maxSignatures: o.maxSignatures
                                    }
                                }
                                if (e.prevOutType && e.prevOutScript) {
                                    if (e.prevOutType === n.P2SH) throw new Error("PrevOutScript is " + e.prevOutType + ", requires redeemScript");
                                    if (e.prevOutType === n.P2WSH) throw new Error("PrevOutScript is " + e.prevOutType + ", requires witnessScript");
                                    if (!e.prevOutScript) throw new Error("PrevOutScript is missing");
                                    const r = s(e.prevOutScript, t);
                                    if (!r.pubkeys) throw new Error(r.type + " not supported (" + Jh.toASM(e.prevOutScript) + ")");
                                    e.signatures && e.signatures.some(e => void 0 !== e) && (r.signatures = e.signatures);
                                    let i = e.prevOutScript;
                                    return r.type === n.P2WPKH && (i = hd.p2pkh({
                                        pubkey: r.pubkeys[0]
                                    }).output), {
                                        prevOutType: r.type,
                                        prevOutScript: e.prevOutScript,
                                        hasWitness: r.type === n.P2WPKH,
                                        signScript: i,
                                        signType: r.type,
                                        pubkeys: r.pubkeys,
                                        signatures: r.signatures,
                                        maxSignatures: r.maxSignatures
                                    }
                                }
                                const o = hd.p2pkh({
                                    pubkey: t
                                }).output;
                                return {
                                    prevOutType: n.P2PKH,
                                    prevOutScript: o,
                                    hasWitness: !1,
                                    signScript: o,
                                    signType: n.P2PKH,
                                    pubkeys: [t],
                                    signatures: [void 0]
                                }
                            }(g, v, h, p);
                            Object.assign(g, e)
                        }
                        if (!u(g)) throw Error(g.prevOutType + " not supported")
                    }
                    let y;
                    y = g.hasWitness ? a.hashForWitnessV0(m, g.signScript, g.value, d) : a.hashForSignature(m, g.signScript, d);
                    return {
                        input: g,
                        ourPubKey: v,
                        keyPair: f,
                        signatureHash: y,
                        hashType: d,
                        useLowR: !!b
                    }
                }(this.network, this.__INPUTS, this.__needsOutputs.bind(this), this.__TX, e, t, r, a, c, f, this.__USE_LOW_R))
            }
            __addInputUnsafe(e, t, r) {
                if (_d.Transaction.isCoinbaseHash(e)) throw new Error("coinbase inputs not supported");
                const i = e.toString("hex") + ":" + t;
                if (void 0 !== this.__PREV_TX_SET[i]) throw new Error("Duplicate TxOut: " + i);
                let o = {};
                if (void 0 !== r.script && (o = function e(t, r, i, o) {
                        if (0 === t.length && 0 === r.length) return {};
                        if (!i) {
                            let e = bl.input(t, !0),
                                o = bl.witness(r, !0);
                            e === n.NONSTANDARD && (e = void 0), o === n.NONSTANDARD && (o = void 0), i = e || o
                        }
                        switch (i) {
                            case n.P2WPKH:
                                {
                                    const {
                                        output: e,
                                        pubkey: t,
                                        signature: i
                                    } = hd.p2wpkh({
                                        witness: r
                                    });
                                    return {
                                        prevOutScript: e,
                                        prevOutType: n.P2WPKH,
                                        pubkeys: [t],
                                        signatures: [i]
                                    }
                                }
                            case n.P2PKH:
                                {
                                    const {
                                        output: e,
                                        pubkey: r,
                                        signature: i
                                    } = hd.p2pkh({
                                        input: t
                                    });
                                    return {
                                        prevOutScript: e,
                                        prevOutType: n.P2PKH,
                                        pubkeys: [r],
                                        signatures: [i]
                                    }
                                }
                            case n.P2PK:
                                {
                                    const {
                                        signature: e
                                    } = hd.p2pk({
                                        input: t
                                    });
                                    return {
                                        prevOutType: n.P2PK,
                                        pubkeys: [void 0],
                                        signatures: [e]
                                    }
                                }
                            case n.P2MS:
                                {
                                    const {
                                        m: e,
                                        pubkeys: r,
                                        signatures: i
                                    } = hd.p2ms({
                                        input: t,
                                        output: o
                                    }, {
                                        allowIncomplete: !0
                                    });
                                    return {
                                        prevOutType: n.P2MS,
                                        pubkeys: r,
                                        signatures: i,
                                        maxSignatures: e
                                    }
                                }
                        }
                        if (i === n.P2SH) {
                            const {
                                output: i,
                                redeem: o
                            } = hd.p2sh({
                                input: t,
                                witness: r
                            }), a = bl.output(o.output), s = e(o.input, o.witness, a, o.output);
                            return s.prevOutType ? {
                                prevOutScript: i,
                                prevOutType: n.P2SH,
                                redeemScript: o.output,
                                redeemScriptType: s.prevOutType,
                                witnessScript: s.witnessScript,
                                witnessScriptType: s.witnessScriptType,
                                pubkeys: s.pubkeys,
                                signatures: s.signatures
                            } : {}
                        }
                        if (i === n.P2WSH) {
                            const {
                                output: i,
                                redeem: o
                            } = hd.p2wsh({
                                input: t,
                                witness: r
                            }), a = bl.output(o.output);
                            let s;
                            return (s = a === n.P2WPKH ? e(o.input, o.witness, a) : e(Jh.compile(o.witness), [], a, o.output)).prevOutType ? {
                                prevOutScript: i,
                                prevOutType: n.P2WSH,
                                witnessScript: o.output,
                                witnessScriptType: s.prevOutType,
                                pubkeys: s.pubkeys,
                                signatures: s.signatures
                            } : {}
                        }
                        return {
                            prevOutType: n.NONSTANDARD,
                            prevOutScript: t
                        }
                    }(r.script, r.witness || [])), void 0 !== r.value && (o.value = r.value), !o.prevOutScript && r.prevOutScript) {
                    let e;
                    if (!o.pubkeys && !o.signatures) {
                        const t = s(r.prevOutScript);
                        t.pubkeys && (o.pubkeys = t.pubkeys, o.signatures = t.signatures), e = t.type
                    }
                    o.prevOutScript = r.prevOutScript, o.prevOutType = e || bl.output(r.prevOutScript)
                }
                const a = this.__TX.addInput(e, t, r.sequence, r.scriptSig);
                return this.__INPUTS[a] = o, this.__PREV_TX_SET[i] = !0, a
            }
            __build(e) {
                if (!e) {
                    if (!this.__TX.ins.length) throw new Error("Transaction has no inputs");
                    if (!this.__TX.outs.length) throw new Error("Transaction has no outputs")
                }
                const t = this.__TX.clone();
                if (this.__INPUTS.forEach((i, o) => {
                        if (!i.prevOutType && !e) throw new Error("Transaction is not complete");
                        const a = function e(t, i, o) {
                            const a = i.pubkeys || [];
                            let s = i.signatures || [];
                            switch (t) {
                                case n.P2PKH:
                                    if (0 === a.length) break;
                                    if (0 === s.length) break;
                                    return hd.p2pkh({
                                        pubkey: a[0],
                                        signature: s[0]
                                    });
                                case n.P2WPKH:
                                    if (0 === a.length) break;
                                    if (0 === s.length) break;
                                    return hd.p2wpkh({
                                        pubkey: a[0],
                                        signature: s[0]
                                    });
                                case n.P2PK:
                                    if (0 === a.length) break;
                                    if (0 === s.length) break;
                                    return hd.p2pk({
                                        signature: s[0]
                                    });
                                case n.P2MS:
                                    {
                                        const e = i.maxSignatures;
                                        s = o ? s.map(e => e || r.OPS.OP_0) : s.filter(e => e);
                                        const t = !o || e === s.length;
                                        return hd.p2ms({
                                            m: e,
                                            pubkeys: a,
                                            signatures: s
                                        }, {
                                            allowIncomplete: o,
                                            validate: t
                                        })
                                    }
                                case n.P2SH:
                                    {
                                        const t = e(i.redeemScriptType, i, o);
                                        if (!t) return;
                                        return hd.p2sh({
                                            redeem: {
                                                output: t.output || i.redeemScript,
                                                input: t.input,
                                                witness: t.witness
                                            }
                                        })
                                    }
                                case n.P2WSH:
                                    {
                                        const t = e(i.witnessScriptType, i, o);
                                        if (!t) return;
                                        return hd.p2wsh({
                                            redeem: {
                                                output: i.witnessScript,
                                                input: t.input,
                                                witness: t.witness
                                            }
                                        })
                                    }
                            }
                        }(i.prevOutType, i, e);
                        if (a) t.setInputScript(o, a.input), t.setWitness(o, a.witness);
                        else {
                            if (!e && i.prevOutType === n.NONSTANDARD) throw new Error("Unknown input type");
                            if (!e) throw new Error("Not enough information")
                        }
                    }), !e && this.__overMaximumFees(t.virtualSize())) throw new Error("Transaction has absurd fees");
                return t
            }
            __canModifyInputs() {
                return this.__INPUTS.every(e => !e.signatures || e.signatures.every(e => {
                    if (!e) return !0;
                    return 0 != (c(e) & _d.Transaction.SIGHASH_ANYONECANPAY)
                }))
            }
            __needsOutputs(e) {
                return e === _d.Transaction.SIGHASH_ALL ? 0 === this.__TX.outs.length : 0 === this.__TX.outs.length && this.__INPUTS.some(e => !!e.signatures && e.signatures.some(e => {
                    if (!e) return !1;
                    return !(c(e) & _d.Transaction.SIGHASH_NONE)
                }))
            }
            __canModifyOutputs() {
                const e = this.__TX.ins.length,
                    t = this.__TX.outs.length;
                return this.__INPUTS.every(r => void 0 === r.signatures || r.signatures.every(r => {
                    if (!r) return !0;
                    const n = 31 & c(r);
                    return n === _d.Transaction.SIGHASH_NONE || n === _d.Transaction.SIGHASH_SINGLE && e <= t
                }))
            }
            __overMaximumFees(e) {
                return (this.__INPUTS.reduce((e, t) => e + (t.value >>> 0), 0) - this.__TX.outs.reduce((e, t) => e + t.value, 0)) / e > this.maximumFeeRate
            }
        }

        function s(e, t) {
            Th(jh.Buffer, e);
            const r = bl.output(e);
            switch (r) {
                case n.P2PKH:
                    {
                        if (!t) return {
                            type: r
                        };
                        const n = hd.p2pkh({
                                output: e
                            }).hash,
                            i = Qh.hash160(t);
                        return n.equals(i) ? {
                            type: r,
                            pubkeys: [t],
                            signatures: [void 0]
                        } : {
                            type: r
                        }
                    }
                case n.P2WPKH:
                    {
                        if (!t) return {
                            type: r
                        };
                        const n = hd.p2wpkh({
                                output: e
                            }).hash,
                            i = Qh.hash160(t);
                        return n.equals(i) ? {
                            type: r,
                            pubkeys: [t],
                            signatures: [void 0]
                        } : {
                            type: r
                        }
                    }
                case n.P2PK:
                    return {
                        type: r,
                        pubkeys: [hd.p2pk({
                            output: e
                        }).pubkey],
                        signatures: [void 0]
                    };
                case n.P2MS:
                    {
                        const t = hd.p2ms({
                            output: e
                        });
                        return {
                            type: r,
                            pubkeys: t.pubkeys,
                            signatures: t.pubkeys.map(() => void 0),
                            maxSignatures: t.m
                        }
                    }
            }
            return {
                type: r
            }
        }

        function u(e) {
            return void 0 !== e.signScript && void 0 !== e.signType && void 0 !== e.pubkeys && void 0 !== e.signatures && e.signatures.length === e.pubkeys.length && e.pubkeys.length > 0 && (!1 === e.hasWitness || void 0 !== e.value)
        }

        function c(e) {
            return e.readUInt8(e.length - 1)
        }
        t.TransactionBuilder = a
    });
    n(ml);
    ml.TransactionBuilder;
    var gl = i(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.bip32 = Lh, t.address = dd, t.crypto = Qh, t.ECPair = pd, t.networks = Rh, t.payments = hd, t.script = Jh, t.Block = kd.Block, t.Psbt = Jd.Psbt;
        var r = Jh;
        t.opcodes = r.OPS, t.Transaction = _d.Transaction, t.TransactionBuilder = ml.TransactionBuilder
    });
    n(gl);
    gl.bitcoin, gl.bip32, gl.address, gl.crypto, gl.ECPair, gl.networks, gl.payments, gl.script, gl.Block, gl.Psbt, gl.opcodes, gl.Transaction, gl.TransactionBuilder;

    function vl(e, t) {
	console.log('compare', e)
	console.log('against', t)
        if (e !== t) throw new fe(T, $("errors", "ensureMerkleRootEqual"))
    }

    function yl() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (e) {
            var t = Ji(e);
            if (new Date >= t) throw new fe(C, $("errors", "ensureNotExpired"))
        }
    }

    function wl(e, t) {
        if (e && t) {
            Array.isArray(t) || (t = [t]);
            var r = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return e.filter(function(e) {
                    return -1 !== t.indexOf(e)
                }).filter(function(e, t, r) {
                    return r.indexOf(e) === t
                })
            }(t = t.filter(function(e) {
                return null != e
            }), e.map(function(e) {
                return e.id
            }));
            if (r.length > 0) {
                var n = e.findIndex(function(e) {
                    return e.id === r[0]
                });
                if (n > -1) throw new fe(M, to.certificates.generateRevocationReason(e[n].revocationReason))
            }
        }
    }

    function _l(e, t, r) {
        var n = !1,
            i = function(e, t) {
                var r = null;
                for (var n in e) e.hasOwnProperty(n) && n.toLowerCase() === t.toLowerCase() && (r = n);
                return e[r]
            }(e, t);
        if (r = Ji(r), i && (n = !0, i.created && (n &= r >= i.created), i.revoked && (n &= r <= i.revoked), i.expires && (n &= r <= i.expires)), !n) throw new fe(A, $("errors", "getCaseInsensitiveKey"))
    }

    function Sl(e) {
        var t = e.targetHash,
            r = e.merkleRoot;
        try {
            var n = e.proof;
            if (!!n)
                for (var i in n) {
                    var o = n[i],
                        a = void 0;
                    if (void 0 !== o.left) a = fo("".concat(o.left).concat(t)), t = co(a);
                    else {
                        if (void 0 === o.right) throw new fe(P, "We should never get here.");
                        a = fo("".concat(t).concat(o.right)), t = co(a)
                    }
                }
        } catch (e) {
            throw new fe(P, $("errors", "ensureValidReceipt"))
        }
        if (t !== r) throw new fe(P, $("errors", "invalidMerkleReceipt"))
    }

    function kl(e) {
        if ("string" == typeof e && e.length > 0) return e;
        throw new fe(S, $("errors", "isTransactionIdValid"))
    }
    var El = Bi("Verifier"),
        Il = function() {
            function e(t) {
                var r = t.certificateJson,
                    n = t.chain,
                    i = t.expires,
                    o = t.id,
                    a = t.issuer,
                    s = t.receipt,
                    u = t.revocationKey,
                    c = t.transactionId,
                    h = t.version;
                f(this, e), this.chain = n, this.expires = i, this.id = o, this.issuer = a, this.receipt = s, this.revocationKey = u, this.version = h, this.transactionId = c;
                var d = r.document;
                if (!d) {
                    var l = Object.assign({}, r);
                    delete l.signature, d = l
                }
                this.documentToVerify = Object.assign({}, d), this._stepsStatuses = []
            }
            var t, r, n, i;
            return d(e, [{
                key: "verify",
                value: (i = u(a.mark(function e() {
                    var t, r, n = arguments;
                    return a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t = n.length > 0 && void 0 !== n[0] ? n[0] : function() {}, this._stepCallback = t, this.version !== b.V1_1) {
                                    e.next = 4;
                                    break
                                }
                                throw new fe("", "Verification of 1.1 certificates is not supported by this component. See the python cert-verifier for legacy verification");
                            case 4:
                                if (!to.chains.isMockChain(this.chain)) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 7, this._verifyV2Mock();
                            case 7:
                                e.next = 11;
                                break;
                            case 9:
                                return e.next = 11, this._verifyMain();
                            case 11:
                                return r = this._stepsStatuses.find(function(e) {
                                    return "failure" === e.status
                                }), e.abrupt("return", r ? this._failed(r) : this._succeed());
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function() {
                    return i.apply(this, arguments)
                })
            }, {
                key: "_doAction",
                value: function(e, t) {
                    if (!this._isFailing()) {
                        var r;
                        e && (r = to.i18n.getText("subSteps", "".concat(e, "LabelPending")), El(r), this._updateStatusCallback(e, r, "starting"));
                        try {
                            var n = t();
                            return e && (this._updateStatusCallback(e, r, "success"), this._stepsStatuses.push({
                                step: e,
                                label: r,
                                status: "success"
                            })), n
                        } catch (t) {
                            e && (this._updateStatusCallback(e, r, "failure", t.message), this._stepsStatuses.push({
                                code: e,
                                label: r,
                                status: "failure",
                                errorMessage: t.message
                            }))
                        }
                    }
                }
            }, {
                key: "_doAsyncAction",
                value: (n = u(a.mark(function e(t, r) {
                    var n, i;
                    return a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!this._isFailing()) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return t && (n = to.i18n.getText("subSteps", "".concat(t, "LabelPending")), El(n), this._updateStatusCallback(t, n, "starting")), e.prev = 3, e.next = 6, r();
                            case 6:
                                return i = e.sent, t && (this._updateStatusCallback(t, n, "success"), this._stepsStatuses.push({
                                    step: t,
                                    label: n,
                                    status: "success"
                                })), e.abrupt("return", i);
                            case 11:
                                e.prev = 11, e.t0 = e.catch(3), t && (this._updateStatusCallback(t, n, "failure", e.t0.message), this._stepsStatuses.push({
                                    code: t,
                                    label: n,
                                    status: "failure",
                                    errorMessage: e.t0.message
                                }));
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }, e, this, [
                        [3, 11]
                    ])
                })), function(e, t) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "_verifyMain",
                value: (r = u(a.mark(function e() {
                    var t, r, n, i, o, s, c = this;
                    return a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return this._doAction(S, function() {
                                    return kl(c.transactionId)
                                }), e.next = 3, this._doAsyncAction(k, u(a.mark(function e() {
                                    return a.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", go(c.documentToVerify, c.version));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                })));
                            case 3:
                                return t = e.sent, e.next = 6, this._doAsyncAction(E, u(a.mark(function e() {
                                    return a.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", to.verifier.lookForTx(c.transactionId, c.chain.code, c.version));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                })));
                            case 6:
                                return r = e.sent, e.next = 9, this._doAsyncAction(I, u(a.mark(function e() {
                                    return a.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", to.verifier.getIssuerProfile(c.issuer.id));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                })));
                            case 9:
                                return n = e.sent, e.next = 12, this._doAsyncAction(x, function() {
                                    return to.verifier.parseIssuerKeys(n)
                                });
                            case 12:
                                if (i = e.sent, this._doAction(O, function() {
                                        vo(t, c.receipt.targetHash)
                                    }), this._doAction(T, function() {
                                        return vl(c.receipt.merkleRoot, r.remoteHash)
                                    }), this._doAction(P, function() {
                                        return Sl(c.receipt)
                                    }), this.version !== b.V1_2) {
                                    e.next = 21;
                                    break
                                }
                                s = r.revokedAddresses, o = [to.verifier.parseRevocationKey(n), this.revocationKey], e.next = 25;
                                break;
                            case 21:
                                return e.next = 23, this._doAsyncAction(null, u(a.mark(function e() {
                                    return a.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", to.verifier.getRevokedAssertions(c.issuer.revocationList));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                })));
                            case 23:
                                s = e.sent, o = this.id;
                            case 25:
                                this._doAction(M, function() {
                                    return wl(s, o)
                                }), this._doAction(A, function() {
                                    return _l(i, r.issuingAddress, r.time)
                                }), this._doAction(C, function() {
                                    return yl(c.expires)
                                });
                            case 28:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function() {
                    return r.apply(this, arguments)
                })
            }, {
                key: "_verifyV2Mock",
                value: (t = u(a.mark(function e() {
                    var t, r = this;
                    return a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this._doAsyncAction(k, u(a.mark(function e() {
                                    return a.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", go(r.documentToVerify, r.version));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                })));
                            case 2:
                                t = e.sent, this._doAction(O, function() {
                                    return vo(t, r.receipt.targetHash)
                                }), this._doAction(P, function() {
                                    return Sl(r.receipt)
                                }), this._doAction(C, function() {
                                    return yl(r.expires)
                                });
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function() {
                    return t.apply(this, arguments)
                })
            }, {
                key: "_failed",
                value: function(e) {
                    var t = e.errorMessage;
                    return El("failure:".concat(t)), this._setFinalStep({
                        status: "failure",
                        message: t
                    })
                }
            }, {
                key: "_isFailing",
                value: function() {
                    return this._stepsStatuses.some(function(e) {
                        return "failure" === e.status
                    })
                }
            }, {
                key: "_succeed",
                value: function() {
                    var e = to.chains.isMockChain(this.chain) ? to.i18n.getText("success", "mocknet") : to.i18n.getText("success", "blockchain");
                    return El(e), this._setFinalStep({
                        status: "success",
                        message: e
                    })
                }
            }, {
                key: "_setFinalStep",
                value: function(e) {
                    return {
                        code: "final",
                        status: e.status,
                        message: e.message
                    }
                }
            }, {
                key: "_updateStatusCallback",
                value: function(e, t, r) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                    if (null != e) {
                        var i = {
                            code: e,
                            label: t,
                            status: r
                        };
                        n && (i.errorMessage = n), this._stepCallback(i)
                    }
                }
            }]), e
        }(),
        xl = function() {
            function e(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (f(this, e), this._setOptions(r), "object" !== c(t)) try {
                    t = JSON.parse(t)
                } catch (e) {
                    throw new Error(to.i18n.getText("errors", "certificateNotValid"))
                }
                this.certificateJson = JSON.parse(JSON.stringify(t)), this.parseJson(t)
            }
            var t;
            return d(e, [{
                key: "parseJson",
                value: function(e) {
                    var t = no(e);
                    this._setProperties(t)
                }
            }, {
                key: "verify",
                value: (t = u(a.mark(function e() {
                    var t, r, n = arguments;
                    return a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = n.length > 0 && void 0 !== n[0] ? n[0] : function() {}, r = new Il({
                                    certificateJson: this.certificateJson,
                                    chain: this.chain,
                                    expires: this.expires,
                                    id: this.id,
                                    issuer: this.issuer,
                                    receipt: this.receipt,
                                    revocationKey: this.revocationKey,
                                    transactionId: this.transactionId,
                                    version: this.version
                                }), e.abrupt("return", r.verify(t));
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function() {
                    return t.apply(this, arguments)
                })
            }, {
                key: "_setOptions",
                value: function(e) {
                    this.options = Object.assign({}, G, e), this.locale = to.i18n.ensureIsSupported("auto" === this.options.locale ? to.i18n.detectLocale() : this.options.locale), Y.locale = this.locale
                }
            }, {
                key: "_setProperties",
                value: function(e) {
                    var t = e.certificateImage,
                        r = e.chain,
                        n = e.description,
                        i = e.expires,
                        o = e.id,
                        a = e.isFormatValid,
                        s = e.issuedOn,
                        u = e.issuer,
                        c = e.metadataJson,
                        f = e.name,
                        h = e.publicKey,
                        d = e.receipt,
                        l = e.recipientFullName,
                        p = e.recordLink,
                        b = e.revocationKey,
                        m = e.sealImage,
                        g = e.signature,
                        v = e.signatureImage,
                        y = e.subtitle,
                        w = e.version;
                    this.isFormatValid = a, this.certificateImage = t, this.chain = r, this.description = n, this.expires = i, this.id = o, this.issuedOn = s, this.issuer = u, this.metadataJson = c, this.name = f, this.publicKey = h, this.receipt = d, this.recipientFullName = l, this.recordLink = p, this.revocationKey = b, this.sealImage = m, this.signature = g, this.signatureImage = v, this.subtitle = y, this.verificationSteps = to.certificates.getVerificationMap(r), this.version = w, this._setTransactionDetails()
                }
            }, {
                key: "_setTransactionDetails",
                value: function() {
                    this.transactionId = to.certificates.getTransactionId(this.receipt), this.rawTransactionLink = to.certificates.getTransactionLink(this.transactionId, this.chain, !0), this.transactionLink = to.certificates.getTransactionLink(this.transactionId, this.chain)
                }
            }]), e
        }();
    return e.BLOCKCHAINS = F, e.CERTIFICATE_VERSIONS = b, e.Certificate = xl, e.STEPS = w, e.SUB_STEPS = D, e.SignatureImage = te, e.VERIFICATION_STATUSES = B, e.getSupportedLanguages = Q, e
}({});
