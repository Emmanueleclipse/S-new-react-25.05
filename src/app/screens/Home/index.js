import React from 'react';
import { Link } from 'react-router-dom';
// import { useMutationUpdateBid } from '@mutations/patron/bids';
// import { useRequests } from '@queries/patron/requests';
// import { useDeliveries } from '@queries/patron/deliveries';
// import { useMutationDeleteRequest } from '@mutations/patron/requests';
// import { useMutationUpdateDelivery } from '@mutations/patron/deliveries';

const Home = () => {
  /*  ########## GET PATRON DELIVERY #######  */
  // const { data } = useDeliveries();

  /*  ########## UPDATE PATRON DELIVERY #######  */
  // const deliveryId = 10;
  // const action = 'some action;
  // const mutationUpdateDelivery = useMutationUpdateDelivery();

  // // const updatePatronDelivery = () => {
  // //   const dataBlob = new Blob([], {
  // //     type: 'application/json',
  // //   });
  // //   const formData = new FormData();
  // //   formData.append('jsondata', dataBlob);
  // //   formData.append('action', 'action');

  // //   const onSuccess = () => {};
  // //   const onError = () => {};
  // //   mutationUpdateDelivery.mutate(deliveryId, { onSuccess, onError });
  // // };

  /*  ########## GET PATRON REQUEST #######  */
  // const { data } = useRequests();

  /*  ########## DELETE PATRON REQUEST #######  */
  // const requestId = 10;
  // const mutationDeleteRequest = useMutationDeleteRequest();

  // // const deletePatronDelivery = () => {
  // //   const onSuccess = () => {};
  // //   const onError = () => {};
  // //   mutationDeleteRequest.mutate(requestId, { onSuccess, onError });
  // // };

  /*  ########## UPDATE PATRON BID #######  */
  // const bidNumber = 10;
  // const mutationUpdateBid = useMutationUpdateBid();

  // const dataBlob = new Blob([], {
  //   type: 'application/json',
  // });
  // const formData = new FormData();
  // formData.append('jsondata', dataBlob);
  // formData.append('action', 'some action');

  // // const updatePatronBid = () => {
  // //   const onSuccess = () => {};
  // //   const onError = () => {};
  // //   mutationUpdateBid.mutate({bidNumber, ...formData}, { onSuccess, onError });
  // // };

  return (
    <h2 className="h-screen flex items-center justify-center flex-col">
      <Link to="/home/patron/dashboard">Patron Dashboard</Link>
      <Link to="home/my-requests">My Requests</Link>
      <Link to="home/patron-requests">Patron Requests</Link>
    </h2>
  );
};

export default Home;
