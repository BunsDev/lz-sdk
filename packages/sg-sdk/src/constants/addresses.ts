import { ChainId } from "@layerzerolabs/lz-sdk"
import { TokenSymbol } from "../enums"
import * as TEST from "./testAddresses"

// Stargate Router.sol addresses
export const ROUTER_ADDRESS: { [chainId: number]: string } = {
    ...TEST.ROUTER_ADDRESS,
    [ChainId.ETHEREUM]: "0x8731d54E9D02c286767d56ac03e8037C07e01e98",
    [ChainId.RINKEBY]: "0x82A0F5F531F9ce0df1DF5619f74a0d3fA31FF561",
    [ChainId.BSC]: "0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8",
    [ChainId.BSC_TESTNET]: "0xbB0f1be1E9CE9cB27EA5b0c3a85B7cc3381d8176",
    [ChainId.AVALANCHE]: "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd",
    [ChainId.FUJI]: "0x13093E05Eb890dfA6DacecBdE51d24DabAb2Faa1",
    [ChainId.POLYGON]: "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd",
    [ChainId.MUMBAI]: "0x817436a076060D158204d955E5403b6Ed0A5fac0",
    [ChainId.ARBITRUM]: "0x53Bf833A5d6c4ddA888F69c22C88C9f356a41614",
    [ChainId.ARBITRUM_RINKEBY]: "0x6701D9802aDF674E524053bd44AA83ef253efc41",
    [ChainId.OPTIMISM]: "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b",
    [ChainId.OPTIMISM_KOVAN]: "0xCC68641528B948642bDE1729805d6cf1DECB0B00",
    [ChainId.FANTOM]: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
    [ChainId.FANTOM_TESTNET]: "0xa73b0a56B29aD790595763e71505FCa2c1abb77f",
}

export const ROUTER_ETH_ADDRESS: { [chainId: number]: string } = {
    ...TEST.ROUTER_ADDRESS,
    [ChainId.ETHEREUM]: '',
    [ChainId.RINKEBY]: '0x0BD6e930EF5e74A2D7E42E97bD27f89F8221458A',
    [ChainId.ARBITRUM]: '',
    [ChainId.ARBITRUM_RINKEBY]: '0xaE16d5dd9da0B66F6A1b262A47f92fDFC2E9f99b',
    [ChainId.OPTIMISM]: '',
    [ChainId.OPTIMISM_KOVAN]: '0x7171cf97b26C46Ba5Ee8cCfD0bB6B4A3932F1d95',
}

// Stargate Bridge.sol addresses
export const BRIDGE_ADDRESS: { [chainId: number]: string } = {
    ...TEST.BRIDGE_ADDRESS,
    [ChainId.ETHEREUM]: "0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97",
    [ChainId.RINKEBY]: "0xcbB03BdBc989FC00283cF9ddcD3D711fe48A4cce",
    [ChainId.BSC]: "0x6694340fc020c5E6B96567843da2df01b2CE1eb6",
    [ChainId.BSC_TESTNET]: "0xa1E105511416aEc3200CcE7069548cF332c6DCA2",
    [ChainId.AVALANCHE]: "0x9d1B1669c73b033DFe47ae5a0164Ab96df25B944",
    [ChainId.FUJI]: "0x29fBC4E4092Db862218c62a888a00F9521619230",
    [ChainId.POLYGON]: "0x9d1B1669c73b033DFe47ae5a0164Ab96df25B944",
    [ChainId.MUMBAI]: "0x629B57D89b1739eE1C0c0fD9eab426306e11cF42",
    [ChainId.ARBITRUM]: "0x352d8275AAE3e0c2404d9f68f6cEE084B5bEB3DD",
    [ChainId.ARBITRUM_RINKEBY]: "0x881f70A7d194cE618E0ae493Ae9707B4983Fe3E8",
    [ChainId.OPTIMISM]: "0x701a95707A0290AC8B90b3719e8EE5b210360883",
    [ChainId.OPTIMISM_KOVAN]: "0x87E8c9E141F896a4bB517e10A3cD6D610d597aaa",
    [ChainId.FANTOM]: "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd",
    [ChainId.FANTOM_TESTNET]: "0xb97948ad8805174e0CB27cAf0115e5eA5e02F3A7",
}

