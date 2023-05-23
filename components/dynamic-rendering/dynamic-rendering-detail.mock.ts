import { IComponent } from "@components/dynamic-rendering.interfaces";

const mockResponseDetail: IComponent = {
  type: "MainLayout",

  data: {
    id: "4400936b-6158-1354-9dc8-a04c57e1af46",
    className: "bg-detail-new",
    fluid: true,
    children: [
      {
        type: "DetailNew",
        data: {
          id: "4400936b-6158-1354-9dc8-a04c57e1af46",
          fluid: true,
        },
      },
    ],
  },
};

export default mockResponseDetail;
