App = {
    web3Provider: null,
    contracts: {},
    account: '0x0',
    tokAddress: '0x0',
    loading: false,
    web3Connect: false,
    tokenPrice: 0,
    tokenRate: 0,
    rate: 0,
    remainingTokens: 0,
    tokensSold: 0,
    totalSupply: 0,
    decimals: 0,
    name: "",
    symbol: "",
    contract_address: '0x73e343afb5e161ede6d325249983ae08c7c362a0',
    abi: [{
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "tokenOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "_totalSupply",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                    "internalType": "address",
                    "name": "tokenOwner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [{
                "internalType": "uint256",
                "name": "remaining",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [{
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                "internalType": "address",
                "name": "tokenOwner",
                "type": "address"
            }],
            "name": "balanceOf",
            "outputs": [{
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [{
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [{
                "internalType": "string",
                "name": "",
                "type": "string"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                    "internalType": "uint256",
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "b",
                    "type": "uint256"
                }
            ],
            "name": "safeAdd",
            "outputs": [{
                "internalType": "uint256",
                "name": "c",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                    "internalType": "uint256",
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "b",
                    "type": "uint256"
                }
            ],
            "name": "safeDiv",
            "outputs": [{
                "internalType": "uint256",
                "name": "c",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                    "internalType": "uint256",
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "b",
                    "type": "uint256"
                }
            ],
            "name": "safeMul",
            "outputs": [{
                "internalType": "uint256",
                "name": "c",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                    "internalType": "uint256",
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "b",
                    "type": "uint256"
                }
            ],
            "name": "safeSub",
            "outputs": [{
                "internalType": "uint256",
                "name": "c",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [{
                "internalType": "string",
                "name": "",
                "type": "string"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [{
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [{
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],

    init: function() {
        console.log("App initialized...")
        return App.initWeb3();
    },

    initWeb3: function() {
        if (typeof web3 !== 'undefined') {
            // If a web3 instance is already provided by Meta Mask.
            App.web3Provider = web3.currentProvider;
            web3 = new Web3(web3.currentProvider);
            App.web3Connect = true;
        } else {
            // Specify default instance if no web3 instance provided
            //App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
            //web3 = new Web3(App.web3Provider);
            //App.web3Connect = true;
            //console.log("App.web3Connect: ",App.web3Connect)
        }
        // Check the connection
        /*if (!web3.isConnected()) {
            console.error("Not connected");

        } else {
            console.error("connected");

        }*/
        return App.initContracts();
    },

    initContracts: function() {
        $.getJSON("TXCNCrowdsale.json", function(txcncrowdsale) {
            //App.contracts.TXCNCrowdsale = require("@truffle/contract");
            //import App.contracts.TXCNCrowdsale from '@truffle/contract';
            // var MyContract = contract({
            //     abi: ...,
            //     unlinked_binary: ...,
            //     address: ..., // optional
            //     // many more
            // })
            // MyContract.setProvider(provider);
            App.contracts.TXCNCrowdsale = TruffleContract(txcncrowdsale);
            App.contracts.TXCNCrowdsale.setProvider(App.web3Provider);
            App.contracts.TXCNCrowdsale.deployed().then(function(txcncrowdsale) {
                console.log("Abs Token Sale Address:", txcncrowdsale.address);
            });
        }).done(function() {
            $.getJSON("TXCNToken.json", function(txcnToken) {
                /*App.contracts.TXCNToken = TruffleContract(txcnToken);
                console.log("on est la ", App.contracts.TXCNToken)
                App.contracts.TXCNToken.setProvider(App.web3Provider);
                App.contracts.TXCNToken.deployed().then(function(txcnToken) {
                    console.log("Abs Token Address:", txcnToken.address);
                });*/

                // web3.eth.contract(abi).at(contract_address) is the  magic line to get the contract object.
                App.contracts.TXCNToken = new web3.eth.Contract(App.abi, App.contract_address);
                //console.log(App.contracts.TXCNToken.methods.name());
                App.contracts.TXCNToken.setProvider(App.web3Provider);
                App.contracts.TXCNToken.methods.decimals().call().then(console.log);
                App.contracts.TXCNToken.methods.name().call().then(function(txcnToken) {
                    App.tokAddress = "0x73e343afb5e161ede6d325249983ae08c7c362a0";
                    console.log("Abs Token Address:", "0x73e343afb5e161ede6d325249983ae08c7c362a0");
                });
                App.listenForEvents();
                return App.render();
            });

        })
    },

    // Listen for events emitted from the contract
    listenForEvents: function() {
        App.contracts.TXCNCrowdsale.deployed().then(function(instance) {
            instance.TokensPurchased({}, {
                    fromBlock: 0,
                    toBlock: 'latest',
                }),
                function(error, event) {
                    console.log("event triggered", event);
                    App.render();
                }
        })
    },

    render: function() {
        if (App.loading) {
            return;
        }
        App.loading = true;

        var loader = $('#loader');
        var loader1 = $('#loader1');
        var loader2 = $('#loader2');
        var loader3 = $('#loader3');
        var loader4 = $('#loader4');
        var content = $('#content');

        loader.show();
        loader1.hide();
        loader2.hide();
        loader3.hide();
        loader4.hide();
        content.hide();

        // Load account data
        web3.eth.getCoinbase(function(err, account) {
            if (err === null) {
                App.account = account;
                $('#accountAddress').html( account);
                console.log("account address: ",App.account)
            }
        })

        // Load token sale contract
        App.contracts.TXCNCrowdsale.deployed().then(function(instance) {
            txcncrowdsaleInstance = instance;
            /*return txcncrowdsaleInstance.remainingTokens();
        }).then(function(remainingTokens) {
            App.remainingTokens = remainingTokens;
            //$('.token-price').html(web3.utils.fromWei(App.tokenPrice, "ether"));
            App.remainingTokens = parseInt(App.rate.toString());
            console.log("remainingTokens: ", App.remainingTokens);*/
            return txcncrowdsaleInstance.rate();
        }).then(function(rate) {
            App.rate = rate;
            //$('.token-price').html(web3.utils.fromWei(App.tokenPrice, "ether"));
            App.tokenRate = parseInt(App.rate.toString());
            //console.log("rate: ", App.tokenRate);
            return txcncrowdsaleInstance.weiRaised();
        }).then(function(weiRaised) {
            weiRaised = parseInt(weiRaised.toString());
            //console.log("weiRaised: ", weiRaised);
            //weiRaised = weiRaised.toNumber();
            let tksold = weiRaised * App.tokenRate * Math.pow(10, -App.decimals);
            //App.tokensSold = tksold;
            //console.log("token sold: ", tksold);
            //console.log("weiRaised: ", weiRaised);
            //$('.tokens-sold').html(App.tokensSold);
            //$('.tokens-available').html(App.tokensAvailable);

            var progressPercent = (Math.ceil(App.balanceOwner) / 1000000000) * 100;
            //$('#progress').css('width', progressPercent + '%');

            // Load token contract
            App.contracts.TXCNToken = new web3.eth.Contract(App.abi, App.contract_address);
            App.contracts.TXCNToken.setProvider(App.web3Provider);

            App.contracts.TXCNToken.methods.name().call().then(function(name) {
                App.name = name;
                $('.abs-name').html(App.name);
                console.log("name: ", name);
            });
            /*App.contracts.TXCNToken.methods.approve("0xA00a319207f533af1fc6a5380F75F67759A78d67", "1000000000000000000000000000").call().then(function(result) {
                console.log("result: ", result);
            });*/
            /*App.contracts.TXCNToken.methods.transferFrom("0x097c568230c643F7edb98Eb9F1456978638374b1","0xA00a319207f533af1fc6a5380F75F67759A78d67", "500000000000000000000").call().then(function(result) {
                console.log("result: ", result);
            });*/
            App.contracts.TXCNToken.methods.symbol().call().then(function(symbol) {
                App.symbol = symbol;
                $('.abs-symbol').html(App.symbol);
                $('#tokenAddress').html(App.tokAddress);
                console.log("symbol: ", symbol);
            });
            App.contracts.TXCNToken.methods.decimals().call().then(function(decimals) {
                App.decimals = decimals;
                App.tokensSold = parseInt(App.noExponents(weiRaised * App.tokenRate * Math.pow(10, -App.decimals)));
                //App.tokensSold = App.convertExpToDec(weiRaised*App.tokenPrice*Math.pow(10, -App.decimals));
                App.tokenPrice = App.noExponents(1/web3.utils.fromWei(App.rate, "ether") / (10 ** App.decimals))
                $('.token-price').html(App.tokenPrice);
                //$('.tokens-sold').html(App.tokensSold);
                console.log("decimals: ", decimals);
                console.log("tokensSold: ", weiRaised * App.tokenRate * Math.pow(10, -App.decimals));
            });
            App.contracts.TXCNToken.methods.balanceOf("0xD10957cC5af8819AF00fd1902a32F1d4BaD4746f").call().then(function(balanceOwner) {
                balanceOwner = parseInt(balanceOwner.toString());
                balanceOwner = App.noExponents(balanceOwner / 10 ** App.decimals);
                //console.log("balanceOwner: ", balanceOwner);
                //$('.tokens-sold').html(1000000000-balanceOwner);
                var progressPercent = (Math.ceil(1000000000-balanceOwner) / 1000000000) * 100;
                //$('#progress').css('width', progressPercent + '%');
            });
            App.contracts.TXCNToken.methods.totalSupply().call().then(function(totalSupply) {
                totalSupply = parseInt(totalSupply.toString());
                App.totalSupply = parseInt(App.noExponents(totalSupply * Math.pow(10, -App.decimals)));
                $('.abs-totalSupply').html(App.totalSupply-2000000000);
                console.log("totalSupply: ", App.totalSupply);
            });

            App.contracts.TXCNToken.methods.balanceOf(App.account).call().then(function(balance) {
                balance = parseInt(balance.toString());
                //balance = balance.toNumber();
                balance = App.noExponents(balance / 10 ** App.decimals);
                console.log("balance: ", balance);
                $('.abs-balance').html(balance);
                App.loading = false;
                loader.hide();
                loader1.hide();
                loader2.hide();
                loader3.hide();
                loader4.hide();
                content.show();
            }).catch(e =>{
                alert("web3");
            });

        }).catch(e => {
            if (!App.account) {
                Swal.fire({
                    title: 'Attention',
                    text: "Aucun Metamask Connecté. Ce site est un site d'achat de jetons - pour continuer, vous devez connecter votre wallet Metamask à ce site",
                    icon: 'warning',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        App.web3Connect = true;
                        loader.hide();
                        loader1.hide();
                        loader2.hide();
                        loader3.show();
                        loader4.hide();
                        content.hide();
                    }else{
                        App.web3Connect = true;
                        loader.hide();
                        loader1.hide();
                        loader2.hide();
                        loader3.show();
                        loader4.hide();
                        content.hide();
                    }
                })
                //window.alert("Aucun Metamask Connecté. Ce site est un site d'achat de jetons - pour continuer, vous devez connecter votre wallet Metamask à ce site");
                
            } else {
                Swal.fire(
                    'Problème de connexion!',
                    'Assurez vous d\'être connecté à Internet!',
                    'warning'
                ).then((result) => {
                    if (result.isConfirmed) {
                        loader.hide();
                        loader1.hide();
                        loader2.hide();
                        loader3.hide();
                        loader4.show();
                        content.hide();
                    }else{
                        loader.hide();
                        loader1.hide();
                        loader2.hide();
                        loader3.hide();
                        loader4.show();
                        content.hide();
                    }
                })
                
            }

        });
    },

    buyTokens: function() {
        $('#content').hide();
        $('#loader').hide();
        $('#loader2').hide();
        $('#loader3').hide();
        $('#loader4').hide();
        $('#loader1').show();
        var numberOfTokens = $('#numberOfTokens').val();
        console.log("Amount of Tokens bought...", numberOfTokens)
        numberOfTokens = Number(numberOfTokens);
        console.log("Amount of Tokens bought converted in type number...", numberOfTokens)
        var numberOfWeis = numberOfTokens / (App.tokenRate * Math.pow(10, -App.decimals));
        numberOfWeis = Math.round(App.noExponents(numberOfWeis));
        console.log("nombre de wei correspondant ", numberOfWeis);
        console.log("valeur en BNB correspondant ", numberOfWeis * Math.pow(10, -App.decimals));
        App.contracts.TXCNCrowdsale.deployed().then(function(instance) {
            return instance.buyTokens(App.account, {
                value: numberOfWeis,
                from: App.account
            });
        }).then(function(result) {
            $('#content').hide();
            $('#loader').hide();
            $('#loader1').hide();
            $('#loader3').hide();
            $('#loader4').hide();
            $('#loader2').show();
            console.log("Tokens bought: ", numberOfTokens)
            $('form').trigger('reset') // reset number of tokens in form
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            ).then((result) => {
                if (result.isConfirmed) {
                    location.reload();
                }else{
                    location.reload();
                }
            })
            // Wait for Sell event
        }).catch(e => {
            if (e.code === 4001) {
                Swal.fire({
                    title: 'Transaction annulée!',
                    text: "Vous avez réjeté la transaction!",
                    icon: 'error',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                    }).then((result) => {
                    if (result.isConfirmed) {
                        location.reload();
                    }else{
                        location.reload();
                    }
                })
                //user rejected the transaction
                //alert("Vous avez rejeté la transaction");
            } else {
                console.log(e)
                //alert("Une erreur s'est produite! \n Vérifiez que vous avez assez de BNB smart chain pour couvrir les frais de réseau!")
                Swal.fire({
                    title: 'Une erreur s\'est produite!',
                    text: "Vérifiez que vous avez assez de BNB smart chain pour couvrir les frais de réseau!",
                    icon: 'warning',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                    }).then((result) => {
                    if (result.isConfirmed) {
                        location.reload();
                    }else{
                        location.reload();
                    }
                })
            }
        })
        /*.catch(function (e) {
            // Transaction rejected or failed
            console.log(e);
            alert("Vous avez rejeté la transaction");
            location.reload();
        })*/
        ;
    },

    convertExpToDec: function(n) {
        var [lead, decimal, pow] = n.toString().split(/e|\./);
        console.log(lead, decimal, pow);
        return +pow <= 0 ?
            "0." + "0".repeat(Math.abs(pow) - 1) + lead + decimal :
            lead + (+pow >= decimal.length ? (decimal + "0".repeat(+pow - decimal.length)) : (decimal.slice(0, +pow) + "." + decimal.slice(+pow)))
    },

    noExponents: function(nb) {
        var data = String(nb).split(/[eE]/);
        if (data.length == 1) return data[0];

        var z = '',
            sign = nb < 0 ? '-' : '',
            str = data[0].replace('.', ''),
            mag = Number(data[1]) + 1;

        if (mag < 0) {
            z = sign + '0.';
            while (mag++) z += '0';
            return z + str.replace(/^\-/, '');
        }
        mag -= str.length;
        while (mag--) z += '0';
        return str + z;
    }
}

$(function() {
    $(window).load(function() {
        Swal.fire({
            icon: 'info',
            title: 'BIENVENU(E)',
            text: 'Au 2ème Round de l\'ICO TEXACOIN',
            footer: '<a href="">Vidéo tutorielle sur l\'achat</a>'
        }).then((result) => {
            if (result.isConfirmed) {
                App.init();
            }else{
                App.init();
            }
        })
    })
});