// StargateToken.sol instances
export const STG_ADDRESS: { [chainId: number]: string } = {
    ...TEST.STG_ADDRESS,
    [ChainId.ETHEREUM]: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
    [ChainId.RINKEBY]: "0x3516ddfaCbDBBCAb1A19c9aC047970dd3DE463Af",
    [ChainId.BSC]: "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b",
    [ChainId.BSC_TESTNET]: "0xcd2DBD80c15b1A3df37658e5656a87160969bE11",
    [ChainId.AVALANCHE]: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590",
    [ChainId.FUJI]: "0xA6B23d4be9364398FB265c60588cdc4FB78314a0",
    [ChainId.POLYGON]: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590",
    [ChainId.MUMBAI]: "0x9049D580A526871A1bD8d4348fFBA220F7Dd0563",
    [ChainId.ARBITRUM]: "0x6694340fc020c5E6B96567843da2df01b2CE1eb6",
    [ChainId.ARBITRUM_RINKEBY]: "0xEadc79ca6376ef2153ACd98df942B5B701dAc279",
    [ChainId.OPTIMISM]: "0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97",
    [ChainId.OPTIMISM_KOVAN]: "0x5951C53cd09D8aCC1ad1ce222F2c0E08434dC4C3",
    [ChainId.FANTOM]: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590",
    [ChainId.FANTOM_TESTNET]: "0x8678A0cF61896CdAF4e3cD60c57D23d22B519B80",
}

// LPStaking.sol contract addresses (This does emissions)
export const FARM_ADDRESS: { [chainId: number]: string } = {
    ...TEST.FARM_ADDRESS,
    [ChainId.ETHEREUM]: "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b",
    [ChainId.RINKEBY]: "0x94489ACccC9C07421BC3F21466eEA37Ea1b42b8f",
    [ChainId.BSC]: "0x3052A0F6ab15b4AE1df39962d5DdEFacA86DaB47",
    [ChainId.BSC_TESTNET]: "0x9C466a232d7Ae4B0b0dAF63963a5CEb43749b040",
    [ChainId.AVALANCHE]: "0x8731d54E9D02c286767d56ac03e8037C07e01e98",
    [ChainId.FUJI]: "0x2FA56F356E8aA622225a7412FbFaa741E3eFCfAF",
    [ChainId.POLYGON]: "0x8731d54E9D02c286767d56ac03e8037C07e01e98",
    [ChainId.MUMBAI]: "0x0508125Ce95E12F4c52E8C368C8B628A01727807",
    [ChainId.ARBITRUM]: "0xeA8DfEE1898a7e0a59f7527F076106d7e44c2176",
    [ChainId.ARBITRUM_RINKEBY]: "0x924dFf57071466207cde94915f4c39f87154988D",
    [ChainId.OPTIMISM]: "0x4a364f8c717cAAD9A442737Eb7b8A55cc6cf18D8",
    [ChainId.OPTIMISM_KOVAN]: "0x03e047c0D17c497fCfb5fEe3594f0610af5de36F",
    [ChainId.FANTOM]: "0x224D8Fd7aB6AD4c6eb4611Ce56EF35Dec2277F03",
    [ChainId.FANTOM_TESTNET]: "0x60caC60d0Ee864925Bb44c30805F7fC850f5a8aE",
}

