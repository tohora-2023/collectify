/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('details').del()
  await knex('details').insert([
    {
      id: 1,
      name: 'Dune',
      collection_id: 1,
      creator: 'Denis Villeneuve',
      genre: 'Sci-Fi',
      details:
        'Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource.',
      date_created: new Date(Date.now()),
      start_date: '7th May 2023',
      completion_date: '20th May 2023',
      image:
        'https://imageio.forbes.com/specials-images/imageserve/61116cea2313e8bae55a536a/-Dune-/0x0.jpg?format=jpg&width=960',
    },
    {
      id: 2,
      name: 'Crime and Punishment',
      collection_id: 2,
      creator: 'Fyodor Dostoevsky',
      genre: 'crime fiction',
      details:
        'Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve monthly installments during 1866.',
      date_created: new Date(Date.now()),
      start_date: '10th of April, 2023',
      completion_date: '6th of May',
      image:
        'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781593080815_p0_v2_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
    },
    {
      id: 3,
      name: 'Caress your soul',
      collection_id: 3,
      creator: 'Sticky Fingers',
      genre: 'indie',
      details: 'sick beats',
      date_created: new Date(Date.now()),
      start_date: '',
      completion_date: '',
      image:
        'https://upload.wikimedia.org/wikipedia/en/1/1e/Caress_Your_Soul_by_Sticky_Fingers.png',
    },
  ])
}
