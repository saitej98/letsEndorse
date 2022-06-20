import React from "react";
import { useState } from "react";

export default function () {
  const [name, setName] = useState(null);
  const [business_stage, setBusiness_stage] = useState(null);
  const [age_of_establishment, setAgeOfEstablishment] = useState(null);
  const [primary_product_service_offered, setPrimaryProduct_service] =
    useState(null);
  const [offered_to, setOfferedTo] = useState(null);
  const [secondary_product_service_offered, setSecondaryProductService] =
    useState(null);
  const [processed_products, setProcessedProduct] = useState(null);
  const [relevant_experience, setRelevantExperience] = useState(null);
  const [skill_training, setSkillTraining] = useState(null);
  const [establishment_type, setEstablishmentType] = useState(null);
  const [business_area, setBusinessArea] = useState(null);
  const [business_locality, setBusinessLocality] = useState(null);
  const [infra_ownership, setInfraOwnership] = useState(null);
  const [establishment_area, setEstablishmentArea] = useState(null);
  const [market_research, setMarketResearch] = useState(null);
  const [primary_market, setPrimaryMarket] = useState(null);
  const [customers, setCustomers] = useState(null);
  const [seasonality, setSeasonality] = useState(null);
  const [competition, setCompetition] = useState(null);
  const [suppliers, setSuppliers] = useState(null);
  const [business_idea, setBusiness_idea] = useState(null);

  // handle change for input fields to print in UI simultaneously along with the form data
  function handleChangeInput(elem) {
    const { variable, val } = elem.target;
    return setVariables({ ...variables, [variable]: val });
  }

  //multi select varaibles usestates.

  // handle change for Unique Selling Proposition.
  const [usp, setUSP] = useState([]);
  function handleChangUSP(elem) {
    const { usps, selected } = elem.target;
    if (selected) {
      setUSP([...usp, usps]);
    } else {
      setUSP(usp.filter((e) => e !== usps));
    }
  }

  // handle change forReason for selecting this location .
  const [reason_for_location, setReason_for_location] = useState([]);
  function handleChangRSL(elem) {
    const { RSLS, selected } = elem.target;
    if (selected) {
      setReason_for_location([...reason_for_location, RSLS]);
    } else {
      setReason_for_location(reason_for_location.filter((e) => e !== RSLS));
    }
  }

  // handle change forReason for Marketing avenues.
  const [marketing_avenues, setMarketing_avenues] = useState([]);
  function handleChangMA(elem) {
    const { MA, selected } = elem.target;
    if (selected) {
      setMarketing_avenues([...marketing_avenues, MA]);
    } else {
      setMarketing_avenues(marketing_avenues.filter((e) => e !== MA));
    }
  }

  // handle change forReason for Avenues of scaling up in future.
  const [scaleup_potential, setScaleup_potential] = useState([]);
  function handleChangSP(elem) {
    const { SP, selected } = elem.target;
    if (selected) {
      setScaleup_potential([...scaleup_potential, SP]);
    } else {
      setScaleup_potential(marketing_avenues.filter((e) => e !== SP));
    }
  }
  return (
    <div className="Parent">
      <div className="leftchild">
        <p>
          <span>{name}</span> is looking to
          <span> {business_stage} </span> their business of
          <span> {business_idea} </span>.
        </p>

        { age_of_establishment !== "0" ? (
          <p>
            This enterprise has been operational since{" "}
            <span> { age_of_establishment} </span> years and has been
            serving its customers since then.
          </p>
        ) : (
          ""
        )}

        <p>
          This establishment offers products/services like-{" "}
          <span> { primary_product_service_offered} </span> to{" "}
          <span> { offered_to} </span> .
        </p>

        { secondary_product_service_offered !== "" ? (
          <p>
            In addition, the enterprise shall also be involved in-{" "}
            <span> { secondary_product_service_offered} </span>
          </p>
        ) : (
          ""
        )}

        { processed_products !== "" ? (
          <p>
            Other products of the enterprise shall include-{" "}
            <span> { processed_products} </span>
          </p>
        ) : (
          ""
        )}

        { processed_products !== "" ? (
          <p>
            <span> </span> has relevant experience of{" "}
            <span> { relevant_experience} </span> years in this field.
          </p>
        ) : (
          ""
        )}

        { skill_training !== "no formal skill training" || "" ? (
          <p>
            The entrepreneur <span> { skill_training} </span> in this
            field of work.
          </p>
        ) : (
          ""
        )}

        <p>
          The enterprise is uniquely positioned because of its -
          <span>
            {usp.map((item, i) => (
              <ul key={i}>
                <li>{item}</li>
              </ul>
            ))}
          </span>
        </p>
        <p>
          The <span> { establishment_type} </span> is located in
          <span> { business_locality} </span> area of
          <span> { business_area} </span> in a
          <span> { infra_ownership} </span>
          property.
        </p>

        { establishment_area !== "0" ? (
          <p>
            The size of the establishment is
            <span> { establishment_area} </span>
            sq.ft.
          </p>
        ) : (
          ""
        )}

        <p>
          This locality is selected because of -
          <span>
            {reason_for_location.map((item, i) => (
              <ul key={i}>
                <li>{item}</li>
              </ul>
            ))}
          </span>
          `
        </p>

        { market_research !== "Not Conducted" ? (
          <p>
            <span> { market_research} </span> and the range of products
            and target market has been identified after that.
          </p>
        ) : (
          ""
        )}

        <p>
          The enterprise shall focus on offering its products/services to
          <span> { primary_market} </span> markets.
        </p>
        <p>
          Our customers shall include- <span> { customers} </span>
        </p>
        <p>
          The nature of the business is such that we expect
          <span> { seasonality} </span>.
        </p>
        <p>
          Regarding competition, there are
          <span> { competition} </span>.
        </p>
        <p>
          The enterprise shall procure goods/raw materials from
          <span> { suppliers} </span> .
        </p>
        <p>
          Our marketing avenues to reach the targeted customers shall include-
          <span>
            {marketing_avenues.map((item, i) => (
              <ul key={i}>
                <li>{item}</li>
              </ul>
            ))}
          </span>
        </p>
        <p>
          The various foreseeable avenues of scaling up and growing the business
          in the foreseeable future include-
          <span>
            {scaleup_potential.map((item, i) => (
              <ul key={i}>
                <li>{item}</li>
              </ul>
            ))}
          </span>
        </p>
      </div>
      <div className="rightchild">
        <form>
          <div className="text">
            <label>Business Idea</label>
            <input
              type="text"
              name="business_idea"
              placeholder="Business idea"
              value={ business_idea}
              onInput={handleChangeInput}
            />
          </div>

          <div className="text">
            <label>Stage of business</label>
            <select
              name="business_stage"
              value={ business_stage}
              onInput={handleChangeInput}
            >
              <option></option>
              <option value="Start-up">Start-up</option>
              <option value="Scale-up">Scale-up</option>
            </select>
          </div>

          <div className="text">
            <label>
              Age of establishment (years) (Enter 0 if it is yet to start-up)
            </label>
            <input
              type="number"
              name="age_of_establishment"
              min="0"
              max="100"
              value={ age_of_establishment}
              placeholder="Age of establishment"
              onInput={handleChangeInput}
            />

            {/* {error === true ? ( */}
            <p>Enter valid age of establishment between 0 to 100</p>
            {/* ) : (
              ""
            )} */}
          </div>

          <div className="text">
            <label>Primary Products/Services offfered</label>
            <input
              type="text"
              name="primary_product_service_offered"
              value={ primary_product_service_offered}
              placeholder="Primary Products/Services offfered"
              onInput={handleChangeInput}
            />
          </div>

          <div className="text">
            <label>Offered to</label>
            <select
              name="offered_to"
              value={ offered_to}
              onInput={handleChangeInput}
            >
              <option value=""></option>
              <option value="End customers">End customers</option>
              <option value="Wholesalers">Wholesalers</option>
              <option value="Distributors">Distributors</option>
              <option value="Retailers">Retailers</option>
            </select>
          </div>

          <div className="text">
            <label>Secondary Products/Services offfered</label>
            <input
              type="text"
              placeholder="Secondary Products/Services offfered"
              name="secondary_product_service_offered"
              value={ secondary_product_service_offered}
              onInput={handleChangeInput}
            />
          </div>

          <div className="text">
            <label>
              Processed products (Products you produce from the raw materials)
            </label>
            <input
              type="text"
              placeholder="Processed Products"
              name="processed_products"
              value={ processed_products}
              onInput={handleChangeInput}
            />
          </div>

          <div className="text">
            <label>Years of relevant experience in this field</label>
            <input
              type="number"
              name="relevant_experience"
              value={ relevant_experience}
              placeholder="Relevant Experience"
              onInput={handleChangeInput}
            />
          </div>

          <div className="text">
            <label>Skill training</label>
            <select
              name="skill_training"
              value={ skill_training}
              onInput={handleChangeInput}
            >
              <option value=""></option>
              <option value="no formal skill training">
                No formal skill training
              </option>
              <option value="has formal skill training and certificate">
                Has formal skill training and certificate
              </option>
            </select>
          </div>

          <div className="text">
            <label>Unique Selling Proposition</label>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangUSP(e)}
                value="the entrepreneur's experience in this field"
              />
              <label>The entrepreneur's experience in this field.</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangUSP(e)}
                value="innovative product/service"
              />
              <label>Innovative product/service.</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangUSP(e)}
                value="high profit margin"
              />
              <label>High profit margin</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangUSP(e)}
                value="high growth potential"
              />
              <label>High growth potential</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangUSP(e)}
                value="superior customer support"
              />
              <label>Superior customer support</label>
            </div>

            <div className="input-checkbox" n>
              <input
                type="checkbox"
                onInput={(e) => handleChangUSP(e)}
                value="quality and affordable products/service"
              />
              <label>Quality and affordable products/service</label>
            </div>

            <div className="input-checkbox" an>
              <input
                type="checkbox"
                onInput={(e) => handleChangUSP(e)}
                value="high demand in the target market (forward linkage)"
              />
              <label>High demand in the target market (forward linkage).</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangUSP(e)}
                value="abundant supply of raw materials (backward linkage)"
              />{" "}
              <label>
                Abundant supply of raw materials (backward linkage).
              </label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangUSP(e)}
                value="wide range of products/services"
              />{" "}
              <label>Wide range of products/services.</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangUSP(e)}
                value="robust value-chain of the business"
              />{" "}
              <label>Robust value-chain of the business</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangUSP(e)}
                value="frequencyy of customer visits"
              />{" "}
              <label>Frequency of customer visits</label>
            </div>
          </div>

          <h1>Location</h1>
          <div className="text">
            <label>Establishment type</label>
            <select
              name="establishment_type"
              value={ establishment_type}
              onInput={handleChangeInput}
            >
              <option value=""></option>
              <option value="Factory">Factory</option>
              <option value="Mill">Mill</option>
              <option value="Workshop">Workshop</option>
              <option value="Boutique">Boutique</option>
              <option value="Vehicle">Vehicle</option>
              <option value="Center">Center</option>
              <option value="Store">Store</option>
              <option value="Farm">Farm</option>
              <option value="Plant">Plant</option>
              <option value="Processing Unit">Processing Unit</option>
              <option value="Shop">Shop</option>
              <option value="Vending cart">Vending cart</option>
              <option value="Manufacturing unit">Manufacturing unit</option>
            </select>
          </div>

          <div className="text">
            <label>Name of the area</label>
            <input
              type="text"
              name="business_area"
              value={ business_area}
              placeholder="Business area"
              onInput={handleChangeInput}
            />
          </div>

          <div className="text">
            <label>Locality of business</label>
            <select
              name="business_locality"
              value={ business_locality}
              onInput={handleChangeInput}
            >
              <option value=""></option>
              <option value="Urban">Urban</option>
              <option value="Rural">Rural</option>
              <option value="Semi-urban">Semi-urban</option>
              <option value="Slum">Slum</option>
            </select>
          </div>

          <div className="text">
            <label>Ownership of infrastructure</label>
            <select
              name="infra_ownership"
              value={ infra_ownership}
              onInput={handleChangeInput}
            >
              <option value=""></option>
              <option value="Rented">Rented</option>
              <option value="Leased">Leased</option>
              <option value="Self-owned">Self-owned</option>
            </select>
          </div>

          <div className="text">
            <label>
              Establishment area (in square feet) (Enter 0 if the establishment
              area is irrelevant)
            </label>
            <input
              type="number"
              name="establishment_area"
              value={ establishment_area}
              placeholder="Establishment area"
              onInput={handleChangeInput}
            />
          </div>

          <div className="text">
            <label>Reason for selecting this location</label>
            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangRSL(e)}
                value="Nearness to market"
              />{" "}
              <label>Nearness to market</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangRSL(e)}
                value="Good footfall"
              />{" "}
              <label>Good footfall.</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangRSL(e)}
                value="Nearness to source of raw materials"
              />{" "}
              <label>Nearness to source of raw materials.</label>{" "}
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangRSL(e)}
                value="Nearness to targeted customer demographics"
              />{" "}
              <label>Nearness to targeted customer demographics.</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangRSL(e)}
                value="Lesser competition around"
              />{" "}
              <label>Lesser competition around</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangRSL(e)}
                value="Access to permit/license of operate"
              />{" "}
              <label>Access to permite/license of operate</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangRSL(e)}
                value="Nearness to suppliers"
              />{" "}
              <label>Nearness to suppliers.</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangRSL(e)}
                value="Affordability (rent)"
              />{" "}
              <label>Affordability (rent).</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangRSL(e)}
                value="No rental overheads"
              />{" "}
              <label>No rental overheads.</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangRSL(e)}
                value="Other such factors"
              />{" "}
              <label>Other such factors.</label>
            </div>
          </div>

          <h1>Target Market</h1>
          <div className="text">
            <label>Market research</label>
            <select
              name="market_research"
              value={ market_research}
              onInput={handleChangeInput}
            >
              <option value=""></option>
              <option value="Not Conducted">Not Conducted</option>
              <option value="Market research has been conducted">
                Market research has been conducted
              </option>
            </select>
          </div>

          <div className="text">
            <label>Primary market</label>
            <select
              name="primary_market"
              value={ primary_market}
              onInput={handleChangeInput}
            >
              <option value=""></option>
              <option value="Local">Local</option>
              <option value="Regional">Regional</option>
              <option value="National">National</option>
              <option value="International">International</option>
            </select>
          </div>

          <div className="text">
            <label>Customers</label>
            <input
              type="text"
              name="customers"
              value={ customers}
              placeholder="Customers"
              onInput={handleChangeInput}
            />
          </div>

          <div className="text">
            <label>Seasons of high sales</label>
            <select
              name="seasonality"
              value={ seasonality}
              onInput={handleChangeInput}
            >
              <option value=""></option>
              <option value="Consistent sales across all seasons">
                Consistent sales across all seasons
              </option>
              <option value="Higher sales in festive seasons">
                Higher sales in festive seasons
              </option>
              <option value="High sales in cropping/cultivation season">
                High sales in cropping/cultivation season
              </option>
              <option value="High sales in peak seasons,etc">
                High sales in peak season,etc
              </option>
            </select>
          </div>

          <div className="text">
            <label>Competition</label>
            <select
              name="competition"
              value={ competition}
              onInput={handleChangeInput}
            >
              <option value=""></option>
              <option value="No similar good/service provider in this locality">
                No similar good/service provider in this locality
              </option>
              <option value="Only a few similar goods/service providers in this locality">
                Only a few similar goods/service providers in this locality
              </option>
              <option value="Many similar good/service providers in this locality">
                Many similar good/service providers in this locality
              </option>
            </select>
          </div>

          <div className="text">
            <label>Suppliers</label>
            <input
              type="text"
              name="suppliers"
              value={ suppliers}
              placeholder="Suppliers"
              onInput={handleChangeInput}
            />
          </div>

          <div className="text">
            <label>Market Avenues</label>
            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangMA(e)}
                value="distribution of marketing material (pamphlets/flyers)"
              />{" "}
              <label>
                Distribution of marketing material(pamphelets/flyers).
              </label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangMA(e)}
                value="storefront/business branding"
              />{" "}
              <label>Storefront/business branding</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangMA(e)}
                value="Seasonal discounts and offers"
              />{" "}
              <label>Seasonal discounts and offers.</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangMA(e)}
                value="Cross-promotion"
              />{" "}
              <label>Cross-promotion</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangMA(e)}
                value="Digital Marketing"
              />{" "}
              <label>Digital Marketing</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangMA(e)}
                value="Word of mouth"
              />{" "}
              <label>Word of Mouth</label>
            </div>
          </div>

          <h1>Scaling up potential</h1>
          <div className="text">
            <label>Avenues of scaling up in future</label>
            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangSP(e)}
                value="increasing the variety of product/service offering"
              />{" "}
              <label>Increasing the variety of product/service offering</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangSP(e)}
                value="expanding the current offering to other geographies"
              />{" "}
              <label>Expanding the current offering to other geographies</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangSP(e)}
                value="opening more outlets"
              />{" "}
              <label>Opening more outlets</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangSP(e)}
                value="growing the scale of operation"
              />{" "}
              <label>Growing the scale of operation</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangSP(e)}
                value="building value-chain integrations"
              />{" "}
              <label>Building value-chain integrations</label>
            </div>

            <div className="input-checkbox">
              <input
                type="checkbox"
                onInput={(e) => handleChangSP(e)}
                value="other allied revenue streams"
              />{" "}
              <label>Other allied revenue streams.</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