export const BONDING_ADDRESS: { [tokenSymbol in TokenSymbol]?: { [chainId: number]: string } } = {
    [TokenSymbol.USDC]: {
        [ChainId.ETHEREUM]: "0x808d7c71ad2ba3FA531b068a2417C63106BC0949",
        [ChainId.RINKEBY]: "0xc3cF23e2B8Aa6CfA4Fe21120B3186B895880F49C",
        [ChainId.BSC]: "0x0000000000000000000000000000000000000000",
        [ChainId.BSC_TESTNET]: "0x0000000000000000000000000000000000000000",
        [ChainId.AVALANCHE]: "0xAF54BE5B6eEc24d6BFACf1cce4eaF680A8239398",
        [ChainId.FUJI]: "0xd853b406545Eb26651d6Ae787E13bBf882719d82",
        [ChainId.POLYGON]: "0xAF54BE5B6eEc24d6BFACf1cce4eaF680A8239398",
        [ChainId.MUMBAI]: "0x57947eD0E819FCEeA5f70a0509f8A36aC816761F",
        [ChainId.ARBITRUM]: "0x5c1a97C144A97E9b370F833a06c70Ca8F2f30DE5",
        [ChainId.ARBITRUM_RINKEBY]: "0x6d9A51Af441FaF0fd6cb5670FC2339a21F80178D",
        [ChainId.OPTIMISM]: "0x693604E757AC7e2c4A8263594A18d69c35562341",
        [ChainId.OPTIMISM_KOVAN]: "0x3ca5C7b5c881b9D415DDe42c6e9B99d550BB1690",
        [ChainId.FANTOM]: "0xAF54BE5B6eEc24d6BFACf1cce4eaF680A8239398",
        [ChainId.FANTOM_TESTNET]: "0x190feB376E16acA83ceeC5dE15302B33f540966E",
    },
    [TokenSymbol.USDT]: {
        [ChainId.ETHEREUM]: "0x224D8Fd7aB6AD4c6eb4611Ce56EF35Dec2277F03",
        [ChainId.RINKEBY]: "0xC94CC099eAB9aaf643a71446B6AFaba03048dc0C",
        [ChainId.BSC]: "0x06Eb48763f117c7Be887296CDcdfad2E4092739C",
        [ChainId.BSC_TESTNET]: "0x82e5fE208594ADde6B982D557636994010980E77",
        [ChainId.AVALANCHE]: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
        [ChainId.FUJI]: "0x8B75f5663628310478C14EF3E0DeA8A2B5900d3a",
        [ChainId.POLYGON]: "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
        [ChainId.MUMBAI]: "0xb867307413efB9ecB4Ea57a90C5C496893567Ce3",
        [ChainId.ARBITRUM]: "0x3052A0F6ab15b4AE1df39962d5DdEFacA86DaB47",
        [ChainId.ARBITRUM_RINKEBY]: "0x553AC1274Ef8a090713C154115BA83ECA98d4eF9",
        [ChainId.OPTIMISM]: "0x0000000000000000000000000000000000000000",
        [ChainId.FANTOM]: "0x0000000000000000000000000000000000000000",
    },
    [TokenSymbol.BUSD]: {
        [ChainId.BSC]: "0xE3B53AF74a4BF62Ae5511055290838050bf764Df",
        [ChainId.BSC_TESTNET]: "0x920c0d03e54B7DcFd3d14D4B03E75ff27e4497B6",
    },
}

export const AUCTION_ADDRESS: { [chainId in ChainId]?: string } = {
    [ChainId.ETHEREUM]: "0x45A01E4e04F14f7A4a6702c74187c5F6222033cd",
    [ChainId.RINKEBY]: "0x879C7f727F452b644D7220FabFB3C77a767bBC43",
}

export const WHITELIST_AUCTION_ADDRESS: { [chainId in ChainId]?: string } = {
    [ChainId.ETHEREUM]: "0x4dFCAD285eF39FeD84e77eDf1B7DBC442565E55e",
    [ChainId.RINKEBY]: "0x4C2B2292B37fb5f9B1e992AaDE93d6C06d8140F5",
}

