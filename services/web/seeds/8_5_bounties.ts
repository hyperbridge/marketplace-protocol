import Bounty from '../src/models/bounty'

export const data = [
    {
        status: 'active'
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding bounties')

    await knex('profiles').del()

    await Bounty
        .query(knex)
        .upsertGraph(data)
}
