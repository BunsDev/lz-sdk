import { ChainKey, ChainStage } from "../enums"

export const CHAIN_STAGE: { [chainKey in ChainKey]: ChainStage } = {
    [ChainKey.ETHEREUM]: ChainStage.MAINNET,
    [ChainKey.GOERLI]: ChainStage.TESTNET,
    [ChainKey.GOERLI_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.BSC]: ChainStage.MAINNET,
    [ChainKey.BSC_TESTNET]: ChainStage.TESTNET,
    [ChainKey.BSC_TESTNET_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.AVALANCHE]: ChainStage.MAINNET,
    [ChainKey.FUJI]: ChainStage.TESTNET,
    [ChainKey.FUJI_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.POLYGON]: ChainStage.MAINNET,
    [ChainKey.MUMBAI]: ChainStage.TESTNET,
    [ChainKey.MUMBAI_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.ARBITRUM]: ChainStage.MAINNET,
    [ChainKey.ARBITRUM_GOERLI]: ChainStage.TESTNET,
    [ChainKey.OPTIMISM]: ChainStage.MAINNET,
    [ChainKey.OPTIMISM_GOERLI]: ChainStage.TESTNET,
    [ChainKey.FANTOM]: ChainStage.MAINNET,
    [ChainKey.FANTOM_TESTNET]: ChainStage.TESTNET,
    [ChainKey.FANTOM_TESTNET_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.SWIMMER]: ChainStage.MAINNET,
    [ChainKey.SWIMMER_TESTNET]: ChainStage.TESTNET,
    [ChainKey.SWIMMER_TESTNET_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.DFK]: ChainStage.MAINNET,
    [ChainKey.DFK_TESTNET]: ChainStage.TESTNET,
    [ChainKey.DFK_TESTNET_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.HARMONY]: ChainStage.MAINNET,
    [ChainKey.HARMONY_TESTNET]: ChainStage.TESTNET,
    [ChainKey.HARMONY_TESTNET_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.HARMONY_1]: ChainStage.MAINNET,
    [ChainKey.HARMONY_1_TESTNET]: ChainStage.TESTNET,
    [ChainKey.ARCANA]: ChainStage.MAINNET,
    [ChainKey.ARCANA_TESTNET]: ChainStage.TESTNET,
    [ChainKey.ARCANA_TESTNET_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.DEXALOT]: ChainStage.MAINNET,
    [ChainKey.DEXALOT_TESTNET]: ChainStage.TESTNET,
    [ChainKey.DEXALOT_TESTNET_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.CASTLECRUSH]: ChainStage.MAINNET,
    [ChainKey.CASTLECRUSH_TESTNET]: ChainStage.TESTNET,
    [ChainKey.CASTLECRUSH_TESTNET_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.CELO]: ChainStage.MAINNET,
    [ChainKey.CELO_TESTNET]: ChainStage.TESTNET,
    [ChainKey.CELO_TESTNET_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.MOONBEAM]: ChainStage.MAINNET,
    [ChainKey.MOONBEAM_TESTNET]: ChainStage.TESTNET,
    [ChainKey.MOONBEAM_TESTNET_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.PORTAL]: ChainStage.MAINNET,
    [ChainKey.PORTAL_TESTNET]: ChainStage.TESTNET,
    [ChainKey.PORTAL_TESTNET_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.AURORA]: ChainStage.MAINNET,
    [ChainKey.AURORA_TESTNET]: ChainStage.TESTNET,
    [ChainKey.AURORA_TESTNET_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.INTAIN]: ChainStage.MAINNET,
    [ChainKey.INTAIN_TESTNET]: ChainStage.TESTNET,
    [ChainKey.INTAIN_TESTNET_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.BOBA]: ChainStage.MAINNET,
    [ChainKey.BOBA_TESTNET]: ChainStage.TESTNET,
    [ChainKey.BOBA_TESTNET_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.FUSE]: ChainStage.MAINNET,
    [ChainKey.FUSE_TESTNET]: ChainStage.TESTNET,
    [ChainKey.FUSE_TESTNET_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.GNOSIS]: ChainStage.MAINNET,
    [ChainKey.GNOSIS_TESTNET]: ChainStage.TESTNET,
    [ChainKey.GNOSIS_TESTNET_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.ASTAR]: ChainStage.MAINNET,
    [ChainKey.ASTAR_TESTNET]: ChainStage.TESTNET,
    [ChainKey.ASTAR_TESTNET_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.ZKSYNC]: ChainStage.MAINNET,
    [ChainKey.ZKSYNC_TESTNET]: ChainStage.TESTNET,
    [ChainKey.SHRAPNEL]: ChainStage.MAINNET,
    [ChainKey.SHRAPNEL_TESTNET]: ChainStage.TESTNET,
    [ChainKey.DOS]: ChainStage.MAINNET,
    [ChainKey.DOS_TESTNET]: ChainStage.TESTNET,
    [ChainKey.APTOS]: ChainStage.MAINNET,
    [ChainKey.APTOS_TESTNET]: ChainStage.TESTNET,
    [ChainKey.APTOS_TESTNET_SANDBOX]: ChainStage.TESTNET_SANDBOX,
    [ChainKey.KLAYTN]: ChainStage.MAINNET,
    [ChainKey.KLAYTN_TESTNET]: ChainStage.TESTNET,
    [ChainKey.METIS]: ChainStage.MAINNET,
    [ChainKey.METIS_TESTNET]: ChainStage.TESTNET,
    [ChainKey.COREDAO]: ChainStage.MAINNET,
    [ChainKey.COREDAO_TESTNET]: ChainStage.TESTNET,
}