export const VESTG_ADDRESS: { [chainId: number]: string } = {
    ...TEST.VESTG_ADDRESS,
    [ChainId.ETHEREUM]: "0x0e42acBD23FAee03249DAFF896b78d7e79fBD58E",
    [ChainId.RINKEBY]: "0x037c1b3f6b2A58C831a4107baA022f08997464C4",
    [ChainId.BSC]: "0xD4888870C8686c748232719051b677791dBDa26D",
    [ChainId.BSC_TESTNET]: "0x3194087A3333bD7Eb0F7F4B70217141012323F8b",
    [ChainId.AVALANCHE]: "0xCa0F57D295bbcE554DA2c07b005b7d6565a58fCE",
    [ChainId.FUJI]: "0x526E11eded34Ec7cd238E63E6F025d17660E496B",
    [ChainId.POLYGON]: "0x3AB2DA31bBD886A7eDF68a6b60D3CDe657D3A15D",
    [ChainId.MUMBAI]: "0x526E11eded34Ec7cd238E63E6F025d17660E496B",
    [ChainId.ARBITRUM]: "0xfBd849E6007f9BC3CC2D6Eb159c045B8dc660268",
    [ChainId.ARBITRUM_RINKEBY]: "0x4AE5de7545C729d64e9F69545d338370C190DCbD",
    [ChainId.OPTIMISM]: "0x43d2761ed16C89A2C4342e2B16A3C61Ccf88f05B",
    [ChainId.OPTIMISM_KOVAN]: "0x45698a7432C2B4B738104B3B48a644406b8ce304",
    [ChainId.FANTOM]: "0x933421675cDC8c280e5F21f0e061E77849293dba",
    [ChainId.FANTOM_TESTNET]: "0x8A9061257752Fd09232d0Ae26426D5be3Ffa80CE",
}

export const SVESTG_ADDRESS: { [chainId: number]: string } = {
    [ChainId.ETHEREUM]: "0x9485DbDa44B279311e3eEe374CED60b5364A97d9",
    [ChainId.RINKEBY]: "0xed8d406C395d88A139C352B5F308cffAc860De32",
    [ChainId.RINKEBY_SANDBOX]: "0x3f86ACfB36D30CbbFcd97cE5d4E6CFB559952216",
}

