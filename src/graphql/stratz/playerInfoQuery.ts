import { gql } from "urql";

export default gql`
query ($playerId: Long!) {
    player(steamAccountId: $playerId) {
        names(take: 1) {
            name
        }
        performance {
            position {
                roleMatchCount
                roleWinCount
                roleType
            }
        }
        leaderboardRanks {
            rank
            seasonRankId
        }
        lastMatchDate
        steamAccount {
            profileUri
            id
        }
        ranks {
            rank
            seasonRankId
        }
    }
}
`;
