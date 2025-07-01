import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { Root } from './routes/Root/Root';
import { Face } from './components/Face/Face';
import { Cream } from './components/Face/ChildrenFace/Cream/Cream';
import { All } from './components/Face/ChildrenFace/All/All';
import { Serums } from './components/Face/ChildrenFace/Serums/Serums';
import { Gel } from './components/Face/ChildrenFace/Gel/Gel';
import { Oil } from './components/Face/ChildrenFace/Oil/Oil';
import { Emulsion } from './components/Face/ChildrenFace/Emulsion/Emulsion';
import { Provider } from 'react-redux';
import store from './app/store';
import { Bucket } from './components/Bucket/Bucket';
import { Like } from './components/Like/Like';
import { Body } from './components/Body/Body';
import { AllBody } from './components/Body/BodyChildren/AllBody/AllBody';
import { Shampoo } from './components/Body/BodyChildren/Shampoo/Shampoo';
import { GelBody } from './components/Body/BodyChildren/GelBody/GelBody';
import { Scrab } from './components/Body/BodyChildren/Scrab/Scrab';
import { CreamBody } from './components/Body/BodyChildren/CreamBody/CreamBody';
import { Sels } from './components/Sels/Sels';
import { MyContact } from './components/MyContact/MyContact';
import { Profil } from './components/Profil/Profil';
import { Off } from './components/Off/Off';
import { Main } from './components/Main/Main';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: "Face",
				element: <Face />,
				children: [
					{
						path: "/Face/",
						element: <All />
					},
					{
						path: "Cream",
						element: <Cream />
					},
					{
						path: "Serums",
						element: <Serums />
					},
					{
						path: "Gel",
						element: <Gel />
					},
					{
						path: "Oil",
						element: <Oil />
					},
					{
						path: "Emulsion",
						element: <Emulsion />
					}
				]
			},
			{
				path: "Bucket",
				element: <Bucket />
			},
			{
				path: "Like",
				element: <Like />
			},
			{
				path: "Body",
				element: <Body />,
				children: [
					{
						path: "/Body/",
						element: <AllBody />
					},
					{
						path: "Shampoo",
						element: <Shampoo />
					}, 
					{
						path: "GelBody",
						element: <GelBody />
					},
					{
						path: "Scrab",
						element: <Scrab />
					},
					{
						path: "CreamBody",
						element: <CreamBody />
					}
				]
			},
			{
				path: "Sels",
				element: <Sels />,
				children: [
					{

					}
				]
			},
			{
				path: "MyContact",
				element: <MyContact />
			},
			{
				path: "Profil",
				element: <Profil />
			},
			{
				path: "Off",
				element: <Off />
			},
			{
				path: "/",
				element: <Main />
			}
		]
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);