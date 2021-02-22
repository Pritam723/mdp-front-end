import React, { useState, useEffect, useLayoutEffect } from "react";
import "./styles.css";

import Tree from "./Tree/Tree";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import SidebarActions from "./SidebarActions";
import axios from "axios";

export default function App(props) {
  // let [data, setData] = useState([]);
  const [data, setData] = useState([]);
  const [fileType, setFileType] = useState([]);

  const [visibleRight, setVisibleRight] = useState(false);
  const [nodePath, setNodePath] = useState(null);
  const [nodeName, setNodeName] = useState(null);
  const [nodeId, setNodeId] = useState(null);

  const [fileToUpload, setFileToUpload] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  let temp = [
    {
      name: "DEC",
      size: "12.00KB",
      type: "folder",
      path: "meterFile/meterFile28\\NPC Files\\DEC",
      files: [
        {
          name: "ANGUL",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\ANGUL",
          files: [
            { name: "1412angul (1).DLM", size: "521.19KB" },
            {
              name: "1412angul (1).NPC",
              size: "9.77KB",
              id: 154,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\ANGUL\\1412angul (1).NPC",
            },
            { name: "1412angul (2).DLM", size: "520.45KB" },
            {
              name: "1412angul (2).NPC",
              size: "9.80KB",
              id: 155,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\ANGUL\\1412angul (2).NPC",
            },
            { name: "1412angul (3).DLM", size: "513.99KB" },
            {
              name: "1412angul (3).NPC",
              size: "9.79KB",
              id: 156,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\ANGUL\\1412angul (3).NPC",
            },
            { name: "1412angul (4).DLM", size: "514.80KB" },
            {
              name: "1412angul (4).NPC",
              size: "9.81KB",
              id: 157,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\ANGUL\\1412angul (4).NPC",
            },
            { name: "1412angul (5).DLM", size: "519.04KB" },
            {
              name: "1412angul (5).NPC",
              size: "9.83KB",
              id: 158,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\ANGUL\\1412angul (5).NPC",
            },
            { name: "1412angul (6).DLM", size: "518.66KB" },
            {
              name: "1412angul (6).NPC",
              size: "9.84KB",
              id: 159,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\ANGUL\\1412angul (6).NPC",
            },
            { name: "1412angul (7).DLM", size: "518.44KB" },
            {
              name: "1412angul (7).NPC",
              size: "9.86KB",
              id: 160,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\ANGUL\\1412angul (7).NPC",
            },
            { name: "1412angul (8).DLM", size: "497.88KB" },
            {
              name: "1412angul (8).NPC",
              size: "9.86KB",
              id: 161,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\ANGUL\\1412angul (8).NPC",
            },
            { name: "1412angul (9).DLM", size: "497.47KB" },
            {
              name: "1412angul (9).NPC",
              size: "9.88KB",
              id: 162,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\ANGUL\\1412angul (9).NPC",
            },
            {
              name: "1412ANGUL(AGL).npc",
              size: "74.54KB",
              id: 163,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\ANGUL\\1412ANGUL(AGL).npc",
            },
            {
              name: "1412ANGUL.npc",
              size: "42.54KB",
              id: 164,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\ANGUL\\1412ANGUL.npc",
            },
            { name: "1412angul1 (1).DAT", size: "15.05KB" },
            {
              name: "1412angul1 (1).npc",
              size: "13.91KB",
              id: 165,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\ANGUL\\1412angul1 (1).npc",
            },
            { name: "1412angul1 (2).DAT", size: "14.92KB" },
            {
              name: "1412angul1 (2).npc",
              size: "13.80KB",
              id: 166,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\ANGUL\\1412angul1 (2).npc",
            },
            { name: "1412angul1 (3).DAT", size: "14.89KB" },
            {
              name: "1412angul1 (3).npc",
              size: "13.78KB",
              id: 167,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\ANGUL\\1412angul1 (3).npc",
            },
          ],
        },
        {
          name: "APD",
          size: "8.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\APD",
          files: [
            { name: "1412apd (1).DLM", size: "496.47KB" },
            {
              name: "1412apd (1).NPC",
              size: "9.77KB",
              id: 168,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (1).NPC",
            },
            { name: "1412apd (10).DLM", size: "508.87KB" },
            {
              name: "1412apd (10).NPC",
              size: "9.86KB",
              id: 169,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (10).NPC",
            },
            { name: "1412apd (11).DLM", size: "500.22KB" },
            {
              name: "1412apd (11).NPC",
              size: "9.87KB",
              id: 170,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (11).NPC",
            },
            { name: "1412apd (12).DLM", size: "505.12KB" },
            {
              name: "1412apd (12).NPC",
              size: "9.88KB",
              id: 171,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (12).NPC",
            },
            { name: "1412apd (13).DLM", size: "497.29KB" },
            {
              name: "1412apd (13).NPC",
              size: "9.88KB",
              id: 172,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (13).NPC",
            },
            { name: "1412apd (14).DLM", size: "520.37KB" },
            {
              name: "1412apd (14).NPC",
              size: "9.90KB",
              id: 173,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (14).NPC",
            },
            { name: "1412apd (15).DLM", size: "497.21KB" },
            {
              name: "1412apd (15).NPC",
              size: "9.91KB",
              id: 174,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (15).NPC",
            },
            { name: "1412apd (16).DLM", size: "519.63KB" },
            {
              name: "1412apd (16).NPC",
              size: "9.92KB",
              id: 175,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (16).NPC",
            },
            { name: "1412apd (17).DLM", size: "518.37KB" },
            {
              name: "1412apd (17).NPC",
              size: "9.92KB",
              id: 176,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (17).NPC",
            },
            { name: "1412apd (18).DLM", size: "497.88KB" },
            {
              name: "1412apd (18).NPC",
              size: "10.08KB",
              id: 177,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (18).NPC",
            },
            { name: "1412apd (19).DLM", size: "498.37KB" },
            {
              name: "1412apd (19).NPC",
              size: "10.09KB",
              id: 178,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (19).NPC",
            },
            { name: "1412apd (2).DLM", size: "496.40KB" },
            {
              name: "1412apd (2).NPC",
              size: "9.78KB",
              id: 179,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (2).NPC",
            },
            { name: "1412apd (20).DLM", size: "520.37KB" },
            {
              name: "1412apd (20).NPC",
              size: "10.11KB",
              id: 180,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (20).NPC",
            },
            { name: "1412apd (21).DLM", size: "520.37KB" },
            {
              name: "1412apd (21).NPC",
              size: "10.11KB",
              id: 181,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (21).NPC",
            },
            { name: "1412apd (22).DLM", size: "519.55KB" },
            {
              name: "1412apd (22).NPC",
              size: "10.12KB",
              id: 182,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (22).NPC",
            },
            { name: "1412apd (23).DLM", size: "518.89KB" },
            {
              name: "1412apd (23).NPC",
              size: "10.12KB",
              id: 183,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (23).NPC",
            },
            { name: "1412apd (24).DLM", size: "518.52KB" },
            {
              name: "1412apd (24).NPC",
              size: "10.13KB",
              id: 184,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (24).NPC",
            },
            { name: "1412apd (3).DLM", size: "496.55KB" },
            {
              name: "1412apd (3).NPC",
              size: "9.79KB",
              id: 185,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (3).NPC",
            },
            { name: "1412apd (4).DLM", size: "497.29KB" },
            {
              name: "1412apd (4).NPC",
              size: "9.79KB",
              id: 186,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (4).NPC",
            },
            { name: "1412apd (5).DLM", size: "498.66KB" },
            {
              name: "1412apd (5).NPC",
              size: "9.81KB",
              id: 187,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (5).NPC",
            },
            { name: "1412apd (6).DLM", size: "499.03KB" },
            {
              name: "1412apd (6).NPC",
              size: "9.83KB",
              id: 188,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (6).NPC",
            },
            { name: "1412apd (7).DLM", size: "516.10KB" },
            {
              name: "1412apd (7).NPC",
              size: "9.84KB",
              id: 189,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (7).NPC",
            },
            { name: "1412apd (8).DLM", size: "517.03KB" },
            {
              name: "1412apd (8).NPC",
              size: "9.85KB",
              id: 190,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (8).NPC",
            },
            { name: "1412apd (9).DLM", size: "510.39KB" },
            {
              name: "1412apd (9).NPC",
              size: "9.84KB",
              id: 191,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APD\\1412apd (9).NPC",
            },
          ],
        },
        {
          name: "APNRL",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\APNRL",
          files: [
            {
              name: "1412ADHUNIK(APNRL).npc",
              size: "42.51KB",
              id: 192,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\APNRL\\1412ADHUNIK(APNRL).npc",
            },
          ],
        },
        {
          name: "ARAH",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\ARAH",
          files: [
            {
              name: "1412ARAH(ARP).npc",
              size: "138.65KB",
              id: 193,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\ARAH\\1412ARAH(ARP).npc",
            },
            { name: "1412arah.DLM", size: "482.01KB" },
            {
              name: "1412arah.NPC",
              size: "11.15KB",
              id: 194,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\ARAH\\1412arah.NPC",
            },
          ],
        },
        {
          name: "BANKA",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\BANKA",
          files: [
            { name: "1412banka (1).DLM", size: "496.18KB" },
            {
              name: "1412banka (1).NPC",
              size: "12.37KB",
              id: 195,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BANKA\\1412banka (1).NPC",
            },
            { name: "1412banka (2).DLM", size: "496.77KB" },
            {
              name: "1412banka (2).NPC",
              size: "12.38KB",
              id: 196,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BANKA\\1412banka (2).NPC",
            },
            { name: "1412banka (3).DLM", size: "497.77KB" },
            {
              name: "1412banka (3).NPC",
              size: "12.40KB",
              id: 197,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BANKA\\1412banka (3).NPC",
            },
            { name: "1412banka (4).DLM", size: "498.37KB" },
            {
              name: "1412banka (4).NPC",
              size: "12.42KB",
              id: 198,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BANKA\\1412banka (4).NPC",
            },
            { name: "1412banka (5).DLM", size: "497.21KB" },
            {
              name: "1412banka (5).NPC",
              size: "12.43KB",
              id: 199,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BANKA\\1412banka (5).NPC",
            },
            { name: "1412banka (6).DLM", size: "497.62KB" },
            {
              name: "1412banka (6).NPC",
              size: "12.44KB",
              id: 200,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BANKA\\1412banka (6).NPC",
            },
            {
              name: "1412BANKA(BNK).npc",
              size: "117.16KB",
              id: 201,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BANKA\\1412BANKA(BNK).npc",
            },
          ],
        },
        {
          name: "BARH",
          size: "12.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\BARH",
          files: [
            { name: "1412barh (1).DLM", size: "495.95KB" },
            {
              name: "1412barh (1).NPC",
              size: "11.23KB",
              id: 202,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh (1).NPC",
            },
            { name: "1412barh (10).DLM", size: "496.03KB" },
            {
              name: "1412barh (10).NPC",
              size: "11.22KB",
              id: 203,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh (10).NPC",
            },
            { name: "1412barh (2).DLM", size: "486.66KB" },
            {
              name: "1412barh (2).NPC",
              size: "11.15KB",
              id: 204,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh (2).NPC",
            },
            { name: "1412barh (3).DLM", size: "494.06KB" },
            {
              name: "1412barh (3).NPC",
              size: "11.17KB",
              id: 205,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh (3).NPC",
            },
            { name: "1412barh (4).DLM", size: "518.14KB" },
            {
              name: "1412barh (4).NPC",
              size: "11.18KB",
              id: 206,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh (4).NPC",
            },
            { name: "1412barh (5).DLM", size: "496.88KB" },
            { name: "1412barh (6).DLM", size: "497.33KB" },
            {
              name: "1412barh (6).NPC",
              size: "11.20KB",
              id: 207,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh (6).NPC",
            },
            { name: "1412barh (7).DLM", size: "497.92KB" },
            {
              name: "1412barh (7).NPC",
              size: "11.21KB",
              id: 208,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh (7).NPC",
            },
            { name: "1412barh (8).DLM", size: "497.85KB" },
            { name: "1412barh (9).DLM", size: "495.95KB" },
            {
              name: "1412barh (9).NPC",
              size: "11.22KB",
              id: 209,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh (9).NPC",
            },
            { name: "1412barh1 (1).DAT", size: "14.97KB" },
            {
              name: "1412barh1 (1).npc",
              size: "13.84KB",
              id: 210,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (1).npc",
            },
            { name: "1412barh1 (10).DAT", size: "14.98KB" },
            {
              name: "1412barh1 (10).npc",
              size: "13.86KB",
              id: 211,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (10).npc",
            },
            { name: "1412barh1 (11).DAT", size: "14.98KB" },
            {
              name: "1412barh1 (11).npc",
              size: "13.85KB",
              id: 212,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (11).npc",
            },
            { name: "1412barh1 (12).DAT", size: "14.98KB" },
            {
              name: "1412barh1 (12).npc",
              size: "13.86KB",
              id: 213,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (12).npc",
            },
            { name: "1412barh1 (13).DAT", size: "14.98KB" },
            {
              name: "1412barh1 (13).npc",
              size: "13.86KB",
              id: 214,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (13).npc",
            },
            { name: "1412barh1 (14).DAT", size: "14.97KB" },
            {
              name: "1412barh1 (14).npc",
              size: "13.83KB",
              id: 215,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (14).npc",
            },
            { name: "1412barh1 (15).DAT", size: "14.98KB" },
            {
              name: "1412barh1 (15).npc",
              size: "13.85KB",
              id: 216,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (15).npc",
            },
            { name: "1412barh1 (16).DAT", size: "14.97KB" },
            {
              name: "1412barh1 (16).npc",
              size: "13.83KB",
              id: 217,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (16).npc",
            },
            { name: "1412barh1 (17).DAT", size: "14.97KB" },
            {
              name: "1412barh1 (17).npc",
              size: "13.83KB",
              id: 218,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (17).npc",
            },
            { name: "1412barh1 (18).DAT", size: "14.98KB" },
            {
              name: "1412barh1 (18).npc",
              size: "13.85KB",
              id: 219,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (18).npc",
            },
            { name: "1412barh1 (19).DAT", size: "14.97KB" },
            {
              name: "1412barh1 (19).npc",
              size: "13.83KB",
              id: 220,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (19).npc",
            },
            { name: "1412barh1 (2).DAT", size: "14.97KB" },
            {
              name: "1412barh1 (2).npc",
              size: "13.84KB",
              id: 221,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (2).npc",
            },
            { name: "1412barh1 (20).DAT", size: "14.98KB" },
            {
              name: "1412barh1 (20).npc",
              size: "13.85KB",
              id: 222,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (20).npc",
            },
            { name: "1412barh1 (21).DAT", size: "14.97KB" },
            {
              name: "1412barh1 (21).npc",
              size: "13.85KB",
              id: 223,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (21).npc",
            },
            { name: "1412barh1 (3).DAT", size: "14.97KB" },
            {
              name: "1412barh1 (3).npc",
              size: "13.85KB",
              id: 224,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (3).npc",
            },
            { name: "1412barh1 (4).DAT", size: "14.97KB" },
            {
              name: "1412barh1 (4).npc",
              size: "13.84KB",
              id: 225,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (4).npc",
            },
            { name: "1412barh1 (5).DAT", size: "14.97KB" },
            {
              name: "1412barh1 (5).npc",
              size: "13.83KB",
              id: 226,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (5).npc",
            },
            { name: "1412barh1 (6).DAT", size: "14.97KB" },
            {
              name: "1412barh1 (6).npc",
              size: "13.83KB",
              id: 227,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (6).npc",
            },
            { name: "1412barh1 (7).DAT", size: "14.98KB" },
            {
              name: "1412barh1 (7).npc",
              size: "13.86KB",
              id: 228,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (7).npc",
            },
            { name: "1412barh1 (8).DAT", size: "14.98KB" },
            {
              name: "1412barh1 (8).npc",
              size: "13.84KB",
              id: 229,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (8).npc",
            },
            { name: "1412barh1 (9).DAT", size: "14.98KB" },
            {
              name: "1412barh1 (9).npc",
              size: "13.84KB",
              id: 230,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BARH\\1412barh1 (9).npc",
            },
          ],
        },
        {
          name: "BHP",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\BHP",
          files: [
            { name: "1412behrmpr (1).DLM", size: "492.19KB" },
            {
              name: "1412behrmpr (1).NPC",
              size: "9.86KB",
              id: 231,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHP\\1412behrmpr (1).NPC",
            },
            { name: "1412behrmpr (2).DLM", size: "492.19KB" },
            {
              name: "1412behrmpr (2).NPC",
              size: "9.87KB",
              id: 232,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHP\\1412behrmpr (2).NPC",
            },
            { name: "1412behrmpr (3).DLM", size: "492.19KB" },
            {
              name: "1412behrmpr (3).NPC",
              size: "9.88KB",
              id: 233,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHP\\1412behrmpr (3).NPC",
            },
            { name: "1412behrmpr (4).DLM", size: "498.18KB" },
            {
              name: "1412behrmpr (4).NPC",
              size: "9.83KB",
              id: 234,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHP\\1412behrmpr (4).NPC",
            },
            { name: "1412behrmpr (5).DLM", size: "498.40KB" },
            {
              name: "1412behrmpr (5).NPC",
              size: "9.84KB",
              id: 235,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHP\\1412behrmpr (5).NPC",
            },
            { name: "1412behrmpr (6).DLM", size: "492.23KB" },
            {
              name: "1412behrmpr (6).NPC",
              size: "9.86KB",
              id: 236,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHP\\1412behrmpr (6).NPC",
            },
            { name: "1412behrmpr1 (1).DAT", size: "15.12KB" },
            {
              name: "1412behrmpr1 (1).npc",
              size: "13.97KB",
              id: 237,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHP\\1412behrmpr1 (1).npc",
            },
            { name: "1412behrmpr1 (2).DAT", size: "15.09KB" },
            {
              name: "1412behrmpr1 (2).npc",
              size: "13.96KB",
              id: 238,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHP\\1412behrmpr1 (2).npc",
            },
            { name: "1412behrmpr1 (3).DAT", size: "15.11KB" },
            {
              name: "1412behrmpr1 (3).npc",
              size: "13.97KB",
              id: 239,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHP\\1412behrmpr1 (3).npc",
            },
            { name: "1412behrmpr1 (4).DAT", size: "15.12KB" },
            {
              name: "1412behrmpr1 (4).npc",
              size: "13.98KB",
              id: 240,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHP\\1412behrmpr1 (4).npc",
            },
            { name: "1412behrmpr1 (5).DAT", size: "15.12KB" },
            {
              name: "1412behrmpr1 (5).npc",
              size: "13.98KB",
              id: 241,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHP\\1412behrmpr1 (5).npc",
            },
            { name: "1412behrmpr1 (6).DAT", size: "15.12KB" },
            {
              name: "1412behrmpr1 (6).npc",
              size: "13.98KB",
              id: 242,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHP\\1412behrmpr1 (6).npc",
            },
            { name: "1412behrmpr1 (7).DAT", size: "15.11KB" },
            {
              name: "1412behrmpr1 (7).npc",
              size: "13.96KB",
              id: 243,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHP\\1412behrmpr1 (7).npc",
            },
            { name: "1412behrmpr1 (8).DAT", size: "15.14KB" },
            {
              name: "1412behrmpr1 (8).npc",
              size: "14.00KB",
              id: 244,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHP\\1412behrmpr1 (8).npc",
            },
          ],
        },
        {
          name: "BHUTAN",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\BHUTAN",
          files: [
            { name: "1412CHP (1).MDT", size: "15.03KB" },
            {
              name: "1412CHP (1).npc",
              size: "13.89KB",
              id: 245,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHUTAN\\1412CHP (1).npc",
            },
            { name: "1412CHP (2).MDT", size: "15.06KB" },
            {
              name: "1412CHP (2).npc",
              size: "13.92KB",
              id: 246,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHUTAN\\1412CHP (2).npc",
            },
            { name: "1412MHEP (1).DAT", size: "14.95KB" },
            {
              name: "1412MHEP (1).npc",
              size: "13.80KB",
              id: 247,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHUTAN\\1412MHEP (1).npc",
            },
            { name: "1412MHEP (2).DAT", size: "14.97KB" },
            {
              name: "1412MHEP (2).npc",
              size: "13.82KB",
              id: 248,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHUTAN\\1412MHEP (2).npc",
            },
            { name: "1412THP (1).MDT", size: "14.84KB" },
            {
              name: "1412THP (1).npc",
              size: "13.73KB",
              id: 249,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHUTAN\\1412THP (1).npc",
            },
            { name: "1412THP (2).MDT", size: "14.84KB" },
            {
              name: "1412THP (2).npc",
              size: "13.73KB",
              id: 250,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHUTAN\\1412THP (2).npc",
            },
            {
              name: "1412THP2.npc",
              size: "13.73KB",
              id: 251,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BHUTAN\\1412THP2.npc",
            },
          ],
        },
        {
          name: "BIRP",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\BIRP",
          files: [
            {
              name: "1412BIRPARA(BRP).npc",
              size: "138.52KB",
              id: 252,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BIRP\\1412BIRPARA(BRP).npc",
            },
            { name: "1412BIRPARA(BRP).zip", size: "32.33KB" },
          ],
        },
        {
          name: "BOL",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\BOL",
          files: [
            { name: "1412bolangir (1).DLM", size: "518.89KB" },
            {
              name: "1412bolangir (1).NPC",
              size: "12.39KB",
              id: 253,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BOL\\1412bolangir (1).NPC",
            },
            { name: "1412bolangir (2).DLM", size: "518.66KB" },
            {
              name: "1412bolangir (2).NPC",
              size: "12.40KB",
              id: 254,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BOL\\1412bolangir (2).NPC",
            },
            { name: "1412bolangir (3).DLM", size: "518.59KB" },
            {
              name: "1412bolangir (3).NPC",
              size: "12.41KB",
              id: 255,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BOL\\1412bolangir (3).NPC",
            },
            { name: "1412bolangir (4).DLM", size: "518.52KB" },
            {
              name: "1412bolangir (4).NPC",
              size: "12.42KB",
              id: 256,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BOL\\1412bolangir (4).NPC",
            },
            { name: "1412bolangir (5).DLM", size: "491.92KB" },
            {
              name: "1412bolangir (5).NPC",
              size: "12.42KB",
              id: 257,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BOL\\1412bolangir (5).NPC",
            },
            {
              name: "1412BOLANGIR(BLR).npc",
              size: "53.19KB",
              id: 258,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BOL\\1412BOLANGIR(BLR).npc",
            },
          ],
        },
        {
          name: "BPD",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\BPD",
          files: [
            {
              name: "1412BARIPADA(BPD).npc",
              size: "191.97KB",
              id: 259,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BPD\\1412BARIPADA(BPD).npc",
            },
            { name: "1412bpd-pg (1).DLM", size: "496.73KB" },
            {
              name: "1412bpd-pg (1).NPC",
              size: "9.83KB",
              id: 260,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BPD\\1412bpd-pg (1).NPC",
            },
            { name: "1412bpd-pg (2).DLM", size: "488.32KB" },
            {
              name: "1412bpd-pg (2).NPC",
              size: "9.81KB",
              id: 261,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BPD\\1412bpd-pg (2).NPC",
            },
            { name: "1412bpd-pg (3).DLM", size: "484.95KB" },
            {
              name: "1412bpd-pg (3).NPC",
              size: "9.87KB",
              id: 262,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BPD\\1412bpd-pg (3).NPC",
            },
            { name: "1412bpd-pg (4).DLM", size: "503.67KB" },
            {
              name: "1412bpd-pg (4).NPC",
              size: "9.83KB",
              id: 263,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BPD\\1412bpd-pg (4).NPC",
            },
          ],
        },
        {
          name: "BSEB",
          size: "16.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\BSEB",
          files: [
            { name: "1412 dmtcl to motipur (1).DLM", size: "506.53KB" },
            {
              name: "1412 dmtcl to motipur (1).NPC",
              size: "11.24KB",
              id: 264,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412 dmtcl to motipur (1).NPC",
            },
            { name: "1412 dmtcl to motipur (2).DLM", size: "508.01KB" },
            {
              name: "1412 dmtcl to motipur (2).NPC",
              size: "11.28KB",
              id: 265,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412 dmtcl to motipur (2).NPC",
            },
            { name: "1412baisi.DAT", size: "15.28KB" },
            {
              name: "1412baisi.npc",
              size: "14.14KB",
              id: 266,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412baisi.npc",
            },
            {
              name: "1412BANKA(BAN).npc",
              size: "21.19KB",
              id: 267,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412BANKA(BAN).npc",
            },
            { name: "1412barsoi.DAT", size: "15.39KB" },
            {
              name: "1412barsoi.npc",
              size: "14.23KB",
              id: 268,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412barsoi.npc",
            },
            { name: "1412begusarai.DLM", size: "503.86KB" },
            {
              name: "1412begusarai.NPC",
              size: "12.59KB",
              id: 269,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412begusarai.NPC",
            },
            { name: "1412bettiah (1).DLM", size: "521.19KB" },
            {
              name: "1412bettiah (1).NPC",
              size: "10.23KB",
              id: 270,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412bettiah (1).NPC",
            },
            { name: "1412bettiah (2).DLM", size: "521.11KB" },
            {
              name: "1412bettiah (2).NPC",
              size: "10.21KB",
              id: 271,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412bettiah (2).NPC",
            },
            {
              name: "1412BIHARSHARIF(BIH).npc",
              size: "21.20KB",
              id: 272,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412BIHARSHARIF(BIH).npc",
            },
            {
              name: "1412BODHGAYA (BOD).npc",
              size: "10.67KB",
              id: 273,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412BODHGAYA (BOD).npc",
            },
            { name: "1412dbg-kshngnj (1).DLM", size: "497.62KB" },
            {
              name: "1412dbg-kshngnj (1).NPC",
              size: "9.84KB",
              id: 274,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412dbg-kshngnj (1).NPC",
            },
            { name: "1412dbg-kshngnj (2).DLM", size: "497.70KB" },
            {
              name: "1412dbg-kshngnj (2).NPC",
              size: "9.83KB",
              id: 275,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412dbg-kshngnj (2).NPC",
            },
            { name: "1412dbg-samastipur.DLM", size: "521.37KB" },
            {
              name: "1412dbg-samastipur.NPC",
              size: "10.12KB",
              id: 276,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412dbg-samastipur.NPC",
            },
            { name: "1412dmtcl-dbg (1).DLM", size: "497.02KB" },
            {
              name: "1412dmtcl-dbg (1).NPC",
              size: "9.90KB",
              id: 277,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412dmtcl-dbg (1).NPC",
            },
            { name: "1412dmtcl-dbg (2).DLM", size: "505.23KB" },
            {
              name: "1412dmtcl-dbg (2).NPC",
              size: "9.91KB",
              id: 278,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412dmtcl-dbg (2).NPC",
            },
            {
              name: "1412DUMRAON(DUM).npc",
              size: "10.53KB",
              id: 279,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412DUMRAON(DUM).npc",
            },
            { name: "1412fatuah.DLM", size: "519.55KB" },
            {
              name: "1412fatuah.NPC",
              size: "9.83KB",
              id: 280,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412fatuah.NPC",
            },
            {
              name: "1412HAJIPUR(HAJ).npc",
              size: "21.20KB",
              id: 281,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412HAJIPUR(HAJ).npc",
            },
            {
              name: "1412JAMUI(BSPHCL).npc",
              size: "21.20KB",
              id: 282,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412JAMUI(BSPHCL).npc",
            },
            {
              name: "1412JAPLA(JAP).npc",
              size: "10.53KB",
              id: 283,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412JAPLA(JAP).npc",
            },
            {
              name: "1412KAHALGAON(KAH).npc",
              size: "21.19KB",
              id: 284,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412KAHALGAON(KAH).npc",
            },
            {
              name: "1412KANTI(KAN).npc",
              size: "42.68KB",
              id: 285,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412KANTI(KAN).npc",
            },
            {
              name: "1412KARMANASHA(KMN).npc",
              size: "18.71KB",
              id: 286,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412KARMANASHA(KMN).npc",
            },
            { name: "1412khagaul (1).DLM", size: "496.32KB" },
            {
              name: "1412khagaul (1).NPC",
              size: "13.03KB",
              id: 287,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412khagaul (1).NPC",
            },
            { name: "1412khagaul (2).DLM", size: "500.18KB" },
            {
              name: "1412khagaul (2).NPC",
              size: "13.03KB",
              id: 288,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412khagaul (2).NPC",
            },
            {
              name: "1412KHAGAUL(KHA).npc",
              size: "42.53KB",
              id: 289,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412KHAGAUL(KHA).npc",
            },
            { name: "1412khijirsarai (1).DLM", size: "498.22KB" },
            {
              name: "1412khijirsarai (1).NPC",
              size: "9.79KB",
              id: 290,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412khijirsarai (1).NPC",
            },
            { name: "1412khijirsarai (2).DLM", size: "505.71KB" },
            {
              name: "1412khijirsarai (2).NPC",
              size: "9.77KB",
              id: 291,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412khijirsarai (2).NPC",
            },
            { name: "1412kishanganj-b (1).DLM", size: "496.96KB" },
            {
              name: "1412kishanganj-b (1).NPC",
              size: "11.16KB",
              id: 292,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412kishanganj-b (1).NPC",
            },
            { name: "1412kishanganj-b (2).DLM", size: "497.47KB" },
            {
              name: "1412kishanganj-b (2).NPC",
              size: "11.17KB",
              id: 293,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412kishanganj-b (2).NPC",
            },
            { name: "1412kishanganj-b (3).DLM", size: "497.10KB" },
            {
              name: "1412kishanganj-b (3).NPC",
              size: "11.17KB",
              id: 294,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412kishanganj-b (3).NPC",
            },
            { name: "1412kishanganj-b (4).DLM", size: "497.18KB" },
            {
              name: "1412kishanganj-b (4).NPC",
              size: "11.16KB",
              id: 295,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412kishanganj-b (4).NPC",
            },
            {
              name: "1412LAKHISARAI(LKK).npc",
              size: "21.20KB",
              id: 296,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412LAKHISARAI(LKK).npc",
            },
            { name: "1412laukhi.DLM", size: "520.74KB" },
            {
              name: "1412laukhi.NPC",
              size: "10.03KB",
              id: 297,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412laukhi.NPC",
            },
            {
              name: "1412MADHEPURA(MAD).npc",
              size: "10.53KB",
              id: 298,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412MADHEPURA(MAD).npc",
            },
            { name: "1412motihari-b (1).DLM", size: "501.26KB" },
            {
              name: "1412motihari-b (1).NPC",
              size: "9.96KB",
              id: 299,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412motihari-b (1).NPC",
            },
            { name: "1412motihari-b (2).DLM", size: "500.96KB" },
            {
              name: "1412motihari-b (2).NPC",
              size: "9.94KB",
              id: 300,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412motihari-b (2).NPC",
            },
            { name: "1412nadokhar.DLM", size: "518.59KB" },
            {
              name: "1412nadokhar.NPC",
              size: "9.92KB",
              id: 301,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412nadokhar.NPC",
            },
            {
              name: "1412NEW PUSAULI(NPS).npc",
              size: "10.53KB",
              id: 302,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412NEW PUSAULI(NPS).npc",
            },
            {
              name: "1412PURNEA(PUR).npc",
              size: "31.87KB",
              id: 303,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412PURNEA(PUR).npc",
            },
            { name: "1412raxaul (1).DLM", size: "513.88KB" },
            {
              name: "1412raxaul (1).NPC",
              size: "12.99KB",
              id: 304,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412raxaul (1).NPC",
            },
            { name: "1412raxaul (2).DLM", size: "513.13KB" },
            {
              name: "1412raxaul (2).NPC",
              size: "13.00KB",
              id: 305,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412raxaul (2).NPC",
            },
            {
              name: "1412SIPARA (SIP).npc",
              size: "31.86KB",
              id: 306,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412SIPARA (SIP).npc",
            },
            {
              name: "1412SONENAGAR(SON).npc",
              size: "21.19KB",
              id: 307,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412SONENAGAR(SON).npc",
            },
            {
              name: "1412SONNAGAR NEW.npc",
              size: "10.53KB",
              id: 308,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412SONNAGAR NEW.npc",
            },
            {
              name: "1412SULTANGANJ(SUL).npc",
              size: "31.86KB",
              id: 309,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSEB\\1412SULTANGANJ(SUL).npc",
            },
          ],
        },
        {
          name: "BSF",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\BSF",
          files: [
            {
              name: "1412BIHARSHARIFF(BSF).npc",
              size: "170.26KB",
              id: 310,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSF\\1412BIHARSHARIFF(BSF).npc",
            },
            { name: "1412bsf (1).DLM", size: "498.22KB" },
            {
              name: "1412bsf (1).NPC",
              size: "12.56KB",
              id: 311,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSF\\1412bsf (1).NPC",
            },
            { name: "1412bsf (2).DLM", size: "498.48KB" },
            {
              name: "1412bsf (2).NPC",
              size: "12.57KB",
              id: 312,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\BSF\\1412bsf (2).NPC",
            },
            { name: "1412bsf1.DAT", size: "15.06KB" },
            {
              name: "1412bsf1.npc",
              size: "13.93KB",
              id: 313,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\BSF\\1412bsf1.npc",
            },
          ],
        },
        {
          name: "CHAIBASA",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\CHAIBASA",
          files: [
            { name: "1412chaibasa-pg (1).DLM", size: "501.04KB" },
            {
              name: "1412chaibasa-pg (1).NPC",
              size: "10.02KB",
              id: 314,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\CHAIBASA\\1412chaibasa-pg (1).NPC",
            },
            { name: "1412chaibasa-pg (2).DLM", size: "501.48KB" },
            {
              name: "1412chaibasa-pg (2).NPC",
              size: "10.01KB",
              id: 315,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\CHAIBASA\\1412chaibasa-pg (2).NPC",
            },
            {
              name: "1412CHAIBASA.npc",
              size: "74.50KB",
              id: 316,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\CHAIBASA\\1412CHAIBASA.npc",
            },
          ],
        },
        {
          name: "CHANDAUTI",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\CHANDAUTI",
          files: [
            { name: "1412chandauti (1).DLM", size: "199.78KB" },
            {
              name: "1412chandauti (1).NPC",
              size: "12.52KB",
              id: 317,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\CHANDAUTI\\1412chandauti (1).NPC",
            },
            { name: "1412chandauti (2).DLM", size: "298.98KB" },
            { name: "1412chandauti (3).DLM", size: "369.35KB" },
            {
              name: "1412chandauti (3).NPC",
              size: "12.47KB",
              id: 318,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\CHANDAUTI\\1412chandauti (3).NPC",
            },
            { name: "1412chandauti (4).DLM", size: "237.00KB" },
            {
              name: "1412chandauti (4).NPC",
              size: "12.47KB",
              id: 319,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\CHANDAUTI\\1412chandauti (4).NPC",
            },
          ],
        },
        {
          name: "CHZN",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\CHZN",
          files: [
            {
              name: "1412CHUZACHEN(CZN).npc",
              size: "74.50KB",
              id: 320,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\CHZN\\1412CHUZACHEN(CZN).npc",
            },
          ],
        },
        {
          name: "DAGACHU",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\DAGACHU",
          files: [
            { name: "1412dagachu.DAT", size: "1861.02KB" },
            {
              name: "1412dagachu.npc",
              size: "68.97KB",
              id: 321,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DAGACHU\\1412dagachu.npc",
            },
          ],
        },
        {
          name: "DALTANGANJ",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\DALTANGANJ",
          files: [
            { name: "1412dlt-pg (1).DLM", size: "510.15KB" },
            {
              name: "1412dlt-pg (1).NPC",
              size: "9.91KB",
              id: 322,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DALTANGANJ\\1412dlt-pg (1).NPC",
            },
            { name: "1412dlt-pg (10).DLM", size: "498.74KB" },
            {
              name: "1412dlt-pg (10).NPC",
              size: "9.84KB",
              id: 323,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DALTANGANJ\\1412dlt-pg (10).NPC",
            },
            { name: "1412dlt-pg (11).DLM", size: "499.66KB" },
            {
              name: "1412dlt-pg (11).NPC",
              size: "9.84KB",
              id: 324,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DALTANGANJ\\1412dlt-pg (11).NPC",
            },
            { name: "1412dlt-pg (12).DLM", size: "496.99KB" },
            {
              name: "1412dlt-pg (12).NPC",
              size: "9.86KB",
              id: 325,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DALTANGANJ\\1412dlt-pg (12).NPC",
            },
            { name: "1412dlt-pg (13).DLM", size: "518.44KB" },
            {
              name: "1412dlt-pg (13).NPC",
              size: "9.89KB",
              id: 326,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DALTANGANJ\\1412dlt-pg (13).NPC",
            },
            { name: "1412dlt-pg (14).DLM", size: "509.03KB" },
            {
              name: "1412dlt-pg (14).NPC",
              size: "9.88KB",
              id: 327,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DALTANGANJ\\1412dlt-pg (14).NPC",
            },
            { name: "1412dlt-pg (15).DLM", size: "518.44KB" },
            {
              name: "1412dlt-pg (15).NPC",
              size: "9.90KB",
              id: 328,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DALTANGANJ\\1412dlt-pg (15).NPC",
            },
            { name: "1412dlt-pg (2).DLM", size: "519.26KB" },
            {
              name: "1412dlt-pg (2).NPC",
              size: "9.92KB",
              id: 329,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DALTANGANJ\\1412dlt-pg (2).NPC",
            },
            { name: "1412dlt-pg (3).DLM", size: "506.34KB" },
            {
              name: "1412dlt-pg (3).NPC",
              size: "9.94KB",
              id: 330,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DALTANGANJ\\1412dlt-pg (3).NPC",
            },
            { name: "1412dlt-pg (4).DLM", size: "496.66KB" },
            {
              name: "1412dlt-pg (4).NPC",
              size: "9.94KB",
              id: 331,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DALTANGANJ\\1412dlt-pg (4).NPC",
            },
            { name: "1412dlt-pg (5).DLM", size: "496.66KB" },
            {
              name: "1412dlt-pg (5).NPC",
              size: "9.96KB",
              id: 332,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DALTANGANJ\\1412dlt-pg (5).NPC",
            },
            { name: "1412dlt-pg (6).DLM", size: "498.74KB" },
            {
              name: "1412dlt-pg (6).NPC",
              size: "9.74KB",
              id: 333,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DALTANGANJ\\1412dlt-pg (6).NPC",
            },
            { name: "1412dlt-pg (7).DLM", size: "502.34KB" },
            {
              name: "1412dlt-pg (7).NPC",
              size: "9.79KB",
              id: 334,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DALTANGANJ\\1412dlt-pg (7).NPC",
            },
            { name: "1412dlt-pg (8).DLM", size: "498.66KB" },
            {
              name: "1412dlt-pg (8).NPC",
              size: "9.81KB",
              id: 335,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DALTANGANJ\\1412dlt-pg (8).NPC",
            },
            { name: "1412dlt-pg (9).DLM", size: "503.75KB" },
            {
              name: "1412dlt-pg (9).NPC",
              size: "9.82KB",
              id: 336,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DALTANGANJ\\1412dlt-pg (9).NPC",
            },
          ],
        },
        {
          name: "DARLIPALLI",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\DARLIPALLI",
          files: [
            { name: "1412dstpp (1).DLM", size: "498.11KB" },
            {
              name: "1412dstpp (1).NPC",
              size: "12.58KB",
              id: 337,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DARLIPALLI\\1412dstpp (1).NPC",
            },
            { name: "1412dstpp (10).DLM", size: "500.04KB" },
            {
              name: "1412dstpp (10).NPC",
              size: "12.76KB",
              id: 338,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DARLIPALLI\\1412dstpp (10).NPC",
            },
            { name: "1412dstpp (11).DLM", size: "496.70KB" },
            {
              name: "1412dstpp (11).NPC",
              size: "12.77KB",
              id: 339,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DARLIPALLI\\1412dstpp (11).NPC",
            },
            { name: "1412dstpp (12).DLM", size: "496.70KB" },
            {
              name: "1412dstpp (12).NPC",
              size: "12.79KB",
              id: 340,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DARLIPALLI\\1412dstpp (12).NPC",
            },
            { name: "1412dstpp (13).DLM", size: "499.96KB" },
            {
              name: "1412dstpp (13).NPC",
              size: "12.79KB",
              id: 341,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DARLIPALLI\\1412dstpp (13).NPC",
            },
            { name: "1412dstpp (2).DLM", size: "488.70KB" },
            {
              name: "1412dstpp (2).NPC",
              size: "12.58KB",
              id: 342,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DARLIPALLI\\1412dstpp (2).NPC",
            },
            { name: "1412dstpp (3).DLM", size: "496.81KB" },
            {
              name: "1412dstpp (3).NPC",
              size: "12.70KB",
              id: 343,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DARLIPALLI\\1412dstpp (3).NPC",
            },
            { name: "1412dstpp (4).DLM", size: "496.10KB" },
            {
              name: "1412dstpp (4).NPC",
              size: "12.69KB",
              id: 344,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DARLIPALLI\\1412dstpp (4).NPC",
            },
            { name: "1412dstpp (5).DLM", size: "497.59KB" },
            {
              name: "1412dstpp (5).NPC",
              size: "12.73KB",
              id: 345,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DARLIPALLI\\1412dstpp (5).NPC",
            },
            { name: "1412dstpp (6).DLM", size: "496.03KB" },
            {
              name: "1412dstpp (6).NPC",
              size: "12.72KB",
              id: 346,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DARLIPALLI\\1412dstpp (6).NPC",
            },
            { name: "1412dstpp (7).DLM", size: "498.66KB" },
            {
              name: "1412dstpp (7).NPC",
              size: "12.76KB",
              id: 347,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DARLIPALLI\\1412dstpp (7).NPC",
            },
            { name: "1412dstpp (8).DLM", size: "494.21KB" },
            {
              name: "1412dstpp (8).NPC",
              size: "12.76KB",
              id: 348,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DARLIPALLI\\1412dstpp (8).NPC",
            },
            { name: "1412dstpp (9).DLM", size: "500.04KB" },
            {
              name: "1412dstpp (9).NPC",
              size: "12.76KB",
              id: 349,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DARLIPALLI\\1412dstpp (9).NPC",
            },
          ],
        },
        {
          name: "DBG",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\DBG",
          files: [
            { name: "1412dbg (1).DLM", size: "510.05KB" },
            {
              name: "1412dbg (1).NPC",
              size: "12.49KB",
              id: 350,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DBG\\1412dbg (1).NPC",
            },
            { name: "1412dbg (10).DLM", size: "498.11KB" },
            {
              name: "1412dbg (10).NPC",
              size: "12.41KB",
              id: 351,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DBG\\1412dbg (10).NPC",
            },
            { name: "1412dbg (11).DLM", size: "519.70KB" },
            {
              name: "1412dbg (11).NPC",
              size: "12.51KB",
              id: 352,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DBG\\1412dbg (11).NPC",
            },
            { name: "1412dbg (12).DLM", size: "519.55KB" },
            {
              name: "1412dbg (12).NPC",
              size: "12.51KB",
              id: 353,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DBG\\1412dbg (12).NPC",
            },
            { name: "1412dbg (13).DLM", size: "504.19KB" },
            {
              name: "1412dbg (13).NPC",
              size: "12.49KB",
              id: 354,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DBG\\1412dbg (13).NPC",
            },
            { name: "1412dbg (2).DLM", size: "500.22KB" },
            {
              name: "1412dbg (2).NPC",
              size: "12.48KB",
              id: 355,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DBG\\1412dbg (2).NPC",
            },
            { name: "1412dbg (3).DLM", size: "499.63KB" },
            {
              name: "1412dbg (3).NPC",
              size: "12.47KB",
              id: 356,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DBG\\1412dbg (3).NPC",
            },
            { name: "1412dbg (4).DLM", size: "520.37KB" },
            {
              name: "1412dbg (4).NPC",
              size: "12.46KB",
              id: 357,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DBG\\1412dbg (4).NPC",
            },
            { name: "1412dbg (5).DLM", size: "520.37KB" },
            {
              name: "1412dbg (5).NPC",
              size: "12.45KB",
              id: 358,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DBG\\1412dbg (5).NPC",
            },
            { name: "1412dbg (6).DLM", size: "520.37KB" },
            {
              name: "1412dbg (6).NPC",
              size: "12.45KB",
              id: 359,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DBG\\1412dbg (6).NPC",
            },
            { name: "1412dbg (7).DLM", size: "520.37KB" },
            {
              name: "1412dbg (7).NPC",
              size: "12.44KB",
              id: 360,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DBG\\1412dbg (7).NPC",
            },
            { name: "1412dbg (8).DLM", size: "501.52KB" },
            {
              name: "1412dbg (8).NPC",
              size: "12.42KB",
              id: 361,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DBG\\1412dbg (8).NPC",
            },
            { name: "1412dbg (9).DLM", size: "505.23KB" },
            {
              name: "1412dbg (9).NPC",
              size: "12.42KB",
              id: 362,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DBG\\1412dbg (9).NPC",
            },
          ],
        },
        {
          name: "DGP",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\DGP",
          files: [
            { name: "1412dgp-pg (1).DLM", size: "518.59KB" },
            {
              name: "1412dgp-pg (1).NPC",
              size: "9.84KB",
              id: 363,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DGP\\1412dgp-pg (1).NPC",
            },
            { name: "1412dgp-pg (2).DLM", size: "518.29KB" },
            {
              name: "1412dgp-pg (2).NPC",
              size: "9.81KB",
              id: 364,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DGP\\1412dgp-pg (2).NPC",
            },
            { name: "1412dgp-pg (3).DLM", size: "496.58KB" },
            {
              name: "1412dgp-pg (3).NPC",
              size: "9.80KB",
              id: 365,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DGP\\1412dgp-pg (3).NPC",
            },
            { name: "1412dgp-pg (4).DLM", size: "498.29KB" },
            {
              name: "1412dgp-pg (4).NPC",
              size: "9.80KB",
              id: 366,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DGP\\1412dgp-pg (4).NPC",
            },
            { name: "1412dgp-pg (5).DLM", size: "498.11KB" },
            {
              name: "1412dgp-pg (5).NPC",
              size: "9.89KB",
              id: 367,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DGP\\1412dgp-pg (5).NPC",
            },
            {
              name: "1412DURGAPUR(DGP).npc",
              size: "138.51KB",
              id: 368,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DGP\\1412DURGAPUR(DGP).npc",
            },
          ],
        },
        {
          name: "DICKCHU",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\DICKCHU",
          files: [
            { name: "1412dikchu (1).DAT", size: "14.91KB" },
            {
              name: "1412dikchu (1).npc",
              size: "13.76KB",
              id: 369,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DICKCHU\\1412dikchu (1).npc",
            },
            { name: "1412dikchu (2).DAT", size: "14.91KB" },
            {
              name: "1412dikchu (2).npc",
              size: "13.76KB",
              id: 370,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DICKCHU\\1412dikchu (2).npc",
            },
            { name: "1412dikchu (3).DAT", size: "14.91KB" },
            {
              name: "1412dikchu (3).npc",
              size: "13.75KB",
              id: 371,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DICKCHU\\1412dikchu (3).npc",
            },
            { name: "1412dikchu (4).DAT", size: "14.91KB" },
            {
              name: "1412dikchu (4).npc",
              size: "13.75KB",
              id: 372,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DICKCHU\\1412dikchu (4).npc",
            },
            { name: "1412dikchu (5).DAT", size: "14.91KB" },
            {
              name: "1412dikchu (5).npc",
              size: "13.75KB",
              id: 373,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DICKCHU\\1412dikchu (5).npc",
            },
            { name: "1412dikchu (6).DAT", size: "14.94KB" },
            {
              name: "1412dikchu (6).npc",
              size: "13.78KB",
              id: 374,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DICKCHU\\1412dikchu (6).npc",
            },
            { name: "1412dikchu (7).DAT", size: "14.94KB" },
            {
              name: "1412dikchu (7).npc",
              size: "13.78KB",
              id: 375,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DICKCHU\\1412dikchu (7).npc",
            },
            { name: "1412dikchu (8).DAT", size: "14.92KB" },
            {
              name: "1412dikchu (8).npc",
              size: "13.77KB",
              id: 376,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DICKCHU\\1412dikchu (8).npc",
            },
            {
              name: "1412DIKCHU.npc",
              size: "10.66KB",
              id: 377,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DICKCHU\\1412DIKCHU.npc",
            },
          ],
        },
        {
          name: "DLK",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\DLK",
          files: [
            { name: "1412dlkPG (1).DLM", size: "501.11KB" },
            {
              name: "1412dlkPG (1).NPC",
              size: "9.83KB",
              id: 378,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DLK\\1412dlkPG (1).NPC",
            },
            { name: "1412dlkPG (2).DLM", size: "501.89KB" },
            {
              name: "1412dlkPG (2).NPC",
              size: "9.83KB",
              id: 379,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DLK\\1412dlkPG (2).NPC",
            },
            { name: "1412dlkPG (3).DLM", size: "518.74KB" },
            {
              name: "1412dlkPG (3).NPC",
              size: "9.85KB",
              id: 380,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DLK\\1412dlkPG (3).NPC",
            },
            { name: "1412dlkPG (4).DLM", size: "518.37KB" },
            {
              name: "1412dlkPG (4).NPC",
              size: "9.86KB",
              id: 381,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DLK\\1412dlkPG (4).NPC",
            },
          ],
        },
        {
          name: "DVC",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\DVC",
          files: [
            {
              name: "1412BARHI(BAR).npc",
              size: "10.53KB",
              id: 382,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DVC\\1412BARHI(BAR).npc",
            },
            {
              name: "1412DHANBAD(DHN).npc",
              size: "21.20KB",
              id: 383,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DVC\\1412DHANBAD(DHN).npc",
            },
            {
              name: "1412DSTPP(AND).npc",
              size: "31.99KB",
              id: 384,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DVC\\1412DSTPP(AND).npc",
            },
            {
              name: "1412JAMSHEDPUR(JAM).npc",
              size: "10.53KB",
              id: 385,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DVC\\1412JAMSHEDPUR(JAM).npc",
            },
            {
              name: "1412KALNESHWARI(KAR).npc",
              size: "10.53KB",
              id: 386,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DVC\\1412KALNESHWARI(KAR).npc",
            },
            {
              name: "1412MAITHON(MAI).npc",
              size: "10.52KB",
              id: 387,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DVC\\1412MAITHON(MAI).npc",
            },
            {
              name: "1412MEJIA(MEJ).npc",
              size: "85.18KB",
              id: 388,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DVC\\1412MEJIA(MEJ).npc",
            },
            {
              name: "1412PATRATU(PTD).npc",
              size: "10.52KB",
              id: 389,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DVC\\1412PATRATU(PTD).npc",
            },
            {
              name: "1412RTPS(RTP).npc",
              size: "74.50KB",
              id: 390,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DVC\\1412RTPS(RTP).npc",
            },
            {
              name: "1412TISCO(TIS).npc",
              size: "18.72KB",
              id: 391,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DVC\\1412TISCO(TIS).npc",
            },
            {
              name: "1412WARIA(WAR).npc",
              size: "21.20KB",
              id: 392,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\DVC\\1412WARIA(WAR).npc",
            },
          ],
        },
        {
          name: "FKK",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\FKK",
          files: [
            { name: "1412fkk (1).DLM", size: "495.84KB" },
            {
              name: "1412fkk (1).NPC",
              size: "9.78KB",
              id: 393,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\FKK\\1412fkk (1).NPC",
            },
            { name: "1412fkk (10).DLM", size: "504.93KB" },
            {
              name: "1412fkk (10).NPC",
              size: "9.81KB",
              id: 394,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\FKK\\1412fkk (10).NPC",
            },
            { name: "1412fkk (11).DLM", size: "504.86KB" },
            {
              name: "1412fkk (11).NPC",
              size: "9.82KB",
              id: 395,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\FKK\\1412fkk (11).NPC",
            },
            { name: "1412fkk (2).DLM", size: "491.38KB" },
            {
              name: "1412fkk (2).NPC",
              size: "9.78KB",
              id: 396,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\FKK\\1412fkk (2).NPC",
            },
            { name: "1412fkk (3).DLM", size: "495.84KB" },
            {
              name: "1412fkk (3).NPC",
              size: "9.78KB",
              id: 397,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\FKK\\1412fkk (3).NPC",
            },
            { name: "1412fkk (4).DLM", size: "491.38KB" },
            {
              name: "1412fkk (4).NPC",
              size: "9.79KB",
              id: 398,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\FKK\\1412fkk (4).NPC",
            },
            { name: "1412fkk (5).DLM", size: "495.84KB" },
            {
              name: "1412fkk (5).NPC",
              size: "9.79KB",
              id: 399,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\FKK\\1412fkk (5).NPC",
            },
            { name: "1412fkk (6).DLM", size: "497.55KB" },
            {
              name: "1412fkk (6).NPC",
              size: "9.79KB",
              id: 400,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\FKK\\1412fkk (6).NPC",
            },
            { name: "1412fkk (7).DLM", size: "503.00KB" },
            {
              name: "1412fkk (7).NPC",
              size: "9.80KB",
              id: 401,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\FKK\\1412fkk (7).NPC",
            },
            { name: "1412fkk (8).DLM", size: "497.70KB" },
            {
              name: "1412fkk (8).NPC",
              size: "9.81KB",
              id: 402,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\FKK\\1412fkk (8).NPC",
            },
            { name: "1412fkk (9).DLM", size: "504.41KB" },
            {
              name: "1412fkk (9).NPC",
              size: "9.81KB",
              id: 403,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\FKK\\1412fkk (9).NPC",
            },
            { name: "1412fkk1.DAT", size: "395.83KB" },
            {
              name: "1412fkk1.npc",
              size: "266.21KB",
              id: 404,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\FKK\\1412fkk1.npc",
            },
          ],
        },
        {
          name: "Gaya",
          size: "12.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\Gaya",
          files: [
            { name: "1412gaya (1).DAT", size: "15.22KB" },
            {
              name: "1412gaya (1).npc",
              size: "14.06KB",
              id: 405,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya (1).npc",
            },
            { name: "1412gaya (10).DAT", size: "15.27KB" },
            {
              name: "1412gaya (10).npc",
              size: "14.10KB",
              id: 406,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya (10).npc",
            },
            { name: "1412gaya (11).DAT", size: "15.27KB" },
            {
              name: "1412gaya (11).npc",
              size: "14.11KB",
              id: 407,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya (11).npc",
            },
            { name: "1412gaya (12).DAT", size: "14.98KB" },
            {
              name: "1412gaya (12).npc",
              size: "13.87KB",
              id: 408,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya (12).npc",
            },
            { name: "1412gaya (13).DAT", size: "14.94KB" },
            {
              name: "1412gaya (13).npc",
              size: "13.81KB",
              id: 409,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya (13).npc",
            },
            { name: "1412gaya (14).DAT", size: "14.92KB" },
            {
              name: "1412gaya (14).npc",
              size: "13.80KB",
              id: 410,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya (14).npc",
            },
            { name: "1412gaya (15).DAT", size: "14.92KB" },
            {
              name: "1412gaya (15).npc",
              size: "13.80KB",
              id: 411,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya (15).npc",
            },
            { name: "1412gaya (16).DAT", size: "14.97KB" },
            {
              name: "1412gaya (16).npc",
              size: "13.84KB",
              id: 412,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya (16).npc",
            },
            { name: "1412gaya (2).DAT", size: "15.31KB" },
            {
              name: "1412gaya (2).npc",
              size: "14.17KB",
              id: 413,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya (2).npc",
            },
            { name: "1412gaya (3).DAT", size: "14.95KB" },
            {
              name: "1412gaya (3).npc",
              size: "13.83KB",
              id: 414,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya (3).npc",
            },
            { name: "1412gaya (4).DAT", size: "15.23KB" },
            {
              name: "1412gaya (4).npc",
              size: "14.08KB",
              id: 415,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya (4).npc",
            },
            { name: "1412gaya (5).DAT", size: "15.23KB" },
            {
              name: "1412gaya (5).npc",
              size: "14.08KB",
              id: 416,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya (5).npc",
            },
            { name: "1412gaya (6).DAT", size: "15.30KB" },
            {
              name: "1412gaya (6).npc",
              size: "14.14KB",
              id: 417,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya (6).npc",
            },
            { name: "1412gaya (7).DAT", size: "15.30KB" },
            {
              name: "1412gaya (7).npc",
              size: "14.14KB",
              id: 418,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya (7).npc",
            },
            { name: "1412gaya (8).DAT", size: "15.31KB" },
            {
              name: "1412gaya (8).npc",
              size: "14.16KB",
              id: 419,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya (8).npc",
            },
            { name: "1412gaya (9).DAT", size: "15.30KB" },
            {
              name: "1412gaya (9).npc",
              size: "14.15KB",
              id: 420,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya (9).npc",
            },
            {
              name: "1412GAYA(GYA).npc",
              size: "10.66KB",
              id: 421,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412GAYA(GYA).npc",
            },
            { name: "1412gaya1 (1).DLM", size: "520.37KB" },
            {
              name: "1412gaya1 (1).NPC",
              size: "11.37KB",
              id: 422,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya1 (1).NPC",
            },
            { name: "1412gaya1 (10).DLM", size: "520.37KB" },
            {
              name: "1412gaya1 (10).NPC",
              size: "11.16KB",
              id: 423,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya1 (10).NPC",
            },
            { name: "1412gaya1 (11).DLM", size: "520.37KB" },
            {
              name: "1412gaya1 (11).NPC",
              size: "11.16KB",
              id: 424,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya1 (11).NPC",
            },
            { name: "1412gaya1 (12).DLM", size: "498.25KB" },
            {
              name: "1412gaya1 (12).NPC",
              size: "11.17KB",
              id: 425,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya1 (12).NPC",
            },
            { name: "1412gaya1 (13).DLM", size: "500.33KB" },
            {
              name: "1412gaya1 (13).NPC",
              size: "11.18KB",
              id: 426,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya1 (13).NPC",
            },
            { name: "1412gaya1 (14).DLM", size: "498.66KB" },
            {
              name: "1412gaya1 (14).NPC",
              size: "11.35KB",
              id: 427,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya1 (14).NPC",
            },
            { name: "1412gaya1 (15).DLM", size: "519.85KB" },
            {
              name: "1412gaya1 (15).NPC",
              size: "11.36KB",
              id: 428,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya1 (15).NPC",
            },
            { name: "1412gaya1 (2).DLM", size: "478.22KB" },
            {
              name: "1412gaya1 (2).NPC",
              size: "11.38KB",
              id: 429,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya1 (2).NPC",
            },
            { name: "1412gaya1 (3).DLM", size: "498.07KB" },
            {
              name: "1412gaya1 (3).NPC",
              size: "11.39KB",
              id: 430,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya1 (3).NPC",
            },
            { name: "1412gaya1 (4).DLM", size: "497.92KB" },
            {
              name: "1412gaya1 (4).NPC",
              size: "11.41KB",
              id: 431,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya1 (4).NPC",
            },
            { name: "1412gaya1 (5).DLM", size: "497.85KB" },
            {
              name: "1412gaya1 (5).NPC",
              size: "11.43KB",
              id: 432,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya1 (5).NPC",
            },
            { name: "1412gaya1 (6).DLM", size: "498.85KB" },
            {
              name: "1412gaya1 (6).NPC",
              size: "11.45KB",
              id: 433,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya1 (6).NPC",
            },
            { name: "1412gaya1 (7).DLM", size: "501.74KB" },
            {
              name: "1412gaya1 (7).NPC",
              size: "11.11KB",
              id: 434,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya1 (7).NPC",
            },
            { name: "1412gaya1 (8).DLM", size: "497.36KB" },
            {
              name: "1412gaya1 (8).NPC",
              size: "11.13KB",
              id: 435,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya1 (8).NPC",
            },
            { name: "1412gaya1 (9).DLM", size: "496.99KB" },
            {
              name: "1412gaya1 (9).NPC",
              size: "11.14KB",
              id: 436,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Gaya\\1412gaya1 (9).NPC",
            },
          ],
        },
        {
          name: "GMR",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\GMR",
          files: [
            { name: "1412gkel (1).DAT", size: "14.88KB" },
            {
              name: "1412gkel (1).npc",
              size: "13.73KB",
              id: 437,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GMR\\1412gkel (1).npc",
            },
            { name: "1412gkel (10).DAT", size: "14.86KB" },
            {
              name: "1412gkel (10).npc",
              size: "13.72KB",
              id: 438,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GMR\\1412gkel (10).npc",
            },
            { name: "1412gkel (2).DAT", size: "14.84KB" },
            {
              name: "1412gkel (2).npc",
              size: "13.70KB",
              id: 439,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GMR\\1412gkel (2).npc",
            },
            { name: "1412gkel (3).DAT", size: "14.81KB" },
            {
              name: "1412gkel (3).npc",
              size: "13.67KB",
              id: 440,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GMR\\1412gkel (3).npc",
            },
            { name: "1412gkel (4).DAT", size: "14.86KB" },
            {
              name: "1412gkel (4).npc",
              size: "13.72KB",
              id: 441,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GMR\\1412gkel (4).npc",
            },
            { name: "1412gkel (5).DAT", size: "14.88KB" },
            {
              name: "1412gkel (5).npc",
              size: "13.73KB",
              id: 442,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GMR\\1412gkel (5).npc",
            },
            { name: "1412gkel (6).DAT", size: "14.88KB" },
            {
              name: "1412gkel (6).npc",
              size: "13.73KB",
              id: 443,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GMR\\1412gkel (6).npc",
            },
            { name: "1412gkel (7).DAT", size: "14.88KB" },
            {
              name: "1412gkel (7).npc",
              size: "13.73KB",
              id: 444,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GMR\\1412gkel (7).npc",
            },
            { name: "1412gkel (8).DAT", size: "14.88KB" },
            {
              name: "1412gkel (8).npc",
              size: "13.73KB",
              id: 445,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GMR\\1412gkel (8).npc",
            },
            { name: "1412gkel (9).DAT", size: "14.86KB" },
            {
              name: "1412gkel (9).npc",
              size: "13.72KB",
              id: 446,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GMR\\1412gkel (9).npc",
            },
          ],
        },
        {
          name: "GRIDCO",
          size: "12.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO",
          files: [
            { name: "14121joda.DAT", size: "15.28KB" },
            {
              name: "14121joda.npc",
              size: "14.00KB",
              id: 447,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\14121joda.npc",
            },
            { name: "1412atri (1).DLM", size: "504.23KB" },
            {
              name: "1412atri (1).NPC",
              size: "13.73KB",
              id: 448,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412atri (1).NPC",
            },
            { name: "1412atri (2).DLM", size: "501.19KB" },
            {
              name: "1412atri (2).NPC",
              size: "13.73KB",
              id: 449,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412atri (2).NPC",
            },
            {
              name: "1412BALASORE(BLS).npc",
              size: "21.20KB",
              id: 450,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412BALASORE(BLS).npc",
            },
            { name: "1412bangriposi.DAT", size: "15.48KB" },
            {
              name: "1412bangriposi.npc",
              size: "14.32KB",
              id: 451,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412bangriposi.npc",
            },
            { name: "1412baripada.DAT", size: "14.97KB" },
            {
              name: "1412baripada.npc",
              size: "13.84KB",
              id: 452,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412baripada.npc",
            },
            { name: "1412bhograi.DLM", size: "529.65KB" },
            {
              name: "1412bhograi.NPC",
              size: "13.73KB",
              id: 453,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412bhograi.NPC",
            },
            {
              name: "1412BUDHIPADAR(BUD).npc",
              size: "31.86KB",
              id: 454,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412BUDHIPADAR(BUD).npc",
            },
            {
              name: "1412JEYNAGAR(JYN).npc",
              size: "21.19KB",
              id: 455,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412JEYNAGAR(JYN).npc",
            },
            { name: "1412jlswr.DLM", size: "529.35KB" },
            {
              name: "1412jlswr.NPC",
              size: "13.78KB",
              id: 456,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412jlswr.NPC",
            },
            {
              name: "1412JODA(JOD).npc",
              size: "30.62KB",
              id: 457,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412JODA(JOD).npc",
            },
            {
              name: "1412KATAPALLI(KTP).npc",
              size: "10.52KB",
              id: 458,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412KATAPALLI(KTP).npc",
            },
            { name: "1412knjr-g (1).DLM", size: "496.58KB" },
            {
              name: "1412knjr-g (1).NPC",
              size: "13.77KB",
              id: 459,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412knjr-g (1).NPC",
            },
            { name: "1412knjr-g (2).DLM", size: "496.40KB" },
            { name: "1412mendhasal (1).DAT", size: "15.36KB" },
            {
              name: "1412mendhasal (1).npc",
              size: "14.19KB",
              id: 460,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412mendhasal (1).npc",
            },
            { name: "1412mendhasal (2).DAT", size: "15.36KB" },
            {
              name: "1412mendhasal (2).npc",
              size: "14.19KB",
              id: 461,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412mendhasal (2).npc",
            },
            { name: "1412mml (1).DLM", size: "521.11KB" },
            {
              name: "1412mml (1).NPC",
              size: "13.89KB",
              id: 462,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412mml (1).NPC",
            },
            { name: "1412mml (2).DLM", size: "488.73KB" },
            {
              name: "1412mml (2).NPC",
              size: "13.86KB",
              id: 463,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412mml (2).NPC",
            },
            { name: "1412mml (3).DLM", size: "491.08KB" },
            {
              name: "1412mml (3).NPC",
              size: "13.87KB",
              id: 464,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412mml (3).NPC",
            },
            { name: "1412mml (4).DLM", size: "510.78KB" },
            {
              name: "1412mml (4).NPC",
              size: "13.87KB",
              id: 465,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412mml (4).NPC",
            },
            { name: "1412mml (5).DLM", size: "518.89KB" },
            {
              name: "1412mml (5).NPC",
              size: "13.90KB",
              id: 466,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412mml (5).NPC",
            },
            { name: "1412mukhiguda.DAT", size: "14.97KB" },
            {
              name: "1412mukhiguda.npc",
              size: "13.85KB",
              id: 467,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412mukhiguda.npc",
            },
            { name: "1412new-dubri (1).DAT", size: "14.91KB" },
            {
              name: "1412new-dubri (1).npc",
              size: "13.78KB",
              id: 468,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412new-dubri (1).npc",
            },
            { name: "1412new-dubri (2).DAT", size: "14.89KB" },
            {
              name: "1412new-dubri (2).npc",
              size: "13.78KB",
              id: 469,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412new-dubri (2).npc",
            },
            { name: "1412rngli (1).DAT", size: "15.34KB" },
            {
              name: "1412rngli (1).npc",
              size: "14.14KB",
              id: 470,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412rngli (1).npc",
            },
            { name: "1412rngli (2).DAT", size: "15.05KB" },
            {
              name: "1412rngli (2).npc",
              size: "13.88KB",
              id: 471,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412rngli (2).npc",
            },
            { name: "1412rngli (3).DAT", size: "15.06KB" },
            {
              name: "1412rngli (3).npc",
              size: "13.88KB",
              id: 472,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412rngli (3).npc",
            },
            { name: "1412sadeipali.DAT", size: "15.11KB" },
            {
              name: "1412sadeipali.npc",
              size: "13.97KB",
              id: 473,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412sadeipali.npc",
            },
            { name: "1412tarkera (1).DAT", size: "14.78KB" },
            {
              name: "1412tarkera (1).npc",
              size: "13.67KB",
              id: 474,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412tarkera (1).npc",
            },
            { name: "1412tarkera (2).DAT", size: "14.77KB" },
            {
              name: "1412tarkera (2).npc",
              size: "13.66KB",
              id: 475,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GRIDCO\\1412tarkera (2).npc",
            },
          ],
        },
        {
          name: "GTK",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\GTK",
          files: [
            {
              name: "1412GANGTOK(GTK).npc",
              size: "63.86KB",
              id: 476,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\GTK\\1412GANGTOK(GTK).npc",
            },
          ],
        },
        {
          name: "IVT",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\IVT",
          files: [
            {
              name: "1412INDRAVATI(IVT).npc",
              size: "10.52KB",
              id: 477,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\IVT\\1412INDRAVATI(IVT).npc",
            },
          ],
        },
        {
          name: "JEYP",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\JEYP",
          files: [
            { name: "1412jeypore (1).DLM", size: "522.30KB" },
            {
              name: "1412jeypore (1).NPC",
              size: "12.85KB",
              id: 478,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JEYP\\1412jeypore (1).NPC",
            },
            { name: "1412jeypore (10).DLM", size: "520.00KB" },
            {
              name: "1412jeypore (10).NPC",
              size: "12.81KB",
              id: 479,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JEYP\\1412jeypore (10).NPC",
            },
            { name: "1412jeypore (11).DLM", size: "523.34KB" },
            {
              name: "1412jeypore (11).NPC",
              size: "12.82KB",
              id: 480,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JEYP\\1412jeypore (11).NPC",
            },
            { name: "1412jeypore (2).DLM", size: "498.25KB" },
            {
              name: "1412jeypore (2).NPC",
              size: "12.74KB",
              id: 481,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JEYP\\1412jeypore (2).NPC",
            },
            { name: "1412jeypore (3).DLM", size: "498.11KB" },
            {
              name: "1412jeypore (3).NPC",
              size: "12.75KB",
              id: 482,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JEYP\\1412jeypore (3).NPC",
            },
            { name: "1412jeypore (4).DLM", size: "497.81KB" },
            {
              name: "1412jeypore (4).NPC",
              size: "12.75KB",
              id: 483,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JEYP\\1412jeypore (4).NPC",
            },
            { name: "1412jeypore (5).DLM", size: "503.15KB" },
            {
              name: "1412jeypore (5).NPC",
              size: "12.76KB",
              id: 484,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JEYP\\1412jeypore (5).NPC",
            },
            { name: "1412jeypore (6).DLM", size: "504.08KB" },
            {
              name: "1412jeypore (6).NPC",
              size: "12.77KB",
              id: 485,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JEYP\\1412jeypore (6).NPC",
            },
            { name: "1412jeypore (7).DLM", size: "518.48KB" },
            {
              name: "1412jeypore (7).NPC",
              size: "12.79KB",
              id: 486,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JEYP\\1412jeypore (7).NPC",
            },
            { name: "1412jeypore (8).DLM", size: "519.93KB" },
            {
              name: "1412jeypore (8).NPC",
              size: "12.79KB",
              id: 487,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JEYP\\1412jeypore (8).NPC",
            },
            { name: "1412jeypore (9).DLM", size: "520.89KB" },
            {
              name: "1412jeypore (9).NPC",
              size: "12.81KB",
              id: 488,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JEYP\\1412jeypore (9).NPC",
            },
            { name: "1412jyp (1).dat", size: "15.23KB" },
            { name: "1412jyp (2).dat", size: "15.23KB" },
            { name: "1412jyp (3).dat", size: "15.24KB" },
            {
              name: "1412jyp1.npc",
              size: "14.12KB",
              id: 489,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\JEYP\\1412jyp1.npc",
            },
            {
              name: "1412jyp2.npc",
              size: "14.12KB",
              id: 490,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\JEYP\\1412jyp2.npc",
            },
            {
              name: "1412jyp3.npc",
              size: "14.13KB",
              id: 491,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\JEYP\\1412jyp3.npc",
            },
          ],
        },
        {
          name: "JIGMELING",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\JIGMELING",
          files: [
            { name: "1412JIG (1).DLM", size: "501.07KB" },
            {
              name: "1412JIG (1).NPC",
              size: "9.64KB",
              id: 492,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JIGMELING\\1412JIG (1).NPC",
            },
            { name: "1412JIG (2).DLM", size: "499.96KB" },
            {
              name: "1412JIG (2).NPC",
              size: "10.92KB",
              id: 493,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JIGMELING\\1412JIG (2).NPC",
            },
          ],
        },
        {
          name: "JKND",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\JKND",
          files: [
            {
              name: "1412.DEOGARH(DEO).npc",
              size: "10.53KB",
              id: 494,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JKND\\1412.DEOGARH(DEO).npc",
            },
            {
              name: "1412CHAIBASA(CHA).npc",
              size: "21.34KB",
              id: 495,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JKND\\1412CHAIBASA(CHA).npc",
            },
            {
              name: "1412CHANDIL(CHN).npc",
              size: "42.53KB",
              id: 496,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JKND\\1412CHANDIL(CHN).npc",
            },
            { name: "1412dalt-juvnl (1).DLM", size: "500.59KB" },
            {
              name: "1412dalt-juvnl (1).NPC",
              size: "9.92KB",
              id: 497,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JKND\\1412dalt-juvnl (1).NPC",
            },
            { name: "1412dalt-juvnl (2).DLM", size: "500.70KB" },
            {
              name: "1412dalt-juvnl (2).NPC",
              size: "9.88KB",
              id: 498,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JKND\\1412dalt-juvnl (2).NPC",
            },
            {
              name: "1412DUMKA(DUM).npc",
              size: "21.20KB",
              id: 499,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JKND\\1412DUMKA(DUM).npc",
            },
            {
              name: "1412GARWA(GAR).npc",
              size: "10.53KB",
              id: 500,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JKND\\1412GARWA(GAR).npc",
            },
            {
              name: "1412HATIA(HAT).npc",
              size: "10.53KB",
              id: 501,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JKND\\1412HATIA(HAT).npc",
            },
            { name: "1412Jamtara.DAT", size: "15.34KB" },
            {
              name: "1412Jamtara.npc",
              size: "14.09KB",
              id: 502,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JKND\\1412Jamtara.npc",
            },
            {
              name: "1412KENDOPOS(KEN).npc",
              size: "21.19KB",
              id: 503,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JKND\\1412KENDOPOS(KEN).npc",
            },
            {
              name: "1412LALMATIA(LLM).npc",
              size: "31.87KB",
              id: 504,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JKND\\1412LALMATIA(LLM).npc",
            },
            {
              name: "1412TENUGHAT(TGT).npc",
              size: "10.52KB",
              id: 505,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JKND\\1412TENUGHAT(TGT).npc",
            },
          ],
        },
        {
          name: "JNDL",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\JNDL",
          files: [
            { name: "1412jitpl (1).DLM", size: "497.44KB" },
            {
              name: "1412jitpl (1).NPC",
              size: "10.61KB",
              id: 506,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JNDL\\1412jitpl (1).NPC",
            },
            { name: "1412jitpl (2).DLM", size: "497.62KB" },
            {
              name: "1412jitpl (2).NPC",
              size: "10.62KB",
              id: 507,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JNDL\\1412jitpl (2).NPC",
            },
            { name: "1412jitpl (3).DLM", size: "496.99KB" },
            {
              name: "1412jitpl (3).NPC",
              size: "10.60KB",
              id: 508,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JNDL\\1412jitpl (3).NPC",
            },
            { name: "1412jitpl (4).DLM", size: "497.88KB" },
            {
              name: "1412jitpl (4).NPC",
              size: "10.60KB",
              id: 509,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JNDL\\1412jitpl (4).NPC",
            },
          ],
        },
        {
          name: "JSR",
          size: "8.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\JSR",
          files: [
            { name: "1412jamshedpur (1).DAT", size: "15.55KB" },
            {
              name: "1412jamshedpur (1).npc",
              size: "14.38KB",
              id: 510,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JSR\\1412jamshedpur (1).npc",
            },
            { name: "1412jamshedpur (10).DAT", size: "14.89KB" },
            {
              name: "1412jamshedpur (10).npc",
              size: "13.77KB",
              id: 511,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JSR\\1412jamshedpur (10).npc",
            },
            { name: "1412jamshedpur (11).DAT", size: "14.89KB" },
            {
              name: "1412jamshedpur (11).npc",
              size: "13.78KB",
              id: 512,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JSR\\1412jamshedpur (11).npc",
            },
            { name: "1412jamshedpur (2).DAT", size: "15.55KB" },
            {
              name: "1412jamshedpur (2).npc",
              size: "14.38KB",
              id: 513,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JSR\\1412jamshedpur (2).npc",
            },
            { name: "1412jamshedpur (3).DAT", size: "15.55KB" },
            {
              name: "1412jamshedpur (3).npc",
              size: "14.36KB",
              id: 514,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JSR\\1412jamshedpur (3).npc",
            },
            { name: "1412jamshedpur (4).DAT", size: "15.55KB" },
            {
              name: "1412jamshedpur (4).npc",
              size: "14.38KB",
              id: 515,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JSR\\1412jamshedpur (4).npc",
            },
            { name: "1412jamshedpur (5).DAT", size: "15.58KB" },
            {
              name: "1412jamshedpur (5).npc",
              size: "14.39KB",
              id: 516,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JSR\\1412jamshedpur (5).npc",
            },
            { name: "1412jamshedpur (6).DAT", size: "15.55KB" },
            {
              name: "1412jamshedpur (6).npc",
              size: "14.37KB",
              id: 517,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JSR\\1412jamshedpur (6).npc",
            },
            { name: "1412jamshedpur (7).DAT", size: "15.56KB" },
            {
              name: "1412jamshedpur (7).npc",
              size: "14.38KB",
              id: 518,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JSR\\1412jamshedpur (7).npc",
            },
            { name: "1412jamshedpur (8).DAT", size: "15.64KB" },
            {
              name: "1412jamshedpur (8).npc",
              size: "14.46KB",
              id: 519,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JSR\\1412jamshedpur (8).npc",
            },
            { name: "1412jamshedpur (9).DAT", size: "14.91KB" },
            {
              name: "1412jamshedpur (9).npc",
              size: "13.69KB",
              id: 520,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JSR\\1412jamshedpur (9).npc",
            },
            { name: "1412jamshedpur1 (1).DLM", size: "498.96KB" },
            {
              name: "1412jamshedpur1 (1).NPC",
              size: "11.06KB",
              id: 521,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JSR\\1412jamshedpur1 (1).NPC",
            },
            { name: "1412jamshedpur1 (2).DLM", size: "498.92KB" },
            {
              name: "1412jamshedpur1 (2).NPC",
              size: "11.68KB",
              id: 522,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JSR\\1412jamshedpur1 (2).NPC",
            },
            { name: "1412jamshedpur1 (3).DLM", size: "500.67KB" },
            {
              name: "1412jamshedpur1 (3).NPC",
              size: "11.71KB",
              id: 523,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JSR\\1412jamshedpur1 (3).NPC",
            },
            { name: "1412jamshedpur1 (4).DLM", size: "495.17KB" },
            {
              name: "1412jamshedpur1 (4).NPC",
              size: "11.76KB",
              id: 524,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JSR\\1412jamshedpur1 (4).NPC",
            },
            { name: "1412jamshedpur1 (5).DLM", size: "498.48KB" },
            {
              name: "1412jamshedpur1 (5).NPC",
              size: "11.77KB",
              id: 525,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JSR\\1412jamshedpur1 (5).NPC",
            },
            { name: "1412jamshedpur1 (6).DLM", size: "498.96KB" },
            {
              name: "1412jamshedpur1 (6).NPC",
              size: "11.06KB",
              id: 526,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JSR\\1412jamshedpur1 (6).NPC",
            },
          ],
        },
        {
          name: "JTNG",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\JTNG",
          files: [
            { name: "1412jlhep.DAT", size: "649.31KB" },
            {
              name: "1412jlhep.npc",
              size: "58.13KB",
              id: 527,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\JTNG\\1412jlhep.npc",
            },
          ],
        },
        {
          name: "KHL",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\KHL",
          files: [
            { name: "1412kahalgan (1).DLM", size: "520.45KB" },
            {
              name: "1412kahalgan (1).NPC",
              size: "9.80KB",
              id: 528,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KHL\\1412kahalgan (1).NPC",
            },
            { name: "1412kahalgan (2).DLM", size: "518.81KB" },
            {
              name: "1412kahalgan (2).NPC",
              size: "9.81KB",
              id: 529,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KHL\\1412kahalgan (2).NPC",
            },
            { name: "1412kahalgan (3).DLM", size: "519.70KB" },
            {
              name: "1412kahalgan (3).NPC",
              size: "9.81KB",
              id: 530,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KHL\\1412kahalgan (3).NPC",
            },
            { name: "1412kahalgan (4).DLM", size: "494.35KB" },
            {
              name: "1412kahalgan (4).NPC",
              size: "9.77KB",
              id: 531,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KHL\\1412kahalgan (4).NPC",
            },
            { name: "1412kahalgan (5).DLM", size: "495.65KB" },
            {
              name: "1412kahalgan (5).NPC",
              size: "9.79KB",
              id: 532,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KHL\\1412kahalgan (5).NPC",
            },
            { name: "1412kahalgan (6).DLM", size: "518.89KB" },
            {
              name: "1412kahalgan (6).NPC",
              size: "9.79KB",
              id: 533,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KHL\\1412kahalgan (6).NPC",
            },
            { name: "1412kahlgan1.MDT", size: "660.05KB" },
            {
              name: "1412kahlgan1.npc",
              size: "436.56KB",
              id: 534,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KHL\\1412kahlgan1.npc",
            },
          ],
        },
        {
          name: "KISHGANJ",
          size: "8.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ",
          files: [
            { name: "1412KSN (1).DLM", size: "499.00KB" },
            {
              name: "1412KSN (1).NPC",
              size: "12.70KB",
              id: 535,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412KSN (1).NPC",
            },
            { name: "1412KSN (10).DLM", size: "502.26KB" },
            {
              name: "1412KSN (10).NPC",
              size: "12.47KB",
              id: 536,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412KSN (10).NPC",
            },
            { name: "1412KSN (11).DLM", size: "504.27KB" },
            {
              name: "1412KSN (11).NPC",
              size: "12.49KB",
              id: 537,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412KSN (11).NPC",
            },
            { name: "1412KSN (12).DLM", size: "496.84KB" },
            {
              name: "1412KSN (12).NPC",
              size: "12.53KB",
              id: 538,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412KSN (12).NPC",
            },
            { name: "1412KSN (13).DLM", size: "496.62KB" },
            {
              name: "1412KSN (13).NPC",
              size: "12.55KB",
              id: 539,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412KSN (13).NPC",
            },
            { name: "1412KSN (2).DLM", size: "498.59KB" },
            {
              name: "1412KSN (2).NPC",
              size: "12.63KB",
              id: 540,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412KSN (2).NPC",
            },
            { name: "1412KSN (3).DLM", size: "496.40KB" },
            {
              name: "1412KSN (3).NPC",
              size: "12.63KB",
              id: 541,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412KSN (3).NPC",
            },
            { name: "1412KSN (4).DLM", size: "496.40KB" },
            {
              name: "1412KSN (4).NPC",
              size: "12.64KB",
              id: 542,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412KSN (4).NPC",
            },
            { name: "1412KSN (5).DLM", size: "496.55KB" },
            {
              name: "1412KSN (5).NPC",
              size: "12.66KB",
              id: 543,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412KSN (5).NPC",
            },
            { name: "1412KSN (7).DLM", size: "498.40KB" },
            {
              name: "1412KSN (7).NPC",
              size: "12.44KB",
              id: 544,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412KSN (7).NPC",
            },
            { name: "1412KSN (8).DLM", size: "498.66KB" },
            {
              name: "1412KSN (8).NPC",
              size: "12.46KB",
              id: 545,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412KSN (8).NPC",
            },
            { name: "1412KSN (9).DLM", size: "498.66KB" },
            {
              name: "1412KSN (9).NPC",
              size: "12.47KB",
              id: 546,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412KSN (9).NPC",
            },
            { name: "1412ksn1 (1).DAT", size: "15.25KB" },
            {
              name: "1412ksn1 (1).npc",
              size: "14.09KB",
              id: 547,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412ksn1 (1).npc",
            },
            { name: "1412ksn1 (10).DAT", size: "14.98KB" },
            {
              name: "1412ksn1 (10).npc",
              size: "13.87KB",
              id: 548,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412ksn1 (10).npc",
            },
            { name: "1412ksn1 (11).DAT", size: "14.97KB" },
            {
              name: "1412ksn1 (11).npc",
              size: "13.84KB",
              id: 549,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412ksn1 (11).npc",
            },
            { name: "1412ksn1 (12).DAT", size: "15.27KB" },
            {
              name: "1412ksn1 (12).npc",
              size: "14.10KB",
              id: 550,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412ksn1 (12).npc",
            },
            { name: "1412ksn1 (13).DAT", size: "15.25KB" },
            {
              name: "1412ksn1 (13).npc",
              size: "14.09KB",
              id: 551,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412ksn1 (13).npc",
            },
            { name: "1412ksn1 (2).DAT", size: "15.25KB" },
            {
              name: "1412ksn1 (2).npc",
              size: "14.10KB",
              id: 552,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412ksn1 (2).npc",
            },
            { name: "1412ksn1 (3).DAT", size: "14.98KB" },
            {
              name: "1412ksn1 (3).npc",
              size: "13.87KB",
              id: 553,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412ksn1 (3).npc",
            },
            { name: "1412ksn1 (4).DAT", size: "15.27KB" },
            {
              name: "1412ksn1 (4).npc",
              size: "14.10KB",
              id: 554,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412ksn1 (4).npc",
            },
            { name: "1412ksn1 (5).DAT", size: "15.27KB" },
            {
              name: "1412ksn1 (5).npc",
              size: "14.10KB",
              id: 555,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412ksn1 (5).npc",
            },
            { name: "1412ksn1 (6).DAT", size: "15.25KB" },
            {
              name: "1412ksn1 (6).npc",
              size: "14.09KB",
              id: 556,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412ksn1 (6).npc",
            },
            { name: "1412ksn1 (7).DAT", size: "15.39KB" },
            {
              name: "1412ksn1 (7).npc",
              size: "14.22KB",
              id: 557,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412ksn1 (7).npc",
            },
            { name: "1412ksn1 (8).DAT", size: "15.25KB" },
            {
              name: "1412ksn1 (8).npc",
              size: "14.10KB",
              id: 558,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412ksn1 (8).npc",
            },
            { name: "1412ksn1 (9).DAT", size: "14.97KB" },
            {
              name: "1412ksn1 (9).npc",
              size: "13.75KB",
              id: 559,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KISHGANJ\\1412ksn1 (9).npc",
            },
          ],
        },
        {
          name: "KNJR",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\KNJR",
          files: [
            { name: "1412knjr-pg (1).DLM", size: "498.48KB" },
            {
              name: "1412knjr-pg (1).NPC",
              size: "9.83KB",
              id: 560,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KNJR\\1412knjr-pg (1).NPC",
            },
            { name: "1412knjr-pg (2).DLM", size: "496.92KB" },
            {
              name: "1412knjr-pg (2).NPC",
              size: "9.77KB",
              id: 561,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KNJR\\1412knjr-pg (2).NPC",
            },
            { name: "1412knjr-pg (3).DLM", size: "496.47KB" },
            {
              name: "1412knjr-pg (3).NPC",
              size: "9.79KB",
              id: 562,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KNJR\\1412knjr-pg (3).NPC",
            },
            { name: "1412knjr-pg (4).DLM", size: "496.25KB" },
            {
              name: "1412knjr-pg (4).NPC",
              size: "9.79KB",
              id: 563,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KNJR\\1412knjr-pg (4).NPC",
            },
            { name: "1412knjr-pg (5).DLM", size: "498.11KB" },
            {
              name: "1412knjr-pg (5).NPC",
              size: "9.81KB",
              id: 564,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KNJR\\1412knjr-pg (5).NPC",
            },
            { name: "1412knjr-pg (6).DLM", size: "497.81KB" },
            {
              name: "1412knjr-pg (6).NPC",
              size: "9.82KB",
              id: 565,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KNJR\\1412knjr-pg (6).NPC",
            },
            { name: "1412knjr-pg1 (1).DAT", size: "15.02KB" },
            {
              name: "1412knjr-pg1 (1).npc",
              size: "13.88KB",
              id: 566,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KNJR\\1412knjr-pg1 (1).npc",
            },
            { name: "1412knjr-pg1 (2).DAT", size: "15.00KB" },
            {
              name: "1412knjr-pg1 (2).npc",
              size: "13.87KB",
              id: 567,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KNJR\\1412knjr-pg1 (2).npc",
            },
            { name: "1412knjr-pg1 (3).DAT", size: "14.98KB" },
            {
              name: "1412knjr-pg1 (3).npc",
              size: "13.86KB",
              id: 568,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\KNJR\\1412knjr-pg1 (3).npc",
            },
          ],
        },
        {
          name: "LAKSARAI",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\LAKSARAI",
          files: [
            { name: "1412lakisarai1.DAT", size: "121.72KB" },
            {
              name: "1412lakisarai1.npc",
              size: "80.91KB",
              id: 569,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\LAKSARAI\\1412lakisarai1.npc",
            },
            { name: "1412lksarai (1).DLM", size: "499.59KB" },
            {
              name: "1412lksarai (1).NPC",
              size: "9.89KB",
              id: 570,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\LAKSARAI\\1412lksarai (1).NPC",
            },
            { name: "1412lksarai (2).DLM", size: "500.00KB" },
            {
              name: "1412lksarai (2).NPC",
              size: "9.89KB",
              id: 571,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\LAKSARAI\\1412lksarai (2).NPC",
            },
            { name: "1412lksarai (3).DLM", size: "506.84KB" },
            {
              name: "1412lksarai (3).NPC",
              size: "9.89KB",
              id: 572,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\LAKSARAI\\1412lksarai (3).NPC",
            },
            { name: "1412lksarai (4).DLM", size: "496.70KB" },
            {
              name: "1412lksarai (4).NPC",
              size: "9.92KB",
              id: 573,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\LAKSARAI\\1412lksarai (4).NPC",
            },
            { name: "1412lksarai (5).DLM", size: "498.14KB" },
            {
              name: "1412lksarai (5).NPC",
              size: "9.92KB",
              id: 574,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\LAKSARAI\\1412lksarai (5).NPC",
            },
            { name: "1412lksarai (6).DLM", size: "485.17KB" },
            {
              name: "1412lksarai (6).NPC",
              size: "9.94KB",
              id: 575,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\LAKSARAI\\1412lksarai (6).NPC",
            },
          ],
        },
        {
          name: "MLB",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\MLB",
          files: [],
        },
        {
          name: "MLD",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\MLD",
          files: [
            {
              name: "1412MALDA(MLP).npc",
              size: "42.53KB",
              id: 576,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MLD\\1412MALDA(MLP).npc",
            },
            { name: "1412malda-pg (1).DLM", size: "519.93KB" },
            {
              name: "1412malda-pg (1).NPC",
              size: "9.89KB",
              id: 577,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MLD\\1412malda-pg (1).NPC",
            },
            { name: "1412malda-pg (10).DLM", size: "497.10KB" },
            {
              name: "1412malda-pg (10).NPC",
              size: "9.86KB",
              id: 578,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MLD\\1412malda-pg (10).NPC",
            },
            { name: "1412malda-pg (11).DLM", size: "512.65KB" },
            {
              name: "1412malda-pg (11).NPC",
              size: "9.87KB",
              id: 579,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MLD\\1412malda-pg (11).NPC",
            },
            { name: "1412malda-pg (12).DLM", size: "499.55KB" },
            {
              name: "1412malda-pg (12).NPC",
              size: "9.88KB",
              id: 580,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MLD\\1412malda-pg (12).NPC",
            },
            { name: "1412malda-pg (13).DLM", size: "509.35KB" },
            {
              name: "1412malda-pg (13).NPC",
              size: "9.88KB",
              id: 581,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MLD\\1412malda-pg (13).NPC",
            },
            { name: "1412malda-pg (14).DLM", size: "497.88KB" },
            {
              name: "1412malda-pg (14).NPC",
              size: "9.89KB",
              id: 582,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MLD\\1412malda-pg (14).NPC",
            },
            { name: "1412malda-pg (15).DLM", size: "496.55KB" },
            {
              name: "1412malda-pg (15).NPC",
              size: "9.89KB",
              id: 583,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MLD\\1412malda-pg (15).NPC",
            },
            { name: "1412malda-pg (2).DLM", size: "518.66KB" },
            {
              name: "1412malda-pg (2).NPC",
              size: "9.91KB",
              id: 584,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MLD\\1412malda-pg (2).NPC",
            },
            { name: "1412malda-pg (3).DLM", size: "509.87KB" },
            {
              name: "1412malda-pg (3).NPC",
              size: "9.93KB",
              id: 585,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MLD\\1412malda-pg (3).NPC",
            },
            { name: "1412malda-pg (4).DLM", size: "502.26KB" },
            {
              name: "1412malda-pg (4).NPC",
              size: "9.81KB",
              id: 586,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MLD\\1412malda-pg (4).NPC",
            },
            { name: "1412malda-pg (5).DLM", size: "503.60KB" },
            {
              name: "1412malda-pg (5).NPC",
              size: "9.82KB",
              id: 587,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MLD\\1412malda-pg (5).NPC",
            },
            { name: "1412malda-pg (6).DLM", size: "512.17KB" },
            {
              name: "1412malda-pg (6).NPC",
              size: "9.84KB",
              id: 588,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MLD\\1412malda-pg (6).NPC",
            },
            { name: "1412malda-pg (7).DLM", size: "510.02KB" },
            {
              name: "1412malda-pg (7).NPC",
              size: "9.84KB",
              id: 589,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MLD\\1412malda-pg (7).NPC",
            },
            { name: "1412malda-pg (8).DLM", size: "497.29KB" },
            {
              name: "1412malda-pg (8).NPC",
              size: "9.84KB",
              id: 590,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MLD\\1412malda-pg (8).NPC",
            },
            { name: "1412malda-pg (9).DLM", size: "497.07KB" },
            {
              name: "1412malda-pg (9).NPC",
              size: "9.84KB",
              id: 591,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MLD\\1412malda-pg (9).NPC",
            },
          ],
        },
        {
          name: "MOTIHARI",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\MOTIHARI",
          files: [
            { name: "1412dmtcl-moti (1).DLM", size: "523.71KB" },
            {
              name: "1412dmtcl-moti (1).NPC",
              size: "9.87KB",
              id: 592,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MOTIHARI\\1412dmtcl-moti (1).NPC",
            },
            { name: "1412dmtcl-moti (10).DLM", size: "504.04KB" },
            {
              name: "1412dmtcl-moti (10).NPC",
              size: "9.79KB",
              id: 593,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MOTIHARI\\1412dmtcl-moti (10).NPC",
            },
            { name: "1412dmtcl-moti (11).DLM", size: "498.18KB" },
            {
              name: "1412dmtcl-moti (11).NPC",
              size: "9.88KB",
              id: 594,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MOTIHARI\\1412dmtcl-moti (11).NPC",
            },
            { name: "1412dmtcl-moti (12).DLM", size: "522.23KB" },
            {
              name: "1412dmtcl-moti (12).NPC",
              size: "9.88KB",
              id: 595,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MOTIHARI\\1412dmtcl-moti (12).NPC",
            },
            { name: "1412dmtcl-moti (2).DLM", size: "498.74KB" },
            {
              name: "1412dmtcl-moti (2).NPC",
              size: "9.87KB",
              id: 596,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MOTIHARI\\1412dmtcl-moti (2).NPC",
            },
            { name: "1412dmtcl-moti (3).DLM", size: "500.96KB" },
            {
              name: "1412dmtcl-moti (3).NPC",
              size: "9.86KB",
              id: 597,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MOTIHARI\\1412dmtcl-moti (3).NPC",
            },
            { name: "1412dmtcl-moti (4).DLM", size: "502.74KB" },
            {
              name: "1412dmtcl-moti (4).NPC",
              size: "9.85KB",
              id: 598,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MOTIHARI\\1412dmtcl-moti (4).NPC",
            },
            { name: "1412dmtcl-moti (5).DLM", size: "505.60KB" },
            {
              name: "1412dmtcl-moti (5).NPC",
              size: "9.83KB",
              id: 599,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MOTIHARI\\1412dmtcl-moti (5).NPC",
            },
            { name: "1412dmtcl-moti (6).DLM", size: "507.09KB" },
            {
              name: "1412dmtcl-moti (6).NPC",
              size: "9.83KB",
              id: 600,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MOTIHARI\\1412dmtcl-moti (6).NPC",
            },
            { name: "1412dmtcl-moti (7).DLM", size: "498.55KB" },
            {
              name: "1412dmtcl-moti (7).NPC",
              size: "9.82KB",
              id: 601,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MOTIHARI\\1412dmtcl-moti (7).NPC",
            },
            { name: "1412dmtcl-moti (8).DLM", size: "498.55KB" },
            { name: "1412dmtcl-moti (9).DLM", size: "506.34KB" },
            {
              name: "1412dmtcl-moti (9).NPC",
              size: "9.81KB",
              id: 602,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MOTIHARI\\1412dmtcl-moti (9).NPC",
            },
          ],
        },
        {
          name: "MPL",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\MPL",
          files: [
            { name: "1412mpl (1).DLM", size: "506.94KB" },
            {
              name: "1412mpl (1).NPC",
              size: "11.05KB",
              id: 603,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MPL\\1412mpl (1).NPC",
            },
            { name: "1412mpl (2).DLM", size: "506.57KB" },
            {
              name: "1412mpl (2).NPC",
              size: "11.20KB",
              id: 604,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MPL\\1412mpl (2).NPC",
            },
            { name: "1412mpl (3).DLM", size: "498.33KB" },
            {
              name: "1412mpl (3).NPC",
              size: "11.22KB",
              id: 605,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MPL\\1412mpl (3).NPC",
            },
            { name: "1412mpl (4).DLM", size: "519.74KB" },
            {
              name: "1412mpl (4).NPC",
              size: "11.23KB",
              id: 606,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MPL\\1412mpl (4).NPC",
            },
            { name: "1412mpl (5).DLM", size: "520.48KB" },
            {
              name: "1412mpl (5).NPC",
              size: "11.25KB",
              id: 607,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MPL\\1412mpl (5).NPC",
            },
            { name: "1412mpl1 (1).DAT", size: "14.92KB" },
            {
              name: "1412mpl1 (1).npc",
              size: "13.77KB",
              id: 608,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MPL\\1412mpl1 (1).npc",
            },
            { name: "1412mpl1 (2).DAT", size: "14.91KB" },
            {
              name: "1412mpl1 (2).npc",
              size: "13.75KB",
              id: 609,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MPL\\1412mpl1 (2).npc",
            },
            { name: "1412mpl1 (3).DAT", size: "14.81KB" },
            {
              name: "1412mpl1 (3).npc",
              size: "13.66KB",
              id: 610,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MPL\\1412mpl1 (3).npc",
            },
            { name: "1412mpl1 (4).DAT", size: "14.97KB" },
            {
              name: "1412mpl1 (4).npc",
              size: "13.80KB",
              id: 611,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MPL\\1412mpl1 (4).npc",
            },
            { name: "1412mpl1 (5).DAT", size: "14.98KB" },
            {
              name: "1412mpl1 (5).npc",
              size: "13.82KB",
              id: 612,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MPL\\1412mpl1 (5).npc",
            },
            { name: "1412mpl1 (6).DAT", size: "14.92KB" },
            {
              name: "1412mpl1 (6).npc",
              size: "13.77KB",
              id: 613,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MPL\\1412mpl1 (6).npc",
            },
          ],
        },
        {
          name: "MTN",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\MTN",
          files: [
            {
              name: "1412MAITHON(MTN).npc",
              size: "244.45KB",
              id: 614,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTN\\1412MAITHON(MTN).npc",
            },
            { name: "1412MTN (1).DLM", size: "535.10KB" },
            {
              name: "1412MTN (1).NPC",
              size: "12.46KB",
              id: 615,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTN\\1412MTN (1).NPC",
            },
            { name: "1412MTN (2).DLM", size: "489.18KB" },
            {
              name: "1412MTN (2).NPC",
              size: "12.43KB",
              id: 616,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTN\\1412MTN (2).NPC",
            },
            { name: "1412MTN (3).DLM", size: "489.37KB" },
            {
              name: "1412MTN (3).NPC",
              size: "12.44KB",
              id: 617,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTN\\1412MTN (3).NPC",
            },
            { name: "1412MTN (4).DLM", size: "496.36KB" },
            {
              name: "1412MTN (4).NPC",
              size: "12.45KB",
              id: 618,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTN\\1412MTN (4).NPC",
            },
            { name: "1412MTN (5).DLM", size: "497.33KB" },
            {
              name: "1412MTN (5).NPC",
              size: "12.45KB",
              id: 619,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTN\\1412MTN (5).NPC",
            },
            {
              name: "1412mtn11.npc",
              size: "10.53KB",
              id: 620,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\MTN\\1412mtn11.npc",
            },
          ],
        },
        {
          name: "MTPS",
          size: "20.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\MTPS",
          files: [
            { name: "1412kbunl (1).DAT", size: "15.11KB" },
            {
              name: "1412kbunl (1).npc",
              size: "13.96KB",
              id: 621,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (1).npc",
            },
            { name: "1412kbunl (10).DAT", size: "15.30KB" },
            {
              name: "1412kbunl (10).npc",
              size: "14.14KB",
              id: 622,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (10).npc",
            },
            { name: "1412kbunl (11).DAT", size: "15.31KB" },
            {
              name: "1412kbunl (11).npc",
              size: "14.16KB",
              id: 623,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (11).npc",
            },
            { name: "1412kbunl (12).DAT", size: "15.17KB" },
            {
              name: "1412kbunl (12).npc",
              size: "14.02KB",
              id: 624,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (12).npc",
            },
            { name: "1412kbunl (13).DAT", size: "15.17KB" },
            {
              name: "1412kbunl (13).npc",
              size: "14.02KB",
              id: 625,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (13).npc",
            },
            { name: "1412kbunl (14).DAT", size: "15.23KB" },
            {
              name: "1412kbunl (14).npc",
              size: "14.08KB",
              id: 626,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (14).npc",
            },
            { name: "1412kbunl (15).DAT", size: "14.92KB" },
            {
              name: "1412kbunl (15).npc",
              size: "13.79KB",
              id: 627,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (15).npc",
            },
            { name: "1412kbunl (16).DAT", size: "15.23KB" },
            {
              name: "1412kbunl (16).npc",
              size: "14.08KB",
              id: 628,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (16).npc",
            },
            { name: "1412kbunl (17).DAT", size: "15.23KB" },
            {
              name: "1412kbunl (17).npc",
              size: "14.08KB",
              id: 629,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (17).npc",
            },
            { name: "1412kbunl (18).DAT", size: "15.25KB" },
            {
              name: "1412kbunl (18).npc",
              size: "14.09KB",
              id: 630,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (18).npc",
            },
            { name: "1412kbunl (19).DAT", size: "15.25KB" },
            {
              name: "1412kbunl (19).npc",
              size: "14.09KB",
              id: 631,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (19).npc",
            },
            { name: "1412kbunl (2).DAT", size: "15.12KB" },
            {
              name: "1412kbunl (2).npc",
              size: "13.97KB",
              id: 632,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (2).npc",
            },
            { name: "1412kbunl (20).DAT", size: "15.25KB" },
            {
              name: "1412kbunl (20).npc",
              size: "14.09KB",
              id: 633,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (20).npc",
            },
            { name: "1412kbunl (21).DAT", size: "15.11KB" },
            {
              name: "1412kbunl (21).npc",
              size: "13.97KB",
              id: 634,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (21).npc",
            },
            { name: "1412kbunl (22).DAT", size: "15.11KB" },
            {
              name: "1412kbunl (22).npc",
              size: "13.97KB",
              id: 635,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (22).npc",
            },
            { name: "1412kbunl (23).DAT", size: "15.11KB" },
            {
              name: "1412kbunl (23).npc",
              size: "13.97KB",
              id: 636,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (23).npc",
            },
            { name: "1412kbunl (24).DAT", size: "15.09KB" },
            {
              name: "1412kbunl (24).npc",
              size: "13.96KB",
              id: 637,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (24).npc",
            },
            { name: "1412kbunl (25).DAT", size: "15.17KB" },
            {
              name: "1412kbunl (25).npc",
              size: "14.02KB",
              id: 638,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (25).npc",
            },
            { name: "1412kbunl (26).DAT", size: "15.09KB" },
            {
              name: "1412kbunl (26).npc",
              size: "13.96KB",
              id: 639,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (26).npc",
            },
            { name: "1412kbunl (27).DAT", size: "15.12KB" },
            {
              name: "1412kbunl (27).npc",
              size: "13.97KB",
              id: 640,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (27).npc",
            },
            { name: "1412kbunl (3).DAT", size: "15.11KB" },
            {
              name: "1412kbunl (3).npc",
              size: "13.96KB",
              id: 641,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (3).npc",
            },
            { name: "1412kbunl (4).DAT", size: "15.19KB" },
            {
              name: "1412kbunl (4).npc",
              size: "14.04KB",
              id: 642,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (4).npc",
            },
            { name: "1412kbunl (5).DAT", size: "15.19KB" },
            {
              name: "1412kbunl (5).npc",
              size: "14.04KB",
              id: 643,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (5).npc",
            },
            { name: "1412kbunl (6).DAT", size: "15.19KB" },
            {
              name: "1412kbunl (6).npc",
              size: "14.04KB",
              id: 644,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (6).npc",
            },
            { name: "1412kbunl (7).DAT", size: "15.22KB" },
            {
              name: "1412kbunl (7).npc",
              size: "14.06KB",
              id: 645,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (7).npc",
            },
            { name: "1412kbunl (8).DAT", size: "15.12KB" },
            {
              name: "1412kbunl (8).npc",
              size: "13.97KB",
              id: 646,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (8).npc",
            },
            { name: "1412kbunl (9).DAT", size: "15.23KB" },
            {
              name: "1412kbunl (9).npc",
              size: "14.08KB",
              id: 647,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl (9).npc",
            },
            { name: "1412kbunl2 (1).DLM", size: "496.62KB" },
            {
              name: "1412kbunl2 (1).NPC",
              size: "11.10KB",
              id: 648,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (1).NPC",
            },
            { name: "1412kbunl2 (10).DLM", size: "520.48KB" },
            {
              name: "1412kbunl2 (10).NPC",
              size: "11.17KB",
              id: 649,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (10).NPC",
            },
            { name: "1412kbunl2 (11).DLM", size: "497.59KB" },
            {
              name: "1412kbunl2 (11).NPC",
              size: "11.18KB",
              id: 650,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (11).NPC",
            },
            { name: "1412kbunl2 (12).DLM", size: "508.53KB" },
            {
              name: "1412kbunl2 (12).NPC",
              size: "9.87KB",
              id: 651,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (12).NPC",
            },
            { name: "1412kbunl2 (13).DLM", size: "508.61KB" },
            {
              name: "1412kbunl2 (13).NPC",
              size: "11.19KB",
              id: 652,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (13).NPC",
            },
            { name: "1412kbunl2 (14).DLM", size: "496.47KB" },
            {
              name: "1412kbunl2 (14).NPC",
              size: "11.20KB",
              id: 653,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (14).NPC",
            },
            { name: "1412kbunl2 (15).DLM", size: "499.00KB" },
            {
              name: "1412kbunl2 (15).NPC",
              size: "11.20KB",
              id: 654,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (15).NPC",
            },
            { name: "1412kbunl2 (16).DLM", size: "499.33KB" },
            {
              name: "1412kbunl2 (16).NPC",
              size: "11.22KB",
              id: 655,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (16).NPC",
            },
            { name: "1412kbunl2 (17).DLM", size: "497.77KB" },
            {
              name: "1412kbunl2 (17).NPC",
              size: "11.22KB",
              id: 656,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (17).NPC",
            },
            { name: "1412kbunl2 (18).DLM", size: "496.66KB" },
            {
              name: "1412kbunl2 (18).NPC",
              size: "11.23KB",
              id: 657,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (18).NPC",
            },
            { name: "1412kbunl2 (19).DLM", size: "500.93KB" },
            {
              name: "1412kbunl2 (19).NPC",
              size: "11.08KB",
              id: 658,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (19).NPC",
            },
            { name: "1412kbunl2 (2).DLM", size: "498.62KB" },
            {
              name: "1412kbunl2 (2).NPC",
              size: "11.11KB",
              id: 659,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (2).NPC",
            },
            { name: "1412kbunl2 (3).DLM", size: "478.37KB" },
            {
              name: "1412kbunl2 (3).NPC",
              size: "11.11KB",
              id: 660,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (3).NPC",
            },
            { name: "1412kbunl2 (4).DLM", size: "478.37KB" },
            {
              name: "1412kbunl2 (4).NPC",
              size: "11.13KB",
              id: 661,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (4).NPC",
            },
            { name: "1412kbunl2 (5).DLM", size: "498.22KB" },
            {
              name: "1412kbunl2 (5).NPC",
              size: "11.13KB",
              id: 662,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (5).NPC",
            },
            { name: "1412kbunl2 (6).DLM", size: "498.88KB" },
            {
              name: "1412kbunl2 (6).NPC",
              size: "11.14KB",
              id: 663,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (6).NPC",
            },
            { name: "1412kbunl2 (7).DLM", size: "498.88KB" },
            {
              name: "1412kbunl2 (7).NPC",
              size: "11.14KB",
              id: 664,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (7).NPC",
            },
            { name: "1412kbunl2 (8).DLM", size: "498.29KB" },
            {
              name: "1412kbunl2 (8).NPC",
              size: "11.15KB",
              id: 665,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (8).NPC",
            },
            { name: "1412kbunl2 (9).DLM", size: "503.78KB" },
            {
              name: "1412kbunl2 (9).NPC",
              size: "11.17KB",
              id: 666,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MTPS\\1412kbunl2 (9).NPC",
            },
          ],
        },
        {
          name: "MZF",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\MZF",
          files: [
            {
              name: "1412MUZAFARPUR(MZP).npc",
              size: "117.18KB",
              id: 667,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MZF\\1412MUZAFARPUR(MZP).npc",
            },
            { name: "1412muzafarpur1 (1).DAT", size: "15.20KB" },
            {
              name: "1412muzafarpur1 (1).npc",
              size: "14.02KB",
              id: 668,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MZF\\1412muzafarpur1 (1).npc",
            },
            { name: "1412muzafarpur1 (2).DAT", size: "15.19KB" },
            {
              name: "1412muzafarpur1 (2).npc",
              size: "14.02KB",
              id: 669,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MZF\\1412muzafarpur1 (2).npc",
            },
            { name: "1412muzafarpur2 (1).DLM", size: "499.29KB" },
            {
              name: "1412muzafarpur2 (1).NPC",
              size: "11.17KB",
              id: 670,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MZF\\1412muzafarpur2 (1).NPC",
            },
            { name: "1412muzafarpur2 (2).DLM", size: "483.82KB" },
            {
              name: "1412muzafarpur2 (2).NPC",
              size: "11.18KB",
              id: 671,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MZF\\1412muzafarpur2 (2).NPC",
            },
            { name: "1412muzafarpur2 (3).DLM", size: "478.88KB" },
            {
              name: "1412muzafarpur2 (3).NPC",
              size: "11.18KB",
              id: 672,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MZF\\1412muzafarpur2 (3).NPC",
            },
            { name: "1412muzafarpur2 (4).DLM", size: "481.93KB" },
            { name: "1412muzafarpur2 (5).DLM", size: "481.38KB" },
            {
              name: "1412muzafarpur2 (5).NPC",
              size: "11.14KB",
              id: 673,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MZF\\1412muzafarpur2 (5).NPC",
            },
            { name: "1412muzafarpur2 (6).DLM", size: "486.25KB" },
            {
              name: "1412muzafarpur2 (6).NPC",
              size: "11.17KB",
              id: 674,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\MZF\\1412muzafarpur2 (6).NPC",
            },
          ],
        },
        {
          name: "NABINAGAR",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\NABINAGAR",
          files: [
            { name: "1412brbcl (1).DLM", size: "496.32KB" },
            {
              name: "1412brbcl (1).NPC",
              size: "9.86KB",
              id: 675,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NABINAGAR\\1412brbcl (1).NPC",
            },
            { name: "1412brbcl (10).DLM", size: "499.40KB" },
            {
              name: "1412brbcl (10).NPC",
              size: "9.87KB",
              id: 676,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NABINAGAR\\1412brbcl (10).NPC",
            },
            { name: "1412brbcl (11).DLM", size: "497.07KB" },
            {
              name: "1412brbcl (11).NPC",
              size: "12.47KB",
              id: 677,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NABINAGAR\\1412brbcl (11).NPC",
            },
            { name: "1412brbcl (2).DLM", size: "499.29KB" },
            {
              name: "1412brbcl (2).NPC",
              size: "11.11KB",
              id: 678,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NABINAGAR\\1412brbcl (2).NPC",
            },
            { name: "1412brbcl (3).DLM", size: "498.11KB" },
            {
              name: "1412brbcl (3).NPC",
              size: "11.11KB",
              id: 679,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NABINAGAR\\1412brbcl (3).NPC",
            },
            { name: "1412brbcl (4).DLM", size: "497.21KB" },
            {
              name: "1412brbcl (4).NPC",
              size: "12.79KB",
              id: 680,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NABINAGAR\\1412brbcl (4).NPC",
            },
            { name: "1412brbcl (5).DLM", size: "496.84KB" },
            {
              name: "1412brbcl (5).NPC",
              size: "12.79KB",
              id: 681,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NABINAGAR\\1412brbcl (5).NPC",
            },
            { name: "1412brbcl (6).DLM", size: "497.10KB" },
            {
              name: "1412brbcl (6).NPC",
              size: "12.78KB",
              id: 682,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NABINAGAR\\1412brbcl (6).NPC",
            },
            { name: "1412brbcl (7).DLM", size: "499.85KB" },
            {
              name: "1412brbcl (7).NPC",
              size: "12.76KB",
              id: 683,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NABINAGAR\\1412brbcl (7).NPC",
            },
            { name: "1412brbcl (8).DLM", size: "498.11KB" },
            {
              name: "1412brbcl (8).NPC",
              size: "12.74KB",
              id: 684,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NABINAGAR\\1412brbcl (8).NPC",
            },
            { name: "1412brbcl (9).DLM", size: "497.18KB" },
            {
              name: "1412brbcl (9).NPC",
              size: "12.72KB",
              id: 685,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NABINAGAR\\1412brbcl (9).NPC",
            },
            { name: "1412brbcl1 (1).DAT", size: "15.33KB" },
            {
              name: "1412brbcl1 (1).npc",
              size: "14.18KB",
              id: 686,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NABINAGAR\\1412brbcl1 (1).npc",
            },
            { name: "1412brbcl1 (2).DAT", size: "15.33KB" },
            {
              name: "1412brbcl1 (2).npc",
              size: "14.17KB",
              id: 687,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NABINAGAR\\1412brbcl1 (2).npc",
            },
            { name: "1412brbcl1 (3).DAT", size: "15.30KB" },
            {
              name: "1412brbcl1 (3).npc",
              size: "14.04KB",
              id: 688,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NABINAGAR\\1412brbcl1 (3).npc",
            },
          ],
        },
        {
          name: "Nepal",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\Nepal",
          files: [
            { name: "1412nepal (1).DLM", size: "520.30KB" },
            {
              name: "1412nepal (1).NPC",
              size: "11.16KB",
              id: 689,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Nepal\\1412nepal (1).NPC",
            },
            { name: "1412nepal (2).DLM", size: "541.08KB" },
            {
              name: "1412nepal (2).NPC",
              size: "11.17KB",
              id: 690,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\Nepal\\1412nepal (2).NPC",
            },
          ],
        },
        {
          name: "NER",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\NER",
          files: [
            {
              name: "1412biswanath.NPC",
              size: "37.58KB",
              id: 691,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NER\\1412biswanath.NPC",
            },
            {
              name: "1412bong (1).npc",
              size: "9.39KB",
              id: 692,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NER\\1412bong (1).npc",
            },
            {
              name: "1412bong (2).npc",
              size: "9.39KB",
              id: 693,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NER\\1412bong (2).npc",
            },
            {
              name: "1412bong (3).npc",
              size: "10.70KB",
              id: 694,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NER\\1412bong (3).npc",
            },
            {
              name: "1412bong (4).npc",
              size: "9.39KB",
              id: 695,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NER\\1412bong (4).npc",
            },
            {
              name: "1412rangia.npc",
              size: "9.30KB",
              id: 696,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NER\\1412rangia.npc",
            },
            {
              name: "1412salakati (1).npc",
              size: "9.39KB",
              id: 697,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NER\\1412salakati (1).npc",
            },
            {
              name: "1412salakati (2).npc",
              size: "9.39KB",
              id: 698,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NER\\1412salakati (2).npc",
            },
            {
              name: "1412salakati (3).npc",
              size: "9.39KB",
              id: 699,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NER\\1412salakati (3).npc",
            },
          ],
        },
        {
          name: "NML",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\NML",
          files: [
            { name: "1412nmelli (1).DLM", size: "498.66KB" },
            {
              name: "1412nmelli (1).NPC",
              size: "10.10KB",
              id: 700,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NML\\1412nmelli (1).NPC",
            },
            { name: "1412nmelli (2).DLM", size: "498.66KB" },
            {
              name: "1412nmelli (2).NPC",
              size: "10.11KB",
              id: 701,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NML\\1412nmelli (2).NPC",
            },
            { name: "1412nmelli1.DAT", size: "30.58KB" },
            {
              name: "1412nmelli1.npc",
              size: "28.21KB",
              id: 702,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NML\\1412nmelli1.npc",
            },
          ],
        },
        {
          name: "NPGC",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\NPGC",
          files: [
            { name: "1412npgc (1).DLM", size: "503.75KB" },
            {
              name: "1412npgc (1).NPC",
              size: "11.15KB",
              id: 703,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NPGC\\1412npgc (1).NPC",
            },
            { name: "1412npgc (10).DLM", size: "496.40KB" },
            { name: "1412npgc (11).DLM", size: "497.21KB" },
            {
              name: "1412npgc (11).NPC",
              size: "11.23KB",
              id: 704,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NPGC\\1412npgc (11).NPC",
            },
            { name: "1412npgc (12).DLM", size: "496.18KB" },
            {
              name: "1412npgc (12).NPC",
              size: "11.26KB",
              id: 705,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NPGC\\1412npgc (12).NPC",
            },
            { name: "1412npgc (13).DLM", size: "496.44KB" },
            {
              name: "1412npgc (13).NPC",
              size: "11.26KB",
              id: 706,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NPGC\\1412npgc (13).NPC",
            },
            { name: "1412npgc (14).DLM", size: "497.55KB" },
            { name: "1412npgc (15).DLM", size: "497.18KB" },
            {
              name: "1412npgc (15).NPC",
              size: "11.07KB",
              id: 707,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NPGC\\1412npgc (15).NPC",
            },
            { name: "1412npgc (2).DLM", size: "502.26KB" },
            {
              name: "1412npgc (2).NPC",
              size: "11.17KB",
              id: 708,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NPGC\\1412npgc (2).NPC",
            },
            { name: "1412npgc (3).DLM", size: "505.97KB" },
            {
              name: "1412npgc (3).NPC",
              size: "11.17KB",
              id: 709,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NPGC\\1412npgc (3).NPC",
            },
            { name: "1412npgc (4).DLM", size: "487.73KB" },
            {
              name: "1412npgc (4).NPC",
              size: "11.18KB",
              id: 710,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NPGC\\1412npgc (4).NPC",
            },
            { name: "1412npgc (5).DLM", size: "502.71KB" },
            {
              name: "1412npgc (5).NPC",
              size: "11.19KB",
              id: 711,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NPGC\\1412npgc (5).NPC",
            },
            { name: "1412npgc (6).DLM", size: "502.86KB" },
            {
              name: "1412npgc (6).NPC",
              size: "11.19KB",
              id: 712,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NPGC\\1412npgc (6).NPC",
            },
            { name: "1412npgc (7).DLM", size: "502.04KB" },
            {
              name: "1412npgc (7).NPC",
              size: "11.20KB",
              id: 713,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NPGC\\1412npgc (7).NPC",
            },
            { name: "1412npgc (8).DLM", size: "502.04KB" },
            {
              name: "1412npgc (8).NPC",
              size: "11.20KB",
              id: 714,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NPGC\\1412npgc (8).NPC",
            },
            { name: "1412npgc (9).DLM", size: "498.74KB" },
            {
              name: "1412npgc (9).NPC",
              size: "11.23KB",
              id: 715,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\NPGC\\1412npgc (9).NPC",
            },
          ],
        },
        {
          name: "NR",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\NR",
          files: [
            {
              name: "1412nr.NPC",
              size: "389.86KB",
              id: 716,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\NR\\1412nr.NPC",
            },
          ],
        },
        {
          name: "OPGC",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\OPGC",
          files: [
            {
              name: "1412OPGC.npc",
              size: "95.84KB",
              id: 717,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\OPGC\\1412OPGC.npc",
            },
          ],
        },
        {
          name: "PAT",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\PAT",
          files: [
            { name: "1412patna (1).DLM", size: "496.88KB" },
            {
              name: "1412patna (1).NPC",
              size: "11.39KB",
              id: 718,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\PAT\\1412patna (1).NPC",
            },
            { name: "1412patna (2).DLM", size: "497.25KB" },
            {
              name: "1412patna (2).NPC",
              size: "11.41KB",
              id: 719,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\PAT\\1412patna (2).NPC",
            },
            { name: "1412patna (3).DLM", size: "497.77KB" },
            {
              name: "1412patna (3).NPC",
              size: "11.42KB",
              id: 720,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\PAT\\1412patna (3).NPC",
            },
            { name: "1412patna (4).DLM", size: "500.33KB" },
            {
              name: "1412patna (4).NPC",
              size: "11.33KB",
              id: 721,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\PAT\\1412patna (4).NPC",
            },
            { name: "1412patna (5).DLM", size: "496.47KB" },
            {
              name: "1412patna (5).NPC",
              size: "11.35KB",
              id: 722,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\PAT\\1412patna (5).NPC",
            },
            { name: "1412patna (6).DLM", size: "502.45KB" },
            {
              name: "1412patna (6).NPC",
              size: "11.37KB",
              id: 723,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\PAT\\1412patna (6).NPC",
            },
            { name: "1412patna (7).DLM", size: "499.40KB" },
            {
              name: "1412patna (7).NPC",
              size: "11.38KB",
              id: 724,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\PAT\\1412patna (7).NPC",
            },
            {
              name: "1412PATNA(PAT).npc",
              size: "170.49KB",
              id: 725,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\PAT\\1412PATNA(PAT).npc",
            },
            { name: "1412patna66 (1).DAT", size: "15.34KB" },
            {
              name: "1412patna66 (1).npc",
              size: "14.19KB",
              id: 726,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\PAT\\1412patna66 (1).npc",
            },
            { name: "1412patna66 (2).DAT", size: "15.33KB" },
            {
              name: "1412patna66 (2).npc",
              size: "14.18KB",
              id: 727,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\PAT\\1412patna66 (2).npc",
            },
            { name: "1412patna66 (3).DAT", size: "15.33KB" },
            {
              name: "1412patna66 (3).npc",
              size: "14.07KB",
              id: 728,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\PAT\\1412patna66 (3).npc",
            },
          ],
        },
        {
          name: "PNBL",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\PNBL",
          files: [
            {
              name: "1412PANDIABIL(PNB).npc",
              size: "85.18KB",
              id: 729,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\PNBL\\1412PANDIABIL(PNB).npc",
            },
            { name: "1412pandiabili (1).DLM", size: "496.62KB" },
            {
              name: "1412pandiabili (1).NPC",
              size: "11.09KB",
              id: 730,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\PNBL\\1412pandiabili (1).NPC",
            },
            { name: "1412pandiabili (2).DLM", size: "496.18KB" },
            {
              name: "1412pandiabili (2).NPC",
              size: "11.10KB",
              id: 731,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\PNBL\\1412pandiabili (2).NPC",
            },
            { name: "1412pandiabili (3).DLM", size: "497.92KB" },
            {
              name: "1412pandiabili (3).NPC",
              size: "11.13KB",
              id: 732,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\PNBL\\1412pandiabili (3).NPC",
            },
            { name: "1412pandiabili (4).DLM", size: "498.88KB" },
            {
              name: "1412pandiabili (4).NPC",
              size: "11.15KB",
              id: 733,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\PNBL\\1412pandiabili (4).NPC",
            },
            { name: "1412pandiabili (5).DLM", size: "503.41KB" },
            {
              name: "1412pandiabili (5).NPC",
              size: "11.10KB",
              id: 734,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\PNBL\\1412pandiabili (5).NPC",
            },
          ],
        },
        {
          name: "PURN",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\PURN",
          files: [
            {
              name: "1412PURNEA(PRN).npc",
              size: "202.48KB",
              id: 735,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\PURN\\1412PURNEA(PRN).npc",
            },
          ],
        },
        {
          name: "RAJARHAT",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\RAJARHAT",
          files: [
            { name: "1412raj.DLM", size: "497.85KB" },
            {
              name: "1412raj.NPC",
              size: "15.03KB",
              id: 736,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RAJARHAT\\1412raj.NPC",
            },
            {
              name: "1412RAJARHAT(RJT).npc",
              size: "149.17KB",
              id: 737,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RAJARHAT\\1412RAJARHAT(RJT).npc",
            },
          ],
        },
        {
          name: "RANCHI",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\RANCHI",
          files: [
            { name: "1412nranchi (1).DLM", size: "498.74KB" },
            {
              name: "1412nranchi (1).NPC",
              size: "9.91KB",
              id: 738,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANCHI\\1412nranchi (1).NPC",
            },
            { name: "1412nranchi (2).DLM", size: "500.80KB" },
            {
              name: "1412nranchi (2).NPC",
              size: "9.84KB",
              id: 739,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANCHI\\1412nranchi (2).NPC",
            },
            { name: "1412nranchi (3).DLM", size: "499.29KB" },
            {
              name: "1412nranchi (3).NPC",
              size: "9.86KB",
              id: 740,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANCHI\\1412nranchi (3).NPC",
            },
            { name: "1412nranchi (4).DLM", size: "524.01KB" },
            {
              name: "1412nranchi (4).NPC",
              size: "9.88KB",
              id: 741,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANCHI\\1412nranchi (4).NPC",
            },
            { name: "1412nranchi (5).DLM", size: "520.59KB" },
            {
              name: "1412nranchi (5).NPC",
              size: "9.89KB",
              id: 742,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANCHI\\1412nranchi (5).NPC",
            },
            { name: "1412nranchi (6).DLM", size: "520.45KB" },
            {
              name: "1412nranchi (6).NPC",
              size: "9.91KB",
              id: 743,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANCHI\\1412nranchi (6).NPC",
            },
            {
              name: "1412RANCHI NEW.npc",
              size: "127.86KB",
              id: 744,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANCHI\\1412RANCHI NEW.npc",
            },
            {
              name: "1412RANCHI(RAN).npc",
              size: "234.51KB",
              id: 745,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANCHI\\1412RANCHI(RAN).npc",
            },
            { name: "2412ranchi3.DLM", size: "495.88KB" },
            {
              name: "2412ranchi3.NPC",
              size: "12.69KB",
              id: 746,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANCHI\\2412ranchi3.NPC",
            },
          ],
        },
        {
          name: "RANGIT",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\RANGIT",
          files: [
            {
              name: "1412RANGIT(RGT).npc",
              size: "149.16KB",
              id: 747,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANGIT\\1412RANGIT(RGT).npc",
            },
          ],
        },
        {
          name: "RANGPO",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\RANGPO",
          files: [
            { name: "1412rangpo (1).DLM", size: "519.85KB" },
            {
              name: "1412rangpo (1).NPC",
              size: "9.92KB",
              id: 748,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANGPO\\1412rangpo (1).NPC",
            },
            { name: "1412rangpo (10).DLM", size: "520.37KB" },
            {
              name: "1412rangpo (10).NPC",
              size: "9.90KB",
              id: 749,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANGPO\\1412rangpo (10).NPC",
            },
            { name: "1412rangpo (11).DLM", size: "496.25KB" },
            {
              name: "1412rangpo (11).NPC",
              size: "9.89KB",
              id: 750,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANGPO\\1412rangpo (11).NPC",
            },
            { name: "1412rangpo (12).DLM", size: "498.66KB" },
            {
              name: "1412rangpo (12).NPC",
              size: "9.92KB",
              id: 751,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANGPO\\1412rangpo (12).NPC",
            },
            { name: "1412rangpo (2).DLM", size: "498.66KB" },
            {
              name: "1412rangpo (2).NPC",
              size: "9.81KB",
              id: 752,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANGPO\\1412rangpo (2).NPC",
            },
            { name: "1412rangpo (3).DLM", size: "498.74KB" },
            {
              name: "1412rangpo (3).NPC",
              size: "9.81KB",
              id: 753,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANGPO\\1412rangpo (3).NPC",
            },
            { name: "1412rangpo (4).DLM", size: "497.99KB" },
            {
              name: "1412rangpo (4).NPC",
              size: "9.83KB",
              id: 754,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANGPO\\1412rangpo (4).NPC",
            },
            { name: "1412rangpo (5).DLM", size: "479.00KB" },
            {
              name: "1412rangpo (5).NPC",
              size: "9.85KB",
              id: 755,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANGPO\\1412rangpo (5).NPC",
            },
            { name: "1412rangpo (6).DLM", size: "478.85KB" },
            {
              name: "1412rangpo (6).NPC",
              size: "9.85KB",
              id: 756,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANGPO\\1412rangpo (6).NPC",
            },
            { name: "1412rangpo (7).DLM", size: "497.47KB" },
            {
              name: "1412rangpo (7).NPC",
              size: "9.86KB",
              id: 757,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANGPO\\1412rangpo (7).NPC",
            },
            { name: "1412rangpo (8).DLM", size: "500.70KB" },
            {
              name: "1412rangpo (8).NPC",
              size: "9.86KB",
              id: 758,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANGPO\\1412rangpo (8).NPC",
            },
            { name: "1412rangpo (9).DLM", size: "499.00KB" },
            {
              name: "1412rangpo (9).NPC",
              size: "9.87KB",
              id: 759,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANGPO\\1412rangpo (9).NPC",
            },
            { name: "1412rangpo1.DAT", size: "150.08KB" },
            {
              name: "1412rangpo1.npc",
              size: "98.43KB",
              id: 760,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RANGPO\\1412rangpo1.npc",
            },
          ],
        },
        {
          name: "RENG",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\RENG",
          files: [
            {
              name: "1412RENGALI(REP).npc",
              size: "85.33KB",
              id: 761,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RENG\\1412RENGALI(REP).npc",
            },
            { name: "1412rengali-pg (1).DLM", size: "518.44KB" },
            {
              name: "1412rengali-pg (1).NPC",
              size: "9.96KB",
              id: 762,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RENG\\1412rengali-pg (1).NPC",
            },
            { name: "1412rengali-pg (2).DLM", size: "520.37KB" },
            {
              name: "1412rengali-pg (2).NPC",
              size: "9.90KB",
              id: 763,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RENG\\1412rengali-pg (2).NPC",
            },
            { name: "1412rengali-pg (3).DLM", size: "518.29KB" },
            {
              name: "1412rengali-pg (3).NPC",
              size: "9.94KB",
              id: 764,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RENG\\1412rengali-pg (3).NPC",
            },
          ],
        },
        {
          name: "RKL",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\RKL",
          files: [
            { name: "1412rkl (1).DAT", size: "15.25KB" },
            {
              name: "1412rkl (1).npc",
              size: "14.10KB",
              id: 765,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RKL\\1412rkl (1).npc",
            },
            { name: "1412rkl (2).DAT", size: "15.22KB" },
            {
              name: "1412rkl (2).npc",
              size: "14.07KB",
              id: 766,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RKL\\1412rkl (2).npc",
            },
            { name: "1412rkl (3).DAT", size: "15.27KB" },
            {
              name: "1412rkl (3).npc",
              size: "14.12KB",
              id: 767,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RKL\\1412rkl (3).npc",
            },
            { name: "1412rkl (4).DAT", size: "15.27KB" },
            {
              name: "1412rkl (4).npc",
              size: "14.00KB",
              id: 768,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RKL\\1412rkl (4).npc",
            },
            { name: "1412rourkela (1).DLM", size: "499.70KB" },
            {
              name: "1412rourkela (1).NPC",
              size: "13.84KB",
              id: 769,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RKL\\1412rourkela (1).NPC",
            },
            { name: "1412rourkela (10).DLM", size: "518.96KB" },
            {
              name: "1412rourkela (10).NPC",
              size: "13.88KB",
              id: 770,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RKL\\1412rourkela (10).NPC",
            },
            { name: "1412rourkela (11).DLM", size: "519.18KB" },
            {
              name: "1412rourkela (11).NPC",
              size: "13.85KB",
              id: 771,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RKL\\1412rourkela (11).NPC",
            },
            { name: "1412rourkela (12).DLM", size: "520.74KB" },
            {
              name: "1412rourkela (12).NPC",
              size: "11.17KB",
              id: 772,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RKL\\1412rourkela (12).NPC",
            },
            { name: "1412rourkela (2).DLM", size: "500.59KB" },
            {
              name: "1412rourkela (2).NPC",
              size: "13.82KB",
              id: 773,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RKL\\1412rourkela (2).NPC",
            },
            { name: "1412rourkela (3).DLM", size: "519.04KB" },
            {
              name: "1412rourkela (3).NPC",
              size: "13.82KB",
              id: 774,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RKL\\1412rourkela (3).NPC",
            },
            { name: "1412rourkela (4).DLM", size: "518.37KB" },
            {
              name: "1412rourkela (4).NPC",
              size: "13.81KB",
              id: 775,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RKL\\1412rourkela (4).NPC",
            },
            { name: "1412rourkela (5).DLM", size: "497.21KB" },
            {
              name: "1412rourkela (5).NPC",
              size: "13.79KB",
              id: 776,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RKL\\1412rourkela (5).NPC",
            },
            { name: "1412rourkela (6).DLM", size: "497.66KB" },
            {
              name: "1412rourkela (6).NPC",
              size: "14.00KB",
              id: 777,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RKL\\1412rourkela (6).NPC",
            },
            { name: "1412rourkela (7).DLM", size: "519.85KB" },
            {
              name: "1412rourkela (7).NPC",
              size: "13.99KB",
              id: 778,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RKL\\1412rourkela (7).NPC",
            },
            { name: "1412rourkela (8).DLM", size: "509.98KB" },
            {
              name: "1412rourkela (8).NPC",
              size: "13.91KB",
              id: 779,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RKL\\1412rourkela (8).NPC",
            },
            { name: "1412rourkela (9).DLM", size: "519.78KB" },
            {
              name: "1412rourkela (9).NPC",
              size: "13.88KB",
              id: 780,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\RKL\\1412rourkela (9).NPC",
            },
          ],
        },
        {
          name: "SASARAM",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\SASARAM",
          files: [
            {
              name: "1412PUSAUL.npc",
              size: "159.83KB",
              id: 781,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SASARAM\\1412PUSAUL.npc",
            },
            { name: "1412pusauli (1).DLM", size: "508.29KB" },
            {
              name: "1412pusauli (1).NPC",
              size: "9.88KB",
              id: 782,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SASARAM\\1412pusauli (1).NPC",
            },
            { name: "1412pusauli (2).DLM", size: "498.66KB" },
            {
              name: "1412pusauli (2).NPC",
              size: "9.88KB",
              id: 783,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SASARAM\\1412pusauli (2).NPC",
            },
            { name: "1412pusauli (3).DLM", size: "496.66KB" },
            {
              name: "1412pusauli (3).NPC",
              size: "9.94KB",
              id: 784,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SASARAM\\1412pusauli (3).NPC",
            },
            { name: "1412pusauli (4).DLM", size: "498.44KB" },
            {
              name: "1412pusauli (4).NPC",
              size: "9.93KB",
              id: 785,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SASARAM\\1412pusauli (4).NPC",
            },
            { name: "1412pusauli (5).DLM", size: "485.28KB" },
            {
              name: "1412pusauli (5).NPC",
              size: "9.92KB",
              id: 786,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SASARAM\\1412pusauli (5).NPC",
            },
            { name: "1412pusauli (6).DLM", size: "498.18KB" },
            {
              name: "1412pusauli (6).NPC",
              size: "9.89KB",
              id: 787,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SASARAM\\1412pusauli (6).NPC",
            },
            { name: "1412pusauli-aux.DAT", size: "74.88KB" },
            {
              name: "1412pusauli-aux.npc",
              size: "49.38KB",
              id: 788,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SASARAM\\1412pusauli-aux.npc",
            },
          ],
        },
        {
          name: "SGRM",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\SGRM",
          files: [
            { name: "1412sgram-pg (1).DLM", size: "518.55KB" },
            {
              name: "1412sgram-pg (1).NPC",
              size: "9.88KB",
              id: 789,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SGRM\\1412sgram-pg (1).NPC",
            },
            { name: "1412sgram-pg (2).DLM", size: "497.36KB" },
            {
              name: "1412sgram-pg (2).NPC",
              size: "9.89KB",
              id: 790,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SGRM\\1412sgram-pg (2).NPC",
            },
            { name: "1412sgram-pg (3).DLM", size: "497.66KB" },
            {
              name: "1412sgram-pg (3).NPC",
              size: "9.89KB",
              id: 791,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SGRM\\1412sgram-pg (3).NPC",
            },
            { name: "1412sgram-pg (4).DLM", size: "518.33KB" },
            {
              name: "1412sgram-pg (4).NPC",
              size: "9.85KB",
              id: 792,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SGRM\\1412sgram-pg (4).NPC",
            },
            { name: "1412sgram-pg (5).DLM", size: "497.40KB" },
            {
              name: "1412sgram-pg (5).NPC",
              size: "9.86KB",
              id: 793,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SGRM\\1412sgram-pg (5).NPC",
            },
            { name: "1412sgram-pg (6).DLM", size: "497.73KB" },
            {
              name: "1412sgram-pg (6).NPC",
              size: "9.87KB",
              id: 794,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SGRM\\1412sgram-pg (6).NPC",
            },
            {
              name: "1412SUBHASHGRAM(SGM).npc",
              size: "159.99KB",
              id: 795,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SGRM\\1412SUBHASHGRAM(SGM).npc",
            },
            {
              name: "1412SUBHASHGRAM(SGM)2.npc",
              size: "10.52KB",
              id: 796,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SGRM\\1412SUBHASHGRAM(SGM)2.npc",
            },
          ],
        },
        {
          name: "SLG",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\SLG",
          files: [
            {
              name: "1412BINAGURI(BIN).npc",
              size: "138.52KB",
              id: 797,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SLG\\1412BINAGURI(BIN).npc",
            },
            { name: "1412bng (1).DLM", size: "520.37KB" },
            {
              name: "1412bng (1).NPC",
              size: "12.39KB",
              id: 798,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SLG\\1412bng (1).NPC",
            },
            { name: "1412bng (2).DLM", size: "512.91KB" },
            {
              name: "1412bng (2).NPC",
              size: "12.41KB",
              id: 799,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SLG\\1412bng (2).NPC",
            },
            { name: "1412bng (3).DLM", size: "519.11KB" },
            {
              name: "1412bng (3).NPC",
              size: "12.41KB",
              id: 800,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SLG\\1412bng (3).NPC",
            },
            { name: "1412bng (4).DLM", size: "518.59KB" },
            {
              name: "1412bng (4).NPC",
              size: "12.46KB",
              id: 801,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SLG\\1412bng (4).NPC",
            },
            { name: "1412bng (5).DLM", size: "518.52KB" },
            {
              name: "1412bng (5).NPC",
              size: "12.54KB",
              id: 802,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SLG\\1412bng (5).NPC",
            },
            { name: "1412bng (6).DLM", size: "498.44KB" },
            {
              name: "1412bng (6).NPC",
              size: "12.56KB",
              id: 803,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SLG\\1412bng (6).NPC",
            },
            { name: "1412siliguri (1).DLM", size: "517.33KB" },
            {
              name: "1412siliguri (1).NPC",
              size: "9.82KB",
              id: 804,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SLG\\1412siliguri (1).NPC",
            },
            { name: "1412siliguri (2).DLM", size: "504.64KB" },
            {
              name: "1412siliguri (2).NPC",
              size: "9.81KB",
              id: 805,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SLG\\1412siliguri (2).NPC",
            },
            { name: "1412siliguri (3).DLM", size: "520.04KB" },
            {
              name: "1412siliguri (3).NPC",
              size: "9.78KB",
              id: 806,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SLG\\1412siliguri (3).NPC",
            },
            { name: "1412siliguri (4).DLM", size: "496.51KB" },
            {
              name: "1412siliguri (4).NPC",
              size: "9.78KB",
              id: 807,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SLG\\1412siliguri (4).NPC",
            },
            { name: "1412siliguri (5).DLM", size: "511.13KB" },
            {
              name: "1412siliguri (5).NPC",
              size: "9.84KB",
              id: 808,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SLG\\1412siliguri (5).NPC",
            },
            { name: "1412siliguri (6).DLM", size: "517.96KB" },
            {
              name: "1412siliguri (6).NPC",
              size: "9.84KB",
              id: 809,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SLG\\1412siliguri (6).NPC",
            },
            { name: "1412siliguri (7).DLM", size: "519.11KB" },
            {
              name: "1412siliguri (7).NPC",
              size: "9.82KB",
              id: 810,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SLG\\1412siliguri (7).NPC",
            },
            { name: "1412siliguri (8).DLM", size: "511.21KB" },
            {
              name: "1412siliguri (8).NPC",
              size: "9.84KB",
              id: 811,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SLG\\1412siliguri (8).NPC",
            },
            { name: "1412siliguri (9).DLM", size: "499.74KB" },
            {
              name: "1412siliguri (9).NPC",
              size: "9.84KB",
              id: 812,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SLG\\1412siliguri (9).NPC",
            },
            {
              name: "1412SILIGURI(SLG).npc",
              size: "21.19KB",
              id: 813,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SLG\\1412SILIGURI(SLG).npc",
            },
          ],
        },
        {
          name: "SND",
          size: "12.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\SND",
          files: [
            { name: "1412snd (1).DLM", size: "518.52KB" },
            {
              name: "1412snd (1).NPC",
              size: "12.80KB",
              id: 814,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (1).NPC",
            },
            { name: "1412snd (10).DLM", size: "498.66KB" },
            {
              name: "1412snd (10).NPC",
              size: "12.51KB",
              id: 815,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (10).NPC",
            },
            { name: "1412snd (11).DLM", size: "513.69KB" },
            {
              name: "1412snd (11).NPC",
              size: "12.50KB",
              id: 816,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (11).NPC",
            },
            { name: "1412snd (12).DLM", size: "498.74KB" },
            {
              name: "1412snd (12).NPC",
              size: "12.52KB",
              id: 817,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (12).NPC",
            },
            { name: "1412snd (13).DLM", size: "502.45KB" },
            {
              name: "1412snd (13).NPC",
              size: "11.23KB",
              id: 818,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (13).NPC",
            },
            { name: "1412snd (14).DLM", size: "501.33KB" },
            {
              name: "1412snd (14).NPC",
              size: "11.27KB",
              id: 819,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (14).NPC",
            },
            { name: "1412snd (15).DLM", size: "520.26KB" },
            {
              name: "1412snd (15).NPC",
              size: "12.68KB",
              id: 820,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (15).NPC",
            },
            { name: "1412snd (16).DLM", size: "520.22KB" },
            {
              name: "1412snd (16).NPC",
              size: "12.68KB",
              id: 821,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (16).NPC",
            },
            { name: "1412snd (17).DLM", size: "505.42KB" },
            {
              name: "1412snd (17).NPC",
              size: "12.69KB",
              id: 822,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (17).NPC",
            },
            { name: "1412snd (18).DLM", size: "520.07KB" },
            {
              name: "1412snd (18).NPC",
              size: "12.71KB",
              id: 823,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (18).NPC",
            },
            { name: "1412snd (19).DLM", size: "501.26KB" },
            {
              name: "1412snd (19).NPC",
              size: "12.71KB",
              id: 824,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (19).NPC",
            },
            { name: "1412snd (2).DLM", size: "542.64KB" },
            {
              name: "1412snd (2).NPC",
              size: "12.41KB",
              id: 825,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (2).NPC",
            },
            { name: "1412snd (20).DLM", size: "501.71KB" },
            {
              name: "1412snd (20).NPC",
              size: "12.73KB",
              id: 826,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (20).NPC",
            },
            { name: "1412snd (21).DLM", size: "518.59KB" },
            {
              name: "1412snd (21).NPC",
              size: "12.74KB",
              id: 827,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (21).NPC",
            },
            { name: "1412snd (22).DLM", size: "518.37KB" },
            {
              name: "1412snd (22).NPC",
              size: "12.76KB",
              id: 828,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (22).NPC",
            },
            { name: "1412snd (23).DLM", size: "518.59KB" },
            {
              name: "1412snd (23).NPC",
              size: "12.76KB",
              id: 829,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (23).NPC",
            },
            { name: "1412snd (24).DLM", size: "518.89KB" },
            {
              name: "1412snd (24).NPC",
              size: "12.77KB",
              id: 830,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (24).NPC",
            },
            { name: "1412snd (25).DLM", size: "507.94KB" },
            {
              name: "1412snd (25).NPC",
              size: "12.79KB",
              id: 831,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (25).NPC",
            },
            { name: "1412snd (3).DLM", size: "520.45KB" },
            {
              name: "1412snd (3).NPC",
              size: "12.43KB",
              id: 832,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (3).NPC",
            },
            { name: "1412snd (4).DLM", size: "519.93KB" },
            {
              name: "1412snd (4).NPC",
              size: "12.44KB",
              id: 833,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (4).NPC",
            },
            { name: "1412snd (5).DLM", size: "498.66KB" },
            {
              name: "1412snd (5).NPC",
              size: "12.46KB",
              id: 834,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (5).NPC",
            },
            { name: "1412snd (6).DLM", size: "502.45KB" },
            {
              name: "1412snd (6).NPC",
              size: "12.47KB",
              id: 835,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (6).NPC",
            },
            { name: "1412snd (7).DLM", size: "499.03KB" },
            {
              name: "1412snd (7).NPC",
              size: "12.47KB",
              id: 836,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (7).NPC",
            },
            { name: "1412snd (8).DLM", size: "502.15KB" },
            {
              name: "1412snd (8).NPC",
              size: "12.48KB",
              id: 837,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (8).NPC",
            },
            { name: "1412snd (9).DLM", size: "512.95KB" },
            {
              name: "1412snd (9).NPC",
              size: "12.49KB",
              id: 838,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd (9).NPC",
            },
            { name: "1412snd1 (1).DAT", size: "15.38KB" },
            {
              name: "1412snd1 (1).npc",
              size: "14.21KB",
              id: 839,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd1 (1).npc",
            },
            { name: "1412snd1 (2).DAT", size: "15.69KB" },
            {
              name: "1412snd1 (2).npc",
              size: "10.69KB",
              id: 840,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd1 (2).npc",
            },
            { name: "1412snd1 (3).DAT", size: "15.12KB" },
            {
              name: "1412snd1 (3).npc",
              size: "13.97KB",
              id: 841,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd1 (3).npc",
            },
            { name: "1412snd1 (4).DAT", size: "15.36KB" },
            {
              name: "1412snd1 (4).npc",
              size: "14.19KB",
              id: 842,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd1 (4).npc",
            },
            { name: "1412snd1 (5).DAT", size: "15.16KB" },
            {
              name: "1412snd1 (5).npc",
              size: "14.02KB",
              id: 843,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd1 (5).npc",
            },
            { name: "1412snd1 (6).DAT", size: "15.16KB" },
            {
              name: "1412snd1 (6).npc",
              size: "13.92KB",
              id: 844,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\SND\\1412snd1 (6).npc",
            },
          ],
        },
        {
          name: "SR",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\SR",
          files: [
            {
              name: "1412GZWK.npc",
              size: "39.38KB",
              id: 845,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\SR\\1412GZWK.npc",
            },
            {
              name: "1412SKLM.npc",
              size: "28.35KB",
              id: 846,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\SR\\1412SKLM.npc",
            },
          ],
        },
        {
          name: "TAL",
          size: "16.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\TAL",
          files: [
            {
              name: "1412talcher.npc",
              size: "10.53KB",
              id: 847,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412talcher.npc",
            },
            { name: "1412TLS (1).DAT", size: "15.14KB" },
            {
              name: "1412TLS (1).npc",
              size: "13.97KB",
              id: 848,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TLS (1).npc",
            },
            { name: "1412TLS (10).DAT", size: "15.02KB" },
            {
              name: "1412TLS (10).npc",
              size: "13.86KB",
              id: 849,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TLS (10).npc",
            },
            { name: "1412TLS (11).DAT", size: "15.03KB" },
            {
              name: "1412TLS (11).npc",
              size: "13.87KB",
              id: 850,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TLS (11).npc",
            },
            { name: "1412TLS (12).DAT", size: "15.00KB" },
            {
              name: "1412TLS (12).npc",
              size: "13.84KB",
              id: 851,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TLS (12).npc",
            },
            { name: "1412TLS (2).DAT", size: "15.03KB" },
            {
              name: "1412TLS (2).npc",
              size: "13.87KB",
              id: 852,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TLS (2).npc",
            },
            { name: "1412TLS (3).DAT", size: "15.16KB" },
            {
              name: "1412TLS (3).npc",
              size: "13.99KB",
              id: 853,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TLS (3).npc",
            },
            { name: "1412TLS (4).DAT", size: "15.16KB" },
            {
              name: "1412TLS (4).npc",
              size: "13.99KB",
              id: 854,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TLS (4).npc",
            },
            { name: "1412TLS (5).DAT", size: "15.16KB" },
            {
              name: "1412TLS (5).npc",
              size: "13.99KB",
              id: 855,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TLS (5).npc",
            },
            { name: "1412TLS (6).DAT", size: "15.03KB" },
            {
              name: "1412TLS (6).npc",
              size: "13.87KB",
              id: 856,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TLS (6).npc",
            },
            { name: "1412TLS (7).DAT", size: "15.14KB" },
            {
              name: "1412TLS (7).npc",
              size: "13.97KB",
              id: 857,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TLS (7).npc",
            },
            { name: "1412TLS (8).DAT", size: "15.16KB" },
            {
              name: "1412TLS (8).npc",
              size: "13.99KB",
              id: 858,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TLS (8).npc",
            },
            { name: "1412TLS (9).DAT", size: "15.03KB" },
            {
              name: "1412TLS (9).npc",
              size: "13.87KB",
              id: 859,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TLS (9).npc",
            },
            { name: "1412TST (1).DAT", size: "15.06KB" },
            {
              name: "1412TST (1).npc",
              size: "13.91KB",
              id: 860,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (1).npc",
            },
            { name: "1412TST (10).DAT", size: "15.00KB" },
            {
              name: "1412TST (10).npc",
              size: "13.85KB",
              id: 861,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (10).npc",
            },
            { name: "1412TST (11).DAT", size: "14.98KB" },
            {
              name: "1412TST (11).npc",
              size: "13.83KB",
              id: 862,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (11).npc",
            },
            { name: "1412TST (12).DAT", size: "14.98KB" },
            {
              name: "1412TST (12).npc",
              size: "13.83KB",
              id: 863,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (12).npc",
            },
            { name: "1412TST (13).DAT", size: "14.98KB" },
            {
              name: "1412TST (13).npc",
              size: "13.84KB",
              id: 864,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (13).npc",
            },
            { name: "1412TST (14).DAT", size: "14.98KB" },
            {
              name: "1412TST (14).npc",
              size: "13.83KB",
              id: 865,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (14).npc",
            },
            { name: "1412TST (15).DAT", size: "15.06KB" },
            {
              name: "1412TST (15).npc",
              size: "13.91KB",
              id: 866,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (15).npc",
            },
            { name: "1412TST (16).DAT", size: "15.06KB" },
            {
              name: "1412TST (16).npc",
              size: "13.92KB",
              id: 867,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (16).npc",
            },
            { name: "1412TST (17).DAT", size: "15.00KB" },
            {
              name: "1412TST (17).npc",
              size: "13.84KB",
              id: 868,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (17).npc",
            },
            { name: "1412TST (18).DAT", size: "15.06KB" },
            { name: "1412TST (19).DAT", size: "14.98KB" },
            {
              name: "1412TST (19).npc",
              size: "13.83KB",
              id: 869,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (19).npc",
            },
            { name: "1412TST (2).DAT", size: "15.06KB" },
            {
              name: "1412TST (2).npc",
              size: "13.91KB",
              id: 870,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (2).npc",
            },
            { name: "1412TST (20).DAT", size: "15.00KB" },
            {
              name: "1412TST (20).npc",
              size: "13.84KB",
              id: 871,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (20).npc",
            },
            { name: "1412TST (21).DAT", size: "14.98KB" },
            {
              name: "1412TST (21).npc",
              size: "13.83KB",
              id: 872,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (21).npc",
            },
            { name: "1412TST (22).DAT", size: "14.98KB" },
            {
              name: "1412TST (22).npc",
              size: "13.83KB",
              id: 873,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (22).npc",
            },
            { name: "1412TST (23).DAT", size: "15.00KB" },
            {
              name: "1412TST (23).npc",
              size: "13.84KB",
              id: 874,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (23).npc",
            },
            { name: "1412TST (24).DAT", size: "15.00KB" },
            {
              name: "1412TST (24).npc",
              size: "13.85KB",
              id: 875,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (24).npc",
            },
            { name: "1412TST (25).DAT", size: "15.06KB" },
            {
              name: "1412TST (25).npc",
              size: "13.91KB",
              id: 876,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (25).npc",
            },
            { name: "1412TST (26).DAT", size: "15.00KB" },
            {
              name: "1412TST (26).npc",
              size: "13.84KB",
              id: 877,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (26).npc",
            },
            { name: "1412TST (27).DAT", size: "15.06KB" },
            {
              name: "1412TST (27).npc",
              size: "13.91KB",
              id: 878,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (27).npc",
            },
            { name: "1412TST (3).DAT", size: "15.06KB" },
            {
              name: "1412TST (3).npc",
              size: "13.91KB",
              id: 879,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (3).npc",
            },
            { name: "1412TST (4).DAT", size: "15.06KB" },
            {
              name: "1412TST (4).npc",
              size: "13.91KB",
              id: 880,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (4).npc",
            },
            { name: "1412TST (5).DAT", size: "15.00KB" },
            {
              name: "1412TST (5).npc",
              size: "13.84KB",
              id: 881,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (5).npc",
            },
            { name: "1412TST (6).DAT", size: "15.06KB" },
            {
              name: "1412TST (6).npc",
              size: "13.91KB",
              id: 882,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (6).npc",
            },
            { name: "1412TST (7).DAT", size: "14.98KB" },
            {
              name: "1412TST (7).npc",
              size: "13.83KB",
              id: 883,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (7).npc",
            },
            { name: "1412TST (8).DAT", size: "14.98KB" },
            {
              name: "1412TST (8).npc",
              size: "13.84KB",
              id: 884,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (8).npc",
            },
            { name: "1412TST (9).DAT", size: "14.98KB" },
            {
              name: "1412TST (9).npc",
              size: "13.74KB",
              id: 885,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TAL\\1412TST (9).npc",
            },
          ],
        },
        {
          name: "TEESTA-III",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\TEESTA-III",
          files: [
            { name: "1412teestaIII (1).DLM", size: "237.15KB" },
            {
              name: "1412teestaIII (1).NPC",
              size: "9.76KB",
              id: 886,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TEESTA-III\\1412teestaIII (1).NPC",
            },
            { name: "1412teestaIII (10).DLM", size: "238.44KB" },
            {
              name: "1412teestaIII (10).NPC",
              size: "9.75KB",
              id: 887,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TEESTA-III\\1412teestaIII (10).NPC",
            },
            { name: "1412teestaIII (2).DLM", size: "235.45KB" },
            {
              name: "1412teestaIII (2).NPC",
              size: "9.72KB",
              id: 888,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TEESTA-III\\1412teestaIII (2).NPC",
            },
            { name: "1412teestaIII (3).DLM", size: "235.08KB" },
            {
              name: "1412teestaIII (3).NPC",
              size: "9.72KB",
              id: 889,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TEESTA-III\\1412teestaIII (3).NPC",
            },
            { name: "1412teestaIII (4).DLM", size: "103.08KB" },
            {
              name: "1412teestaIII (4).NPC",
              size: "9.73KB",
              id: 890,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TEESTA-III\\1412teestaIII (4).NPC",
            },
            { name: "1412teestaIII (5).DLM", size: "252.53KB" },
            {
              name: "1412teestaIII (5).NPC",
              size: "9.73KB",
              id: 891,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TEESTA-III\\1412teestaIII (5).NPC",
            },
            { name: "1412teestaIII (6).DLM", size: "252.53KB" },
            {
              name: "1412teestaIII (6).NPC",
              size: "9.73KB",
              id: 892,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TEESTA-III\\1412teestaIII (6).NPC",
            },
            { name: "1412teestaIII (7).DLM", size: "255.13KB" },
            {
              name: "1412teestaIII (7).NPC",
              size: "9.73KB",
              id: 893,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TEESTA-III\\1412teestaIII (7).NPC",
            },
            { name: "1412teestaIII (8).DLM", size: "255.33KB" },
            {
              name: "1412teestaIII (8).NPC",
              size: "9.74KB",
              id: 894,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TEESTA-III\\1412teestaIII (8).NPC",
            },
            { name: "1412teestaIII (9).DLM", size: "235.92KB" },
            {
              name: "1412teestaIII (9).NPC",
              size: "9.75KB",
              id: 895,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TEESTA-III\\1412teestaIII (9).NPC",
            },
          ],
        },
        {
          name: "TEESTA-V",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\TEESTA-V",
          files: [
            {
              name: "1412TEESTA(TES).npc",
              size: "71.54KB",
              id: 896,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TEESTA-V\\1412TEESTA(TES).npc",
            },
          ],
        },
        {
          name: "TSDNG",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\TSDNG",
          files: [
            { name: "1412tshdng (1).DLM", size: "257.46KB" },
            {
              name: "1412tshdng (1).NPC",
              size: "9.88KB",
              id: 897,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TSDNG\\1412tshdng (1).NPC",
            },
            { name: "1412tshdng (2).DLM", size: "257.69KB" },
            {
              name: "1412tshdng (2).NPC",
              size: "9.89KB",
              id: 898,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TSDNG\\1412tshdng (2).NPC",
            },
            { name: "1412tshdng (3).DLM", size: "236.67KB" },
            {
              name: "1412tshdng (3).NPC",
              size: "9.87KB",
              id: 899,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TSDNG\\1412tshdng (3).NPC",
            },
            { name: "1412tshdng (4).DLM", size: "236.29KB" },
            {
              name: "1412tshdng (4).NPC",
              size: "9.87KB",
              id: 900,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TSDNG\\1412tshdng (4).NPC",
            },
            { name: "1412tshdng (5).DLM", size: "235.56KB" },
            {
              name: "1412tshdng (5).NPC",
              size: "9.88KB",
              id: 901,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TSDNG\\1412tshdng (5).NPC",
            },
            { name: "1412tshdng (6).DLM", size: "235.56KB" },
            {
              name: "1412tshdng (6).NPC",
              size: "9.88KB",
              id: 902,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\TSDNG\\1412tshdng (6).NPC",
            },
          ],
        },
        {
          name: "VEDANTA",
          size: "0.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\VEDANTA",
          files: [],
        },
        {
          name: "WBSEB",
          size: "28.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB",
          files: [
            { name: "1412bantola_newtown (1).DLM", size: "528.94KB" },
            {
              name: "1412bantola_newtown (1).NPC",
              size: "11.37KB",
              id: 903,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412bantola_newtown (1).NPC",
            },
            { name: "1412bantola_newtown (2).DLM", size: "519.55KB" },
            {
              name: "1412bantola_newtown (2).NPC",
              size: "11.41KB",
              id: 904,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412bantola_newtown (2).NPC",
            },
            { name: "1412BDN.DLM", size: "519.18KB" },
            {
              name: "1412BDN.NPC",
              size: "12.63KB",
              id: 905,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412BDN.NPC",
            },
            {
              name: "1412BIDHANNAGAR(BDN).npc",
              size: "21.32KB",
              id: 906,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412BIDHANNAGAR(BDN).npc",
            },
            {
              name: "1412BIRPARA(BIR).npc",
              size: "21.20KB",
              id: 907,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412BIRPARA(BIR).npc",
            },
            {
              name: "1412DALKHOLA(DAL).npc",
              size: "31.86KB",
              id: 908,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412DALKHOLA(DAL).npc",
            },
            {
              name: "1412EMSS(EMS).npc",
              size: "21.20KB",
              id: 909,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412EMSS(EMS).npc",
            },
            { name: "1412gajole (1).DLM", size: "518.66KB" },
            {
              name: "1412gajole (1).NPC",
              size: "9.72KB",
              id: 910,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412gajole (1).NPC",
            },
            { name: "1412gajole (2).DLM", size: "518.52KB" },
            {
              name: "1412gajole (2).NPC",
              size: "9.69KB",
              id: 911,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412gajole (2).NPC",
            },
            { name: "1412gajole (3).DLM", size: "518.66KB" },
            {
              name: "1412gajole (3).NPC",
              size: "9.69KB",
              id: 912,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412gajole (3).NPC",
            },
            { name: "1412gajole (4).DLM", size: "518.66KB" },
            {
              name: "1412gajole (4).NPC",
              size: "9.70KB",
              id: 913,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412gajole (4).NPC",
            },
            { name: "1412Gokarna (1).DLM", size: "499.66KB" },
            {
              name: "1412Gokarna (1).NPC",
              size: "11.48KB",
              id: 914,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412Gokarna (1).NPC",
            },
            { name: "1412Gokarna (2).DLM", size: "501.15KB" },
            {
              name: "1412Gokarna (2).NPC",
              size: "11.50KB",
              id: 915,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412Gokarna (2).NPC",
            },
            {
              name: "1412HALDIA(HAL).npc",
              size: "21.19KB",
              id: 916,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412HALDIA(HAL).npc",
            },
            { name: "1412Jrt1 (1).DLM", size: "498.77KB" },
            {
              name: "1412Jrt1 (1).NPC",
              size: "12.73KB",
              id: 917,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412Jrt1 (1).NPC",
            },
            { name: "1412Jrt1 (2).DLM", size: "523.75KB" },
            {
              name: "1412Jrt1 (2).NPC",
              size: "12.74KB",
              id: 918,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412Jrt1 (2).NPC",
            },
            { name: "1412Jrt1 (3).DLM", size: "520.41KB" },
            {
              name: "1412Jrt1 (3).NPC",
              size: "12.72KB",
              id: 919,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412Jrt1 (3).NPC",
            },
            { name: "1412Jrt1 (4).DLM", size: "519.37KB" },
            {
              name: "1412Jrt1 (4).NPC",
              size: "12.76KB",
              id: 920,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412Jrt1 (4).NPC",
            },
            { name: "1412kal.DAT", size: "15.34KB" },
            {
              name: "1412kal.npc",
              size: "14.09KB",
              id: 921,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412kal.npc",
            },
            {
              name: "1412KHARAGPUR (KSG).npc",
              size: "31.87KB",
              id: 922,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412KHARAGPUR (KSG).npc",
            },
            {
              name: "1412KURSEONG(KSG).npc",
              size: "21.20KB",
              id: 923,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412KURSEONG(KSG).npc",
            },
            { name: "1412malda (1).DAT", size: "14.94KB" },
            {
              name: "1412malda (1).npc",
              size: "13.81KB",
              id: 924,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412malda (1).npc",
            },
            { name: "1412malda (2).DAT", size: "14.95KB" },
            {
              name: "1412malda (2).npc",
              size: "13.83KB",
              id: 925,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412malda (2).npc",
            },
            {
              name: "1412MALDA(MAL).npc",
              size: "21.20KB",
              id: 926,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412MALDA(MAL).npc",
            },
            {
              name: "1412MELLI(MEL).npc",
              size: "42.52KB",
              id: 927,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412MELLI(MEL).npc",
            },
            { name: "1412MTPS (1).DLM", size: "498.11KB" },
            {
              name: "1412MTPS (1).NPC",
              size: "12.37KB",
              id: 928,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412MTPS (1).NPC",
            },
            { name: "1412MTPS (2).DLM", size: "497.96KB" },
            {
              name: "1412MTPS (2).NPC",
              size: "12.37KB",
              id: 929,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412MTPS (2).NPC",
            },
            {
              name: "1412NBU(NBU).npc",
              size: "10.53KB",
              id: 930,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412NBU(NBU).npc",
            },
            {
              name: "1412PPSP NEW.npc",
              size: "21.20KB",
              id: 931,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412PPSP NEW.npc",
            },
            {
              name: "1412RAVANGLA(RAV).npc",
              size: "10.53KB",
              id: 932,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412RAVANGLA(RAV).npc",
            },
            { name: "1412sagardighi (1).DAT", size: "15.25KB" },
            {
              name: "1412sagardighi (1).npc",
              size: "14.09KB",
              id: 933,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412sagardighi (1).npc",
            },
            { name: "1412sagardighi (10).DAT", size: "15.25KB" },
            {
              name: "1412sagardighi (10).npc",
              size: "14.09KB",
              id: 934,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412sagardighi (10).npc",
            },
            { name: "1412sagardighi (11).DAT", size: "15.25KB" },
            {
              name: "1412sagardighi (11).npc",
              size: "14.09KB",
              id: 935,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412sagardighi (11).npc",
            },
            { name: "1412sagardighi (12).DAT", size: "15.25KB" },
            {
              name: "1412sagardighi (12).npc",
              size: "14.09KB",
              id: 936,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412sagardighi (12).npc",
            },
            { name: "1412sagardighi (2).DAT", size: "15.23KB" },
            {
              name: "1412sagardighi (2).npc",
              size: "14.08KB",
              id: 937,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412sagardighi (2).npc",
            },
            { name: "1412sagardighi (3).DAT", size: "15.23KB" },
            {
              name: "1412sagardighi (3).npc",
              size: "14.08KB",
              id: 938,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412sagardighi (3).npc",
            },
            { name: "1412sagardighi (4).DAT", size: "15.23KB" },
            {
              name: "1412sagardighi (4).npc",
              size: "14.08KB",
              id: 939,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412sagardighi (4).npc",
            },
            { name: "1412sagardighi (5).DAT", size: "15.23KB" },
            {
              name: "1412sagardighi (5).npc",
              size: "14.08KB",
              id: 940,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412sagardighi (5).npc",
            },
            { name: "1412sagardighi (6).DAT", size: "14.98KB" },
            {
              name: "1412sagardighi (6).npc",
              size: "13.86KB",
              id: 941,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412sagardighi (6).npc",
            },
            { name: "1412sagardighi (7).DAT", size: "14.98KB" },
            {
              name: "1412sagardighi (7).npc",
              size: "13.86KB",
              id: 942,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412sagardighi (7).npc",
            },
            { name: "1412sagardighi (8).DAT", size: "14.98KB" },
            {
              name: "1412sagardighi (8).npc",
              size: "13.86KB",
              id: 943,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412sagardighi (8).npc",
            },
            { name: "1412sagardighi (9).DAT", size: "15.02KB" },
            {
              name: "1412sagardighi (9).npc",
              size: "13.87KB",
              id: 944,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412sagardighi (9).npc",
            },
            { name: "1412sagardighi 1 (1).DLM", size: "487.37KB" },
            {
              name: "1412sagardighi 1 (1).NPC",
              size: "11.14KB",
              id: 945,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412sagardighi 1 (1).NPC",
            },
            { name: "1412sagardighi 1 (2).DLM", size: "484.75KB" },
            {
              name: "1412sagardighi 1 (2).NPC",
              size: "11.11KB",
              id: 946,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412sagardighi 1 (2).NPC",
            },
            { name: "1412sagardighi 1 (3).DLM", size: "484.90KB" },
            {
              name: "1412sagardighi 1 (3).NPC",
              size: "11.13KB",
              id: 947,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412sagardighi 1 (3).NPC",
            },
            { name: "1412sagardighi 1 (4).DLM", size: "487.37KB" },
            {
              name: "1412sagardighi 1 (4).NPC",
              size: "11.14KB",
              id: 948,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412sagardighi 1 (4).NPC",
            },
            {
              name: "1412SANTALDIH(SNT).npc",
              size: "10.52KB",
              id: 949,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412SANTALDIH(SNT).npc",
            },
            { name: "1412subhashgram (1).DLM", size: "497.85KB" },
            {
              name: "1412subhashgram (1).NPC",
              size: "11.25KB",
              id: 950,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412subhashgram (1).NPC",
            },
            { name: "1412subhashgram (2).DLM", size: "497.73KB" },
            {
              name: "1412subhashgram (2).NPC",
              size: "11.27KB",
              id: 951,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412subhashgram (2).NPC",
            },
            { name: "1412wb (1).DAT", size: "15.09KB" },
            {
              name: "1412wb (1).npc",
              size: "13.96KB",
              id: 952,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412wb (1).npc",
            },
            { name: "1412wb (10).DAT", size: "15.27KB" },
            {
              name: "1412wb (10).npc",
              size: "14.12KB",
              id: 953,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412wb (10).npc",
            },
            { name: "1412wb (11).DAT", size: "15.08KB" },
            {
              name: "1412wb (11).npc",
              size: "13.95KB",
              id: 954,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412wb (11).npc",
            },
            { name: "1412wb (12).DAT", size: "14.89KB" },
            {
              name: "1412wb (12).npc",
              size: "13.78KB",
              id: 955,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412wb (12).npc",
            },
            { name: "1412wb (13).DAT", size: "14.94KB" },
            {
              name: "1412wb (13).npc",
              size: "13.80KB",
              id: 956,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412wb (13).npc",
            },
            { name: "1412wb (14).DAT", size: "14.92KB" },
            {
              name: "1412wb (14).npc",
              size: "13.79KB",
              id: 957,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412wb (14).npc",
            },
            { name: "1412wb (15).DAT", size: "14.95KB" },
            {
              name: "1412wb (15).npc",
              size: "13.82KB",
              id: 958,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412wb (15).npc",
            },
            { name: "1412wb (16).DAT", size: "14.95KB" },
            {
              name: "1412wb (16).npc",
              size: "13.82KB",
              id: 959,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412wb (16).npc",
            },
            { name: "1412wb (2).DAT", size: "15.17KB" },
            {
              name: "1412wb (2).npc",
              size: "14.03KB",
              id: 960,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412wb (2).npc",
            },
            { name: "1412wb (3).DAT", size: "15.16KB" },
            {
              name: "1412wb (3).npc",
              size: "14.01KB",
              id: 961,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412wb (3).npc",
            },
            { name: "1412wb (4).DAT", size: "15.19KB" },
            {
              name: "1412wb (4).npc",
              size: "14.05KB",
              id: 962,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412wb (4).npc",
            },
            { name: "1412wb (5).DAT", size: "14.89KB" },
            {
              name: "1412wb (5).npc",
              size: "13.77KB",
              id: 963,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412wb (5).npc",
            },
            { name: "1412wb (6).DAT", size: "14.89KB" },
            {
              name: "1412wb (6).npc",
              size: "13.78KB",
              id: 964,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412wb (6).npc",
            },
            { name: "1412wb (7).DAT", size: "14.91KB" },
            {
              name: "1412wb (7).npc",
              size: "13.78KB",
              id: 965,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412wb (7).npc",
            },
            { name: "1412wb (8).DAT", size: "14.89KB" },
            {
              name: "1412wb (8).npc",
              size: "13.78KB",
              id: 966,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412wb (8).npc",
            },
            { name: "1412wb (9).DAT", size: "14.89KB" },
            {
              name: "1412wb (9).npc",
              size: "13.68KB",
              id: 967,
              type: "file",
              path:
                "meterFile/meterFile28\\NPC Files\\DEC\\WBSEB\\1412wb (9).npc",
            },
          ],
        },
        {
          name: "WR",
          size: "4.00KB",
          type: "folder",
          path: "meterFile/meterFile28\\NPC Files\\DEC\\WR",
          files: [
            {
              name: "1412DHA.npc",
              size: "103.50KB",
              id: 968,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\WR\\1412DHA.npc",
            },
            {
              name: "1412DURG.npc",
              size: "13.78KB",
              id: 969,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\WR\\1412DURG.npc",
            },
            {
              name: "1412KBE.NPC",
              size: "19.53KB",
              id: 970,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\WR\\1412KBE.NPC",
            },
            {
              name: "1412KBN.NPC",
              size: "9.77KB",
              id: 971,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\WR\\1412KBN.NPC",
            },
            {
              name: "1412SIP.npc",
              size: "27.64KB",
              id: 972,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\WR\\1412SIP.npc",
            },
            { name: "1412wr (1).DAT", size: "15.05KB" },
            {
              name: "1412wr (1).npc",
              size: "13.89KB",
              id: 973,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\WR\\1412wr (1).npc",
            },
            { name: "1412wr (2).DAT", size: "15.28KB" },
            {
              name: "1412wr (2).npc",
              size: "14.11KB",
              id: 974,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\WR\\1412wr (2).npc",
            },
            { name: "1412wr (3).DAT", size: "15.30KB" },
            {
              name: "1412wr (3).npc",
              size: "14.12KB",
              id: 975,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\WR\\1412wr (3).npc",
            },
            { name: "1412wr (4).DAT", size: "15.30KB" },
            {
              name: "1412wr (4).npc",
              size: "14.12KB",
              id: 976,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\WR\\1412wr (4).npc",
            },
            { name: "1412wr (5).DAT", size: "15.28KB" },
            {
              name: "1412wr (5).npc",
              size: "14.11KB",
              id: 977,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\WR\\1412wr (5).npc",
            },
            { name: "1412wr (6).DAT", size: "15.28KB" },
            {
              name: "1412wr (6).npc",
              size: "14.11KB",
              id: 978,
              type: "file",
              path: "meterFile/meterFile28\\NPC Files\\DEC\\WR\\1412wr (6).npc",
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    setData(temp);
    setFileType(props.fileType);
  }, []);

  const saveFile = () => {
    setSubmitted(true);
    // setVisibleRight(false)
    if (fileToUpload) {
      const uploadData = new FormData();

      uploadData.append("fileToUpload", fileToUpload, fileToUpload.name);
      console.log(uploadData);
      axios
        .post(
          "http://127.0.0.1:8000/fifteenmmdp/changeNPC/" + nodeId,
          uploadData
        )
        .then((response) => {
          console.log(response);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log(nodeId);
    }
  };

  const handleClick = (node) => {
    console.log(node);
    console.log("hiiiiiiiii");
    if (node.node.type == "file") {
      setNodePath(node.node.path);
      setNodeName(node.node.name);
      setNodeId(node.node.id);
      setVisibleRight(true);
      setSubmitted(false);
    }
  };
  const handleUpdate = (state) => {
    localStorage.setItem(
      "tree",
      JSON.stringify(state, function (key, value) {
        if (key === "parentNode" || key === "id") {
          return null;
        }
        return value;
      })
    );
  };
  const onFileChange = (e, name) => {
    console.log("fine");
    setFileToUpload(e.target.files[0]);
  };

  // useLayoutEffect(() => {
  //   try {
  //     let savedStructure = JSON.parse(localStorage.getItem("tree"));
  //     if (savedStructure) {
  //       setData(savedStructure);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  return <Tree data={data} onUpdate={handleUpdate} onNodeClick={handleClick} />;
}
