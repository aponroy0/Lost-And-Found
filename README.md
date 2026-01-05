# Lost and Found

Lost and Found is a **map-based web application** that helps people report and recover lost or found items.
Users can mark items on a map, browse reports, and contact others securely after login.
The project focuses on **map integration**, **authentication**, and **dashboard-based item management**.

</br>

## Overview

Lost and Found provides a simple and practical solution for locating lost items using **interactive maps**.
Users can report lost or found products, view them visually on a map, and search through reports.
Item details are protected and only visible to **logged-in users**, ensuring privacy and controlled access.

</br>

## Application Structure

The application uses a **common header and footer** across all pages and is organized into the following core sections:

- **Dashboard Page** – Shows all lost and found items
- **Authentication System** – Sign up page and login modal
- **Report Page** – Allows users to report lost or found items
- **Map View** – Displays items with color-based markers

</br>

# Features

</br>

## 1. Common Layout

- Shared **header and footer** across the application
- Top-right corner contains:

  - **Sign Up** button (before login)
  - **Report** and **Logout** buttons (after login)

</br>

## 2. Dashboard Page

- Acts as the main landing page
- Displays a **list of lost and found items**
- Left side contains an **interactive map**
- Right/center area shows item posts
- Search bar at the top to search items by name or keyword

### Map Behavior

- **Red marker** → Lost items
- **Green marker** → Found items
- Clicking on any marker opens item details

### Screenshot

![Dashboard Page](public/Public-2.png)

</br>

## 3. Map-Based Item Visualization

- Implemented using **Leaflet** and **OpenStreetMap**
- Items are marked based on their location
- Clicking a marker shows:

  - Item name
  - Description
  - Status (Lost / Found)

> Item details are **not visible without login**

### Screenshot

![Map-Based Item Visualization](public/Map_with_Lost_Found.png)

</br>

## 4. Search Functionality

- Search bar available at the top of the dashboard
- Users can search for:

  - Product name
  - Keywords related to the item

- Results update instantly

### Screenshot

![Search Functionality](public/Search.png)

</br>

## 5. Authentication System

### Sign Up Page

- New users can register using the sign-up page
- Required to access item details and reporting features

### Screenshot

![Sign Up Page](public/Registration.png)

### Login Modal

- Login handled via a modal
- Users must log in to:

  - View item details
  - Report lost or found items
  - Contact other users

### Screenshot

![Login Modal](public/Login.png)

</br>

## 6. Report Page (After Login)

- Accessible via **Report** button (top-right)
- Users can:

  - Report a lost item
  - Report a found item
  - Add item details and location on the map

- Submitted reports appear on the dashboard and map

### Screenshot

![Report Page](public/Report.png)

</br>

## Tech Stack

- **Frontend:** React.js
- **Backend:** ASP.NET
- **Maps:** Leaflet, OpenStreetMap

</br>