// Stargate Router Pools - This address is the address of the LP token
export const POOL_ADDRESS: { [tokenSymbol in TokenSymbol]: { [chainId: number]: string } } = {
    [TokenSymbol.BUSD]: {
        ...TEST.POOL_ADDRESS.BUSD,
        [ChainId.ETHEREUM]: "0x0000000000000000000000000000000000000000",
        [ChainId.RINKEBY]: "0x0000000000000000000000000000000000000000",
        [ChainId.BSC]: "0x98a5737749490856b401DB5Dc27F522fC314A4e1",
        [ChainId.BSC_TESTNET]: "0x8e1C38a014b7699ed288b9579F56ffe7Fc8C900a",
        [ChainId.AVALANCHE]: "0x0000000000000000000000000000000000000000",
        [ChainId.FUJI]: "0x0000000000000000000000000000000000000000",
        [ChainId.POLYGON]: "0x0000000000000000000000000000000000000000",
        [ChainId.MUMBAI]: "0x0000000000000000000000000000000000000000",
        [ChainId.ARBITRUM]: "0x0000000000000000000000000000000000000000",
        [ChainId.ARBITRUM_RINKEBY]: "0x0000000000000000000000000000000000000000",
        [ChainId.OPTIMISM]: "0x0000000000000000000000000000000000000000",
        [ChainId.OPTIMISM_KOVAN]: "0x0000000000000000000000000000000000000000",
        [ChainId.FANTOM]: "0x0000000000000000000000000000000000000000",
        [ChainId.FANTOM_TESTNET]: "0x0000000000000000000000000000000000000000",
    },
    [TokenSymbol.DAI]: {
        ...TEST.POOL_ADDRESS.DAI,
        [ChainId.ETHEREUM]: "0x0000000000000000000000000000000000000000",
        [ChainId.RINKEBY]: "0x0000000000000000000000000000000000000000",
        [ChainId.BSC]: "0x0000000000000000000000000000000000000000",
        [ChainId.BSC_TESTNET]: "0x0000000000000000000000000000000000000000",
        [ChainId.AVALANCHE]: "0x0000000000000000000000000000000000000000",
        [ChainId.FUJI]: "0x0000000000000000000000000000000000000000",
        [ChainId.POLYGON]: "0x0000000000000000000000000000000000000000",
        [ChainId.MUMBAI]: "0x0000000000000000000000000000000000000000",
        [ChainId.ARBITRUM]: "0x0000000000000000000000000000000000000000",
        [ChainId.ARBITRUM_RINKEBY]: "0x0000000000000000000000000000000000000000",
        [ChainId.OPTIMISM]: "0x0000000000000000000000000000000000000000",
        [ChainId.OPTIMISM_KOVAN]: "0x0000000000000000000000000000000000000000",
        [ChainId.FANTOM]: "0x0000000000000000000000000000000000000000",
        [ChainId.FANTOM_TESTNET]: "0x0000000000000000000000000000000000000000",
    },
    [TokenSymbol.MIM]: {
        ...TEST.POOL_ADDRESS.MIM,
        [ChainId.ETHEREUM]: "0x0000000000000000000000000000000000000000",
        [ChainId.RINKEBY]: "0x0000000000000000000000000000000000000000",
        [ChainId.BSC]: "0x0000000000000000000000000000000000000000",
        [ChainId.BSC_TESTNET]: "0x0000000000000000000000000000000000000000",
        [ChainId.AVALANCHE]: "0x0000000000000000000000000000000000000000",
        [ChainId.FUJI]: "0x0000000000000000000000000000000000000000",
        [ChainId.POLYGON]: "0x0000000000000000000000000000000000000000",
        [ChainId.MUMBAI]: "0x0000000000000000000000000000000000000000",
        [ChainId.ARBITRUM]: "0x0000000000000000000000000000000000000000",
        [ChainId.ARBITRUM_RINKEBY]: "0x0000000000000000000000000000000000000000",
        [ChainId.OPTIMISM]: "0x0000000000000000000000000000000000000000",
        [ChainId.OPTIMISM_KOVAN]: "0x0000000000000000000000000000000000000000",
        [ChainId.FANTOM]: "0x0000000000000000000000000000000000000000",
        [ChainId.FANTOM_TESTNET]: "0x0000000000000000000000000000000000000000",
    },
    // S*USDC
    [TokenSymbol.USDC]: {
        ...TEST.POOL_ADDRESS.USDC,
        [ChainId.ETHEREUM]: "0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56",
        [ChainId.RINKEBY]: "0x6cAe2C30f4aa1Cdf402E776ab39fbe8A2c2755Ab",
        [ChainId.BSC]: "0x0000000000000000000000000000000000000000",
        [ChainId.BSC_TESTNET]: "0x0000000000000000000000000000000000000000",
        [ChainId.AVALANCHE]: "0x1205f31718499dBf1fCa446663B532Ef87481fe1",
        [ChainId.FUJI]: "0xF14B09e2524855460d3a2cF7e682b8E8b1bA0F35",
        [ChainId.POLYGON]: "0x1205f31718499dBf1fCa446663B532Ef87481fe1",
        [ChainId.MUMBAI]: "0xFC0fd6425c6FFE98e4eAe17443C10F5DdBDAAEC3",
        [ChainId.ARBITRUM]: "0x892785f33CdeE22A30AEF750F285E18c18040c3e",
        [ChainId.ARBITRUM_RINKEBY]: "0xEf72aF1D2207CC1D7655d7e7Bc8D426Fe74fE1b8",
        [ChainId.OPTIMISM]: "0xDecC0c09c3B5f6e92EF4184125D5648a66E35298",
        [ChainId.OPTIMISM_KOVAN]: "0x5f8Cb7a8ce93A295EF16bF9Da748eBB4C6ee73B1",
        [ChainId.FANTOM]: "0x12edeA9cd262006cC3C4E77c90d2CD2DD4b1eb97",
        [ChainId.FANTOM_TESTNET]: "0x865623447baaba246d2e577032b4546945A904E2",
    },
    // S*USDT
    [TokenSymbol.USDT]: {
        ...TEST.POOL_ADDRESS.USDT,
        [ChainId.ETHEREUM]: "0x38EA452219524Bb87e18dE1C24D3bB59510BD783",
        [ChainId.RINKEBY]: "0x917D420AED5dC8737896337EC4201413221f2fd5",
        [ChainId.BSC]: "0x9aA83081AA06AF7208Dcc7A4cB72C94d057D2cda",
        [ChainId.BSC_TESTNET]: "0x76f5D2D38c1e3CeCeFFcc6ccD0A4FC541f995c5b",
        [ChainId.AVALANCHE]: "0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c",
        [ChainId.FUJI]: "0x024511D18C8932523dD91770ec015be365806D4E",
        [ChainId.POLYGON]: "0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c",
        [ChainId.MUMBAI]: "0xf7a9E29651a697d28551466e14bc3158A8d2A5B1",
        [ChainId.ARBITRUM]: "0xB6CfcF89a7B22988bfC96632aC2A9D6daB60d641",
        [ChainId.ARBITRUM_RINKEBY]: "0xC3505ef30B9C9eAAB04094fb58D92C7AF337e1fb",
        [ChainId.OPTIMISM]: "0x0000000000000000000000000000000000000000",
        [ChainId.OPTIMISM_KOVAN]: "0x0000000000000000000000000000000000000000",
        [ChainId.FANTOM]: "0x0000000000000000000000000000000000000000",
        [ChainId.FANTOM_TESTNET]: "0x0000000000000000000000000000000000000000",
    },
    [TokenSymbol.STG]: {},
    [TokenSymbol.SLP]: {},
    [TokenSymbol.aSTG]: {},
    [TokenSymbol.veSTG]: {},
    [TokenSymbol.sveSTG]: {},
    [TokenSymbol.pSTG]: {},
    [TokenSymbol.aaSTG]: {},
    [TokenSymbol.WETH]: {
        ...TEST.POOL_ADDRESS.WETH,
        [ChainId.RINKEBY]: "0xB0FC00981e11284869E6AAA17A0Ff1EF2a2A3999",
        [ChainId.ARBITRUM_RINKEBY]: "0x0d2536D41825C5e1276CB3913894bF631A578C7B",
        [ChainId.OPTIMISM_KOVAN]: "0xf5Bd0C493e00A30d3Db2e5e6BA27D72cdCfE060F",
    },
}

