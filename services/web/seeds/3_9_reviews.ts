import Review from '../src/models/review'

export const data = [
    {
        status: 'active'
    }
]

export const seed = async function (knex): Promise<any> {
    console.log('[BlockHub] Seeding reviews')

    await knex('reviews').del()

    await Review
        .query(knex)
        .upsertGraph(data)
}
