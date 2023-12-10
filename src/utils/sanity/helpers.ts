// const AllDocuments = S.documentTypeListItems()
//   .filter(item => ![
//     'site',
//     'header', 'footer',
//     'page',
//     'blogPg', 'blogCategory', 'article',
//     'clinicalStudy',
//   ].includes(item.getId()))

// const base = () => {
//   S.list()
//     .title('Content')
//     .items([
//       group('Site settings', [
//         singleton('Site', 'site').icon(BsInfoCircleFill),
//         singleton('Header', 'header').icon(RiLayoutTop2Line),
//         singleton('Footer', 'footer').icon(RiLayoutBottom2Line),
//       ]).icon(BsInfoCircleFill),

//       list('Pages', 'page'),

//       group('Blog', [
//         list('Blog pages', 'blogPg'),
//         list('Categories', 'blogCategory'),
//         list('Articles', 'article'),
//       ]).icon(FaPenAlt),

//       list('Clinical Studies', 'clinicalStudy'),

//       ...AllDocuments,
//     ])
//   }

// export default base