export const BUSD_ADDRESS: { [chainId: number]: string } = {
    ...TEST.BUSD_ADDRESS,
    [ChainId.ETHEREUM]: "0x0000000000000000000000000000000000000000",
    [ChainId.RINKEBY]: "0x0000000000000000000000000000000000000000",
    [ChainId.BSC]: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    [ChainId.BSC_TESTNET]: "0x1010Bb1b9Dff29e6233E7947e045e0ba58f6E92e",
    [ChainId.AVALANCHE]: "0x0000000000000000000000000000000000000000",
    [ChainId.FUJI]: "0x0000000000000000000000000000000000000000",
    [ChainId.POLYGON]: "0x0000000000000000000000000000000000000000",
    [ChainId.MUMBAI]: "0x0000000000000000000000000000000000000000",
    [ChainId.ARBITRUM]: "0x0000000000000000000000000000000000000000",
    [ChainId.ARBITRUM_RINKEBY]: "0x0000000000000000000000000000000000000000",
    [ChainId.OPTIMISM]: "0x0000000000000000000000000000000000000000",
    [ChainId.OPTIMISM_KOVAN]: "0x0000000000000000000000000000000000000000",
    [ChainId.FANTOM]: "0x0000000000000000000000000000000000000000",
    [ChainId.FANTOM_TESTNET]: "0x0000000000000000000000000000000000000000",
}

