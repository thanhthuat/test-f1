import { IComponent } from "@components/dynamic-rendering.interfaces";

const mockResponse: IComponent = {
  type: "MainLayout",
  data: {
    id: "4400936b-6158-1354-9dc8-a04c57e1af46",
    fluid: true,
    //
    children: [
      {
        type: "BlockMainWithTab",
        data: {
          id: "26b3f355-2f65-4aae-b9fd-609779f24fdd212",
          title: "A custom title",
          headline: "A random Headline",
          copy: "A really long text....",
          image: {
            url: "https://i.stack.imgur.com/y9DpT.jpg",
          },
          listNew:[
              {
                      id: "4400936b-6158-4943-9dc8-a04c57e1af46121",
                      title: "Title",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      item: {},
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                    {
                      id: "4400936b-6158-4943-9dc8-a04c57e121af461",
                      title: "Title",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      item: {},
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                    {
                      id: "4400936b-6158-4943-9dc8-a0412c57e1af461",
                      title: "Title",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      item: {},
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                    
          ],
          children: [
            {
              type: "CardRowMain",
              data: {
                id: "26b3f355-2f65-4aae-b9fd-609779f24fdd212",
                title: "A custom title",
                headline: "A random Headline",
                copy: "A really long text....",
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
            },
            {
              type: "CardTextTitle",
              data: {
                id: "4400936b-6158-9087-9dc8-a04c57e1af46121x2121213",
                title: "CardTextTitle add",
                className: "btn-primary",
                action: {
                  type: "call",
                  url: "https://pokeapi.co/api/v2/",
                },
              },
            },
            {
              type: "TabContainer",
              data: {
                id: "4400936b-6158-4943-9dc8-a04c57e1af461",
                title: "Title",
                headline: "This can be anything",
                copy: "A really long text....",
                item: {},
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
                tabTitle: ["LastNews", "News"],
                datanew: {
                  LastNews: [
                    {
                      id: "4400936b-6158-4943-9dc8-a04c57e1af46121",
                      title: "Title",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      item: {},
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                    {
                      id: "4400936b-6158-4943-9dc8-a04c57e121af461",
                      title: "Title",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      item: {},
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                    {
                      id: "4400936b-6158-4943-9dc8-a0412c57e1af461",
                      title: "Title",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      item: {},
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                    {
                      id: "4400936b-6158-4943-9dc8-a04121c57e1af461",
                      title: "Title",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      item: {},
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                     {
                      id: "4400936b-6158-4943-9dc8-a0412c57e1af461",
                      title: "Title",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      item: {},
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                    {
                      id: "4400936b-6158-4943-9dc8-a04121c57e1af461",
                      title: "Title",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      item: {},
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                  ],
                  News: [
                    {
                      id: "4400936b-6158-4943-9dc8-a04c57e19af4611",
                      title: "Title New 2222222",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      item: {},
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                    {
                      id: "4400936b-6158-4943-9dc8-a04c5776e121af461",
                      title: "Title 121344",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      item: {},
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                    {
                      id: "4400936b-6158-4943-9dc8-a041u72c57e1af461",
                      title: "Title",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      item: {},
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                    {
                      id: "4400936b-6158-4943-9dc8-a0412166c57e1af461",
                      title: "Title",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      item: {},
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                     {
                      id: "4400936b-6158-4943-9dc8-a0412c57e1af461",
                      title: "Title",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      item: {},
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                    {
                      id: "4400936b-6158-4943-9dc8-a04121c57e1af461",
                      title: "Title",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      item: {},
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                  ],
                },

                children: [
                  {
                    type: "CardTextTitle",
                    data: {
                      id: "4400936b-6158-4943-9dc8-a04c57e1af46y7",
                      title: "Title",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      items: {
                        title: "string",
                        urlImg: "https://i.stack.imgur.com/y9DpT.jpg",
                        description: "string description",
                        author: "string Jonh",
                        createDay: new Date(),
                        publishDay: new Date(),
                        className: " container2", // enum list
                        id: "4400936b-6158-string", // call api detail
                        slug: "string-this-is article", // change params url ,
                        overview: " string-this-is article___ overview",
                      },
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                  },
                  {
                    type: "BoxCard",
                    data: {
                      id: "4400936b-6158-9087-9dc8-a04c57e1af46121x212",
                      title: "CardTextTitle example",
                      className: "btn-primary",
                      action: {
                        type: "call",
                        url: "https://pokeapi.co/api/v2/",
                      },
                    },
                  },
                  {
                    type: "CardTextTitle",
                    data: {
                      id: "4400936b-6158-4943-9dc8-a04c57e1af46y7",
                      title: "Title",
                      headline: "This can be anything",
                      copy: "A really long text....",
                      image: {
                        url: "https://i.stack.imgur.com/y9DpT.jpg",
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        type: "BoxCard",
        data: {
          id: "26b3f355-2f65-4aae-b9fd-609779f24fdd212",
          title: "A custom title",
          headline: "A random Headline",
          copy: "A really long text....",
          image: {
            url: "https://i.stack.imgur.com/y9DpT.jpg",
          },
          children: [
            {
              type: "BoxCard",
              data: {
                id: "26b3f355-2f65-4aae-b9fd-609779f24fdd212",
                title: "A custom title",
                headline: "A random Headline",
                copy: "A really long text....",
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
            },
            {
              type: "CardTextTitle",
              data: {
                id: "4400936b-6158-9087-9dc8-a04c57e1af46121x2121213",
                title: "CardTextTitle add",
                className: "btn-primary",
                action: {
                  type: "call",
                  url: "https://pokeapi.co/api/v2/",
                },
              },
            },
            {
              type: "BoxCard",
              data: {
                id: "26b3f355-2f121265-4aae-b9fd-609779f24fdd12122",
                title: "A custom title",
                headline: "A random Headline",
                copy: "A really long text....",
                action: {
                  type: "call",
                  url: "https://pokeapi.co/api/v2/",
                },
              },
            },
          ],
        },
      },
      {
        type: "BoxCard",
        data: {
          id: "4400936b-6158-4943-9dc8-a04c57e1af46121",
          ititle: "Title",
          headlne: "This can be anything",
          copy: "A really long text....",
          image: {
            url: "https://i.stack.imgur.com/y9DpT.jpg",
          },
          children: [
            {
              type: "CardTextTitle",
              data: {
                id: "4400936b-6158-9087-9dc8-a04c57e1af46121x212",
                title: "CardTextTitle example",
                className: "btn-primary",
                action: {
                  type: "call",
                  url: "https://pokeapi.co/api/v2/",
                },
              },
            },
            {
              type: "CardTextTitle",
              data: {
                id: "4400936b-6158-4943-9dc8-a04c57e1af46yi",
                title: "Title",
                headline: "This can be anything",
                copy: "A really long text....",
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
            },
          ],
        },
      },

      {
        type: "BoxCard",
        data: {
          id: "4400936b-6158-4943-9dc8-a04c57e1af46y7",
          title: "Title",
          headline: "This can be anything",
          copy: "A really long text....",
          image: {
            url: "https://i.stack.imgur.com/y9DpT.jpg",
          },
        },
      },

      {
        type: "Container",
        data: {
          id: "d76e3a5f-01ad-46f6-a45d-3ad9699ecf99",
          embeddedView: {
            type: "CardTextTitle",
            data: {
              id: "26b3f355-2f65-4aae-b9fd-123",
              label: "Input",
              type: "password",
              placeholder: "Password",
              isRequired: false,
              minCharactersAllowed: 1,
              maxCharactersAllowed: 100,
              validations: [
                {
                  regexType: "eightOrMoreCharacters",
                  regexErrorCopy: "Use 8 or more characters",
                },
              ],
            },
          },
        },
      },
      {
        type: "CarouselWeather",
        data: {
          id: "4400936b-6158-4943-9dc8-a04c57e1af467y65",
          title: "Title",
          headline: "This can be anything",
          copy: "A really long text....",
          image: {
            url: "https://i.stack.imgur.com/y9DpT.jpg",
          },
        },
      },
      // {
      //   type: "BlockContent",
      //   data: {
      //     id: "4400936b-6158-4943-9dc8-a04c57e1af46",
      //     title: "Title",
      //     headline: "This can be anything",
      //     copy: "A really long text....",
      //     image: {
      //       url: "https://i.stack.imgur.com/y9DpT.jpg",
      //     },
      //   },
      // },

      {
        type: "BlockContent",
        data: {
          id: "4400936b-6158-4943-9dc8-a04c57e1af461",
          title: "Title",
          headline: "This can be anything",
          copy: "A really long text....",
          item: {},
          image: {
            url: "https://i.stack.imgur.com/y9DpT.jpg",
          },
          children: [
            {
              type: "CardTextTitle",
              data: {
                id: "4400936b-6158-4943-9dc8-a04c57e1af46y7",
                title: "Title",
                headline: "This can be anything",
                copy: "A really long text....",
                items: {
                  title: "string",
                  urlImg: "https://i.stack.imgur.com/y9DpT.jpg",
                  description: "string description",
                  author: "string Jonh",
                  createDay: new Date(),
                  publishDay: new Date(),
                  className: " container2", // enum list
                  id: "4400936b-6158-string", // call api detail
                  slug: "string-this-is article", // change params url ,
                  overview: " string-this-is article___ overview",
                },
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
            },
            {
              type: "BoxCard",
              data: {
                id: "4400936b-6158-9087-9dc8-a04c57e1af46121x212",
                title: "CardTextTitle example",
                className: "btn-primary",
                action: {
                  type: "call",
                  url: "https://pokeapi.co/api/v2/",
                },
              },
            },
            {
              type: "CardTextTitle",
              data: {
                id: "4400936b-6158-4943-9dc8-a04c57e1af46y7",
                title: "Title",
                headline: "This can be anything",
                copy: "A really long text....",
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
            },
          ],
        },
      },
      {
        type: "TabContainer",
        data: {
          id: "4400936b-6158-4943-9dc8-a04c57e1af461",
          title: "Title",
          headline: "This can be anything",
          copy: "A really long text....",
          item: {},
          image: {
            url: "https://i.stack.imgur.com/y9DpT.jpg",
          },
          tabTitle: ["LastNews", "News"],
          datanew: {
            LastNews: [
              {
                id: "4400936b-6158-4943-9dc8-a04c57e1af46121",
                title: "Title",
                headline: "This can be anything",
                copy: "A really long text....",
                item: {},
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
              {
                id: "4400936b-6158-4943-9dc8-a04c57e121af461",
                title: "Title",
                headline: "This can be anything",
                copy: "A really long text....",
                item: {},
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
              {
                id: "4400936b-6158-4943-9dc8-a0412c57e1af461",
                title: "Title",
                headline: "This can be anything",
                copy: "A really long text....",
                item: {},
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
              {
                id: "4400936b-6158-4943-9dc8-a04121c57e1af461",
                title: "Title",
                headline: "This can be anything",
                copy: "A really long text....",
                item: {},
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
            ],
            News: [
              {
                id: "4400936b-6158-4943-9dc8-a04c57e19af4611",
                title: "Title New 2222222",
                headline: "This can be anything",
                copy: "A really long text....",
                item: {},
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
              {
                id: "4400936b-6158-4943-9dc8-a04c5776e121af461",
                title: "Title 121344",
                headline: "This can be anything",
                copy: "A really long text....",
                item: {},
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
              {
                id: "4400936b-6158-4943-9dc8-a041u72c57e1af461",
                title: "Title",
                headline: "This can be anything",
                copy: "A really long text....",
                item: {},
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
              {
                id: "4400936b-6158-4943-9dc8-a0412166c57e1af461",
                title: "Title",
                headline: "This can be anything",
                copy: "A really long text....",
                item: {},
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
            ],
          },

          children: [
            {
              type: "CardTextTitle",
              data: {
                id: "4400936b-6158-4943-9dc8-a04c57e1af46y7",
                title: "Title",
                headline: "This can be anything",
                copy: "A really long text....",
                items: {
                  title: "string",
                  urlImg: "https://i.stack.imgur.com/y9DpT.jpg",
                  description: "string description",
                  author: "string Jonh",
                  createDay: new Date(),
                  publishDay: new Date(),
                  className: " container2", // enum list
                  id: "4400936b-6158-string", // call api detail
                  slug: "string-this-is article", // change params url ,
                  overview: " string-this-is article___ overview",
                },
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
            },
            {
              type: "BoxCard",
              data: {
                id: "4400936b-6158-9087-9dc8-a04c57e1af46121x212",
                title: "CardTextTitle example",
                className: "btn-primary",
                action: {
                  type: "call",
                  url: "https://pokeapi.co/api/v2/",
                },
              },
            },
            {
              type: "CardTextTitle",
              data: {
                id: "4400936b-6158-4943-9dc8-a04c57e1af46y7",
                title: "Title",
                headline: "This can be anything",
                copy: "A really long text....",
                image: {
                  url: "https://i.stack.imgur.com/y9DpT.jpg",
                },
              },
            },
          ],
        },
      },
    ],
  },
};

export default mockResponse;