export const DAI_ADDRESS: { [chainId: number]: string } = {
    ...TEST.DAI_ADDRESS,
    [ChainId.ETHEREUM]: "0x0000000000000000000000000000000000000000",
    [ChainId.RINKEBY]: "0xe57b098Cb64491f23E32Ab7a01Ae8B7742766148",
    [ChainId.BSC]: "0x0000000000000000000000000000000000000000",
    [ChainId.BSC_TESTNET]: "0x4A1e7C6f4AcB483f301cEAa9027d62fa4B4D38b4",
    [ChainId.AVALANCHE]: "0x0000000000000000000000000000000000000000",
    [ChainId.FUJI]: "0x0a55363a118312B806E47C2390b65EDA6E84F7AB",
    [ChainId.POLYGON]: "0x0000000000000000000000000000000000000000",
    [ChainId.MUMBAI]: "0xD1e8Ee3f732a4768Aa63dF066222268206BA4C16",
    [ChainId.ARBITRUM]: "0x0000000000000000000000000000000000000000",
    [ChainId.ARBITRUM_RINKEBY]: "0x3E72b2A09b89c3a74F14f7872874dAa640BeA01B",
    [ChainId.OPTIMISM]: "0x0000000000000000000000000000000000000000",
    [ChainId.OPTIMISM_KOVAN]: "0x21dC30551BADcd502e9Cb8704035A3a0bd115Cc8",
    [ChainId.FANTOM]: "0x0000000000000000000000000000000000000000",
    [ChainId.FANTOM_TESTNET]: "0xE027Bfb00C2C89B3627C81073931d78c41636058",
}

export const MIM_ADDRESS: { [chainId: number]: string } = {
    ...TEST.MIM_ADDRESS,
    [ChainId.ETHEREUM]: "0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3",
    [ChainId.RINKEBY]: "0x0000000000000000000000000000000000000000",
    [ChainId.BSC]: "0xfE19F0B51438fd612f6FD59C1dbB3eA319f433Ba",
    [ChainId.BSC_TESTNET]: "0x0000000000000000000000000000000000000000",
    [ChainId.AVALANCHE]: "0x130966628846BFd36ff31a822705796e8cb8C18D",
    [ChainId.FUJI]: "0x0000000000000000000000000000000000000000",
    [ChainId.POLYGON]: "0x0000000000000000000000000000000000000000",
    [ChainId.MUMBAI]: "0x0000000000000000000000000000000000000000",
    [ChainId.ARBITRUM]: "0x0000000000000000000000000000000000000000",
    [ChainId.ARBITRUM_RINKEBY]: "0x0000000000000000000000000000000000000000",
    [ChainId.OPTIMISM]: "0x0000000000000000000000000000000000000000",
    [ChainId.OPTIMISM_KOVAN]: "0x0000000000000000000000000000000000000000",
    [ChainId.FANTOM]: "0x82f0B8B456c1A451378467398982d4834b6829c1",
    [ChainId.FANTOM_TESTNET]: "0x0000000000000000000000000000000000000000",
}

export const USDC_ADDRESS: { [chainId: number]: string } = {
    ...TEST.USDC_ADDRESS,
    [ChainId.ETHEREUM]: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    [ChainId.RINKEBY]: "0x1717A0D5C8705EE89A8aD6E808268D6A826C97A4",
    [ChainId.BSC]: "0x0000000000000000000000000000000000000000",
    [ChainId.BSC_TESTNET]: "0x0000000000000000000000000000000000000000",
    [ChainId.AVALANCHE]: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    [ChainId.FUJI]: "0x4A0D1092E9df255cf95D72834Ea9255132782318",
    [ChainId.POLYGON]: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    [ChainId.MUMBAI]: "0x742DfA5Aa70a8212857966D491D67B09Ce7D6ec7",
    [ChainId.ARBITRUM]: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
    [ChainId.ARBITRUM_RINKEBY]: "0x1EA8Fb2F671620767f41559b663b86B1365BBc3d",
    [ChainId.OPTIMISM]: "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
    [ChainId.OPTIMISM_KOVAN]: "0x567f39d9e6d02078F357658f498F80eF087059aa",
    [ChainId.FANTOM]: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
    [ChainId.FANTOM_TESTNET]: "0x076488D244A73DA4Fa843f5A8Cd91F655CA81a1e",
}

export const USDT_ADDRESS: { [chainId: number]: string } = {
    ...TEST.USDT_ADDRESS,
    [ChainId.ETHEREUM]: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    [ChainId.RINKEBY]: "0x5c165DF844Fe7f4a950cCd2113ea877A0E1D0818",
    [ChainId.BSC]: "0x55d398326f99059fF775485246999027B3197955",
    [ChainId.BSC_TESTNET]: "0xF49E250aEB5abDf660d643583AdFd0be41464EfD",
    [ChainId.AVALANCHE]: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
    [ChainId.FUJI]: "0x134Dc38AE8C853D1aa2103d5047591acDAA16682",
    [ChainId.POLYGON]: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    [ChainId.MUMBAI]: "0x6Fc340be8e378c2fF56476409eF48dA9a3B781a0",
    [ChainId.ARBITRUM]: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    [ChainId.ARBITRUM_RINKEBY]: "0x385182a81b05Be437416e100F4b7fAB2C2e9a8Ed",
    [ChainId.OPTIMISM]: "0x0000000000000000000000000000000000000000",
    [ChainId.OPTIMISM_KOVAN]: "0xc57C46d47FD79596F2B2Af83291392229313D095",
    [ChainId.FANTOM]: "0x0000000000000000000000000000000000000000",
    [ChainId.FANTOM_TESTNET]: "0x4a4129978218e7bac738D7B841D3F382D6EFbeE9",
}

export const WETH_ADDRESS: { [chainId: number]: string } = {
    ...TEST.WETH_ADDRESS,
    [ChainId.ETHEREUM]: "0x0000000000000000000000000000000000000000",
    [ChainId.RINKEBY]: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
    [ChainId.BSC]: "0x0000000000000000000000000000000000000000",
    [ChainId.BSC_TESTNET]: "0x0000000000000000000000000000000000000000",
    [ChainId.AVALANCHE]: "0x0000000000000000000000000000000000000000",
    [ChainId.FUJI]: "0x0000000000000000000000000000000000000000",
    [ChainId.POLYGON]: "0x0000000000000000000000000000000000000000",
    [ChainId.MUMBAI]: "0x0000000000000000000000000000000000000000",
    [ChainId.ARBITRUM]: "0x0000000000000000000000000000000000000000",
    [ChainId.ARBITRUM_RINKEBY]: "0xbC2b378C03f86BBC4523B05e1343751d635b0FBA",
    [ChainId.OPTIMISM]: "0x0000000000000000000000000000000000000000",
    [ChainId.OPTIMISM_KOVAN]: "0xF8Ac33Bf8Ebf07722253514afAE0a0db73b9F033",
    [ChainId.FANTOM]: "0x0000000000000000000000000000000000000000",
    [ChainId.FANTOM_TESTNET]: "0x0000000000000000000000000000000000000000",
}

export const STARGATE_ETH_VAULT_ADDRESS: { [chainId: number]: string } = {
    ...TEST.STARGATE_ETH_VAULT_ADDRESS,
    [ChainId.ETHEREUM]: '',
    [ChainId.RINKEBY]: '0x6AD87f552E678B9358F102B93638377aB2a6107d',
    [ChainId.ARBITRUM]: '',
    [ChainId.ARBITRUM_RINKEBY]: '0x7279cbFcE0420d7Eb9C64F8C0d4454E4801baaC0',
    [ChainId.OPTIMISM]: '',
    [ChainId.OPTIMISM_KOVAN]: '0x54ab08953765079890B7d1ECE2701d5B8D5fa384',
}

export const USDD_ADDRESS: { [chainId: number]: string } = {
    ...TEST.USDD_ADDRESS,
    [ChainId.ETHEREUM]: '0x0C10bF8FcB7Bf5412187A595ab97a3609160b5c6',
    [ChainId.RINKEBY]: '0x991cd1ff41dA564E4c4861be43E656345f2E649a',
    [ChainId.BSC]: '0xd17479997F34dd9156Deef8F95A52D81D265be9c',
    [ChainId.BSC_TESTNET]: '0x8467C2439BC4C593aC8AAf0df4879b89F7Ab8a61',
}